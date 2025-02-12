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