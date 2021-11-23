import {callHttpSoundPlay} from "../callHttpSoundPlay/callHttpSoundPlay.mjs";
import getSoundByPadName from "./getSoundByPadName.mjs";

export default function genericSoundPlay(mode, key) {
    let sound = getSoundByPadName(key);

    if (!sound) {
        return null;
    }

    if (!(mode in sound)) {
        return null;
    }

    return callHttpSoundPlay(sound[mode]);
}