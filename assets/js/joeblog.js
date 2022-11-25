/*!
=========================================================
* JoeBlog Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.getElementById("sea").addEventListener("click", sumar);
let contador = 0;
function sumar(){
    const cls = [
        "background-image-2",
        "background-image-3",
        "background-image-4",
        "background-image-5",
        "background-image-6",
        "background-image-7",
        "background-image-8",
    ];
    document.querySelector(".screen").classList.remove(...cls);

    contador++;
    if(contador > cls.length){
        contador = 0;
    }
    console.log(contador, cls[contador])
    document.querySelector(".screen").classList.add(cls[contador - 1]);
}


document.getElementById("notification").addEventListener("click", modal);
let open = false
function modal(){
    const clases = [
        "show",
        "hide",
    ];
    document.querySelector(".container-phone").classList.remove(...clases);

    if(open){
        contador = 0;
        document.querySelector(".container-phone").classList.add("hide");
        open=false
    }else{
        document.querySelector(".container-phone").classList.add("show");
        open=true
    }
}