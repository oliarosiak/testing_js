{
    /**
     * Конспект 12/1 - ключове слово this
     */
    const mango = {
    username: "Mango",
        showUsername() {
            console.log('mango',this);
            console.log('this.mango', `My username is: ${this.username}`);
        },
    };

    const btn = document.querySelector(".js-btn");

    // ✅ Работает
    mango.showUsername();

    // ❌ this будет ссылаться на button если использовать showUsername как callback
    //btn.addEventListener("click", mango.showUsername); // не работает

    // ✅ Не забывайте привязывать контекст методов объекта
    btn.addEventListener("click", mango.showUsername.bind(mango));
}