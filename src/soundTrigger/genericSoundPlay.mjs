import fs from 'fs';
import {kannaPlaySound} from "../kanna/kannapi.mjs";


function getSoundByPad(key) {
    let rawFile = fs.readFileSync('./soundMatch.json');
    let sounds = JSON.parse(rawFile);

    if (key in sounds) {
        return sounds[key];
    }
    return false;
}

export default function genericSoundPlay(mode, key) {
    let sound = getSoundByPad(key);

    if (!sound) {
        return null;
    }

    if (!(mode in sound)) {
        return null;
    }

    return kannaPlaySound(sound[mode]);
}