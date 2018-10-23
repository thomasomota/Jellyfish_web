import * as THREE from 'three'

export default scene => {    
    const group = new THREE.Group();

    const jellyfish = new THREE.Mesh( new THREE.CubeGeometry( 20, 20, 20 ), new THREE.MeshLambertMaterial() );

    const tentacle = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle.position.set(9.5,9.5,10)

    const tentacle_2 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle_2.position.set(-9.5,9.5,10)

    const tentacle_3 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle_3.position.set(9.5,-9.5,10)

    const tentacle_4 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle_4.position.set(-9.5,-9.5,10)

    group.add(jellyfish)
    group.add(tentacle)
    group.add(tentacle_2)
    group.add(tentacle_3)
    group.add(tentacle_4)

    scene.add(group);

    group.rotation.z = Math.PI/4;
    const speed = 0.1;

    function update(time) {
        const angle = time*speed;
        group.rotation.y = angle;
        group.rotation.x = angle;
        group.rotation.z = angle;
    }

    return {
        update
    }
}