export const renderLogin = () => {
    const container = document.querySelector('.container')

    const loginHtml = `
    <section class="add-form">
    <h1 class="title-reg">Форма входа</h1>
    <div class add-form-container>
    <input
        type="text"
        class="add-form-name-login"
        placeholder="Введите логин"
        id="login"
        required
    />
    <input
        type="text"
        class="add-form-name-password"
        placeholder="Введите пароль"
        id="password"
        required
    />
    </div>
    <fieldset class="add-form-reg">
        <button class="add-form-button-reg" type="submit">
            Войти
        </button>
        <u class="add-form-button-link">
            Зарегистрироваться
        </u>
    </fieldset>
</section>
`

container.innerHTML = loginHtml
}