# @master-strike/data

Library with the data from master-strike.com. Allows card and rule searches.

## Card Search

```
import { CardSearchEngine } from '@master-strike/data';

const searchEngine = new CardSearchEngine();

searchEngine.search('Wolverine').then(results => {
  results.forEach(result => console.log(result.name))
});
```

This should result in something like:

```
Wolverine
Wolverine of Future Past
Wolverine
Dark Wolverine (Daken)
Keen Senses
Healing Factor
Frenzied Slashing
Berserker Rage
Animal Instincts
Sudden Ambush
```

The default the card name and subtitle is considered in the search and the number of results are limited to 10. Other attributes can be added and subtitle removed from the options.


## Rule Search

```
import { RuleSearchEngine } from '@master-strike/data';

const searchEngine = new RuleSearchEngine();

searchEngine.search('Shards').then(results => {
  results.forEach(result => console.log(result.name))
});
```

This should result in something like:

```
Shards
Burn Shards
```

## Card Details and Metadata

This is an example of card search result:

```
{
  "name": "Frenzied Slashing",
  "subtitle": "Wolverine",
  "imageUrl": "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolverine-02.png",
  "set": "Core Set",
  "type": "Hero",
  "group": "Wolverine",
  "details": {
    "detailsType": "HeroCardDetails",
    "cost": "5",
    "hc": 2,
    "qtd": 3,
    "team": 4,
    "attack": "2",
    "description": [
      [
        {
          "hc": 2
        },
        ": Draw two cards."
      ]
    ]
  }
}
```

Each card search result has the **details** property that has a different structure depending on the card type. To parse it the **detailsType** should be considered to know what to expect. The example above indicates that it has a detail of a hero card.

Another property present in the details is the **description** that information represents the mains description of the card. In the example above it is the hero card abilities.

Many properties in the **details** will have numeric value ids. Consider using the **Metadata** object to parse this information. Example:

```
import { Metadata } from '@master-strike/data';

const card = { ... } // Wolverine card from example above

const team = card.details.team;

console.log(Metadata.teamsArray[team].label) // X-Men
```

Metadata will have information about: teams, hc (hero classes), icons, keywords, and rules.

## Card Browser

The search engine also contains an object that allows browsing cards:

```
import { CardSearchEngine } from '@master-strike/data';

const searchEngine = new CardSearchEngine();

const browser = searchEngine.getBrowser(); // key value map - keys are card types
const heroes = browser[CardType.Hero]!; //  key value map - keys are card sets
const heroesOfCoreSet = heroes['Core Set']; // key value map - keys are card groups
const blackWidowCards = heroesOfCoreSet['Black Widow']; // array or card search results
blackWidowCards.forEach(result => console.log(result.name))
```

This should result in something like:

```
Dangerous Rescue
Mission Accomplished
Covert Operation
Silent Sniper
```

The keys of the object maps can be used to iterate over them. Also for the card set level the metadata of the card set can be used as key of the browser.