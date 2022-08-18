---
id: d6c8a9e4-44c6-4a91-8d64-21b061ebeecb
title: Creating a Python form handler API with Flask and Connexion
date: 2021-07-17T17:17:06.431683+01:00
description: Using Connexion and Flask to create a server exposing an RPC oriented API endpoint to handle contact form submissions.
thumbnail: "../images/swaggerapi.jpg"
tags:
- RPC
- API
- FLASK
- CONNEXION
- HEROKU

---
Most business-oriented/public-facing websites have some version of a contact form available for their consumers/audience. Contact forms are inherently great; they save the user from the hassle of trying to contact you through phone/email, and they don't have to leave your website. They are easily an integral part of any modern site.

Recently, I began to experiment with my existing contact form setup. When I first integrated a contact form, I integrated Web3Forms' API to get user responses sent to my inbox. It was easy to implement, and it just worked. However, this wasn't a rich experience for the user; once they submitted a form, they were unaware of what happened with their submission or where it went.

With complete access to user submissions, I could interact with them in a more meaningful way. Submission data can be stored in a database, saved in a file, sent to an external API endpoint, or be cached. My goal was to trigger an Email mechanism as soon as a user clicked the "send message" button; this would inject the form data into an email transport and send it to my inbox. While a traditional form-handler API might do the same thing behind the curtains, I now had greater control of how I wanted to interact with my users.

# Where's the REST?

It is tempting to throw around the idea of a "RESTful API" throughout this post, but that would *technically* be incorrect.

RESTful APIs are by definition used to expose server-side resources to the client-side for any CRUD (create, read, update delete) operations. Since I am not storing any form responses in a database, nor accessing them later and only using that data to trigger a sequence of events, it is more appropriate to call this service an RPC (remote procedure call) API.

Instead of taking a RESTful approach, our API will rely on HTTP Methods such as `html**GET`, `html**PUT`, `html**POST`, and `html**DELETE`. Our server can scout for an HTTP header containing these methods and then forward the request to the appropriate API endpoint. In this instance, since we are sending data through a form to our API, the `html**<form>` tag will have a `html**method` attribute with the `html**POST` value (i.e. `html**<form method=POST>`). The `html**action` attribute for the same `html**<form>` tag will point to the url of our API endpoint.

```html:title=HTML
<html>
    <head>
        <title>Form Example</title>
    </head>
    <body>
        <form action="https://<BACKEND-SERVER-URL>/<MAIL-BASE-PATH>/<HANDLER-PATH>" method="POST">
            <input name="first_name" type="text" placeholder="First Name" />
            <input name="last_name" type="text" placeholder="Last Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="message" type="text" placeholder="Enter your message" />
            <button type="submit">Submit</button>
        </form>
    </body>
</html>
```

This form does not entirely represent how I ended up implmenting my own contanct form (you can find the working code in my [Github repository](https://github.com/KartavyaSharma/kartavyas-backend)), but it does give you a general structure that can be modified to suit your needs.

# The handler API

Our API needs to be able to accept incoming form data in HTTP requests and transform that data into a JSON object for us to parse. In a nutshell, our `bash**/handler` endpoint should be able to parse incoming data, transport it to the mailer API (more on that in a bit) and the mailer API will then send out the emails.

### Enter Connexion

Creating an API in a loosely typed language such as Python can quickly turn into a nightmare. Not knowing what type of data to expect on your endpoint usually leads to many `bash**TypeErrors`. Before I started my project, I stumbled across Connexion in a Flask tutorial. At its core, Connexion provides type validation on API input/output and provides Swagger documentation wrapped in a neatly designed UI. In essence, Connexion forces us to map out our API in an OpenAPI `yaml**.yml` file. This file essentially contains all the endpoints and their expected request and response models. More on how to implement this later.

### SendGrid Mailer

Sending emails using something like the `python**Mailer` libraries in Python is frustrating. Gmail has strict SMTP regulations that some libraries struggle with. To circumvent all of this, I resorted to using SendGrid's API suite for sending emails. It has a compact API and I was able to implement it in a couple of minutes.

The SendGrid mailer is the second step in the two-step process abstracted by our RPC.

# An overview

Going forward, here's what we are going to do to setup our backend.

- Initialize a Heroku app
- Set up a Flask App
- Adding Connexion to out Flask server
- Addint controllers
- Adding a SendGrid helper
- Testing our Form
- Adding CORS (optional)

# Initializing a Heroku app

For completeness, I will also be talking about deployment on Heroku. This includes setting up development environment, creating an app, connecting it with Git, and pseudo-CICDing (Continuous Integration Continuous Deployment) while building with Heroku. If you are already familiar with Heroku, setup a barebones project and feel free to skip ahead.

I'll be showing you how to install Heroku on Linux/WSL2 and Windows. If you are using any other operating system, you can refer to [The Heroku CLI | Heroku Dev Center](https://devcenter.heroku.com/articles/heroku-cli) page on how to get started with the Heroku CLI.

### Installing Heroku

Installing Heroku's CLI on Ubuntu requires a single BASH command.

```bash:title=BASH
$ curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

You can verify your installation and version using `bash**heroku --version`.

Installing Heroku on Windows will require you to download and run an executable from https://cli-assets.heroku.com/heroku-x64.exe. Running the executable will make the `bash**Heroku` command available in your terminal (CMD). Again, you can verify you installing and version using `bash**heroku --version`.

Although Heroku is available on Windows CMD, I highly recommend installing WSL2 and running it on Linux. This will give your development process more continuity, and Ubuntu/WSL2 provides a very rich developer ecosystem. As an alternative, if you have Git installed on your Windows machine, the Git Bash Shell also supports Unix-like commans, which we will be using for the rest of this tutorial.

Going forward, the differences between terminal command for Heroku disappear on Windows/Linux/WSL2.

### Login and Git Initialization

To be able to quickly deploy and build your app on the Heroku cloud, you will need to have it connected to a Git repository, this will allow you to push and commit your changes with a single command. But, first you will have to verify your identity.

Use the `bash**heroku login` command to log into the Heroku CLI.

```bash:title=BASH
$ heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com
```

`bash**cd` into your project directory and run the `bash**git init` command to classify the project folder as a Git repository. Add your new repository to GitHub by creating a new repository and running the following commands.

Note: you don't *need* to create a GitHub repository for this to work, but it's a nice way to keep your code backed up.

```bash:title=BASH
$ git remote add origin https://github.com/<YOUR-USERNAME>/<NEW-REPOSITORY-NAME>.git
$ git branch -M master
$ git push -u origin master
```

### A new Heroku app

Run the `bash**heroku create` command. This prepares Heroku to receive your source code.

```bash:title=BASH
$ heroku create
Creating app... done, ⬢ serene-caverns-82714
https://serene-caverns-82714.herokuapp.com/ | https://git.heroku.com/serene-caverns-82714.git
```

The `bash**heroku create` command adds a new Git remote (called `bash**heroku`) to your local Git repository.

To deploy your code you can simply run `bash**git push heroku main`.

*NOTE: at this stage running `bash**git push heroku main` will give you an error since you have not specified the `bash**Procfile` and `bash**requirements.txt` files. You will create both these files in upcoming sections.*

### Adding a Procfile

Now you have to tell Heroku what commands to run when our app spins up every time. This is defined in a `bash**Procfile`, a plaintext file in the root of our project directory. For a simple Flask app, we can run:

```bash:title=BASH
$ "web: gunicorn server:app" >> Procfile
```

The `bash**Procfile` has a command format of `bash**<process type>:<command>`. This means that `bash**web` is a Heroku process, and according to  [Heroku's Procfile Doc](https://devcenter.heroku.com/articles/procfile) it is the only `bash**<process type>` that can receive external HTTP traffic from Heroku's routers. This makes it an integral part of our application setup. The `bash**<command>` part of our `bash**Procfile` spells `bash**gunicorn server:app`, this is essentially a complete `bash**gunicorn` command. A typical `bash**gunicorn` command has the format:

```bash:title=BASH
$ gunicorn [OPTIONS] APP_MODULE
```

*Taken from the [Gunicorn 20.1.0 documentation](https://docs.gunicorn.org/en/stable/run.html#gunicorn)*.

This means that our entire `bash**Procfile ` command is structured as:

```bash:title=BASH
$ <process type>: gunicorn [OPTIONS] APP_MODULE 
```

The `bash**APP_MODULE` fragment of the `bash**gunicorn` command essentially means that we should have a `bash**server.py` file with a variable named `bash**app`. The template for `bash**APP_MODULE` is `bash**${MODULE_NAME}:${VARIABLE_NAME}`.

### Making it a Python app

Right now, Heroku doesn't know that our project is a Python app, this is because it uses key files in our Project directory to identify its type. Including a `bash**requirements.txt` in the root directory is one way for Heroku to recognize our Python app.

The `bash**requirements.txt` file stores a list of all our app's dependencies. When we deploy our app for the first time, Heroku installs those dependencies and caches them for subsequent builds. 

# Creating a Flask app

In the root of our directory create a `bash**server.py` file. This file needs to correspond with the `bash**${MODULE_NAME}` in our `bash**Procfile` command. It is also recommended to install all our dependencies inside a Python virtual environment. To install and create a virtual environment inside our root directory, we can run:

```bash:title=BASH
# inside the project root
$ pip install virtualenv
$ virtualenv venv
# if you are on Windows
$ cd venv/Scripts && activate
# if you are on Linux/Ubuntu/WSL
$ source venv/bin/activate
```

This will isolate all dependencies to our virtual environment.

If you want your Python web app to render an HTML home page, you can create an additional templates directory in the project root. You can use the Jinja templating system to populate your HTML file with dynamic data. However, since we are only creating an API endpoint, a templating engine won't be necessary for this setup.

The following Python code sets up a basic Flask server, and responds with a hello world on the `bash**'/'` path.

```python:title=PYTHON&nbsp;•&nbsp;server.py
from flask import (Flask, render_template)

# Creating a Flask app instance
app = Flask(__name__, template_folder="templates")

# Creating a URL route identifier for "/"
@app.route('/')
def home():
    """
    This route function responds to all incoming requests
    on <URL>/
    
    :return:	A "Hello world!" string
    """
    return "Hello world!"

if __name__ == '__main__':
    app.run(degub=True)
```

Alternatively, if you wish to have an complete HTML page rendered at `bash**'/'` path, you can change the `python**def home()` function to:

```python:title=PYTHON&nbsp;•&nbsp;server.py
from flask import (Flask, render_template)

# Creating a Flask app instance
app = Flask(__name__, template_folder="templates")

# Creating a URL route identifier for "/"
@app.route('/')
def home():
    """
    This route function responds to all incoming requests
    on <URL>/
    
    :return:	A "Hello world!" string
    """
    return "Hello world!"
    return render_template('home.html')

if __name__ == '__main__':
    app.run(degub=True)
```

You'll notice that a module `bash**flask` was imported, however, the Flask web framework hasn't yet been installed in the `bash**venv`. Currently running the `bash**python server.py` command will throw a `bash**ModuleNotFoundError`:

```bash:title=BASH
Traceback (most recent call last):
  File "server.py", line 1, in <module>
ModuleNotFoundError: No module named 'flask'
```

This is a good time to circle back to our `bash**requirements.txt` file. If you have not yet created a `bash**requirements.txt` file, run `bash** touch requirements.txt` and add the following lines:

```text:title=TEXT&nbsp;•&nbsp;requirements.txt
connexion==2.8.0
Flask==1.1.4
gunicorn==20.1.0
sendgrid==6.7.1
flask-cors==3.0.10
urllib3==1.25.8
virtualenv==20.0.17
Werkzeug==1.0.1
```

To install the aforementioned modules into your virtual environment, run:

```bash:title=BASH
$ python -m pip install -r requirements.txt
```

Now if you run `bash**python server.py` you should see no errors. You can check if you server is responding to requests as intended by navigating to the `bash**localhost:5000/` URL.

At this point we can run the `bash**git push heroku main` command to create our first deployment on Heroku.

```bash:title=BASH
$ git push heroku main
Counting objects: 407, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (182/182), done.
Writing objects: 100% (407/407), 68.65 KiB | 68.65 MiB/s, done.
Total 407 (delta 199), reused 407 (delta 199)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Building on the Heroku-20 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Python app detected
remote: -----> Using Python version specified in runtime.txt
remote: -----> Installing python-3.9.6
remote: -----> Installing pip 20.2.4, setuptools 47.1.1 and wheel 0.36.2
remote:        Collecting django
remote:          Downloading Django-3.2-py3-none-any.whl (7.9 MB)
remote:        Collecting gunicorn
remote:          Downloading gunicorn-20.1.0.tar.gz (370 kB)
remote:        Collecting django-heroku
remote:          Downloading django_heroku-0.3.1-py2.py3-none-any.whl (6.2 kB)
remote:        Collecting asgiref<4,>=3.3.2
remote:          Downloading asgiref-3.3.2-py3-none-any.whl (22 kB)
remote:        Collecting pytz
remote:          Downloading pytz-2021.1-py2.py3-none-any.whl (510 kB)
remote:        Collecting sqlparse>=0.2.2
remote:          Downloading sqlparse-0.4.1-py3-none-any.whl (42 kB)
remote:        Collecting psycopg2
remote:          Downloading psycopg2-2.8.6.tar.gz (383 kB)
remote:        Collecting whitenoise
remote:          Downloading whitenoise-5.2.0-py2.py3-none-any.whl (19 kB)
remote:        Collecting dj-database-url>=0.5.0
remote:          Downloading dj_database_url-0.5.0-py2.py3-none-any.whl (5.5 kB)
remote:        Building wheels for collected packages: gunicorn, psycopg2
remote:          Building wheel for gunicorn (setup.py): started
remote:          Building wheel for gunicorn (setup.py): finished with status 'done'
remote:          Created wheel for gunicorn: filename=gunicorn-20.1.0-py3-none-any.whl size=78918 sha256=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
remote:          Stored in directory: /tmp/pip-ephem-wheel-cache-orcrzfks/wheels/ee/ca/72/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
remote:          Building wheel for psycopg2 (setup.py): started
remote:          Building wheel for psycopg2 (setup.py): finished with status 'done'
remote:          Created wheel for psycopg2: filename=psycopg2-2.8.6-cp39-cp39-linux_x86_64.whl size=523834 sha256=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
remote:          Stored in directory: /tmp/pip-ephem-wheel-cache-orcrzfks/wheels/a2/07/10/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
remote:        Successfully built gunicorn psycopg2
remote:        Installing collected packages: asgiref, pytz, sqlparse, django, gunicorn, psycopg2, whitenoise, dj-database-url, django-heroku
remote:        Successfully installed asgiref-3.3.2 dj-database-url-0.5.0 django-3.2 django-heroku-0.3.1 gunicorn-20.1.0 psycopg2-2.8.6 pytz-2021.1 sqlparse-0.4.1 whitenoise-5.2.0
remote: -----> $ python manage.py collectstatic --noinput
remote:        129 static files copied to '/tmp/build_9d3818e3/staticfiles', 393 post-processed.
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote: -----> Compressing...
remote:        Done: 60.7M
remote: -----> Launching...
remote:        Released v5
remote:        https://serene-caverns-82714.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/serene-caverns-82714.git
 * [new branch]      revert-to-requirements -> main
```

To ensure that at least one dyno (Heroku's term for an isolated Linux container) instance is running run:

```bash:title=BASH
$ heroku ps:scale web=1
```

This command essentially tells Heroku to start one dyno (i.e. scale to 1 dyno).

To view your newly deployed app run:

```bash:title=BASH
$ heroku open
```

Congratulations, you should now have a deployed Heroku Flask application. If you want to know more, or if you are having any trouble, visit [Getting Started on Heroku with Python | Heroku Dev Center](https://devcenter.heroku.com/articles/getting-started-with-python?singlepage=true).

# Adding Connexion

Integrating Connexion is a two step process. You will have to modify your `bash**server.py` file to create a `python**connexion.App()` instance, and add a Swagger server configuration file in which you will specify your API's input/output validation along with controller modules. To add Connexion you can modify your `bash**server.py` file to:

```python:title=PYTHON&nbsp;•&nbsp;server.py
from flask import render_template
import connexion

# Creating application instance with Connexion
app = connexion.App(__name__, specification_dir='./spec/')

# Read the specification.yml file inside ./spec/ to configure API endpoints
app.add_api('specification.yml')

# Your home route handler will not change
@app.route('/')
def home():
    """
    This route function responds to all incoming requests
    on <URL>/
    
    :return:	A "Hello world!" string
    """
    return render_template('home.html')

# You will have specify a 'host' and 'port' to Connexion on on which
# it will run your app in local development
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```

You'll notice that we didn't import the `bash**Flask` module; in this case, Connexion is used to create the application instance. In the background, the Flask app is still created, but now there is a Connexion wrapper on top of it which provides us with added functionality. Moreover, there is a new parameter provided to the `python**connexion.App()` function: the `python**specification_dir='./spec/'`, this tells Connexion the directory in which it has to look for its configuration (`yaml**.yml`) file. The next line is telling Connexion the file in which its configuration is stored, in our case it will be `bash**specification.yml`.

On a side note, you might have noticed that we haven't specified the `bash**templates_folder` parameter when initializing the app instance. Unfortunately, in Connexion you cannot use templates outside the `bash**./templates` folder stored in the root of your project directory. If someone finds a way around this, please feel free to mention your workaround in the comments section. Since we are building an API that doesn't server HTML pages, we won't be needing to deal with this problem.

### The configuration file

The `bash**specification.yml` file contains the configuration our Connexion app instance will look for to instantiate validation for input parameters, output response data types, endpoint specifications, and the Swagger UI (I'll focus more on validation and endpoint specification in this post). Here is what our `bash**specification.yml` file will look like. This creates a `bash**POST /mail/handler` RPC API endpoint:

```yaml:title=YAML&nbsp;•&nbsp;specification.yml
openapi: 3.0.0
info:
    description: This is the OpenAPI configuration file that goes with your sever code
    version: "1.0.0"
    title: Mail Handler API Endpoint

servers:
    - url: /mail
      description: Main production server for exposing API endpoints for mail controllers

paths:
    /handler:
        post:
            operationId: web.controllers.mail_controller.send_mail
            tags:
                - Response
            summary: Add to sender identity and send mail
            description: Recieves form body response and sends mail
            requestBody:
                required: true
                content:
                    application/x-www-form-urlencoded:
                        schema:
                            $ref: '#/components/schemas/FormData'
            responses:
                200:
                    description: Successfully sent mail

components:
    schemas:
        FormData:
            type: object
            properties:
                first_name:
                    type: string
                    description: First name of the sender
                last_name:
                    type: string
                    description: Last name of the sender
                email:
                    type: string
                    description: Email of the sender
                message:
                    type: string
                    description: Message from the sender
```

If you are wondering what OpenAPI is, it is a newer version of Swagger which is now in official use.

There are a lot of things happening in this `bash**specification.yml` file, and from the outset this file is structured in a hierarchical manner: the indentations represent scopes and levels of ownership.

For instance, `yaml**paths:` defines a scope under which all API URL endpoints will be specified for our Connexion application. Under `yaml**paths:` the `yaml**/handler:` value defines a scope under which all the URLS for`bash**/mail/handler` will be specified. Inside the `yaml**/handler:` value, the `yaml**post:` value signifies a scope with definitions for all `bash**HTTP POST` requests to the `bash**/mail/handler` API endpoint. A similar structure follows suit throughout the `bash**specification.yml` file.

The `bash**specification.yml` has many sections, let's break down what's what.

The global configuration section is used to define core attributes of our specification:

* `yaml**openapi:` tells Connexion what version of OpenAPI (previously Swagger) is being used.
* `yaml**info:` begins a new scope containing information about the API being built. This is used for documentation purposes.
* `yaml**description:` stores the user defined description of what the API does/is. Also used for documentation.
* `yaml**version:` a user defined version value for the API.
* `yaml**title:` a user defined title for the API. Used for documentation.
* `yaml**servers:` defining base paths for different server locations. In our case you can use `bash**/mail`. All our `yaml**path:` routes are going to be prefixed by the this base path.
* `yaml**description:` a user defined description of the base path we just specified.

The API URL configuration section. Here we define the app's URL paths:

* `yaml**paths:` defined a scope containing all API endpoints.
* `yaml**handler:` one of our API endpoints. Prefixed by the `bash**/mail` base path.
* `yaml**post:` defines the HTTP method this URL endpoint will respond to. This scope will contain the core email handler Python logic.
* This section combines to make the `bash**POST /mail/handler` endpoint.

Single `yaml**POST /mail/handler` API endpoint configuration:

* `yaml**operationId:` defines a Python import path/module which will be called to respond to an HTTP `bash**POST` request on the `bash**/mail/handler` endpoint. `python**web.controllers.mail_controller.send_mail` essentially specifies a `python**send_mail()` function inside the `bash**mail_controller.py` module, and this module is stored in the `bash**web/controllers/` directory. `bash**operationId` basically connects a function to respond to an HTTP request. It's general structure is `bash**<package_name>.<package_name>.<module_name>.<function_name>`.
* `yaml**tags:` are used for documentation and the Swagger UI. All HTTP methods for our `bash**/hander` API will share this tag definition.
* `yaml**summary:` defines the Swagger UI display text for this endpoint.
* `yaml**description:` implementation notes for our endpoint function. Used for documentation.

API endpoint request body configuration. Enables request validation with specified data format checking:

* `yaml**requestBody:` usually used with `bash**POST/PUT` requests. Contains a representation of the resource that this API endpoint will receive.
* `yaml**required:` defines if a request body with a set data scheme is required or not. Takes in a boolean.
* `yaml**content:` describes the type of content our endpoint receives.
* `yaml**application/x-www-form-urlencoded`: defines a scope containing the expected content schema for `bash**application/x-www-form-urlencoded` data. This content type will change depending on the data we expect in our request body. `bash**application/x-www-form-urlencoded` defines incoming form data.
* `yaml**schema:` data structure in the form of properties you expect in the request body. This schema will correspond with the form fields.
* `yaml**$ref:` a pointer to where the schema is stored in the Swagger file. `yaml**$ref`s promote a cleaner configuration file and increase readability.

Request body schema definition. Corresponds with the form data enclosed inside the HTTP request.

* `yaml**components:` defines a store for different parts of the Swagger config. Used to modularize our code.
* `yaml**schemas:` identifier, similar to a variable, for a scope that stores multiple schemas; but, for our purposes, it only stores one.
* `yaml**FormData:` unique name for the schema used in the `bash**/mail/handler` API endpoint.
* `yaml**type:` defines the structure of the schema as a JSON object.
* `yaml**properties:` defines the data that will be stored in the JSON object. This is the data that our form is supposed to send. Values inside the property scope and form field names need to match.

Here is how the `yaml**properties:` scope matches with a sample form:

The `yaml**properties:` scope

```yaml:title=YAML
properties:
    first_name:
        type: string
        description: First name of the sender
    last_name:
        type: string
        description: Last name of the sender
    email:
        type: string
        description: Email of the sender
    message:
        type: string
        description: Message from the sender
```

Form implementation

```html:title=HTML&nbsp;•&nbsp;form_test.html
<html>
    <head>
        <title>Form Example</title>
    </head>
    <body>
        <form action="https://<BACKEND-SERVER-URL>/mail/handler" method="POST">
            <input name="first_name" type="text" placeholder="First Name" />
            <input name="last_name" type="text" placeholder="Last Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="message" type="text" placeholder="Enter you message" />
            <button type="submit">Submit</button>
        </form>
    </body>
</html>
```

# Adding controllers

When our API receives a `bash**POST` request on `bash**/mail/handler` it will call the function specified in the `yaml**operationId`. In this case, there should be a `bash**mail_controller.py` file with a `python**send_mail` function. The `bash**mail_controller.py` file should be stored in the `bash**web/controllers` directory. Here's what our `bash**mail_controller.py` file should look like:

```python:title=PYTHON&nbsp;•&nbsp;mail_controller.py
"""
This is the mail_controller module
"""

from flask import *
from web.sendgrid_mailers.sendgrid_handler import *
from types import SimpleNamespace

def send_mail(body): # The body parameter contains incoming form data of type Dict.
    """
    Mailer function that uses SendGrid's handlers to send mail.
    :body:      A dictionary containing form data
    :return:    Create success/failed response for server
    """
    dict_vars = SimpleNamespace(**body)
    res_home = home_mailer(
        dict_vars.first_name, 
        dict_vars.last_name, 
        dict_vars.email, 
        dict_vars.message
    )

    res_client = client_mailer(dict_vars.first_name, dict_vars.email)

    if type(res_home) != bool:
        Flask.abort(404)

    if type(res_client) != bool:
        Flask.abort(404)

    return redirect("<REDIRECT-URL-AFTER-FORM-SUBMIT>")
```

Here, we have created a `python**send_mail()` function which takes in a `bash**body` parameter, unpacks the `bash**body` dictionary into keyword arguments, stores them in `python**dict_vars`, and calls the `python**home_mailer()` and `python**client_mailer()` functions. The `python**home_mailer()` and `python**client_mailer()` functions are imported from another module named `bash**sendgrid_handler.py`. We will create this module in the next section.

The `python**if` statements check if the `bash**mailer` functions returned the expected confirmation type after sending the email. If the functions returned an `bash**object`, our API will return an `bash**error 404` code and abort all processes.

Finally, the `python**return` statement uses a `python**redirct()` function to route to an external link once the mailing process is complete. Usually this would be a success notification page.

# Integrating SendGrid

We can use any API based mailing service with our `python**send_mail()` function. Personally, in my API I used SendGrid. Going through every implementation detail for integrating SendGrid would be impractical; however, [SendGrid's Integration Guide](https://app.sendgrid.com/guide/integrate) is an excellent resource to lean how the API works. For completeness, here's what an implementation might look like:

```python:title=PYTHON&nbsp;•&nbsp;sendgrid_hander.py
"""
SendGrid mail handler, sends emails to kartavyas and senders
"""

import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def html_client_gen(target_name, target_email):
    """
    Generates HTML for mailing to client.
    :target_name:       (string) First name of sender
    :target_email:      (string) Email of sender
    :return: HTML template as an fstring to be used with SendGrid's API service
    """
    content = ''
	# You can store HTML content here in a string.
    # The parameters make it possible to inject variables at different places in
    # your HTML string.
    return content


def html_home_gen(fname, lname, email, message):
    """
    Generates HTML for mailing to private blog owner creator email ID.
    :fname:     (string) First name of sender
    :lname:     (string) Last name of sender
    :email:     (string) Email of sender
    :message:   (string) Message from sender
    :return: HTML template as an fstring to be used with SendGrid's API service
    """
    content = f''
	# You can store HTML content here in a string.
    # The parameters make it possible to inject variables at different places in
    # your HTML string.
    return content


def home_mailer(first_name, last_name, email, message):
    message = Mail(
        from_email=os.environ.get('SENDER'),
        to_emails=os.environ.get('TARGET'),
        subject='New form submission on Kartavyas.com',
        html_content=html_home_gen(first_name, last_name, email, message)
    )

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        return True 
    except Exception as e:
        return {'False': e.message}


def client_mailer(client_name, client_email):
    message = Mail(
        from_email=os.environ.get('SENDER'),
        to_emails=f'{client_email}',
        subject='Successful form submission on kartavyas.com!',
        html_content=html_client_gen(client_name, client_email)
    )

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        return True
    except Exception as e:
        return {'False': e.message}
```

There's not much happening here. You will import the `python**SendGridAPIClient` and `bash**Mail` from `python**sendgrid.helpers.mail`. The `python**SendGridAPIClient()` function creates a API client instance; you can assign this to a variable. That instance can then take a `python**Mail` helper class, this class contains properties for your email's metadata such as sender email, receiver email, subject, and html content. 

The function call `python**SendGridAPIClient(os.environ.get('SENDGRID_API_KEY')).send(Mail(from_email, to_emails, subject, html_content))` will initiate the process that sends the email. This function returns an object which contains SendGrid's API server response; the object contains properties such as `bash**status_code`, `bash**body`, and `bash**headers`.

`python**html_home_gen()` and `python**html_client_gen()` are functions which return an HTML string with custom user names and data. You can use these functions to generate HTML however you wish to, for instance:

```python:title=PYTHON
# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

message = Mail(
    from_email='from_email@example.com',
    to_emails='to@example.com',
    subject='Sending with Twilio SendGrid is Fun',
    html_content='<strong>and easy to do anywhere, even with Python</strong>')
try:
    sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e.message)
```

*Taken from [SendGrid Integration documentation](https://app.sendgrid.com/guide/integrate/langs/python)*

This post covers a very small subset of usecases under SendGrid's vast emailing ecosystem. To know more implementation details and possible use cases you can visit [SendGrid's Github documentation](https://github.com/sendgrid/sendgrid-python) or their [official API reference](https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication).

# Working code

You can find the configuration of my own contact form handler API on this [Github repository](https://github.com/KartavyaSharma/kartavyas-backend). Feel free to refer to it if you find yourself stuck.


*Thumbnail backdrop by [David Clode](https://unsplash.com/photos/QZePScKPb2Q) on [Unsplash](https://unsplash.com)*