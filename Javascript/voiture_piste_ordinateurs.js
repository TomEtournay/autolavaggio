import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Hauteur ancien mac supposée : 835


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
    initialPosition = new THREE.Vector3(8, -1.95, 0);

    model.scale.copy(initialScale);
    model.rotation.copy(initialRotation);
    model.position.copy(initialPosition);

    scene.add(model);


  }, undefined, function (error) {
    console.error(error);
  });
}












function updatePosition(scrollValueX, scrollValueY) {
  let position = new THREE.Vector3();
  position.copy(initialPosition);

  const screenWidth = window.innerWidth;
  const isLargeScreen = screenWidth >= 768;

  // Calculer le décalage du défilement horizontal à partir de 100 et ignorer les valeurs négatives
  const scrollOffsetX = Math.max(scrollValueX, 0);
  const scrollOffsetY = Math.max(scrollValueY, 0);


  const w1 = window.innerWidth;
  const h1 = window.innerHeight;

  if (isLargeScreen) {
    if (scrollOffsetY >= h1 * 0.609820359 && scrollOffsetY <= h1) { // la voiture arrive de la droite
      const finalPositionX = -1.5;
      const finalPositionY = -1.95;
      const finalPositionZ = 0;
      const startScrollY = h1*0.609820359;
      const endScrollY = h1;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(6, -1.95, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    }


    if (scrollOffsetY >= h1 && scrollOffsetY <= h1*2.437125749) { // la voiture descend vers conseil
      const finalPositionX = -1.5;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = h1;
      const endScrollY = h1*1.838323353;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -1.95, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);

    } else if (scrollOffsetY >= h1*2.437125749 && scrollOffsetY <= h1*2.916167665) {
      const finalPositionX = -3;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = h1*2.437125749;
      const endScrollY = h1*2.796407186;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*2.916167665 && scrollOffsetY <= h1*3.694610778) {
      const finalPositionX = -1.5;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = h1*2.916167665;
      const endScrollY = h1*3.275449102;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-3, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*3.694610778 && scrollOffsetY <= h1*4.652694611) {
      const finalPositionX = -1.5;
      const finalPositionY = -0;
      const finalPositionZ = 0;
      const startScrollY = h1*3.694610778;
      const endScrollY = h1*4.053892216;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*4.652694611 && scrollOffsetY <= h1*4.982035928) {
      const finalPositionX = -1.5;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = h1*4.652694611;
      const endScrollY = 3350 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -0, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*4.982035928 && scrollOffsetY <= 3700 + 835) {
      const finalPositionX = -2.5;
      const finalPositionY = -1.25;
      const finalPositionZ = 0;
      const startScrollY = h1*4.982035928;
      const endScrollY = 3700 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= 3700 + 835 && scrollOffsetY <= 5200 + 8350) {
      const finalPositionX = -1.5;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = 3700 + 835;
      const endScrollY = 4000 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-2.5, -1.25, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= 5200 + 835 && scrollOffsetY <= 160000 + 8350) {
      const finalPositionX = -8;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = 5200 + 835;
      const endScrollY = 5454.6 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    }
  } else {

    if (scrollOffsetY >= 509.2 && scrollOffsetY <= 835) { // la voiture arrive de la droite
      const finalPositionX = 0;
      const finalPositionY = -1.95;
      const finalPositionZ = 0;
      const startScrollY = 509.2;
      const endScrollY = 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(6, -1.95, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    }


    if (scrollOffsetY >= 0 + 835 && scrollOffsetY <= 1200 + 835) { // la voiture descend vers conseil
      const finalPositionX = 0;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = 0 + 835;
      const endScrollY = 700 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(0, -1.95, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);

    } else if (scrollOffsetY >= 1200 + 835 && scrollOffsetY <= h1*2.916167665) {
      const finalPositionX = -1.5;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = 1200 + 835;
      const endScrollY = 1500 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(0, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*2.916167665 && scrollOffsetY <= h1*3.694610778) {
      const finalPositionX = 0;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = h1*2.916167665;
      const endScrollY = h1*3.275449102;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*3.694610778 && scrollOffsetY <= h1*4.652694611) {
      const finalPositionX = 0;
      const finalPositionY = -0;
      const finalPositionZ = 0;
      const startScrollY = h1*3.694610778;
      const endScrollY = h1*4.053892216;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(0, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*4.652694611 && scrollOffsetY <= h1*4.982035928) {
      const finalPositionX = 0;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = h1*4.652694611;
      const endScrollY = 3350 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(0, -0, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= h1*4.982035928 && scrollOffsetY <= 3700 + 835) {
      const finalPositionX = -1.5;
      const finalPositionY = -1.25;
      const finalPositionZ = 0;
      const startScrollY = h1*4.982035928;
      const endScrollY = 3700 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(0, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= 3700 + 835 && scrollOffsetY <= 5200 + 8350) {
      const finalPositionX = 0;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = 3700 + 835;
      const endScrollY = 4000 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(-1.5, -1.25, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    } else if (scrollOffsetY >= 5200 + 835 && scrollOffsetY <= 160000 + 8350) {
      const finalPositionX = -8;
      const finalPositionY = -0.5;
      const finalPositionZ = 0;
      const startScrollY = 5200 + 835;
      const endScrollY = 5454.6 + 835;

      const positionInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
      const startPosition = new THREE.Vector3(0, -0.5, 0);

      position.x = THREE.MathUtils.lerp(startPosition.x, finalPositionX, positionInterpolationFactor);
      position.y = THREE.MathUtils.lerp(startPosition.y, finalPositionY, positionInterpolationFactor);
      position.z = THREE.MathUtils.lerp(startPosition.z, finalPositionZ, positionInterpolationFactor);
    }
  }


  model.position.copy(position);
}



















function updateRotation(scrollValueX, scrollValueY) {
  let rotation = new THREE.Euler();
  rotation.order = 'XYZ';

  rotation.copy(initialRotation);

  // Calculer le décalage du défilement horizontal à partir de 100 et ignorer les valeurs négatives
  const scrollOffsetX = Math.max(scrollValueX, 0);
  const scrollOffsetY = Math.max(scrollValueY, 0);

  const w1 = window.innerWidth;
  const h1 = window.innerHeight;


  console.log(scrollOffsetY)
  if (scrollOffsetX >= 1180 && scrollOffsetX <= 1280) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(0);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollX = 1180;
    const endScrollX = 1280;

    const rotationInterpolationFactor = Math.min((scrollOffsetX - startScrollX) / (endScrollX - startScrollX), 1);

    rotation.x = THREE.MathUtils.lerp(rotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(rotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(rotation.z, finalRotationZ, rotationInterpolationFactor);
  }

  if (scrollOffsetY >= 0 + 835 && scrollOffsetY <= 800 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(5);
    const finalRotationY = THREE.MathUtils.degToRad(70);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 0 + 835;
    const endScrollY = 700 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= 800 + 835 && scrollOffsetY <= h1*2.916167665) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(200);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 700 + 835;
    const endScrollY = 1500 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(70), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= h1*2.916167665 && scrollOffsetY <= h1*3.694610778) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(140);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = h1*2.916167665;
    const endScrollY = 2200 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(200), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= h1*3.694610778 && scrollOffsetY <= 2575 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = h1*3.694610778;
    const endScrollY = 2575 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(140), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= 2575 + 835 && scrollOffsetY <= 3000 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(90);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 2575 + 835;
    const endScrollY = 3000 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= 3000 + 835 && scrollOffsetY <= h1*4.982035928) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 3000 + 835;
    const endScrollY = h1*4.982035928;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= h1*4.982035928 && scrollOffsetY <= 4000 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(180);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = h1*4.982035928;
    const endScrollY = 3700 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= 4000 + 835 && scrollOffsetY <= 4400 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(70);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 4000 + 835;
    const endScrollY = 4400 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= 4400 + 835 && scrollOffsetY <= 5200 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(160);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 4400 + 835;
    const endScrollY = 5200 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(70), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  } else if (scrollOffsetY >= 5200 + 835 && scrollOffsetY <= 1600000 + 835) {
    const finalRotationX = THREE.MathUtils.degToRad(0);
    const finalRotationY = THREE.MathUtils.degToRad(30);
    const finalRotationZ = THREE.MathUtils.degToRad(0);
    const startScrollY = 5200 + 835;
    const endScrollY = 5254.6 + 835;

    const rotationInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startRotation = new THREE.Euler(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(160), THREE.MathUtils.degToRad(0), 'XYZ');

    rotation.x = THREE.MathUtils.lerp(startRotation.x, finalRotationX, rotationInterpolationFactor);
    rotation.y = THREE.MathUtils.lerp(startRotation.y, finalRotationY, rotationInterpolationFactor);
    rotation.z = THREE.MathUtils.lerp(startRotation.z, finalRotationZ, rotationInterpolationFactor);
  }





  model.rotation.copy(rotation);
}








function updateScale(scrollValueX, scrollValueY) {

  let scale = new THREE.Vector3();
  scale.copy(initialScale);

  const scrollOffsetX = Math.max(scrollValueX, 0);
  const scrollOffsetY = Math.max(scrollValueY, 0);

  const w1 = window.innerWidth;
  const h1 = window.innerHeight;


  if (scrollOffsetY >= 0 + 835 && scrollOffsetY <= 1200 + 835) {
    const finalScaleX = 1.1;
    const finalScaleY = 1.1;
    const finalScaleZ = 1.1;

    scale.x = finalScaleX;
    scale.y = finalScaleY;
    scale.z = finalScaleZ;
  }

  else if (scrollOffsetY >= 1200 + 835 && scrollOffsetY <= h1*2.916167665) {
    const finalScaleX = 2.5;
    const finalScaleY = 2.5;
    const finalScaleZ = 2.5;
    const startScrollY = 1200 + 835;
    const endScrollY = 1500 + 835;

    const ScaleInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startScale = new THREE.Vector3(1.1, 1.1, 1.1);

    scale.x = THREE.MathUtils.lerp(startScale.x, finalScaleX, ScaleInterpolationFactor);
    scale.y = THREE.MathUtils.lerp(startScale.y, finalScaleY, ScaleInterpolationFactor);
    scale.z = THREE.MathUtils.lerp(startScale.z, finalScaleZ, ScaleInterpolationFactor);
  } else if (scrollOffsetY >= h1*2.916167665 && scrollOffsetY <= h1*4.982035928) {
    const finalScaleX = 1.1;
    const finalScaleY = 1.1;
    const finalScaleZ = 1.1;
    const startScrollY = h1*2.916167665;
    const endScrollY = h1*3.275449102;

    const ScaleInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startScale = new THREE.Vector3(2.5, 2.5, 2.5);

    scale.x = THREE.MathUtils.lerp(startScale.x, finalScaleX, ScaleInterpolationFactor);
    scale.y = THREE.MathUtils.lerp(startScale.y, finalScaleY, ScaleInterpolationFactor);
    scale.z = THREE.MathUtils.lerp(startScale.z, finalScaleZ, ScaleInterpolationFactor);
  } else if (scrollOffsetY >= h1*4.982035928 && scrollOffsetY <= 3700 + 835) {
    const finalScaleX = 2.5;
    const finalScaleY = 2.5;
    const finalScaleZ = 2.5;
    const startScrollY = h1*4.982035928;
    const endScrollY = 3700 + 835;

    const ScaleInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startScale = new THREE.Vector3(1.1, 1.1, 1.1);

    scale.x = THREE.MathUtils.lerp(startScale.x, finalScaleX, ScaleInterpolationFactor);
    scale.y = THREE.MathUtils.lerp(startScale.y, finalScaleY, ScaleInterpolationFactor);
    scale.z = THREE.MathUtils.lerp(startScale.z, finalScaleZ, ScaleInterpolationFactor);
  } else if (scrollOffsetY >= 3700 + 835 && scrollOffsetY <= 160000 + 835) {
    const finalScaleX = 1.1;
    const finalScaleY = 1.1;
    const finalScaleZ = 1.1;
    const startScrollY = 3700 + 835;
    const endScrollY = 4000 + 835;

    const ScaleInterpolationFactor = Math.min((scrollOffsetY - startScrollY) / (endScrollY - startScrollY), 1);
    const startScale = new THREE.Vector3(2.5, 2.5, 2.5);

    scale.x = THREE.MathUtils.lerp(startScale.x, finalScaleX, ScaleInterpolationFactor);
    scale.y = THREE.MathUtils.lerp(startScale.y, finalScaleY, ScaleInterpolationFactor);
    scale.z = THREE.MathUtils.lerp(startScale.z, finalScaleZ, ScaleInterpolationFactor);
  }

  model.scale.copy(scale);
}







function updateObject(scrollValueX, scrollValueY) {
  updatePosition(scrollValueX, scrollValueY);
  updateRotation(scrollValueX, scrollValueY);
  updateScale(scrollValueX, scrollValueY)
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
loadModel();

camera.position.z = 3;

window.addEventListener('scroll', function () {
  let scrollValueX = window.pageXOffset;
  let scrollValueY = window.pageYOffset;

  updateObject(scrollValueX, scrollValueY);
});

animate();




window.addEventListener('scroll', function () {
  let scrollValueX = window.pageXOffset;
  let scrollValueY = window.pageYOffset;

  const w1 = window.innerWidth;
  const h1 = window.innerHeight;

  // Réduire la taille de la div "voiture_container" de 50%
  const voitureContainer = document.querySelectorAll('.voiture_container canvas');
  const secondCanvas = voitureContainer[1];
  if (scrollValueY >= 1200 + 835 && scrollValueY <= h1*3.275449102) {

    secondCanvas.style.clipPath = "inset(32% 0% 0% 14%)"
    secondCanvas.style.overflow = "hidden"

  } else if (scrollValueY >= h1*4.982035928 && scrollValueY <= 4000 + 835) {
    if (window.innerWidth > 768) {
      secondCanvas.style.clipPath = "inset(33% 58% 33% 14%)";
    } else {
      secondCanvas.style.clipPath = "inset(33% 14% 33% 14%)";
    }
    secondCanvas.style.overflow = "hidden";
  }


  else {
    // voitureContainer.style.width = '100%';
    // voitureContainer.style.height = '100%';
    secondCanvas.style.clipPath = "inset(0% 0% 0% 0%)"
  }
});


function onWindowResize() {
  const container = document.getElementById('myThreeJsScene');
  const rect = container.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

window.addEventListener('resize', onWindowResize);
























var hauteurEcran = window.innerHeight;
console.log("La hauteur de l'écran est : " + hauteurEcran + " pixels");
