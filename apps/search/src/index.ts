import { CardSearchEngine, RuleSearchEngine } from '@master-strike/data';
import * as readline from 'readline';

const cardSearcEngine = new CardSearchEngine();
console.log(`${cardSearcEngine.getCardCount()} cards added`);

const ruleSearcEngine = new RuleSearchEngine();
console.log(`${ruleSearcEngine.getRulesCount()} rules added`);

const question = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Query: ', async (answer) => {
    console.log(`Querying for ${answer}...`);
    const results = await cardSearcEngine.search(answer);

    if(results.length) {
      results.forEach(r => {
        console.log(r);
      })
    }

    console.log('\n');
  
    rl.close();
    question();
  });
}
question();