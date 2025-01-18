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
        nameStyle.style.border = '';
        nameStyle.style.borderColor = '';
        document.querySelector('.add-form-name').value = '';
        nameStyle.placeholder = "Введите ваше имя"
        textStyle.placeholder = "Введите ваш коментарий"
        textStyle.style.border = '';
        textStyle.style.borderColor = '';
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