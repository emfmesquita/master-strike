import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { Metadata } from '@master-strike/data';
import { csv2json } from 'json-2-csv';

const PATH = '../../packages/data/src/definitions/cards';
const files = readdirSync('../../packages/data/src/definitions/cards');

interface DataFile {
  path: string;
  content: string;
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
      lines: content.split('\n'),
      set: Metadata.setsArray.find(set => f.startsWith(set.value))?.label || ''
    })
  });


  let notFound = 0;
  let found = 0;
  data.filter(d => d.Name && d.Name.indexOf('/') < 0).forEach((d, idx) => {
    let minSpacer = MIN_SPACER_CARD;
    const nameEntry = `name: "${d.Name}",`;

    const getSet = (row: ImageEntry) => {
      if (row.Set === 'Playable Marvel 3D Trading Cards - Dimensions') return 'Playable Marvel 3D Trading Cards';
      if (row.Set === 'Core Set - Marvel Studios, Phase 1') return 'Core Set';
      return row.Set;
    }
    const findFile = () => dataFiles.find(f => getSet(d) === f.set && f.content.indexOf(minSpacer + nameEntry) >= 0);

    let file = findFile();
    if (!file && ['Scheme', 'Henchmen'].includes(d.Type)) {
      minSpacer = MIN_SPACER_GROUP;
      file = findFile();
    }

    if (!file) {
      notFound++;
      console.log(`Not found - ${idx}: ${d.Name} - ${d.Type} - ${d.Set}`);
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
        file.content = file.content.replace(before, after);
      }
      else {
        const currentImageLine = file!.lines[nameLineNum + 1];
        const newImageLine = `${imageEntry}${currentImageLine.endsWith('\r') ? '\r' : ''}`;
        file.content = file.content.replace(currentImageLine, newImageLine);
      }
    }
  });

  console.log(`Not found: ${notFound}`);
  console.log(`Found: ${found}`);
  console.log(`All: ${data.filter(d => d.Name && d.Name.indexOf('/') < 0).length}`);

  dataFiles.forEach(f => {
    writeFileSync(f.path, f.content);
  });
}
process();