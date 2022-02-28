import Library from './modules/library.js';
import { navigationLinks } from './modules/navigate.js';
import { DateTime } from './node_modules/luxon/src/datetime.js';

const date = document.getElementById('date');
date.innerHTML = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS,
);

navigationLinks();
Library();
