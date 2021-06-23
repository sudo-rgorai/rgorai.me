import "./style.css";

import * as THREE from "three";

import cpp from "./images/cplusplus.png";
import flask from "./images/flask.png";
import js from "./images/javascript.png";
import mn from "./images/mars_normal.png";
import mt from "./images/mars_texture.jpg";
import node from "./images/node.png";
import python from "./images/python.png";
import react from "./images/react.png";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  35,
  (window.outerWidth + 50) / (window.outerHeight + 50),
  1,
  1000
);

console.log(window.outerWidth);

camera.position.setZ(30);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.outerWidth + 50, window.outerHeight + 50);

renderer.render(scene, camera);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(30, 30, 30);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(pointLight, ambientLight);

// const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.FontLoader();

// Stars

function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(5000).fill().forEach(addStar);

// Wireframe

let wireframeX = window.outerWidth < 750 ? 0 : 5;
// let wireframeY = window.outerWidth < 750 ? 3 : 0;

const wire = new THREE.Mesh(
  new THREE.IcosahedronGeometry(3, 1),
  new THREE.MeshStandardMaterial({
    color: 0x8fd6e1,
    wireframe: true,
  })
);
scene.add(wire);
wire.position.set(wireframeX, 0, -20);

// Mars

const marsTexture = new THREE.TextureLoader().load(mt);
const normalTexture = new THREE.TextureLoader().load(mn);
const planet = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture,
  })
);
scene.add(planet);
planet.position.set(-20, 0, 67.5);

// Torus

const geometry = new THREE.TorusGeometry(6, 2, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xcaf7e3,
  roughness: 0.75,
  metalness: 0.5,
});
const torus = new THREE.Mesh(geometry, material);
let torusX = window.outerWidth > 1500 ? -33 : -27;
torus.position.set(torusX, 0, 15);
scene.add(torus);

const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xcaf7e3,
  roughness: 0.75,
  metalness: 0.5,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(torusX, 0, 15);
scene.add(sphere);

// Circle

// Python

const pythonTexture = new THREE.TextureLoader().load(python);
const pythonCircleGeometry = new THREE.CircleGeometry(1, 32);
const pythonCircleMaterial = new THREE.MeshStandardMaterial({
  color: 0x646464,
  map: pythonTexture,
  side: THREE.DoubleSide,
});
const pythonCircle = new THREE.Mesh(pythonCircleGeometry, pythonCircleMaterial);
scene.add(pythonCircle);
let pythonX = window.outerWidth > 1500 ? -14 : -10;
pythonCircle.position.set(pythonX, 2, 10);

// JavaScript

const javascriptTexture = new THREE.TextureLoader().load(js);
const javascriptCircleGeometry = new THREE.CircleGeometry(1, 32);
const javascriptCircleMaterial = new THREE.MeshStandardMaterial({
  color: 0x646464,
  map: javascriptTexture,
  side: THREE.DoubleSide,
});
const javascriptCircle = new THREE.Mesh(
  javascriptCircleGeometry,
  javascriptCircleMaterial
);
scene.add(javascriptCircle);
let jsX = window.outerWidth > 1500 ? -11 : -7;
javascriptCircle.position.set(jsX, 2, 10);

// C++

const cplusplusTexture = new THREE.TextureLoader().load(cpp);
const cplusplusCircleGeometry = new THREE.CircleGeometry(1.25, 32);
const cplusplusCircleMaterial = new THREE.MeshStandardMaterial({
  color: 0x646464,
  map: cplusplusTexture,
  side: THREE.DoubleSide,
});
const cplusplusCircle = new THREE.Mesh(
  cplusplusCircleGeometry,
  cplusplusCircleMaterial
);
scene.add(cplusplusCircle);
let cppX = window.outerWidth > 1500 ? -8.5 : -4.5;
cplusplusCircle.position.set(cppX, 1.75, 10);

// FLask

const flaskTexture = new THREE.TextureLoader().load(flask);
const flaskCircleGeometry = new THREE.CircleGeometry(1, 32);
const flaskCircleMaterial = new THREE.MeshStandardMaterial({
  color: 0x646464,
  map: flaskTexture,
  side: THREE.DoubleSide,
});
const flaskCircle = new THREE.Mesh(flaskCircleGeometry, flaskCircleMaterial);
scene.add(flaskCircle);
let flaskX = window.outerWidth > 1500 ? -14 : -10;
flaskCircle.position.set(flaskX, -2, 10);

// node

const nodeTexture = new THREE.TextureLoader().load(node);
const nodeCircleGeometry = new THREE.CircleGeometry(1, 32);
const nodeCircleMaterial = new THREE.MeshStandardMaterial({
  color: 0x646464,
  map: nodeTexture,
  side: THREE.DoubleSide,
});
const nodeCircle = new THREE.Mesh(nodeCircleGeometry, nodeCircleMaterial);
scene.add(nodeCircle);
let nodeX = window.outerWidth > 1500 ? -12 : -8;
nodeCircle.position.set(nodeX, -2, 8);

// React

const reactTexture = new THREE.TextureLoader().load(react);
const reactCircleGeometry = new THREE.CircleGeometry(1, 32);
const reactCircleMaterial = new THREE.MeshStandardMaterial({
  color: 0x646464,
  map: reactTexture,
  side: THREE.DoubleSide,
});
const reactCircle = new THREE.Mesh(reactCircleGeometry, reactCircleMaterial);
scene.add(reactCircle);
let reactX = window.outerWidth > 1500 ? -9.4 : -5.4;
reactCircle.position.set(reactX, -1.8, 8);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

var speed = 0.005;
var pos = 0;

document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  if (speed < 0.07 && event.clientX > pos) {
    speed += 0.01;
  } else if (speed > -0.07 && event.clientX < pos) {
    speed -= 0.01;
  }
  pos = event.clientX;
}

function animate() {
  requestAnimationFrame(animate);

  wire.rotation.y += speed;

  torus.rotation.x += 0.05;
  torus.rotation.y += 0.1;
  torus.rotation.z += 0.01;

  planet.rotation.y += 0.05;

  pythonCircle.rotation.y += 0.05;
  javascriptCircle.rotation.y += 0.05;
  cplusplusCircle.rotation.y += 0.05;
  flaskCircle.rotation.y += 0.05;
  nodeCircle.rotation.y += 0.05;
  reactCircle.rotation.y += 0.05;

  renderer.render(scene, camera);
}

animate();

setTimeout(() => {
  document.getElementById('loader_bg').style.display = "none";
}, 3000)
