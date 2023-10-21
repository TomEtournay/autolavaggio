
const coulissant = document.querySelector(".coulissant")

var trans = 0;
var nb = 0;

const transgauche = () =>{
    if (nb === 4){
        coulissant.style.transition = 'none'
        trans = 0;
        nb = 0;
        coulissant.style.transform = 'translateX(16.666666666666%)'
        console.log("valeur transition", trans)

        setTimeout(() => {
            coulissant.style.transform = `translateX(-${trans}%)`;
        }, 0.00000000000000001); // Mettez le délai souhaité en millisecondes (ici, 100ms)
        
    } else {
        
        trans = trans + 20;
        coulissant.style.transform = `translateX(-${trans}%)`;
        nb = nb + 1;
    }

}



const transdroite = () =>{
    if (nb === 0){
        coulissant.style.transition = 'none'
        trans = -80;
        nb = 5;
        coulissant.style.transform = 'translateX(-80%)'
        console.log("valeur transition droite", trans)

        setTimeout(() => {
            coulissant.style.transform = `translateX(${trans}%)`;
            nb = nb - 1;
            console.log("valeur transition", trans)
        }, 0.00000000000000001); // Mettez le délai souhaité en millisecondes (ici, 100ms)
        
    } else {
        
        trans = trans + 20;
        coulissant.style.transform = `translateX(${trans}%)`;
        nb = nb - 1;
        console.log("valeur transition droite", trans)
    }

}
