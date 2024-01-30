
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let width = window.innerWidth;
let height = window.innerHeight;

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
const camera = new THREE.OrthographicCamera( width / - 300, width / 300, height / 300, height / - 300, 1, 1000 );
const renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const textureLoader = new THREE.TextureLoader();
const objLoader = new OBJLoader();

const [ obj ] = await Promise.all( [
	objLoader.loadAsync( 'models/uno.obj' ),
] );

scene.add( obj );

//Create a WebGLRenderer and turn on shadows in the renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a DirectionalLight and turn on shadows for the light
const light = new THREE.DirectionalLight( 0xffffff, 5 );
light.position.set( 0, 1, 0 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 2; // default
light.shadow.mapSize.height = 2; // default
light.shadow.camera.near = 1; // default
light.shadow.camera.far = 2; // default

camera.position.z = 7;

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.001;
controls.enablePan = false;
controls.enableZoom = false;
controls.update();

function animate() {
    requestAnimationFrame( animate );
    obj.rotation.x += 0.002; obj.rotation.y += 0.001;

    controls.update();

    renderer.render( scene, camera );
}

animate();
