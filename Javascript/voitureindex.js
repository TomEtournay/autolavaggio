import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, model;
let initialPosition, initialRotation, initialScale;

function init() {
  const container = document.getElementById('myThreeJsScene');
  const rect = container.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5); // Mettez la caméra à une position appropriée pour voir le modèle correctement

  renderer.setClearColor(0xffffff);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Réduisez l'intensité de la lumière ambiante
  scene.add(ambientLight);
}

function loadModel() {
  const loader = new GLTFLoader();

  const startTime = performance.now();

  loader.load('images/cicada_-_retro_cartoon_car.glb', function (gltf) { // Utilisez le format glTF binaire
    const endTime = performance.now();
    const loadingTime = endTime - startTime;
    console.log('Temps de chargement : ' + loadingTime + ' ms');

    model = gltf.scene;

    initialScale = new THREE.Vector3(1.1, 1.1, 1.1);
    initialRotation = new THREE.Euler(THREE.MathUtils.degToRad(1), THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(0), 'XYZ');
    initialPosition = new THREE.Vector3(2, -0.4, 0);

    model.scale.copy(initialScale);
    model.rotation.copy(initialRotation);
    model.position.copy(initialPosition);

    scene.add(model);


  }, undefined, function (error) {
    console.error(error);
  });
}
























function updatePosition(scrollValue) {


  let position = new THREE.Vector3();
  position.copy(initialPosition);

  // Calculer le décalage du défilement à partir de 100 et ignorer les valeurs négatives
  const scrollOffset = Math.max(scrollValue, 0);

  if (scrollOffset >= 0 && scrollOffset <= 344.53125) {
    const finalPositionX = 0;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
    const startScroll = 0;
    const endScroll = 344.53125;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    position.x = THREE.MathUtils.lerp(position.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(position.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(position.z, finalPositionZ, positionInterpolationFactor);
  
  } else if (scrollOffset >= 344.53125 && scrollOffset <= 1470) {
    const finalPositionX = 0;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
  
    position.x = finalPositionX;
    position.y = finalPositionY;
    position.z = finalPositionZ;
  
  } else if (scrollOffset >= 1470 && scrollOffset <= 2205) {
    const finalPositionX = 10;
    const finalPositionY = -7.95;
    const finalPositionZ = 0;
    const startScroll = 1470;
    const endScroll = 2205;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(0, -1.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);

  } else if (scrollOffset >= 2205 && scrollOffset <= 2871.09375) {
    const finalPositionX = 0;
    const finalPositionY = -5.95;
    const finalPositionZ = 0;
    const startScroll = 2205;
    const endScroll = 2871.09375;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(10, -5.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  } else if (scrollOffset >= 2871.09375 && scrollOffset <= 2940) {
    const finalPositionX = 0;
    const finalPositionY = 0;
    const finalPositionZ = 0;
    const startScroll = 2871.09375;
    const endScroll = 2940;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(0, -2.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  } else if (scrollOffset >= 2940 && scrollOffset <= 3008.90625) {
    const finalPositionX = 0;
    const finalPositionY = -5.95;
    const finalPositionZ = 0;
    const startScroll = 2940;
    const endScroll = 3054.84375;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(0, 0, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);

  } else if (scrollOffset >= 3008.90625 && scrollOffset <= 4295.15625) {

    const finalPositionX = 0;
    const finalPositionY = -5.95;
    const finalPositionZ = 0;
  
    position.x = finalPositionX;
    position.y = finalPositionY;
    position.z = finalPositionZ;

  } else if (scrollOffset >= 4295.15625 && scrollOffset <= 4410) {
    const finalPositionX = 0;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
    const startScroll = 4295.15625;
    const endScroll = 4410;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(-6, -1.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  } else if (scrollOffset >= 4410 && scrollOffset <= 5627.34375) {

    const finalPositionX = 0;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
  
    position.x = finalPositionX;
    position.y = finalPositionY;
    position.z = finalPositionZ;

  } else if (scrollOffset >= 5627.34375 && scrollOffset <= 5880) {
    const finalPositionX = -2;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
    const startScroll = 5627.34375;
    const endScroll = 5880;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(0, -1.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  } else if (scrollOffset >= 5880 && scrollOffset <= 5994.84375) {

    const finalPositionX = -2.7;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
    const startScroll = 5880;
    const endScroll = 5994.84375;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(-2, -1.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  } else if (scrollOffset >= 5994.84375 && scrollOffset <= 7350) {

    const finalPositionX = 0;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
    const startScroll = 5994.84375;
    const endScroll = 7350;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(-2.7, -1.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  } else if (scrollOffset >= 7350 && scrollOffset <= 8820) {

    const finalPositionX = -8;
    const finalPositionY = -1.95;
    const finalPositionZ = 0;
    const startScroll = 7350;
    const endScroll = 8820;
  
    const positionInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    // Utiliser la position finale du premier intervalle comme point de départ
    const startPosition = new THREE.Vector3(0, -1.95, 0);
  
    position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
    position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
    position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
  }


  

  model.position.copy(position);
}




// Obtenez la hauteur totale de la page
const pageWidths = document.documentElement.scrollWidpageWidth - window.innerWidpageWidth;

// Obtenez la position actuelle de défilement
const scrollOffsets = window.scrollX;

// Convertissez la position de défilement en un pourcentage
var scrollPercentage = (scrollOffsets / pageWidths) * 100;






// Écouteur d'événement pour la touche de flèche gauche
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
      // Obtenez la largeur totale de la page
      const pageWidth = document.documentElement.scrollWidth - window.innerWidth;
      
      // Calcul du défilement de 10% vers la gauche
      const scrollAmount = -0.05 * pageWidth; // Notez le signe négatif
      
      // Faites défiler horizontalement
      window.scrollBy(scrollAmount, 0);

      console.log(scrollPercentage)

  }
});


// Écouteur d'événement pour la touche de flèche droite
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
      // Obtenez la largeur totale de la page
      const pageWidth = document.documentElement.scrollWidth - window.innerWidth;
      
      // Calcul du défilement de 10% vers la droite
      const scrollAmount = 0.05 * pageWidth;
      
      // Faites défiler horizontalement
      window.scrollBy(scrollAmount, 0);

      console.log(scrollPercentage)
  }
});


// Attendez que le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Obtenez une référence à l'élément <body>
  const bodyElement = document.body;

  // Affichez la largeur du <body>
  console.log('Largeur du body:', bodyElement.offsetWidth, 'pixels');
});










function updateRotation(scrollValue) {

  let rotation = new THREE.Euler();
  rotation.order = 'XYZ'; // Spécifiez ici l'ordre de rotation

  rotation.copy(initialRotation);

  // Calculer le décalage du défilement à partir de 100 et ignorer les valeurs négatives
  const scrollOffset = Math.max(scrollValue, 0);

  if (scrollOffset >= 0 && scrollOffset <= 344.53125 && orientationdroite === true) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScroll = 0;
    const endScroll = 344.53125;
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(rotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(rotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(rotation.z, finalRotationZ, rotationInterpolationFactor);
  
  } else if (scrollOffset >= 344.53125 && scrollOffset <= 1470 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;
  
  } else if (scrollOffset >= 1470 && scrollOffset <= 2205 && orientationdroite === true) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(-10);
    const startScroll = 2205;
    const endScroll = 2940;

    

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffset >= 2205 && scrollOffset <= 2206.148438 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(-90);
    const finalRotationY = THREE.MathUtils.degToRad(-90);
    const finalRotationZ = THREE.MathUtils.degToRad(180);
    const startScroll = 2205;
    const endScroll = 2206.148438;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 2206.148438 && scrollOffset <= 2940 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(-90);
    const finalRotationY = THREE.MathUtils.degToRad(-90);
    const finalRotationZ = THREE.MathUtils.degToRad(180);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;
  } else if (scrollOffset >= 2940 && scrollOffset <= 4295.15625 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(-10);
    const finalRotationY = THREE.MathUtils.degToRad(-90);
    const finalRotationZ = THREE.MathUtils.degToRad(180);
    const startScroll = 2940;
    const endScroll = 4295.15625;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(180));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 4295.15625 && scrollOffset <= 5742.1875 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;

  } else if (scrollOffset >= 5742.1875 && scrollOffset <= 5880 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(-10);
    const finalRotationY = THREE.MathUtils.degToRad(160);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScroll = 2940;
    const endScroll = 4295.15625;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 5880 && scrollOffset <= 5994.84375 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(-10);
    const finalRotationY = THREE.MathUtils.degToRad(160);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;

  } else if (scrollOffset >= 5994.84375 && scrollOffset <= 6109.6875 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScroll = 5994.84375;
    const endScroll = 6109.6875;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(160), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 6109.6875 && scrollOffset <= 6300 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;

  } else if (scrollOffset >= 6300 && scrollOffset <= 7350 && orientationdroite === true) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(90);
    const finalRotationZ = THREE.MathUtils.degToRad(-20);
    const startScroll = 6300;
    const endScroll = 7350;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  
  } else if (scrollOffset >= 7350 && scrollOffset <= 8820 && orientationdroite === true) {
    const finalRotationX = THREE.MathUtils.degToRad(25);
    const finalRotationY = THREE.MathUtils.degToRad(130);
    const finalRotationZ = THREE.MathUtils.degToRad(-20);
    const startScroll = 7350;
    const endScroll = 8820;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(-20));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } if (scrollOffset >= 0 && scrollOffset <= 344.53125 && orientationdroite === false) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScroll = 0;
    const endScroll = 344.53125;
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(rotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(rotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(rotation.z, finalRotationZ, rotationInterpolationFactor);
  
  } else if (scrollOffset >= 344.53125 && scrollOffset <= 1470 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(0);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;
  
  } else if (scrollOffset >= 1470 && scrollOffset <= 2205 && orientationdroite === false) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(0);
    const finalRotationZ = THREE.MathUtils.degToRad(-10);
    const startScroll = 2205;
    const endScroll = 2940;

    

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffset >= 2205 && scrollOffset <= 2206.148438 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(-90);
    const finalRotationY = THREE.MathUtils.degToRad(-90);
    const finalRotationZ = THREE.MathUtils.degToRad(180);
    const startScroll = 2205;
    const endScroll = 2206.148438;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 2206.148438 && scrollOffset <= 2940 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(-90);
    const finalRotationY = THREE.MathUtils.degToRad(-90);
    const finalRotationZ = THREE.MathUtils.degToRad(180);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;
  } else if (scrollOffset >= 2940 && scrollOffset <= 4295.15625 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(-10);
    const finalRotationY = THREE.MathUtils.degToRad(-90);
    const finalRotationZ = THREE.MathUtils.degToRad(180);
    const startScroll = 2940;
    const endScroll = 4295.15625;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(180));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 4295.15625 && scrollOffset <= 5742.1875 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(0);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;

  } else if (scrollOffset >= 5742.1875 && scrollOffset <= 5880 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(-10);
    const finalRotationY = THREE.MathUtils.degToRad(160);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScroll = 2940;
    const endScroll = 4295.15625;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 5880 && scrollOffset <= 5994.84375 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(-10);
    const finalRotationY = THREE.MathUtils.degToRad(160);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;

  } else if (scrollOffset >= 5994.84375 && scrollOffset <= 6109.6875 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(0);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScroll = 5994.84375;
    const endScroll = 6109.6875;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(160), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);

  } else if (scrollOffset >= 6109.6875 && scrollOffset <= 6300 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(0);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
  
    rotation.x = finalRotationX;
    rotation.y = finalRotationY;
    rotation.z = finalRotationZ;

  } else if (scrollOffset >= 6300 && scrollOffset <= 7350 && orientationdroite === false) {

    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(90);
    const finalRotationZ = THREE.MathUtils.degToRad(-20);
    const startScroll = 6300;
    const endScroll = 7350;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  
  } else if (scrollOffset >= 7350 && scrollOffset <= 8820 && orientationdroite === false) {
    const finalRotationX = THREE.MathUtils.degToRad(25);
    const finalRotationY = THREE.MathUtils.degToRad(130);
    const finalRotationZ = THREE.MathUtils.degToRad(-20);
    const startScroll = 7350;
    const endScroll = 8820;

    const startRotation = new THREE.Vector3(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(-20));
  
    const rotationInterpolationFactor = Math.min((scrollOffset - startScroll) / (endScroll - startScroll), 1);
  
    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  }
  
  model.rotation.copy(rotation);
}














function updateScale(scrollValue) {
  // Échelle finale souhaitée
  const finalScaleX = 1.1;
  const finalScaleY = 1.1;
  const finalScaleZ = 1.1;

  let scale = new THREE.Vector3();
  scale.copy(initialScale);

  // Calculer le décalage du défilement à partir de 100 et ignorer les valeurs négatives
  const scrollOffset = Math.max(scrollValue, 0);

  // Calculer une valeur d'interpolation pour chaque composante en fonction du décalage de défilement
  const scaleInterpolationFactor = Math.min(scrollOffset * 0.001, 1);

  // Interpoler les valeurs actuelles vers les valeurs finales
  scale.x = THREE.MathUtils.lerp(scale.x, finalScaleX, scaleInterpolationFactor);
  scale.y = THREE.MathUtils.lerp(scale.y, finalScaleY, scaleInterpolationFactor);
  scale.z = THREE.MathUtils.lerp(scale.z, finalScaleZ, scaleInterpolationFactor);

  model.scale.copy(scale);
}

function updateObject(scrollValue) {
  updatePosition(scrollValue);
  updateRotation(scrollValue);
  updateScale(scrollValue);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
loadModel();

camera.position.z = 3;

window.addEventListener('scroll', function () {
  let scrollValue = window.pageXOffset;
  updateObject(scrollValue)
});

animate();






var orientationdroite = false;

// Fonction de détection du scroll
function detecterScroll() {
  var scrollPrecedent = window.pageXOffset || document.documentElement.scrollLeft;
  
  window.onscroll = function() {
    var scrollActuel = window.pageXOffset || document.documentElement.scrollLeft;
    
    if (scrollActuel > scrollPrecedent) {
      orientationdroite = true;
    } else if (scrollActuel < scrollPrecedent) {
      orientationdroite = false
    }
    
    scrollPrecedent = scrollActuel;
  };
}

window.addEventListener("scroll", detecterScroll())








// Obtient la largeur de l'écran
var largeurEcran = window.innerWidth;

// Obtient la hauteur de l'écran
var hauteurEcran = window.innerHeight;

// Affiche la largeur et la hauteur dans la console
console.log("Largeur de l'écran : " + largeurEcran);
console.log("Hauteur de l'écran : " + hauteurEcran);
