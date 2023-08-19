<script lang="ts">
    import * as THREE from 'three';
    import initPhysics, * as Physics from '../../physics/pkg/physics.js';
    import Nav from './Nav.svelte';

    initPhysics().then(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('canvas')!
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        let halfWidth = window.innerWidth / 2;
        let halfHeight = window.innerHeight / 2;

        window.onresize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            halfWidth = window.innerWidth / 2;
            halfHeight = window.innerHeight / 2;    
        }

        const pixelsToWorldCoords = (x: number, y: number): THREE.Vector3 => {
            let pos = new THREE.Vector3(
                -1 + x / halfWidth,
                1 - y / halfHeight
            ).unproject(camera).sub(camera.position).normalize();
            let dist = -camera.position.z / pos.z;
            return new THREE.Vector3().copy(camera.position).add(pos.multiplyScalar(dist));
        }

        const spheres: ({mesh: THREE.Mesh, forcedPos?: THREE.Vector3} | null)[] = [];
        let globalXOffset: number = 0;
        let globalZOffset: number = 0;
        const particleNames = new Map<string, number>();

        let index = 0;
        function makeParticle(x: number, y: number, mass: number, radius: number, isContainer: boolean = false, name?: string) {
            if (name) {
                particleNames.set(name, index);
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
        makeOrbitingParticle('sun', -75, 0, 400, 6, false, false, 'robotics codebase');  // index 17

        const beltStartingRadius = 90;                          // asteroids project
        const startingIndex = index;
        for (let i = 0; i < 150; ++i) {
            if (startingIndex + i === 34 || startingIndex + i === 47 || startingIndex + i === 88 || startingIndex + i === 151) continue;
            const radius = beltStartingRadius + ((7 * i) % 5);
            makeOrbitingParticle('sun', radius * Math.cos(0.5 * i), radius * Math.sin(0.5 * i), 1, 0.5, false, false);
        }                                                       // index 167
        const numAsteroids = index - startingIndex;

        makeOrbitingParticle('sun', 120 * Math.cos(1.75), 120 * Math.sin(1.75), 20, 3, false, false, "db scraper"); // index 168
        makeEllipticOrbitingParticle('sun', 0, 130, 20, 2, 115, false, false, 'maze');

        // comet
        makeEllipticOrbitingParticle('sun', 200, 50, 11, 1.5, 110, false, false, 'comet');

        Physics.save_snapshot();

        const onScroll = () => {
            const site = document.getElementById('site')?.getBoundingClientRect()!;
            const newsClient = document.getElementById('news client')!.getBoundingClientRect();
            const newsServer = document.getElementById('news server')!.getBoundingClientRect();
            const connectFourClient = document.getElementById('connect four client')!.getBoundingClientRect();
            const connectFourServer = document.getElementById('connect four server')!.getBoundingClientRect();
            const robotics = document.getElementById('robotics')!.getBoundingClientRect();
            const dbScraper = document.getElementById('db scraper')!.getBoundingClientRect();
            const maze = document.getElementById('maze')!.getBoundingClientRect();
            const asteroids = document.getElementById('asteroids')?.getBoundingClientRect()!;
            if (asteroids.bottom + asteroids.top > 2 * halfHeight) {
                globalXOffset = 0;
                globalZOffset = 500;

                // handle camera
                camera.position.setZ(15);
                camera.updateMatrixWorld();

                // set particle positions
                let index = particleNames.get('physics')!;
                let forcedPos = pixelsToWorldCoords(halfWidth * 3 / 2, (site.bottom + site.top) / 2);
                for (let i = index + 1; i < index + 11; ++i) {
                    spheres[i]!.forcedPos = forcedPos;
                }

                index = particleNames.get('news brief')!;
                forcedPos = pixelsToWorldCoords(halfWidth, (newsClient.bottom + newsServer.top) / 2);
                spheres[index]!.forcedPos = forcedPos;
                spheres[index + 1]!.forcedPos = forcedPos;

                index = particleNames.get('rust connect 4')!;
                forcedPos = pixelsToWorldCoords(halfWidth, (connectFourClient.bottom + connectFourServer.top) / 2);
                spheres[index + 1]!.forcedPos = forcedPos;
                spheres[index + 2]!.forcedPos = forcedPos;

                index = particleNames.get('robotics codebase')!;
                forcedPos = pixelsToWorldCoords(halfWidth * 3 / 2, (2 * robotics.bottom + robotics.top) / 3);
                spheres[index]!.forcedPos = forcedPos;

                forcedPos = pixelsToWorldCoords(halfWidth * 4 / 3, (asteroids.bottom + asteroids.top) / 2);
                for (let i = index + 1; i <= index + numAsteroids; ++i) {
                    const particle = spheres[i]!;
                    particle.forcedPos = forcedPos;
                }

                index = particleNames.get('db scraper')!;
                forcedPos = pixelsToWorldCoords(halfWidth / 2, (2 * dbScraper.bottom + dbScraper.top) / 3);
                spheres[index]!.forcedPos = forcedPos;

                index = particleNames.get('maze')!;
                forcedPos = pixelsToWorldCoords(halfWidth * 8 / 5, (maze.bottom + 2 * maze.top) / 3);
                spheres[index]!.forcedPos = forcedPos;
            } else if (asteroids.bottom > 0) {
                const transitionFactor = asteroids.bottom / (halfHeight + (asteroids.bottom - asteroids.top) / 2);
                globalXOffset = (pixelsToWorldCoords(halfWidth * 4 / 3, halfHeight).x - beltStartingRadius) * transitionFactor;
                globalZOffset = -1250 * transitionFactor;
                camera.position.setZ(180 - 165 * transitionFactor);
                spheres.forEach((sphere) => {
                    if (sphere !== null) {
                        sphere.forcedPos = undefined;
                    }
                });
            } else {
                globalXOffset = 0;
                globalZOffset = 0;
                camera.position.setZ(180);
                spheres.forEach((sphere) => {
                    if (sphere !== null) {
                        sphere.forcedPos = undefined;
                    }
                });
            }
        }

        let frame = 0;
        let oldTimeStep = 0;
        function animate(timeStep: any) {
            requestAnimationFrame(animate);

            let endCycleZOffset = 0;
            const endCycleFrameDuration = 240;

            const deltaTime = timeStep - oldTimeStep;
            oldTimeStep = timeStep;
            const dt = 1 / 60; // deltaTime !== 0 ? Math.min(deltaTime / 1000, 2.0 / 60) : 1.0 / 60;

            if (frame === 9000) {
                const index = particleNames.get('robotics codebase')!;
                for (let i = index + 1; i <= index + numAsteroids; ++i) {
                    Physics.receive_gravtiy_from(i, index);
                }
            } else if (frame > 11000) {
                if (frame < 11000 + endCycleFrameDuration) {
                    endCycleZOffset = -1250 * (frame - 11000) / endCycleFrameDuration;
                } else if (frame > 11000 + endCycleFrameDuration) {
                    endCycleZOffset = -1250 * (11000 + 2 * endCycleFrameDuration - frame) / endCycleFrameDuration;
                    if (frame == 11000 + 2 * endCycleFrameDuration) {
                        frame -= 11000;
                    }
                } else {
                    endCycleZOffset = -1250;
                    Physics.restore_from_snapshot();
                }
            }
            ++frame;
            Physics.update(dt);

            let buffer = new Float64Array(2);
            let trueContainerX = 0;
            let trueContainerY = 0;
            const physicsIndex = particleNames.get('physics')!;
            const newsIndex = particleNames.get('news brief')!;
            const connectFourIndex = particleNames.get('rust connect 4')!;
            const roboticsIndex = particleNames.get('robotics codebase')!;
            spheres.forEach((sphere, i) => {
                Physics.get_particle(i, buffer);
                if (i === physicsIndex || i == newsIndex || i === connectFourIndex) {
                    trueContainerX = buffer[0];
                    trueContainerY = buffer[1];
                }
                if (sphere === null) return;
                if (sphere.forcedPos) {
                    sphere.mesh.position.x = sphere.forcedPos.x;
                    sphere.mesh.position.y = sphere.forcedPos.y;
                    sphere.mesh.position.z = 0;
                    if (
                        (i >= physicsIndex + 1 && i < physicsIndex + 11)
                        || i === newsIndex + 1
                        || (i >= connectFourIndex + 1 && i < connectFourIndex + 3)
                    ) {
                        sphere.mesh.position.x += buffer[0] - trueContainerX;
                        sphere.mesh.position.y += buffer[1] - trueContainerY;
                    } else if (i > roboticsIndex && i <= roboticsIndex + numAsteroids) {
                        sphere.mesh.position.x += buffer[0] - beltStartingRadius;
                        sphere.mesh.position.y += buffer[1];
                    }
                } else {
                    sphere.mesh.position.x = buffer[0] + globalXOffset;
                    sphere.mesh.position.y = buffer[1];
                    sphere.mesh.position.z = (i > roboticsIndex && i <= roboticsIndex + numAsteroids ? 0 : globalZOffset) + (i !== 0 ? endCycleZOffset : 0);
                }
            });

            renderer.render(scene, camera);
        }

        onScroll();
        animate(0);
        document.onscroll = onScroll;

    });

</script>
<Nav></Nav>
<canvas id="canvas" class="fixed left-0 top-0 -z-10"></canvas>
