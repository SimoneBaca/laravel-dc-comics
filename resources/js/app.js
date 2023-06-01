import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

function popup() {
    console.log('booooh');
}

document.getElementById("delete_bttn").addEventListener("click", popup);
