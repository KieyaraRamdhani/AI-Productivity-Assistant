const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

camera.position.z = 60;

const renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("bg").appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();

const vertices = [];

for(let i=0;i<2500;i++){

    vertices.push(
        (Math.random()-0.5)*200,
        (Math.random()-0.5)*200,
        (Math.random()-0.5)*200
    );

}

geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices,3)
);

const material = new THREE.PointsMaterial({
    color:0x55d6ff,
    size:0.7
});

const stars = new THREE.Points(geometry,material);

scene.add(stars);

function animate(){

    requestAnimationFrame(animate);

    stars.rotation.y +=0.0008;
    stars.rotation.x +=0.0004;

    renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

    camera.aspect=window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);

});