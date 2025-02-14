import { addButtonListener } from './buttonValue.js';
import { renderComments } from './renderComments.js';
import { onDOMContentLoaded } from './document.js';

addButtonListener();

onDOMContentLoaded(() => {
  renderComments();
});