# context_api__authentication

Реализована система с ауентификацией

1. При первой загрузке показывается Landing-страница с формой входа:

![f](https://github.com/netology-code/ra16-homeworks/raw/Toolkit/hooks-context/authentication/assets/unauthenticated.png)

2. После авторизации (POST http://localhost:7070/auth ```{"login": "vasya", "password": "password"}```), загружаются компонент ленты новостей и в тулбаре отображается профиль с кнопкой выйти:

![f](https://github.com/netology-code/ra16-homeworks/raw/Toolkit/hooks-context/authentication/assets/authenticated.png)
