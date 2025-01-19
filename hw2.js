const likesCount = document.querySelector('.likes-counter');
const likeBtn = document.querySelector('.like-button');
const activeLike = document.querySelector('.-active-like');

const comments = [
    { id: 'Глеб Фокин', 
    date: '12.02.22 12:18',
    text: "Это будет первый комментарий на этой странице", 
    likesCount: 3,
    like: false },
    { id: 'Варвара Н.', 
    date: '13.02.22 19:22',
    text: "Мне нравится как оформлена эта страница! ❤", 
    likesCount: 75,
    like: true }
];

function renderComments() {
    const container = document.querySelector('.comments');
    container.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
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
                        <button class="like-button" data-id="${comment.like}"></button>
                    </div>
                </div>
            </li>`;
});

button.addEventListener('click', function (id) { 

    const comment = comments.find(comment => comment.id === id);

    if (comment) {
        comment.likesCount + 1;
        return
    } else {
        comment.likesCount = -1;
    }
    renderComments()
})};
