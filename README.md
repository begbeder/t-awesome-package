Репозиторий для тестирования разработки и публикации приватных пакетов в npm регистре, на примере github packages

Подробнее в [документации](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

# Разработка

Основные требования к оформлению репозитория:
- Имя пакета должно содержать название в формате @owner/name
- Заполненное поле repository
- Заполненное поле main

# Публикация

Публикация пакета с использованием локального файла .npmrc
- Добавить файл .npmrc в репозиторий
- Добавить URL-адрес GitHub Packages: @OWNER:registry=https://npm.pkg.github.com
- Сгенерировать ключ доступа к github GITHUB_TOKEN c правами на чтение, запись и публикацию пакетов
- Добавить авторизацию в .npmrc //npm.pkg.github.com/:_authToken=TOKEN (!! не стоит фиксировать в гит реальный токен)
- Либо авторизоваться через консоль npm login --scope=@OWNER --registry=https://npm.pkg.github.com
- Опубликовать

    $ npm publish

# Установка

Установка в репозитории пакета с github:
- Авторизация на GitHub Packages (проще всего сгенерировать токен для чтения пакетов с гитхаб)
- Добавить файл .npmrc в репозиторий
- Добавить авторизацию в .npmrc //npm.pkg.github.com/:_authToken=TOKEN
- добавить URL-адрес GitHub Packages: @OWNER:registry=https://npm.pkg.github.com
- Установить целевую зависимость

    $ npm install package-name or package-name@version

