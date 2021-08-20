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
import { prices } from '../data/price-list';
import { services } from '../data/services';
import { trainerInfo } from '../data/trainer-info';

export default handlebars({
  context: { hero, header, bootcamp, functional, fightings, bodyMind, personal, trainers, prices, trainerInfo, news, schedule, services, footer },
  partialDirectory: resolve(__dirname, '../components'),
  helpers: {
    'if_even': (conditional, options) => (conditional % 2) == 0 ? options.fn(this) : options.inverse(this),
    'get_length': (obj) => obj.length,
  }
});
