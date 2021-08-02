import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

import { bodyMind } from '../data/body-mind';
import { bootcamp } from '../data/bootcamp';
import { fightings } from '../data/fightings';
import { functional } from '../data/functional';
import { header } from '../data/header';
import { hero } from '../data/hero';
import { personal } from '../data/personal';
import { trainers } from '../data/trainers';
import { news } from '../data/news';
import { footer } from '../data/footer';

export default handlebars({
  context: { hero, header, bootcamp, functional, fightings, bodyMind, personal, trainers, news, footer },
  partialDirectory: resolve(__dirname, '../components'),
});
