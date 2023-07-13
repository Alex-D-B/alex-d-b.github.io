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

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

        const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
        // scene.add(torus);
        const spheres = [];
        for (let i = 1; i < particles.length; i += 2) {
            const geometry = new THREE.SphereGeometry(1);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = particles[i - 1];
            sphere.position.y = particles[i];
            Physics.add_particle(particles[i - 1], particles[i], 1, 1);
            spheres.push(sphere);
            scene.add(sphere);
        }

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
            console.log('done');
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