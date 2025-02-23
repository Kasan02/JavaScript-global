import { comments } from "./comments.js";
import { escapeHtml } from './escapeHtml.js';
import { renderComments } from './renderComments.js';
import { updateComments } from "./comments.js";

export function initAddCommentListener() {
  const button = document.querySelector('.add-form-button');
  const nameElement = document.querySelector('.add-form-name');
  const textElement = document.querySelector('.add-form-text');
  if (!button || !nameElement || !textElement) return;

  button.addEventListener('click', function () {
    const name = nameElement.value;
    const text = textElement.value;

    nameElement.classList.remove('error');
    textElement.classList.remove('error');

    if (name.trim() === '') {
      nameElement.classList.add('error');
      nameElement.placeholder = "Вы не ввели имя!";
      return;
    }
    if (text.trim() === '') {
      textElement.classList.add('error');
      textElement.placeholder = "Вы не ввели комментарий!";
      return;
    }

    nameElement.value = '';
    nameElement.placeholder = "Введите ваше имя";
    textElement.value = '';
    textElement.placeholder = "Введите ваш комментарий";

    const dateStr = "2025-02-23T11:30:02.442Z";
const dateTime = new Date(dateStr);
const formattedDate = dateTime.toLocaleString('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
    }) + ' ' + dateTime.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    })
    console.log(formattedDate); 

    const safeName = escapeHtml(name);
    const safeText = escapeHtml(text);

    const newComments = {
      date: dateTime,
      text: safeText,
      likes: 0,
      isLiked: false,
      name: safeName
    };

    fetch("https://wedev-api.sky.pro/api/v1/daniil-kasanov/comments", {
      method: 'POST',
      body: JSON.stringify(newComments), 
    }).then(response => {
      return response.json()
    }).then(data => {
      updateComments(data.comments);
        renderComments();
    });

    // comments.push(newComment);

    renderComments();
  });
}

export function initReplyCommentListeners() {
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

export function initLikesListeners() {
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
    
    comment.isLiked = !comment.isLiked;
    comment.likes += comment.isLiked ? 1 : -1;
    
    event.target.classList.toggle('-active-like', comment.isLiked);
    const likesCounter = event.target.parentElement.querySelector('.likes-counter');
    if (likesCounter) {
      likesCounter.textContent = comment.likes;
    }
  }
}