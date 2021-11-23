import fs from 'fs';

export default function getSoundByPadName(key) {
    let rawFile = fs.readFileSync('./soundMatch.json');
    let sounds = JSON.parse(rawFile);

    if (key in sounds) {
        return sounds[key];
    }
    return false;
}