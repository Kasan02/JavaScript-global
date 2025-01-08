const inputName = document.querySelector(".add-form-name");
const inputComment = document.querySelector(".add-form-text");
const button = document.querySelector(".add-form-button");
const list = document.getElementById("list");
button.addEventListener('click', function () { 
    const newComment = document.createElement('li');
    newComment.innerHTML = `${inputName.value}, ${inputComment.value}`;
    list.appendChild(newComment);
    console.log(newComment.innerHTML);
    console.log(list.appendChild(newComment));
    console.log(newComment.innerHTML = `${inputName.value}, ${inputComment.value}`);
});