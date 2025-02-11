import { ulEl } from "./variables.js";
import { comments } from "./comments.js";

export function renderComments() {
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
    });
}

export function addLikeButton() {
    ulEl.addEventListener('click', function (event) {
        if (event.target.classList.contains('like-button')) {
            event.stopPropagation();
            const index = event.target.getAttribute('data-index');
            const comment = comments[index];

            comment.liked = !comment.liked;
            comment.likesCount += comment.liked ? 1 : -1;

            const likeButton = event.target;
            const likesCounter = likeButton.previousElementSibling;

            likeButton.classList.toggle('-active-like', comment.liked);
            likesCounter.textContent = comment.likesCount;
        }
    });
}