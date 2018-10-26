import * as THREE from 'three'

export default (scene, screenDimensions) => {  

    const jellyfish = new THREE.Group();

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
    const speed = 0;

    console.log(screenDimensions)

    const screen_width = screenDimensions.width;
    const screen_height = screenDimensions.height;
    const screen_depth = screenDimensions.depth;

    var jellyfish_direction_x = 1.5;
    var jellyfish_direction_y = 2;

    var jellyfish_velocity = 0.1;

    console.log("width: ", screen_width)
    console.log("scene: ", scene)

    function update(time) {

        const x_pos = jellyfish.position.x;
        const y_pos = jellyfish.position.y;

        console.log("xpos: ", x_pos)
        console.log("width: ", screen_width/7)
        console.log("x-dir: ", jellyfish_direction_x)

        if(x_pos > screen_width/7 ){
            jellyfish_direction_x = -Math.abs(jellyfish_direction_x)
        }
        if(x_pos < - screen_width/7){
            jellyfish_direction_x = Math.abs(jellyfish_direction_x)
        }

        if(y_pos > screen_height/10 || y_pos < - screen_height/10 ){
            jellyfish_direction_y = -jellyfish_direction_y
        }

        // ROTATION
        const angle = time*speed;
        jellyfish.rotation.y = angle;
        jellyfish.rotation.x = angle;
        jellyfish.rotation.z = angle;

        // MOVEMENT 
        jellyfish.translateOnAxis(
            new THREE.Vector3(
                jellyfish_direction_x,
                jellyfish_direction_y,
                0
                ), 
            jellyfish_velocity )
    }

    return {
        update
    }
}