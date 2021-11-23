import {layout, noteMatch} from "../padLayout.mjs";

export default function computePadInfo(note, selectedMode) {
    let padInfo = {
        modeName: "",
        keyName: "",
        functionName: null,
    };

    for (let mode of layout.modes.filter((r) => r.name.includes(selectedMode))) {
        let keyFound = mode.keys.find((key) => {
            return note in key;
        })
        if (keyFound) {
            padInfo.modeName = mode.name;
            padInfo.functionName = noteMatch.functions[keyFound[note]];
            padInfo.keyName = keyFound[note];
        }
    }
    return padInfo;
}