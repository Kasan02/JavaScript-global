import { comments } from "./comments.js";

const commentElement = document.createElement('li');

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
  });
}

export function addComment() {
  commentElement.addEventListener('click', function (event) {
    if (!event.target.classList.contains('like-button')) {
      event.stopPropagation();
      const addFormText = document.querySelector('.add-form-text');
      const addFormName = document.querySelector('.add-form-name');
      if (addFormText) {
        addFormText.value = `Ответ на > ${comment.id}, ${comment.text}:`;
      }
      if (addFormName) {
        addFormName.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  })
}

export function addLikeButton() {
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      event.stopPropagation(); 
      const index = btn.getAttribute('data-index');
      const comment = comments[index];
      if (!comment) return;

      comment.liked = !comment.liked;
      comment.likesCount += comment.liked ? 1 : -1;

      btn.classList.toggle('-active-like', comment.liked);
      const likesCounter = btn.parentElement.querySelector('.likes-counter');
      if (likesCounter) {
        likesCounter.textContent = comment.likesCount;
      }
    });
  });
}