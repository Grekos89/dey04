<script>
    'use strict'
    let login = prompt("Ваша должность" , "");
    let message = (login == 'Директор') ? 'Здравствуйте' :
    (login == 'Сотрудник') ? 'Привет' :
    (login == '') ? 'Нет логина';
    alert( messege );
</script>