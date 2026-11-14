//programmer name: amal jaraisy
// Homework 6 .: reads 3 text files and prints their lines in rounds.
// Round i takes i lines from each file (1, then 2, then 3...).
// If a file runs out, the program keeps going with the other files.

const fs=require('fs');
const path=require('path');

const namesArr = [
    'inp1.txt',
    'inp2.txt',
    'inp3.txt',

]

const filesLines = [];
for (let i = 0; i < namesArr.length; i++) {
    const content = fs.readFileSync(path.join(__dirname, 'texts', namesArr[i]), 'utf-8');
    filesLines.push(content.split(/\r?\n/));
}

const pos = [0, 0, 0];   // where each file stopped
let i = 1;               // how many lines to take this round
let anythingLeft = true;

while (anythingLeft) {
    anythingLeftLeft = false;

    for (let k = 0; k < 3; k++) {
        const lines = filesLines[k];

        for (let j = 0; j < i && pos[k] < lines.length; j++) {
            console.log(lines[pos[k]]);
            pos[k]++;
        }

        if (pos[k] < lines.length)
            anythingLeftLeft = true;
    }

    i++;
}
    