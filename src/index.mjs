import easymidi from 'easymidi';
import computePadInfo from "./computePadInfo.mjs";

if (!("API_BASE_URL" in process.env) || process.env.API_BASE_URL === "") {
    console.error("Missing API_BASE_URL env var");
    process.exit(1);
}

if (!("API_KEY" in process.env) || process.env.API_KEY === "") {
    console.error("Missing API_KEY env var");
    process.exit(1);
}

function midiListener(inputName) {
    const input = new easymidi.Input(inputName);

    /*input.on('message', (msg) => {
        const vals = Object.keys(msg).map((key) => `${key}: ${msg[key]}`);
        console.log(`${inputName}: ${vals.join(', ')}`);
    });*/

    input.on('cc', msg => {
        if (msg.value === 0) {
            let noteInfo = computePadInfo(msg.controller);
            noteInfo.functionName(noteInfo);
        }
    });
    input.on('program', msg => {
        let noteInfo = computePadInfo(msg.number);
        noteInfo.functionName(noteInfo);
    });
    input.on('noteon', msg => {
        let noteInfo = computePadInfo(msg.note);
        noteInfo.functionName(noteInfo);
    });
}

easymidi.getInputs().forEach((inputName) => {
    midiListener(inputName);
});