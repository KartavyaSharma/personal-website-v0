// This module is non functional

// export interface XkcdResponse {
//     alt:string;
//     day:string;
//     img:string;
//     link:string;
//     month:string;
//     news:string;
//     num:number;
//     safe_title:string;
//     title:string;
//     transcript:string;
//     year:string;
// }

interface ApiMeta {
    corsHeader: string;
    apiBaseUrl: string;
    apiUrlFormat: string;
}

const apiMeta: ApiMeta = {
    corsHeader: "https://8000-scarlet-pony-5v9ed38h.ws-us16.gitpod.io",
    apiBaseUrl: "https://xkcd.com",
    apiUrlFormat: "info.0.json"
}

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

export async function getCurrentXkcdMeta():Promise<any> {
    try {
        const callUrl: string = `${apiMeta.apiBaseUrl}/${apiMeta.apiUrlFormat}`;
        const response = loadJSON(callUrl, (data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
        // const jsonComicMeta: object = JSON.parse(response);
        // console.log(jsonComicMeta);
        return response;
    } catch (error) {
        return error.response;
    }
}