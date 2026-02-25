'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const exercises = {

  employee: new JsonStore('./models/exercises.json', { employees: [] }),
  collection: 'employees',

  getAppInfo() {
    return this.employee.findAll(this.collection);
  },

};

export default exercises;