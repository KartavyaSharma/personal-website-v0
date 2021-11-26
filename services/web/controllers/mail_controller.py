"""
This is the mail_controller module, it supports all mail operations
for kartavyas
"""

from flask import *
from web.sendgrid_mailers.sendgrid_handler import *
from types import SimpleNamespace

def send_mail(body):
    """
    Mailer function that uses SendGrids handlers to send mail.

    :body:      A dictionary containing form data
    :return:    Create success/failed response for server
    """
    dict_vars = SimpleNamespace(**body)
    res_home = home_mailer(
        dict_vars.firstName, 
        dict_vars.lastName, 
        dict_vars.email, 
        dict_vars.message
    )

    res_client = client_mailer(dict_vars.firstName, dict_vars.email)

    if type(res_home) != bool:
        Flask.abort(404)

    if type(res_client) != bool:
        Flask.abort(404)

    return redirect("https://kartavyas.com/success")
    
    
