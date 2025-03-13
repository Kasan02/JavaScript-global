// import { initAddCommentListener } from './addListeners.js';
import { fetchComments } from './api.js';
import { renderComments } from './renderComments.js';
import { updateComments } from './comments.js';

// document.querySelector(".comments").innerHTML = "Пожалуйста подождите, загружаю комментарии...";

fetchComments().then (data => {
  updateComments(data);
  renderComments();
})