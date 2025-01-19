const likesCount = document.querySelector('.likes-counter');
const likeBtn = document.querySelector('.like-button');
const activeLike = document.querySelector('.-active-like');


let comments = [
    {name: 'Глеб Фокин',
    text: "Это будет первый комментарий на этой странице",
    liked: activeLike, 
    likesCount: 0 },
    {name: 'Варвара Н.',
    text: "Мне нравится как оформлена эта страница! ❤", 
    liked: activeLike, 
    likesCount: 5 }
  ];

  function renderComments() {
    const ulEl = document.querySelector('.comments');
    ulEl.innerHTML = comments.map(comment, index => `
      <li class="comment">
      <div class="comment-header">
        <div>${comment.name}</div>
        <div>${dateTime}</div>
        </div>
        <div class="comment-body">
            <div class="comment-text">
            ${text}
                </div>
                </div>
                    <div class="comment-footer">
                    <div class="likes">
        <span class="likes-counter" ${comment.liked ? 'active' : likeBtn}" data-id="${index}"></span>
        <span>${comment.likesCount}</span>
      </div>
    `).join('');
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('-active-like')) {
      const commentId = parseInt(e.target.dataset.name);
      const comment = comments.find(c => c.name === commentId);
      comment.liked = !comment.liked;
      comment.likesCount += comment.liked ? 1 : -1;
      renderComments();
    }
  });

  document.addEventListener('DOMContentLoaded', renderComments);