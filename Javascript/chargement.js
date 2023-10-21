window.onload = function() {
    setTimeout(function() {
      const svglogo = document.querySelector(".svg_logo");
      const lavaggio = document.querySelector(".lavaggio");
      const ut = document.querySelector(".ut");
  
      svglogo.style.transform = "translateX(29%)";
  
      setTimeout(function() {
        ut.style.width = "12.8%";
  
        setTimeout(function() {
          svglogo.style.transform = "translateX(0%)";
          lavaggio.style.width = "100%";
  
          setTimeout(function() {
            const loadingScreen = document.getElementById('loadingScreen');
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
          }, 1000);
  
        }, 500);
  
      }, 500);
  
      console.log("10 secondes après l'arrivée de l'utilisateur sur la page");
    }, 200);
  };
  