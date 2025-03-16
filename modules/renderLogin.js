import { login, setToken, setName } from "./api.js";
import { fetchAndRenderComments } from "./index.js";
import { renderRegistration } from "./renderRegistration.js";

export const renderLogin = () => {
    const container = document.querySelector('.container');

    const loginHtml = `
    <section class="add-form">
        <h1 class="title-reg">Форма входа</h1>
        <div class="add-form-container">
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
                Войти
            </button>
            <u class="add-form-button-link registry">
                Зарегистрироваться
            </u>
        </fieldset>
    </section>
    `;

    container.innerHTML = loginHtml;

    document.querySelector('.registry').addEventListener('click', () => {
        renderRegistration()
    })

    const loginEl = document.querySelector('#login');    
    const passwordEl = document.querySelector('#password'); 
    const submitButtonEl = document.querySelector('.add-form-button-reg'); 

    submitButtonEl.addEventListener('click', (event) => {
        event.preventDefault();

        if (!loginEl.value.trim() || !passwordEl.value.trim()) {
            alert("Введите логин и пароль!");
            return;
        }

        login(loginEl.value, passwordEl.value)
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