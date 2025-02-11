import { comments } from "./comments.js";
import { ulEl } from "./variables.js"; 

export function addCommentClick() {
    ulEl.addEventListener('click', (event) => {
        const commentElement = event.target.closest('.comment');
        if (commentElement && !event.target.classList.contains('like-button')) {
            event.stopPropagation();
            const index = commentElement.dataset.index;
            if (index !== undefined) {
                document.querySelector('.add-form-text').value = `Ответ на > ${comments[index].id}, ${comments[index].text}:`;
                document.querySelector('.add-form-name').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}