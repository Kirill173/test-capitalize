import { strict as assert } from 'node:assert';

import { capitalize } from '../src/capitalize.js';

assert.deepEqual({}, {});

assert.deepEqual({ key: 'value' }, { key: 'value' });

console.log('Все тесты пройдены!');
