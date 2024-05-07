import * as fs from 'fs';

const apiKey = fs.readFileSync('../api-key.txt', 'utf8');

export { apiKey };