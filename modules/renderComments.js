import { comments } from "./comments.js";
// import { initLikesListeners, initReplyCommentListeners } from "./addListeners.js";
import { renderLogin } from "./renderLogin.js";

export function renderComments() {
  const container = document.querySelector('.container'); 
  if (!container) return; // Проверяем, что контейнер существует

  const commentsHtml = comments.map((comment, index) => {
    const formattedDate = new Date(comment.date).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${formattedDate}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">${comment.text}</div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
          </div>
        </div>
      </li>
    `;
  })
  .join('');

  const addCommentsHtml = `
  <ul class="comments">
            <li class="comment">
                <div class="comment-header">
                    <div>Глеб Фокин</div>
                    <div>12.02.22 12:18</div>
                </div>
                <div class="comment-body">
                    <div class="comment-text">
                        Это будет первый комментарий на этой странице
                    </div>
                </div>
                <div class="comment-footer">
                    <div class="likes">
                        <span class="likes-counter">3</span>
                        <button class="like-button"></button>
                    </div>
                </div>
            </li>
            <li class="comment">
                <div class="comment-header">
                    <div>Варвара Н.</div>
                    <div>13.02.22 19:22</div>
                </div>
                <div class="comment-body">
                    <div class="comment-text">
                        Мне нравится как оформлена эта страница! ❤
                    </div>
                </div>
                <div class="comment-footer">
                    <div class="likes">
                        <span class="likes-counter">75</span>
                        <button class="like-button -active-like"></button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="add-form">
            <input type="text" id="name" class="add-form-name" placeholder="Введите ваше имя" />
            <textarea type="textarea" id="text" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
            <div class="add-form-row">
                <button id="button" class="add-form-button">Написать</button>
            </div>
        </div>
        <div class="form-loading">
            Комментарий добавляется...
        </div>
  `

  const linkToLoginText = `<p>Чтобы отправить комментарий, <span class="link-login">войдите</span></p>`

  const baseHtml = `
  <ul class="comments">${commentsHtml}</ul>
  ${linkToLoginText}`

  container.innerHTML = baseHtml; 

  // initLikesListeners();
  // initReplyCommentListeners();
  // initAddCommentListener();

  document.querySelector('.link-login').addEventListener('click', 
    () => {
      renderLogin();
    })
  }
