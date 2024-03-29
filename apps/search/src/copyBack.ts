import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { Metadata } from '@master-strike/data';
import { csv2json } from 'json-2-csv';

const PATH = '../../packages/data/src/definitions/cards';
const files = readdirSync('../../packages/data/src/definitions/cards');

const betterReplace = (str: string, search: string, replace: string, from: number) => {
  if (str.length > from && from >= 0) {
    return str.slice(0, from) + str.slice(from).replace(search, replace);
  }
  return str;
}

interface DataFile {
  path: string;
  content: string;
  newContent: string;
  lines: string[];
  set: string;
}

interface ImageEntry {
  Name: string;
  'Card Image URL': string;
  Set: string;
  Type: string;
}

const MIN_SPACER_CARD = ' '.repeat(10);
const MIN_SPACER_GROUP = ' '.repeat(6);

const dataFiles: DataFile[] = [];


const csvData = readFileSync('copyBackCards.csv');
const process = async () => {
  const data = await csv2json(csvData.toString('utf8'), {
    keys: ['Name', 'Set', 'Type', 'Card Image URL'],
  }) as ImageEntry[];

  files.forEach(f => {
    if (f === 'index.ts') return;
    const fullPath = join(PATH, f);
    const content = readFileSync(fullPath, { encoding: 'utf8', flag: 'r' });
    dataFiles.push({
      path: fullPath,
      content,
      newContent: content,
      lines: content.split('\n'),
      set: Metadata.setsArray.find(set => f.startsWith(set.value))?.label || ''
    })
  });


  let notFound = 0;
  let found = 0;
  data.filter(d => d.Name).forEach((d, idx) => {
    let minSpacer = MIN_SPACER_CARD;
    const name = d.Name.indexOf(' / ') < 0 ? d.Name : d.Name.split(' / ')[0];
    const nameEntry = `name: "${name}",`;

    if(d.Name === 'Dangerous Rescue') console.log(d)

    const findFile = (set: string) => dataFiles.find(f => set === f.set && f.content.indexOf(minSpacer + nameEntry) >= 0);

    let fileSet = d.Set;
    let file = findFile(fileSet);
    if(!file && fileSet === 'Dimensions' && d.Name !== 'Forklift Driver') {
      fileSet = 'Playable Marvel 3D Trading Cards';
      file = findFile(fileSet);
    }
    if (!file && ['Scheme', 'Henchmen', 'Bystander'].includes(d.Type)) {
      minSpacer = MIN_SPACER_GROUP;
      file = findFile(fileSet);
    }

    if (!file) {
      notFound++;
      console.log(`Not found - ${idx}: ${name} - ${d.Type} - ${d.Set}`);
    } else {
      let realSpacer = '';
      let hasImg = false;
      let nameLineNum = 0;
      file.lines.forEach((line, lineNum) => {
        let idx = line.indexOf(minSpacer + nameEntry);
        if (idx < 0) return;
        found++;
        nameLineNum = lineNum;
        idx = line.indexOf('name:');
        realSpacer = ' '.repeat(idx);
        hasImg = file!.lines[lineNum + 1].indexOf('imageUrl') >= 0;
      });

      const imageEntry = `${realSpacer}imageUrl: "${d['Card Image URL']}",`;
      if (!hasImg) {
        const before = `${realSpacer}${nameEntry}`;
        const after = `${before}\n${imageEntry}`;
        const from = file.content.indexOf(before);
        file.newContent = betterReplace(file.newContent, before, after, from);
      }
      else {
        const currentImageLine = file!.lines[nameLineNum + 1];
        const newImageLine = `${imageEntry}${currentImageLine.endsWith('\r') ? '\r' : ''}`;
        const from = file.content.indexOf(currentImageLine);
        file.newContent = betterReplace(file.newContent, currentImageLine, newImageLine, from);
      }
    }
  });

  console.log(`Not found: ${notFound}`);
  console.log(`Found: ${found}`);
  console.log(`All: ${data.filter(d => d.Name).length}`);

  dataFiles.forEach(f => {
    writeFileSync(f.path, f.newContent);
  });
}
process();