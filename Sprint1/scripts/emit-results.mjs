import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const mod = await import(pathToFileURL('./src/lib/filters/combined/combined.ts').href);
const { combinedFilter } = mod;

const inputs = {
    basic: [1, 3, 7, 9, 4],
    edges: [30, 69, 412, 423421, 4235],
    zeroes: [0],
    small: [2, 3, 4]
};

const outputs = {};
for (const [k, arr] of Object.entries(inputs)) {
    outputs[k] = combinedFilter(arr);
}

const artefact = { filterOrder: 'mine->peer', inputs, outputs };
writeFileSync('static/combined-results.json', JSON.stringify(artefact, null, 2));
console.log('Wrote static/combined-results.json');