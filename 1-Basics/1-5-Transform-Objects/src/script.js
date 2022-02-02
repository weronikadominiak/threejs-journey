import "./style.css";
import * as THREE from "three";
import { MeshToonMaterial } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Positioning
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// It's the same as:
mesh.position.set(0.7, -0.6, 1);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// Roatation - uses Euler not vector3
// Updating rotation updates quaternion
// if rotation got stuck change order of rotations or :
// mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
// Quaternion - like rotation but more mathematically correct

// We can combine transformations, just must be put before render

scene.add(mesh);

// AXES HELPER
const axesHelper = new THREE.AxesHelper(3); // number sets length of lines, is optional
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;

// look at - we can make objects look at the other objects
camera.lookAt(mesh.position);

scene.add(camera);

console.log(mesh.position.length()); // distance from center of the scene
console.log(mesh.position.distanceTo(camera.position)); // distance from camera
// mesh.position.normalize(camera.position); // takes vector length and reduces it to 1

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
