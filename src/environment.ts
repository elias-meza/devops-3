import * as fs from 'fs';

const apiKey = fs.readFileSync('/run/secrets/api-key', 'utf8');

export { apiKey };