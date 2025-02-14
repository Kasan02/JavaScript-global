import { comments } from "./comments.js";
import { addComment } from "./quotingComment.js";
import { addLikeButton } from "./quotingComment.js";

export function renderComments() {
  const ulEl = document.querySelector('.comments');
  if (!ulEl) return; 

  ulEl.innerHTML = ''; 

  comments.forEach((comment, index) => {
    const commentElement = document.createElement('li');
    commentElement.className = 'comment';
    commentElement.dataset.index = index; 

    commentElement.innerHTML = `
      <div class="comment-header">
        <div>${comment.id}</div>
        <div>${comment.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likesCount}</span>
          <button class="like-button ${comment.liked ? '-active-like' : ''}" data-index="${index}"></button>
        </div>
      </div>
    `;
    ulEl.appendChild(commentElement);
    addComment();  
    addLikeButton();
  });
}