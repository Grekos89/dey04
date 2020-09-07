alert( null || 2 || undefined) // первое true 2
alert( alert(1) || 2 || alert(3) ) // первое undefined || 2 и выведет 2
alert( 1 && null && 2 ) // первое Folse null
alert( alert(1) && alert(2) ) // alert(1) будет  undefined и уго покажет
alert( null || 2 && 3 || 4 ) // два действия && выберит 3, затем первое правельное, и это тоже 3 