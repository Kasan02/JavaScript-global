import {comments} from "./modules/comments.js";

export function renderComments() {
    ulEl.innerHTML = '';

    comments.forEach((comment, index) => {
        const commentElement = document.createElement('li');
        commentElement.className = 'comment';
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
                            <button class="like-button ${comment.liked ? '-active-like' : ''}" data-index="${index}">
                                ${comment.liked ? '' : ''}
                            </button>
                        </div>
                    </div>
                `;
        ulEl.appendChild(commentElement);
    });

    const commentElements = document.querySelectorAll('.comment');
    commentElements.forEach((commentElement, index) => {
        commentElement.addEventListener('click', (event) => {
            if (!event.target.classList.contains('like-button')) {
                event.stopPropagation(); 
                document.querySelector('.add-form-text').value = `Ответ на > ${comments[index].id}, ${comments[index].text}:`;
                document.querySelector('.add-form-name').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        });
    });
};