// HW 1

const button = document.querySelector('.add-form-button');
const ulEl = document.querySelector('.comments');
const nameStyle = document.querySelector('.add-form-name');
const textStyle = document.querySelector('.add-form-text');

button.addEventListener('click', function () {

    const name = document.querySelector('.add-form-name').value;
    const text = document.querySelector('.add-form-text').value;

    nameStyle.classList.remove('error');
    textStyle.classList.remove('error');

    if (name === '' || name === ' ') {
        nameStyle.classList.add('error');
        nameStyle.placeholder = "Вы не ввели имя!"
        return;
    } else if (text === '' || text === ' ') {
        textStyle.classList.add('error');
        textStyle.placeholder = "Вы не ввели комментарий!"
        return;
    } else {
        nameStyle.classList.add('add-form-name');
        document.querySelector('.add-form-name').value = '';
        nameStyle.placeholder = "Введите ваше имя"
        textStyle.placeholder = "Введите ваш коментарий"
        textStyle.classList.add('add-form-text');
        document.querySelector('.add-form-text').value = '';
    }
        let dateTime = new Date();
        dateTime = dateTime.toLocaleDateString('ru-RU', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }) + ' ' + dateTime.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const oldHtml = ulEl.innerHTML;
        ulEl.innerHTML = oldHtml + `<li class="comment">
                <div class="comment-header">
                    <div>${name}</div>
                    <div>${dateTime}</div>
                </div>
                <div class="comment-body">
                    <div class="comment-text">
                        ${text}
                    </div>
                </div>
                    <div class="comment-footer">
                    <div class="likes">
                        <span class="likes-counter">0</span>
                        <button class="like-button"></button>
                    </div>
                </div>
            </li>`;
});

// HW 2

const likeBtn = document.querySelector('.like-button');
const activeLike = document.querySelector('.-active-like');

const comments = [
    {
        id: 'Глеб Фокин',
        date: '12.02.22 12:18',
        text: "Это будет первый комментарий на этой странице",
        likesCount: 3,
        liked: false
    },
    {
        id: 'Варвара Н.', 
        date: '13.02.22 19:22',
        text: "Мне нравится как оформлена эта страница! ❤",
        likesCount: 75,
        liked: false
    }
];

function renderComments() {
    const commentsContainer = document.querySelector('.comments');
    commentsContainer.innerHTML = ''; 

    comments.forEach((comment, index) => {
        const commentElement = document.createElement('ul');
        commentElement.className = 'comments';
        commentElement.innerHTML = `
             <li class="comment">
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
                         <button class="like-button ${comment.liked ? 'liked' : ''}" data-index="${index}">
                          ${comment.liked ? activeLike : likeBtn} </button>
                     </div>
                 </div>
             </li>`;
        commentsContainer.appendChild(commentElement);
    });
}

likeBtn.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-button')) {
        const index = event.target.getAttribute('data-index'); 
        const comment = comments[index];

        comment.liked = !comment.liked; 
        comment.likesCount += comment.liked ? 1 : -1; 

        renderComments();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    renderComments();
});