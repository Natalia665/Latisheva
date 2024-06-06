document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginBtn = loginModal.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');
    const developerBtn = document.getElementById('developer-btn');
    const developerModal = document.getElementById('developer-modal');
    const closeDeveloperBtn = developerModal.querySelector('.close-btn');
    const clearDataBtn = document.getElementById('clear-data-btn');
    const userDataDiv = document.getElementById('user-data');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    function saveLoginData(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({username, password});
        localStorage.setItem('users', JSON.stringify(users));
        alert('Данные успешно сохранены');
        closeModal(loginModal);
    }

    function displayUserData() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        userDataDiv.innerHTML = ''; // Clear previous data
        if (users.length > 0) {
            users.forEach(user => {
                const div = document.createElement('div');
                div.textContent = `Логин: ${user.username}, Пароль: ${user.password}`;
                userDataDiv.appendChild(div);
            });
        } else {
            userDataDiv.textContent = 'Данные отсутствуют';
        }
    }

    function clearUserData() {
        localStorage.removeItem('users');
        displayUserData();
        alert('Данные удалены');
    }

    loginBtn.addEventListener('click', () => openModal(loginModal));
    closeLoginBtn.addEventListener('click', () => closeModal(loginModal));
    loginForm.addEventListener('submit', saveLoginData);

    developerBtn.addEventListener('click', () => {
        openModal(developerModal);
        displayUserData();
    });
    closeDeveloperBtn.addEventListener('click', () => closeModal(developerModal));
    clearDataBtn.addEventListener('click', clearUserData);

    window.addEventListener('click', function (event) {
        if (event.target === loginModal) {
            closeModal(loginModal);
        }
        if (event.target === developerModal) {
            closeModal(developerModal);
        }
    });
});

document.getElementById('foodOfTheDay').addEventListener('click', () => {
const dishes = [
{
title: 'Салат с киноа и овощами',
recipe: 'Ингредиенты: киноа, авокадо, помидоры, огурец, лимонный сок, оливковое масло, соль, перец. Способ приготовления: сварите киноа, нарежьте овощи, смешайте все ингредиенты и заправьте. Салат с киноа и овощами готовится быстро и легко. Отварите киноа согласно инструкции на упаковке. Пока киноа варится, нарежьте любимые овощи, например, помидоры, огурцы, лук и болгарский перец. Слейте воду с киноа и дайте ей остыть. В большой миске смешайте киноа, нарезанные овощи, консервированную кукурузу или горошек и заправку по вкусу (например, винегрет или соус на основе йогурта). Для дополнительного вкуса можно добавить к салату сыр фета, жареный тофу или орехи.',
image: 'https://images.ctfassets.net/0yf82hjfqumz/2fgCvoJ1B6OOsM8WqU2i0q/b1bf0ba144c3053b1dabe477a9d367df/66b319fc-fc7d-544c-9a8d-d076861af7ea.jpg'  // Убедитесь в корректности URL
},
{
title: 'Запеченная куриная грудка с овощами',
recipe: 'Ингредиенты: куриная грудка, брокколи, морковь, соль, перец, оливковое масло. Способ приготовления: смажьте грудку и овощи оливковым маслом, приправьте и запекайте в духовке при 180°C в течение 25-30 минут. Запеченную куриную грудку с овощами приготовить очень просто. Разогрейте духовку до 200 градусов, выстелите противень пергаментом и положите на него куриную грудку. В миске смешайте брокколи, морковь и цветную капусту, сбрызните их оливковым маслом, посолите и поперчите. Выложите овощи вокруг курицы на противне и запекайте 20-25 минут или пока курица не станет золотистой, а овощи мягкими. Подавайте с вашим любимым соусом или приправой.',
image: 'https://cook-dream.ru/wp-content/uploads/2020/04/kurinaja-grudka-na-skovorode-s-ovoshhami-2-scaled.jpg'  // Убедитесь в корректности URL
},
{
title: 'Овсяная каша с ягодами',
recipe: 'Ингредиенты: овсяные хлопья, молоко или вода, свежие ягоды, мед. Способ приготовления: сварите овсянку на молоке или воде, добавьте ягоды и мед по вкусу. Овсяная каша с ягодами - это питательный и вкусный завтрак, который готовится всего за несколько минут. В небольшой кастрюле смешайте овсяные хлопья, молоко (или воду) и ягоды (свежие или замороженные). Доведите до кипения, затем уменьшите огонь и варите, помешивая, в течение 5-7 минут, или пока каша не загустеет. Снимите кастрюлю с огня и накройте крышкой. Дайте постоять в течение 2-3 минут, чтобы овсянка впитала оставшуюся жидкость. Перед подачей можно добавить дополнительные ягоды, орехи, семена или подсластитель по вкусу.',
image: 'https://mykaleidoscope.ru/x/uploads/posts/2023-12/1703209423_mykaleidoscope-ru-p-ovsyanaya-kasha-s-izyumom-instagram-78.jpg'  // Убедитесь в корректности URL
}
                // Добавьте больше блюд по вашему желанию
];

const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
document.getElementById('foodTitle').innerText = randomDish.title;
document.getElementById('foodRecipe').innerText = randomDish.recipe;
document.getElementById('foodImage').src = randomDish.image;
document.getElementById('foodImage').alt = randomDish.title;
document.getElementById('recipeContainer').style.display = 'block';
});