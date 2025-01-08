const inputName = document.querySelector('add-form-name');
const inputComment = document.querySelector('add-form-text');
const button = document.querySelector('add-form-button');

button.addEventListener('click', function (e) { 
    const newComment = document.createElement("div");
    newComment.textContent = `${inputName.value}: ${inputComment.value}`;
    console.log(inputName);
    console.log(inputComment);
});