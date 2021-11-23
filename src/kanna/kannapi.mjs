import axios from 'axios';

export function kannaPlaySound(soundName) {
    return axios.post(`${process.env.API_BASE_URL}/play`, {name: soundName}, {
        headers: {
            "Authorization": process.env.API_KEY
        }
    }).then((ret) => {
        return true;
    }).catch((err) => {
        return false;
    });
}