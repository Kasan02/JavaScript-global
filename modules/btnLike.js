ulEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('like-button')) {
        event.stopPropagation();
        const index = event.target.getAttribute('data-index');
        const comment = comments[index];

        comment.liked = !comment.liked;
        comment.likesCount += comment.liked ? 1 : -1;

        const likeButton = event.target;
        const likesCounter = likeButton.previousElementSibling;

        likeButton.innerHTML = comment.liked ? '' : '';
        likeButton.classList.toggle('-active-like', comment.liked);
        likesCounter.textContent = comment.likesCount;
    }
});