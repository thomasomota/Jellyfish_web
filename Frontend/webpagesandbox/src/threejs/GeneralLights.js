import * as THREE from 'three'

export default scene => {    

    const lightIn = new THREE.PointLight("#FF0000", 0.3);
    const lightOut = new THREE.PointLight("#FF0000", 0.3);
    lightOut.position.set(0,20,20);
    lightIn.position.set(20,0,0);

    scene.add(lightIn);
    scene.add(lightOut);

    const rad = 80;

    function update(time) {
        const x = rad * Math.sin(time*0.2)
        lightOut.position.x = x;
    }

    return {
        update
    }
}