import { readFileSync } from 'fs';

export function readJson(jsonPath: string) {
  const data = JSON.parse(readFileSync(jsonPath, 'utf8')) as unknown[];
  return data;
}
