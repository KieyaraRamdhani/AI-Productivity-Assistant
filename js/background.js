/* ==========================================
   NEMO AI BACKGROUND
========================================== */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 80;

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("bg").appendChild(renderer.domElement);

/* ==========================================
   PARTICLES
========================================== */

const particleCount = 1800;

const geometry = new THREE.BufferGeometry();

const positions = [];

for (let i = 0; i < particleCount; i++) {

    positions.push(
        (Math.random() - 0.5) * 220,
        (Math.random() - 0.5) * 140,
        (Math.random() - 0.5) * 140
    );

}

geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({

    color: 0x4fdfff,

    size: 1.2,

    transparent: true,

    opacity: 0.8

});

const particles = new THREE.Points(
    geometry,
    material
);

scene.add(particles);

/* ==========================================
   AI NODES
========================================== */

const nodeGeometry = new THREE.SphereGeometry(0.4, 16, 16);

const nodeMaterial = new THREE.MeshBasicMaterial({

    color: 0x9be8ff

});

const nodes = [];

for (let i = 0; i < 25; i++) {

    const node = new THREE.Mesh(
        nodeGeometry,
        nodeMaterial
    );

    node.position.set(

        (Math.random() - 0.5) * 90,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50

    );

    scene.add(node);

    nodes.push(node);

}

/* ==========================================
   CONNECTING LINES
========================================== */

const lineMaterial = new THREE.LineBasicMaterial({

    color: 0x39bfff,

    transparent: true,

    opacity: 0.25

});

for (let i = 0; i < nodes.length - 1; i++) {

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([

        nodes[i].position,
        nodes[i + 1].position

    ]);

    const line = new THREE.Line(
        lineGeometry,
        lineMaterial
    );

    scene.add(line);

}

/* ==========================================
   MOUSE PARALLAX
========================================== */

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;

    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

});

/* ==========================================
   ANIMATION
========================================== */

function animate() {

    requestAnimationFrame(animate);

    particles.rotation.y += 0.0004;
    particles.rotation.x += 0.00015;

    particles.position.y = Math.sin(Date.now() * 0.0003) * 2;

    scene.rotation.y += (mouseX * 0.15 - scene.rotation.y) * 0.03;

    scene.rotation.x += (-mouseY * 0.08 - scene.rotation.x) * 0.03;

    nodes.forEach((node, index) => {

        node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;

    });

    renderer.render(scene, camera);

}

animate();

/* ==========================================
   RESPONSIVE
========================================== */

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});