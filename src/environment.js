import fs from 'node:fs';
const apiKey = fs.readFileSync('../key.txt', 'utf8');

export { apiKey };