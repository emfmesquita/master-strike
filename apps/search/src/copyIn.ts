import { CardSearchEngine, RuleSearchEngine, cardRows, ruleRows } from '@master-strike/data';
import { writeFileSync } from 'fs';
import { json2csv } from 'json-2-csv';

// const cardSearcEngine = new CardSearchEngine();
// console.log(`${cardSearcEngine.getCardCount()} cards added`);
// json2csv(cardRows).then(csv => {
//   writeFileSync('./copyInCards.csv', csv);
// });


const ruleSearcEngine = new RuleSearchEngine();
console.log(`${ruleSearcEngine.getRulesCount()} rules added`);
json2csv(ruleRows).then(csv => {
  writeFileSync('./copyInRules.csv', csv);
});