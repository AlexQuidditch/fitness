import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

import { bodyMind } from '../data/body-mind';
import { bootcamp } from '../data/bootcamp';
import { fightings } from '../data/fightings';
import { footer } from '../data/footer';
import { functional } from '../data/functional';
import { header } from '../data/header';
import { hero } from '../data/hero';
import { news } from '../data/news';
import { personal } from '../data/personal';
import { schedule } from '../data/schedule';
import { trainers } from '../data/trainers';

export default handlebars({
  context: { hero, header, bootcamp, functional, fightings, bodyMind, personal, trainers, news, schedule, footer },
  partialDirectory: resolve(__dirname, '../components'),
});
