import fs from 'fs';
import slugify from 'slugify';

export function parseDCInstruct(dc_instruct_html_path) {
    const fileContents = fs.readFileSync(dc_instruct_html_path, 'utf8');
    const regexp = /1>(.*?)<\/h1>(.*?)<h/gs
    const results = [...fileContents.matchAll(regexp)];
    const dcInstructs = results.map((match, i) => {
        return {id: slugify(match[1]), label: match[1], content: match[2]};
    });
    return dcInstructs;
}