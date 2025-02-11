import { escapeHtml } from './escapeHtml.js';
import { button, nameStyle, textStyle } from './variables.js';
import { comments } from './comments.js';
import { renderComments } from './renderComments.js';

export function addButtonComment() {
    button.addEventListener('click', function () {
        const name = document.querySelector('.add-form-name').value;
        const text = document.querySelector('.add-form-text').value;

        nameStyle.classList.remove('error');
        textStyle.classList.remove('error');

        if (name.trim() === '') {
            nameStyle.classList.add('error');
            nameStyle.placeholder = "Вы не ввели имя!";
            return;
        }
        if (text.trim() === '') {
            textStyle.classList.add('error');
            textStyle.placeholder = "Вы не ввели комментарий!";
            return;
        }

        nameStyle.classList.add('add-form-name');
        document.querySelector('.add-form-name').value = '';
        nameStyle.placeholder = "Введите ваше имя";
        textStyle.placeholder = "Введите ваш комментарий";
        textStyle.classList.add('add-form-text');
        document.querySelector('.add-form-text').value = '';

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