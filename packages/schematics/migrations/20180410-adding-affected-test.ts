import { updateJsonFile } from '../src/utils/fileutils';

export default {
  description: 'Update npm scripts to use the nx command',
  run: () => {
    updateJsonFile('package.json', json => {
      json.scripts = {
        ...json.scripts,
        'affected:test': './node_modules/.bin/nx affected test'
      };
    });
  }
};
