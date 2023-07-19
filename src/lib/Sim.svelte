<script lang="ts">
    import * as THREE from 'three';
    import initPhysics, * as Physics from '../../physics/pkg/physics.js';

    let particles = new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
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

        camera.position.setZ(30);

        const spheres = [];
        function makeParticle(x: number, y: number, mass: number, radius: number) {
            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_particle(x, y, mass, radius);
            spheres.push(sphere);
            scene.add(sphere);
        }

        function makeOrbitingParticle(index: number, x: number, y: number, mass: number, radius: number, orbitClockwise: boolean) {
            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_orbiting_particle(index, x, y, mass, radius, orbitClockwise);
            spheres.push(sphere);
            scene.add(sphere);
        }

        function makeOrbitingPair() {
            const geometry1 = new THREE.SphereGeometry(5);
            const geometry2 = new THREE.SphereGeometry(2);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere1 = new THREE.Mesh(geometry1, material);
            const sphere2 = new THREE.Mesh(geometry2, material);
            // sphere1.position.x = x;
            // sphere2.position.y = y;
            Physics.add_orbiting_pair(0, 0, 100, 100, 5, 2, true);
            spheres.push(sphere1);
            scene.add(sphere1);
            spheres.push(sphere2);
            scene.add(sphere2);
        }

        makeParticle(0, 0, 10000, 5); // sun
        makeOrbitingParticle(0, 20, 0, 100, 2, true); // project
        makeOrbitingParticle(1, 20, 5, 0.05, 1, true); // project moon
        // makeOrbitingPair();

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

        const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
        // scene.add(torus);
        // for (let i = 1; i < particles.length; i += 2) {
        //     const geometry = new THREE.SphereGeometry(1);
        //     const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
        //     const sphere = new THREE.Mesh(geometry, material);
        //     sphere.position.x = particles[i - 1];
        //     sphere.position.y = particles[i];
        //     const index = Math.floor(i / 2);
        //     if (index % 2 === 0) {
        //         Physics.add_particle(particles[i - 1], particles[i], /*i == particles.length - 1 ? 500 :*/ 40, 1);
        //     } else {
        //         Physics.add_orbiting_particle(index - 1, particles[i - 1], particles[i], /*i == particles.length - 1 ? 500 :*/ 40, 1, false);
        //     }
        //     spheres.push(sphere);
        //     scene.add(sphere);
        // }

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

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.05;
            torus.rotation.z += 0.01;

            spheres.forEach((sphere, i) => {
                let pos = Physics.get_particle(i);
                [sphere.position.x, sphere.position.y] = pos;
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

<canvas id="bg" class="fixed left-0 top-0"></canvas>