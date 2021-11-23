import { PAD1 } from './pads/pads.mjs';
import { PAD2 } from './pads/pads.mjs';
import { PAD3 } from './pads/pads.mjs';
import { PAD4 } from './pads/pads.mjs';
import { PAD5 } from './pads/pads.mjs';
import { PAD6 } from './pads/pads.mjs';
import { PAD7 } from './pads/pads.mjs';
import { PAD8 } from './pads/pads.mjs';

export const noteMatch = {
    "functions": {
        "PAD 1": PAD1,
        "PAD 2": PAD2,
        "PAD 3": PAD3,
        "PAD 4": PAD4,
        "PAD 5": PAD5,
        "PAD 6": PAD6,
        "PAD 7": PAD7,
        "PAD 8": PAD8,
    },
};

export const layout = {
    "modes": [
        {
            "name": "MODE PAD 1",
            "keys": [
                { "36": "PAD 1" },
                { "37": "PAD 2" },
                { "38": "PAD 3" },
                { "39": "PAD 4" },
                { "40": "PAD 5" },
                { "41": "PAD 6" },
                { "42": "PAD 7" },
                { "43": "PAD 8" },
            ]
        },
        {
            "name": "MODE PAD 3",
            "keys": [
                { "60": "PAD 1" },
                { "62": "PAD 2" },
                { "64": "PAD 3" },
                { "65": "PAD 4" },
                { "67": "PAD 5" },
                { "69": "PAD 6" },
                { "71": "PAD 7" },
                { "72": "PAD 8" },
            ]
        },
        {
            "name": "MODE PROG",
            "keys": [
                { "0": "PAD 1" },
                { "1": "PAD 2" },
                { "2": "PAD 3" },
                { "3": "PAD 4" },
                { "4": "PAD 5" },
                { "5": "PAD 6" },
                { "6": "PAD 7" },
                { "7": "PAD 8" },
            ]
        },
        {
            "name": "MODE CC",
            "keys": [
                { "1": "PAD 1" },
                { "2": "PAD 2" },
                { "3": "PAD 3" },
                { "4": "PAD 4" },
                { "5": "PAD 5" },
                { "6": "PAD 6" },
                { "8": "PAD 7" },
                { "9": "PAD 8" },
            ]
        }
    ]
}

export default function () {
    return null
}