var scrollPosition = 0;

// Fonction pour gérer l'événement de défilement
function handleScroll(event) {
  // Obtenez la largeur de l'écran
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if(scrollPosition < 0){
    scrollPosition = 0;
  }

  // if(scrollPosition > (windowHeight*6)){
  //   scrollPosition = windowHeight*6;
  // }


  


  // Vérifiez si la largeur de la fenêtre est supérieure à 768px
  if (windowWidth > 768) {
    // Votre code ici...

    // Vérifiez si l'utilisateur fait défiler vers le haut ou vers le bas
    if (event.deltaY < 0) {
      // Faites défiler vers l'arrière en soustrayant la largeur de l'écran
      scrollPosition -= windowHeight;
    } else {
      // Faites défiler vers l'avant en ajoutant la largeur de l'écran
      scrollPosition += windowHeight;
    }

    // Définissez la nouvelle position de défilement avec l'effet de défilement fluide
    window.scrollTo({
      left: 0,
      top: scrollPosition,
      behavior: 'smooth'
    });
  } else {
    const html = document.querySelector("html")
    html.style.overflow = "scroll"

    const style = document.createElement('style');
    style.innerHTML = `
      body::-webkit-scrollbar {
        display : none;
      }
    `;

    document.head.appendChild(style);

  }
}

// Ajoutez un écouteur d'événements pour le défilement
window.addEventListener('wheel', handleScroll);
