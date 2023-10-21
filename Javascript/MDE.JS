// var isVerticalScroll = false;


// window.addEventListener('wheel', function(e) {
//     e.preventDefault();

//     var delta = e.deltaY || e.detail || e.wheelDelta;

//     if (isVerticalScroll) {
//         // Déplacer verticalement
//         window.scrollBy(0, delta);
//     } else {
//         // Déplacer horizontalement
//         window.scrollBy(delta, 0);
//     }
// });

// window.addEventListener('scroll', function(event) {
//     var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//     const home = document.querySelector(".home_lamontagne");
//     const footer = document.querySelector("#footer");
//     const body = document.querySelector("#haute_pression");
//     const ttt = body.querySelector("#footer")


//     if (isVerticalScroll) {
//         if (scrollTop <= 0) {
//             isVerticalScroll = false;
//         } else if (scrollTop >= 5100 && scrollLeft >= 1280) {
//             isVerticalScroll = false;
//             footer.style.display = "flex";
//             footer.style.height = "780%";
//             footer.style.justifyContent = "flex-end";
//             body.style.width = "300%";
//         } else {
//             footer.style.display = "none";
//             body.style.width = "200%";
//         }

//     } else {
//         if (scrollLeft >= 1280 && scrollTop >= 0 && scrollTop <= 5100) {
//             isVerticalScroll = true;
//         } else if (scrollLeft < 1281 && scrollTop >= 5100) {
//             isVerticalScroll = true;
//             window.scrollTo(1280, scrollTop);
//             event.preventDefault(); // Bloquer le défilement supplémentaire
//         } 
//     }
// });
















// function hideLoadingScreen() {
//     const loadingScreen = document.getElementById('loadingScreen');
//     loadingScreen.style.opacity = '0';
//     loadingScreen.style.pointerEvents = 'none';
//   }



// var anchorLink = document.querySelector('.ttt'); // Remplacez ".anchor-link" par le sélecteur approprié pour votre élément ancré

// var isHorizontalScroll = true;

// anchorLink.addEventListener('click', function(event) {
//   event.preventDefault(); // Empêche le comportement de clic par défaut

//   if (isHorizontalScroll) {
//     window.scrollTo({
//       top: window.pageYOffset,
//       left: 1280,
//       behavior: 'smooth' // Défilement horizontal fluide
//     });

//     isHorizontalScroll = false;
//   } else {
//     var targetId = anchorLink.getAttribute('href'); // Obtient l'ID de l'ancre cible
//     var targetElement = document.querySelector(targetId); // Récupère l'élément ancré cible

//     if (targetElement) {
//       var offsetTop = targetElement.offsetTop; // Position verticale de l'élément ancré

//       window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth' // Défilement vertical fluide
//       });
//     }
//   }
// });



// responsive 

const burger = () => {
    const burger = document.querySelector("#burger")
    const cross = document.querySelector("#cross")
    const menu_text = document.querySelector("#home_menu")
    const container_burger_menu = document.querySelector(".hamburger_container")

    cross.style.opacity = "1"
    burger.style.opacity = "0"
    burger.style.zIndex = "-1"
    container_burger_menu.style.transform = "translateX(0%)"


}

const cross = () => {
    const burger = document.querySelector("#burger")
    const cross = document.querySelector("#cross")
    const menu_text = document.querySelector("#home_menu")
    const container_burger_menu = document.querySelector(".hamburger_container")

    cross.style.opacity = "0"
    burger.style.opacity = "1"
    burger.style.zIndex = "1"
    container_burger_menu.style.transform = "translateX(100%)"
}

window.addEventListener("scroll", cross);