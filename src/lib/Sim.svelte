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
            canvas: document.querySelector('#bg') as Element
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        const halfWidth = window.innerWidth / 2;
        const halfHeight = window.innerHeight / 2;

        // window.onresize = () => {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     renderer.setPixelRatio(window.devicePixelRatio);
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        //     console.log('resizing');
        // }

        camera.position.setZ(180);

        const pixelsToWorldCoords = (x: number, y: number): THREE.Vector3 => {
            const halfWidth = window.innerWidth / 2;
            const halfHeight = window.innerHeight / 2;
            let pos = new THREE.Vector3(
                -1 + x / halfWidth,
                1 - y / halfHeight
            ).unproject(camera);
            pos.sub(camera.position).normalize();
            let dist = -camera.position.z / pos.z;
            return new THREE.Vector3().copy(camera.position).add(pos.multiplyScalar(dist));
        }

        const spheres: ({mesh: THREE.Mesh, forcedPos?: THREE.Vector3} | null)[] = [];
        let globalOffset: number = 0;
        const particleNames = new Map<string, number>();
        document.onscroll = () => {
            const site = document.getElementById('site')?.getBoundingClientRect();
            const index = particleNames.get('physics container 1');
            if (!index) {
                console.error('physics container 1 not found');
                return;
            }
            const sphere = spheres[index];
            if (sphere) {
                if (site && site.top < 50) {
                    globalOffset = 500;
                    sphere.forcedPos = pixelsToWorldCoords(halfWidth * 6 / 5, (site.bottom + site.top) / 2);
                } else {
                    globalOffset = 0;
                    sphere.forcedPos = undefined;
                }
            }
        }

        // renderer.render(scene, camera); return;

        let index = 0;
        function makeParticle(x: number, y: number, mass: number, radius: number, isContainer: boolean = false, name?: string) {
            if (name) {
                particleNames.set(name, index);
                console.log(particleNames)
            }
            ++index;

            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_particle(x, y, mass, radius, isContainer ? 1 : 0);
            spheres.push({mesh: sphere});
            scene.add(sphere);
        }

        function makeOrbitingParticle(target: string, x: number, y: number, mass: number, radius: number, isContainer: boolean, orbitClockwise: boolean, name?: string) {
            if (name) {
                particleNames.set(name, index);
            }
            ++index;

            let targetIndex = particleNames.get(target);
            if (targetIndex === undefined) {
                console.error(`Target ${target} not found`);
                return;
            }

            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_orbiting_particle(targetIndex, x, y, mass, radius, isContainer ? 1 : 0, orbitClockwise);
            spheres.push({mesh: sphere});
            scene.add(sphere);
        }
        
        function makeEllipticOrbitingParticle(target: string, x: number, y: number, mass: number, radius: number, semiMajorAxis: number, isContainer: boolean, orbitClockwise: boolean, name?: string) {
            if (name) {
                particleNames.set(name, index);
            }
            ++index;

            let targetIndex = particleNames.get(target);
            if (targetIndex === undefined) {
                console.error(`Target ${target} not found`);
                return;
            }

            const geometry = new THREE.SphereGeometry(radius);
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = x;
            sphere.position.y = y;
            Physics.add_elliptic_orbiting_particle(targetIndex, x, y, mass, radius, semiMajorAxis, isContainer ? 1 : 0, orbitClockwise);
            spheres.push({mesh: sphere});
            scene.add(sphere);
        }

        function makeOrbitingAnchor(target: string, x: number, y: number, mass: number, orbitClockwise: boolean, name?: string) {
            if (name) {
                particleNames.set(name, index);
            }
            ++index;

            let targetIndex = particleNames.get(target);
            if (targetIndex === undefined) {
                console.error(`Target ${target} not found`);
                return;
            }
            
            Physics.add_orbiting_particle(targetIndex, x, y, mass, 0, 0, orbitClockwise);
            spheres.push(null);
        }

        makeParticle(0, 0, 10000, 10, false, 'sun');                   // sun
        makeOrbitingAnchor('sun', 25, 0, 100, false, 'physics');               // physics engine project
        makeOrbitingParticle('physics', 22, 0, 100, 2, true, true, 'physics container 1');
        makeOrbitingParticle('physics', 28, 0, 100, 2, true, true, 'physics container 2');     // index 3

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

        makeOrbitingParticle('sun', 0, 40, 200, 4, false, false, 'news brief');   // news brief project
        makeOrbitingParticle('news brief', -7, 40, 10, 1, false, true);   // index 13

//////////////////////////////////////////////////////////////////////////////////

        makeOrbitingAnchor('sun', 0, -60, 1000, false, 'rust connect 4');             // rust connect 4 project
        makeOrbitingParticle('rust connect 4', 3.5, -60, 100, 3, false, false);
        makeOrbitingParticle('rust connect 4', -3.5, -60, 100, 2, false, false);  // index 16

        // robotics codebase
        makeOrbitingParticle('sun', -75, 0, 400, 7, false, false, 'robotics codebase');  // index 17

        const beltStartingRadius = 90;                          // asteroids project
        for (let i = 0; i < 150; ++i) {
            const radius = beltStartingRadius + ((7 * i) % 5);
            makeOrbitingParticle('sun', radius * Math.cos(0.5 * i), radius * Math.sin(0.5 * i), 1, 0.5, false, false);
        }                                                       // index 167

        makeOrbitingParticle('sun', 120 * Math.cos(2), 120 * Math.sin(2), 20, 3, false, false); // index 168

        // comet
        // makeParticle(200, 50, 11, 1.5, false);
        // Physics.set_initial_velocity(169, -9, -1.5);
        // Physics.receive_gravtiy_from(169, 0);
        // Physics.receive_gravtiy_from(169, 2);
        // Physics.receive_gravtiy_from(169, 3);
        // Physics.receive_gravtiy_from(169, 15);
        // Physics.receive_gravtiy_from(169, 16);
        // Physics.receive_gravtiy_from(169, 17);
        // Physics.receive_gravtiy_from(169, 118);                 // index 169
        makeEllipticOrbitingParticle('sun', 200, 50, 11, 1.5, 110, false, false, 'comet');   // index 169
        Physics.set_radius(169, 0);

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
                if (sphere.forcedPos) {
                    sphere.mesh.position.x = sphere.forcedPos.x;
                    sphere.mesh.position.y = sphere.forcedPos.y;
                } else {
                    sphere.mesh.position.x = buffer[0] + globalOffset;
                    sphere.mesh.position.y = buffer[1];
                }
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
