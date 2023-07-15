import { Sets, HeroCard, HenchmanCard } from '@master-strike/data';
import { Document } from 'flexsearch';
import * as readline from 'readline';

interface ResultDoc {
  name: string;
  type: string;
}

let added = 0;
const doc = new Document({
  preset: 'match',
  tokenize: 'full',
  charset: 'latin:default',
  matcher: { 
    '-': '',
    'é': 'e',
    '\'': '',
    '\\\.': '',
  },
  document: {
    id: 'id',
    index: ['name'],
    store: true,
  },
});
Object.values(Sets).forEach(set => {
  set.heroes?.forEach(hero => {
    hero.cards?.forEach(card => {
      doc.add(added, {
        ...card,
        type: 'Hero Card'
      });
      added++;
    });
  });
  set.villains?.forEach(villain => {
    villain.cards?.forEach(card => {
      doc.add(added, {
        ...card,
        type: 'Villain Card'
      });
      added++;
    });
  });
  set.masterminds?.forEach(mm => {
    mm.cards?.forEach(card => {
      doc.add(added, {
        ...card,
        type: card.tactic ? 'Mastermind Tactic' : 'Mastermind',
      });
      added++;
    });
  });
  set.schemes?.forEach(scheme => {
    scheme.cards?.forEach(card => {
      doc.add(added, {
        name: scheme.name,
        type: 'Scheme',
        ...card,
      });
      added++;
    });
  });
  set.henchmen?.forEach(henchman => {
    henchman.cards?.forEach(card => {
      doc.add(added, {
        name: card.name || henchman.name,
        type: 'Henchman Card',
        ...card,
      });
      added++;
    });
  });
});

console.log(`${added} cards added`);

const question = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Query: ', (answer) => {
    const result = doc.search(answer, 10, {
      limit: 10,
      enrich: true,
    });
    console.log(`Querying for ${answer}...`);

    if(result.length) {
      result[0].result.forEach(result => {
        const resultDoc = result.doc as ResultDoc;
        console.log(`${resultDoc.name} ---- ${resultDoc.type}`);
      })
    }

    console.log('\n');
  
    rl.close();
    question();
  });
}
question();