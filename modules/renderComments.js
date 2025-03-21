import { comments } from "./comments.js";
import { initLikesListeners, initReplyCommentListeners } from "./addListeners.js";

export function renderComments() {
  const ulEl = document.querySelector('.comments');
  if (!ulEl) return;
  
  ulEl.innerHTML = '';

  comments.forEach((comment, index) => {
    const formattedDate = new Date(comment.date).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const commentElement = document.createElement('li');
    commentElement.className = 'comment';
    commentElement.dataset.index = index;
    commentElement.innerHTML = `
      <div class="comment-header">
        <div>${comment.name}</div>
        <div>${formattedDate}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likes}</span>
          <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
        </div>
      </div>
    `;
    ulEl.appendChild(commentElement);
  });

  initLikesListeners();
  initReplyCommentListeners();
}
