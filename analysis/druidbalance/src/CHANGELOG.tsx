import { Zeboot, LeoZhekov, Sharrq, Tiboonn, Kartarn, Ciuffi } from 'CONTRIBUTORS';
import { change, date } from 'common/changelog';

export default [
  change(date(2021, 2, 12), 'Added convoke tracking to the statistics page', Ciuffi),
  change(date(2021, 2, 13), 'Added Analyzer for utilizing Balance of All things legendary.', Kartarn),
  change(date(2021, 1, 17), 'Update balance druid spells, Change all occurences of Solar Wrath to Wrath and Lunar Strike to Starfire', Tiboonn),
  change(date(2021, 1, 16), 'Added spell information for conduits', Tiboonn),
  change(date(2020, 12, 30), 'Updated to Typescript and added Integration Tests', Sharrq),
  change(date(2020, 11, 2), 'Replaced the deprecated StatisticBoxes with the new Statistic', LeoZhekov),
  change(date(2020, 10, 18), 'Converted legacy listeners to new event filters', Zeboot),
];
