const inputName = document.getElementById("name");
const inputComment = document.getElementById("comment");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener('click', function () { 
    const newComment = document.createElement('li');
    newComment.innerHTML = `${inputName.value}, ${inputComment.value}, ${newDate().toLocaleString()}`;

    inputName.value = "";
    inputComment.value = "";
    list.appendChild(newComment);

    if (inputName.value === "") {
        alert("Поле ввода не должно быть пустым");
      } else if (inputComment.value === "") {
        alert("Поле ввода не должно быть пустым");
    }
});