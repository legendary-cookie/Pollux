const baseurl = "http://docker1.getcom.de:3000/";
const apiurl = baseurl+ "api/";

export function getSonglist(max) {
    return fetch(apiurl+`songs?amount=${max}`)
    .then(response => response.json())
    .then(data => {
        let songlist = [];
        for (const song of data) {
            songlist.push(song);
        }
        return songlist;
    });
}