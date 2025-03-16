import { setToken, setName, registration } from "./api.js";
import { fetchAndRenderComments } from "./index.js";
import { renderLogin } from "./renderLogin.js";

export const renderRegistration = () => {
    const container = document.querySelector('.container');

    const loginHtml = `
    <section class="add-form">
        <h1 class="title-reg">Форма регистрации</h1>
        <div class="add-form-container">
            <input
                type="text"
                class="add-form-name margin"
                placeholder="Введите имя"
                id="name"
                required
            />
            <input
                type="text"
                class="add-form-name-login"
                placeholder="Введите логин"
                id="login"
                required
            />
            <input
                type="password"
                class="add-form-name-password"
                placeholder="Введите пароль"
                id="password"
                required
            />
        </div>
        <fieldset class="add-form-reg">
            <button class="add-form-button-reg">
                Зарегистрироваться
            </button>
            <u class="add-form-button-link entry">
                Войти
            </u>
        </fieldset>
    </section>
    `;

    container.innerHTML = loginHtml;

    document.querySelector('.entry').addEventListener('click', () => {
        renderLogin()
    })

    const nameEl = document.querySelector('#name');  
    const loginEl = document.querySelector('#login');    
    const passwordEl = document.querySelector('#password'); 
    const submitButtonEl = document.querySelector('.add-form-button-reg'); 

    submitButtonEl.addEventListener('click', (event) => {
        event.preventDefault(); 

        if (!nameEl.value.trim() || !loginEl.value.trim() || !passwordEl.value.trim()) {
            alert("Введите имя, логин и пароль!");
            return;
        }

        registration(nameEl.value, loginEl.value, passwordEl.value)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка авторизации");
                }
                return response.json();
            })
            .then((data) => {
                setToken(data.user.token);
                setName(data.user.name);
                fetchAndRenderComments();
            })
            .catch((error) => {
                alert(error.message);
            });
    });
};