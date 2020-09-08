<script>
    let name = prompt("Ваш статус?" , ' ');
    if ( name == 'Админ') {
        let pass = prompt('Пароль?', '');
        if (pass == 'Я главный') {
            alert( 'Здравствуйте');
        } else if (pass == '' || pass == null) {
            alert('Отменено');
        } else {
            alert('Неверный пароль');
        }
    } else if (name == '' || name == null) {
        alert('Я вас не знаю') ;
    } else {
        alert('Отменено');
    }

     
</script>