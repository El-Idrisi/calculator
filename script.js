display = document.querySelector('input[name="display"]');
tombols = document.querySelectorAll('.tombol span')

// console.log(tombols)

document.addEventListener("keyup", function (e) {
    console.log(e.key + " = " + e.keyCode);
    if (e.key >= '0' && e.key <= '9') {
        display.value += e.key;
    }

    if (e.key == '+') {
        display.value += '+';
    }

    if (e.key == '-') {
        display.value += '-';
    }

    if (e.key == '*') {
        display.value += '*';
    }

    if (e.key == '/') {
        display.value += '/';
    }

    if (e.key == '.') {
        display.value += '.';
    }

    if (e.key == 'Delete') {
        display.value = '';
    }

    if (e.key == 'Backspace') {
        display.value = display.value.toString().slice(0, -1);
    }

    if (e.key == 'Enter') {
        display.value = eval(display.value)
    }
});

tombols.forEach(tombol => {
    tombol.addEventListener('click', function (e) {
        if (tombol.textContent >= 0 && tombol.textContent <= 9) {
            display.value += tombol.textContent
        }

        if (tombol.textContent == 'C') {
            display.value = ''
        }

        if (tombol.textContent == '.') {
            display.value += '.'
        }

        if (tombol.textContent == '/') {
            display.value += '/'
        }

        if (tombol.textContent == '*') {
            display.value += '*'
        }

        if (tombol.textContent == '-') {
            display.value += '-'
        }

        if (tombol.textContent == '+') {
            display.value += '+'
        }

        if (tombol.getAttribute('data-value') == "delete") {
            display.value = display.value.toString().slice(0, -1)
        }

        if (tombol.textContent == '=') {
            display.value = eval(display.value)
        }

    })
});



feather.replace();