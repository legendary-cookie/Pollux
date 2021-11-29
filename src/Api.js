const baseurl = "http://docker1.getcom.de:3000/";
const apiurl = baseurl + "api";


export function getBaseUrl() {
    return baseurl;
}
export function getApiUrl() {
    return apiurl;
}

export function getSonglist(max) {
    return fetch(`${apiurl}/songs?amount=${max}`)
        .then(response => response.json())
        .then(data => {
            let songlist = [];
            for (const song of data) {
                songlist.push(song);
            }
            return songlist;
        });
}

export function searchByName(name) {
    return fetch(`${apiurl}/search/songs?mode=name&keyword=${name}`)
        .then(res => res.json())
        .then(data => {
            let songlist = [];
            for (const song of data) {
                songlist.push(song);
            }
            return songlist;
        });
}
