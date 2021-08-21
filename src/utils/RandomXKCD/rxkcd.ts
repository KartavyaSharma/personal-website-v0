const axios = require('axios').default

export interface XkcdResponse {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    trascript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}

export async function getCurrentXkcdMeta():Promise<XkcdResponse> {
    try {
        const response = await axios('https://xkcd.com/info.0.json', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
           credentials: 'same-origin',
        })
        console.log(response)
        const jsonResponse:XkcdResponse = JSON.parse(JSON.stringify(response));
        return jsonResponse;
    } catch (error) {
        return error.response;
    }
}