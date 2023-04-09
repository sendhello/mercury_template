# Пример проекта на основе FabCMS

FabCMS представляет собой тиражируемую систему управления сайтом. 
Сайты создаются по примеру проекта-образца.

## Запуск демо-проекта

1. Создать виртуальное окружение Python 3*:

        $ python3 -m venv venv
        
    и активировать его:
 
        $ source venv/bin/activate

2. Установить Python-зависимости:

        $ pip install -r requirements.txt
        
3. Установить Node.js последней [стабильной версии](https://nodejs.org/en/download/package-manager/)*.

4. Установить зависимости Node.js:
        
        $ npm install

5. Собрать фронтенд:

        $ grunt
        
6. Применить миграции:

        $ python manage.py migrate

7. Запустить dev-сервер Django:

        $ python manage.py runserver



## Создание производного проекта

1. Использовать `django-fabcms-project` в качестве скелета.
   
2. Интегрировать шаблоны из `project_core/static/project_core`.

3. Собрать фронтенд:
        
        $ grunt

4. Наполнить проект актуальным контентом.

5. Создать дамп данных, внесенных в БД. Использовать команду:

        $ python manage.py dumpdata -e auth -e contenttypes -e admin > db.json
    
6. Развернуть сайт на сервере с использованием инструмента `fabcms-deploy`.

7. На сервер скопировать содержимое локальной директории `media` и файл `db.json`.

8. Создать учетную запись администратора:

        $ python manage.py createsuperuser

9. Загрузить дамп данных в БД продакшен-окружения:

        $ python manage.py loaddata db.json


\* Проект-образец тестировался в окружении Python 3.5.3 и Node.js v.9.11.2.