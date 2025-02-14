import { comments } from "./comments.js";

export function addComment() {
  const commentElements = document.querySelectorAll('.comment');
  commentElements.forEach((commentElement) => {
    commentElement.removeEventListener('click', commentClickHandler);
    commentElement.addEventListener('click', commentClickHandler);
  });
}

function commentClickHandler(event) {
  if (event.target.classList.contains('like-button')) return;
  event.stopPropagation();
  const commentElement = event.currentTarget;
  const index = commentElement.dataset.index;
  if (index !== undefined) {
    const comment = comments[index];
    const addFormText = document.querySelector('.add-form-text');
    const addFormName = document.querySelector('.add-form-name');
    if (addFormText) {
      addFormText.value = `Ответ на > ${comment.id}, ${comment.text}:`;
    }
    if (addFormName) {
      addFormName.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

export function initLikeHandler() {
  const ulEl = document.querySelector('.comments');
  if (!ulEl) return;
  
  ulEl.removeEventListener('click', likeHandler);
  ulEl.addEventListener('click', likeHandler);
}

function likeHandler(event) {
  if (event.target.classList.contains('like-button')) {
    event.stopPropagation();
    const index = event.target.getAttribute('data-index');
    const comment = comments[index];
    if (!comment) return;
    
    comment.liked = !comment.liked;
    comment.likesCount += comment.liked ? 1 : -1;
    
    event.target.classList.toggle('-active-like', comment.liked);
    const likesCounter = event.target.parentElement.querySelector('.likes-counter');
    if (likesCounter) {
      likesCounter.textContent = comment.likesCount;
    }
  }
}