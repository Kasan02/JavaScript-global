import { initAddCommentListener } from './addListeners.js';
import { renderComments } from './renderComments.js';
import { updateComments } from './comments.js';

initAddCommentListener();

fetch("https://wedev-api.sky.pro/api/v1/daniil-kasanov/comments")
  .then(response => response.json())
  .then(data => {
    console.log("Response data:", data);
    if (data && Array.isArray(data.comments)) {
      updateComments(data.comments);
    } else {
      console.error("Полученные комментарии не являются массивом:", data);
      updateComments([]); // или оставить пустой массив
    }
    renderComments();
  })
  .catch(err => console.error(err));

