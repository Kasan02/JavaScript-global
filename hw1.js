const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener('click', function () {

  const title = document.querySelector("add-form-name");
  const text = document.querySelector("add-form-text");
 
  title.classList.remove("error");
  text.classList.remove("error");

  if (title.value === "") {
    title.classList.add("error");
    return
  } else if (text.value === "") {
    text.classList.add("error");
    return
  }

  const timeDate = new Date().toLocaleDateString();

  const oldHtml = list.innerHTML;
  console.log(oldHtml);
  list.innerHTML = oldHtml + `<li class="comment" id="comment">
                <div class="comment-header">
                    <div>${title}</div>
                    <div>${timeDate}</div>
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

            name.value = "";
            text.value = "";
});