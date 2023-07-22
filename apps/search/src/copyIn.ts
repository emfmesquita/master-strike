import { CardSearchEngine, RuleSearchEngine } from '@master-strike/data';
import { writeFileSync } from 'fs';
import { json2csv } from 'json-2-csv';

const cardSearcEngine = new CardSearchEngine();
console.log(`${cardSearcEngine.getCardCount()} cards added`);
json2csv(cardSearcEngine.getAllCards().map(c=>c), {
  keys: [
    { field: 'name', title: 'Name' },
    { field: 'set', title: 'Set' },
    { field: 'type', title: 'Type' },
    { field: 'imageUrl', title: 'Card Image URL' },
  ]
}).then(csv => {
  writeFileSync('./copyInCards.csv', csv);
});

const ruleSearcEngine = new RuleSearchEngine();
console.log(`${ruleSearcEngine.getRulesCount()} rules added`);
json2csv(ruleSearcEngine.getAllRules().map(r=> r)).then(csv => {
  writeFileSync('./copyInRules.csv', csv);
});