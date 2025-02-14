import { escapeHtml } from './escapeHtml.js';
import { comments } from './comments.js';
import { renderComments } from './renderComments.js';

export function addButtonListener() {
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

    let dateTime = new Date();
    dateTime = dateTime.toLocaleDateString('ru-RU', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    }) + ' ' + dateTime.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const safeName = escapeHtml(name);
    const safeText = escapeHtml(text);

    const newComment = {
      id: safeName,
      date: dateTime,
      text: safeText,
      likesCount: 0,
      liked: false
    };

    comments.push(newComment);

    renderComments();
  });
}