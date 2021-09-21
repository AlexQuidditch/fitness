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
import { promotions } from '../data/promotion-list';
import { services } from '../data/services';
import { prices } from '../data/prices';
import { faqList } from '../data/faq';
import { trainerInfo } from '../data/trainer-info';

export default handlebars({
  context: { hero, header, bootcamp, functional, fightings, bodyMind, personal, trainers, promotions, trainerInfo, news, schedule, services, prices, faqList, footer },
  partialDirectory: [
    resolve(__dirname, '../dialogs'),
    resolve(__dirname, '../components')
  ],
  helpers: {
    if_even (conditional, options) {
      return (conditional % 2) == 0 ? options.fn(this) : options.inverse(this);
    },
    each_in_range: (from, to, context, options) => {
      let item = '';
      for (let i = from, j = to; i < j; i++) {
        item = item + options.fn(context[i]);
      }
      return item;
    },
    splice_of: (v, idx) => v.splice(0, idx),
    get_length: v => v.length,
    json: v => JSON.stringify(v),
    math: (lvalue, operator, rvalue) => {
      lvalue = parseFloat(lvalue);
      rvalue = parseFloat(rvalue);
      return {
        '+': lvalue + rvalue,
        '-': lvalue - rvalue,
        '*': lvalue * rvalue,
        '/': lvalue / rvalue,
        '%': lvalue % rvalue
      }[operator];
    },
  }
});
