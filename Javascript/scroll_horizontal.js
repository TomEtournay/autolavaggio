var scrollPosition = 0;
var isAnimatingScroll = false;

function handleScroll(event) {
  if (isAnimatingScroll) {
    return;
  }

  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (scrollPosition < 0) {
    scrollPosition = 0;
  }

  if (scrollPosition > windowWidth * 6) {
    scrollPosition = windowWidth * 6;
  }

  if (windowWidth > 768) {
    var liensHome = document.querySelectorAll('a[href="#home"], a[href="index.html#home"]');
    var liensStation = document.querySelectorAll('a[href="#station"], a[href="index.html#station"]');
    var liensPaiement = document.querySelectorAll('a[href="#paiement"], a[href="index.html#paiement"]');
    var liensService = document.querySelectorAll('a[href="#service"], a[href="index.html#service"]');
    var liensTemoignage = document.querySelectorAll('a[href="#temoignage"], a[href="index.html#temoignage"]');
    var liensContact = document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]');

    liensHome.forEach(function (lien) {
      lien.onclick = function () {
        scrollPosition = 0;
      };
    });

    liensStation.forEach(function (lien) {
      lien.onclick = function () {
        scrollPosition = windowWidth;
      };
    });

    liensPaiement.forEach(function (lien) {
      lien.onclick = function () {
        scrollPosition = windowWidth * 2;
      };
    });

    liensService.forEach(function (lien) {
      lien.onclick = function () {
        scrollPosition = windowWidth * 3;
      };
    });

    liensTemoignage.forEach(function (lien) {
      lien.onclick = function () {
        scrollPosition = windowWidth * 4;
      };
    });

    liensContact.forEach(function (lien) {
      lien.onclick = function () {
        scrollPosition = windowWidth * 5;
      };
    });

    if (event.deltaY < 0) {
      scrollPosition -= windowWidth;
    } else {
      scrollPosition += windowWidth;
    }

    isAnimatingScroll = true;

    window.scrollTo({
      left: scrollPosition,
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(function () {
      isAnimatingScroll = false;
    }, 1000);
  } else {
    const html = document.querySelector("html");
    html.style.overflow = "scroll";

    const style = document.createElement('style');
    style.innerHTML = `
      body::-webkit-scrollbar {
        display : none;
      }
    `;

    document.head.appendChild(style);
  }
}

window.addEventListener('wheel', handleScroll);
