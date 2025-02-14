import { comments } from "./comments.js";

export function addCommentClick() {
  const commentElements = document.querySelectorAll('.comment');
  commentElements.forEach((commentElement) => {
    commentElement.addEventListener('click', function (event) {
      if (!event.target.classList.contains('like-button')) {
        event.stopPropagation();
        const index = commentElement.dataset.index;
        if (index !== undefined) {
          const addFormText = document.querySelector('.add-form-text');
          const addFormName = document.querySelector('.add-form-name');
          if (addFormText) {
            addFormText.value = `Ответ на > ${comments[index].id}, ${comments[index].text}:`;
          }
          if (addFormName) {
            addFormName.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });
}

export function addComment() {
  const commentElements = document.querySelectorAll('.comment');
  
  commentElements.forEach((commentElement) => {
    commentElement.addEventListener('click', (event) => {
      if (!event.target.classList.contains('like-button')) {
        event.stopPropagation();
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
    });
  });
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