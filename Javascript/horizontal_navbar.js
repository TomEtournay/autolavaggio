
window.addEventListener('scroll', function() {
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
   
    const station = document.getElementById('p1');
    const paiement = document.querySelector('#p2');
    const service = document.querySelector('#p3');
    const temoignage = document.querySelector('#p4');
    const contact = document.querySelector('#p5'); 

    
    if (scrollLeft >= 1920) {
        station.classList.remove("green_p")
        paiement.classList.add("green_p")
    } else {
        station.classList.add("green_p")
        paiement.classList.remove("green_p")

    }

    if (scrollLeft >= 3200) {
        paiement.classList.remove("green_p")
        service.classList.add("green_p")
    } else {
        service.classList.remove("green_p")

    }

    if (scrollLeft >= 4480) {
        service.classList.remove("green_p")
        temoignage.classList.add("green_p")
    } else {
        temoignage.classList.remove("green_p")
    }

    if (scrollLeft >= 5760) {
        temoignage.classList.remove("green_p")
        contact.classList.add("green_p")
    } else {
        contact.classList.remove("green_p")

    }

});