import { resolve } from 'path';
import { readdirSync } from 'fs';
import { plugins } from './src/plugins';

import { UserConfig } from 'vite';


const config: UserConfig = {
  plugins,
  build: {
    rollupOptions: {
      input: {}
    }
  }
};

readdirSync(__dirname)
  .forEach(file => {
    const targetExt = '.html'
    if (!file.endsWith(targetExt)) { return; }
    const key = file.substring(0, file.length - targetExt.length)
    config.build.rollupOptions.input[key] = resolve(__dirname, file)
  });

export default config
