import _ from 'lodash';
import idb from 'idb';

function openDatabase() {
  return idb.open('test-db', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        const testStore = upgradeDb.createObjectStore('tests');
        testStore.put('Kyle Fidalgo', 'name');
    }
  });
}

const dbPromise = openDatabase();

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
