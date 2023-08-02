<script lang="ts">
    import * as THREE from 'three';
    import initPhysics, * as Physics from '../../physics/pkg/physics.js';

    let right = false;
    let left = false;
    let up = false;
    let down = false;

    initPhysics().then(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg')
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.position.setZ(180);

        document.onwheel = (event: WheelEvent) => {
            camera.position.z += event.deltaY * 0.05;
            console.log(camera.position.z);
        }

        const spheres: THREE.Mesh[] = [];
        function makeParticle(x: number, y: number, mass: number, radius: number, isContainer: boolean = false) {
            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_particle(x, y, mass, radius, isContainer ? 1 : 0);
            spheres.push(sphere);
            scene.add(sphere);
        }

        function makeOrbitingParticle(index: number, x: number, y: number, mass: number, radius: number, isContainer: boolean, orbitClockwise: boolean) {
            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_orbiting_particle(index, x, y, mass, radius, isContainer ? 1 : 0, orbitClockwise);
            spheres.push(sphere);
            scene.add(sphere);
        }

        function makeOrbitingAnchor(index: number, x: number, y: number, mass: number, orbitClockwise: boolean) {
            Physics.add_orbiting_particle(index, x, y, mass, 0, 0, orbitClockwise);
            spheres.push(null);
        }

        makeParticle(0, 0, 10000, 10, false);                   // sun
        makeOrbitingAnchor(0, 25, 0, 100, false);               // physics engine project
        makeOrbitingParticle(1, 22, 0, 100, 2, true, true);
        makeOrbitingParticle(1, 28, 0, 100, 2, true, true);     // index 3

        makeParticle(21, 0, 1, 0.5);                            // fill first physics engine project container
        Physics.set_initial_velocity(4, 2, -2);
        Physics.make_relative_to(4, 2);
        makeParticle(23, 0, 1, 0.5);
        Physics.set_initial_velocity(5, -3, -1);
        Physics.make_relative_to(5, 2);
        makeParticle(22, -1, 1, 0.5);
        Physics.set_initial_velocity(6, 0, 3.5);
        Physics.make_relative_to(6, 2);
        makeParticle(22, 1, 1, 0.5);
        Physics.set_initial_velocity(7, 1, -0.5);
        Physics.make_relative_to(7, 2);                         // index 7

        makeParticle(27, 0, 1, 0.5);                            // fill second physics engine project container
        Physics.set_initial_velocity(8, 2, 2);
        Physics.make_relative_to(8, 3);
        makeParticle(29, 0, 1, 0.5);
        Physics.set_initial_velocity(9, 1, -3);
        Physics.make_relative_to(9, 3);
        makeParticle(28, -1, 1, 0.5);
        Physics.set_initial_velocity(10, -3.5, 0);
        Physics.make_relative_to(10, 3);
        makeParticle(28, 1, 1, 0.5);
        Physics.set_initial_velocity(11, 0.5, 1);
        Physics.make_relative_to(11, 3);                        // index 11

        makeOrbitingParticle(0, 0, 40, 200, 4, false, false);   // news brief project
        makeOrbitingParticle(12, -7, 40, 10, 1, false, true);   // index 13

//////////////////////////////////////////////////////////////////////////////////

        makeOrbitingAnchor(0, 0, -60, 1000, false);             // rust connect 4 project
        makeOrbitingParticle(14, 3.5, -60, 100, 3, false, false);
        makeOrbitingParticle(14, -3.5, -60, 100, 2, false, false);  // index 16

        makeOrbitingParticle(0, -75, 0, 400, 7, false, false);  // index 17

        const beltStartingRadius = 90;                          // asteroids project
        for (let i = 0; i < 150; ++i) {
            const radius = beltStartingRadius + ((7 * i) % 5);
            makeOrbitingParticle(0, radius * Math.cos(0.5 * i), radius * Math.sin(0.5 * i), 1, 0.5, false, false);
        }                                                       // index 117

        makeOrbitingParticle(0, 120 * Math.cos(2), 120 * Math.sin(2), 20, 3, false, false); // index 118

        // comet
        makeParticle(200, 50, 11, 1.5, false);
        Physics.set_initial_velocity(169, -9, -1.5);
        Physics.receive_gravtiy_from(169, 0);
        Physics.receive_gravtiy_from(169, 2);
        Physics.receive_gravtiy_from(169, 3);
        Physics.receive_gravtiy_from(169, 15);
        Physics.receive_gravtiy_from(169, 16);
        Physics.receive_gravtiy_from(169, 17);
        Physics.receive_gravtiy_from(169, 118);                 // index 119

        function animate() {
            requestAnimationFrame(animate);

            const speed = 100;

            if (right) {
                Physics.apply_x(speed);
            }
            if (left) {
                Physics.apply_x(-speed);
            }
            if (up) {
                Physics.apply_y(speed);
            }
            if (down) {
                Physics.apply_y(-speed);
            }

            Physics.update(1.0 / 60);

            let buffer = new Float64Array(2);
            spheres.forEach((sphere, i) => {
                if (sphere === null) return;
                Physics.get_particle(i, buffer);
                sphere.position.x = buffer[0];
                sphere.position.y = buffer[1];
                // if (cols.has(i)) {
                //     sphere.material.color.setHex(0x00ff00);
                // } else {
                //     sphere.material.color.setHex(0xff6347);
                // }
            });

            renderer.render(scene, camera);
        }

        animate();

    });

    document.onkeydown = (e) => {
        if (e.key === 'ArrowRight') {
            right = true;
        } else if (e.key === 'ArrowLeft') {
            left = true;
        } else if (e.key === 'ArrowUp') {
            up = true;
        } else if (e.key === 'ArrowDown') {
            down = true;
        }
    }

    document.onkeyup = (e) => {
        if (e.key === 'ArrowRight') {
            right = false;
        } else if (e.key === 'ArrowLeft') {
            left = false;
        } else if (e.key === 'ArrowUp') {
            up = false;
        } else if (e.key === 'ArrowDown') {
            down = false;
        }
    }

</script>

<canvas id="bg" class="fixed left-0 top-0 -z-10"></canvas>
