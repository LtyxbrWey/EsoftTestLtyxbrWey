function deepCopyObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? deepCopyObject(obj[key]) : obj[key];
    }
  }
  return copy;
}

// Если использовать бибилиотеку loodash

import _ from 'lodash';

function deepCopy(obj) {
  return _.cloneDeep(obj);
}

// Если использовать библиотеку ramda

import { cloneDeep } from 'ramda';

const deepCopy = cloneDeep;