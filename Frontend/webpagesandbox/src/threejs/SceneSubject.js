import * as THREE from 'three'

export default (scene, screenDimensions) => {    
    const jellyfish = new THREE.Object3D();

    const body = new THREE.Mesh( new THREE.CubeGeometry( 20, 20, 20 ), new THREE.MeshLambertMaterial() );

    const tentacle = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle.position.set(9.5,9.5,10)

    const tentacle_2 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle_2.position.set(-9.5,9.5,10)

    const tentacle_3 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle_3.position.set(9.5,-9.5,10)

    const tentacle_4 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 30 ), new THREE.MeshLambertMaterial() );
    tentacle_4.position.set(-9.5,-9.5,10)

    jellyfish.add(body)
    jellyfish.add(tentacle)
    jellyfish.add(tentacle_2)
    jellyfish.add(tentacle_3)
    jellyfish.add(tentacle_4)

    scene.add(jellyfish);

    jellyfish.position.x = 0;
    jellyfish.position.y = 0;
    jellyfish.position.z = 0;


    jellyfish.rotation.z = Math.PI/4;
    const speed = 0.3;

    console.log(screenDimensions)

    const screen_width = screenDimensions.screen_width;
    const screen_height = screenDimensions.screen_height;

    var jellyfish_direction_x = 0.1;
    var jellyfish_direction_y = 0.1;
    var jellyfish_direction_z = 0.1;

    var jellyfish_velocity = Math.random() * 50;

    function update(time) {

        //console.log("old x: ", jellyfish.position.x )
        //console.log("old y: ", jellyfish.position.y )

        //const x_pos = jellyfish.position.x;
        //const y_pos = jellyfish.position.y;
        //const z_pos = jellyfish.position.z;

        /*if(x_pos > screen_width / 2 || x_pos < - screen_width / 2){
            jellyfish_direction = new THREE.Vector3(
                -jellyfish_direction.getComponent(0), 
                jellyfish_direction.getComponent(1), 
                jellyfish_direction.getComponent(2)
            );
        }
        if(y_pos > screen_height / 2 || y_pos < - screen_height / 2){
            jellyfish_direction = new THREE.Vector3(
                jellyfish_direction.getComponent(0), 
                -jellyfish_direction.getComponent(1), 
                jellyfish_direction.getComponent(2)
            );
        }*/

        const angle = time*speed;
        jellyfish.rotation.y = angle;
        jellyfish.rotation.x = angle;
        jellyfish.rotation.z = angle;

        //console.log(jellyfish)

        jellyfish.position.x = jellyfish_direction_x * jellyfish_velocity;
        jellyfish.position.y = jellyfish_direction_y * jellyfish_velocity;
        jellyfish.position.z = jellyfish_direction_z * jellyfish_velocity;
    
        //console.log("new x: ", jellyfish.position.x )
        //console.log("new y: ", jellyfish.position.y )

    }

    return {
        update
    }
}