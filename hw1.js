const inputName = document.getElementById("name");
const inputComment = document.getElementById("text");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener('click', function () {

  inputName.classList.remove("error");
  inputComment.classList.remove("error");

  if (inputName.value === "") {
    inputName.classList.add("error");
    return
  } else if (inputComment.value === "") {
    inputComment.classList.add("error");
    return
  }
  
  const newComment = document.createElement('li');
  newComment.innerHTML = `${inputName.value}, ${inputComment.value}, ${new Date().toLocaleString()}`;

  inputName.value = "";
  inputComment.value = "";
  list.appendChild(newComment);

newComment.classList.add("comment");
  newComment.classList.add("comment-header");
  newComment.classList.add("comment-body");
  newComment.classList.add("comment-footer");
  newComment.classList.add("coments");
  newComment.classList.add("comment-text");
  newComment.classList.add("likes");
  newComment.classList.add("likes-counter");
  newComment.classList.add("add-form");
  newComment.classList.add("height");
  newComment.classList.add("like-button");

  const renderHtml = list.innerHTML;
  console.log(renderHtml);
  list.innerHTML = renderHtml + `<li>${newComment.value}</li>`;
});