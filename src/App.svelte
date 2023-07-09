<script lang="ts">
    import svelteLogo from './assets/svelte.svg';
    import viteLogo from '/vite.svg';
    import Counter from './lib/Counter.svelte';
    import * as THREE from 'three';
    import init, { resolve_collisions } from '../physics/pkg/physics.js';

    let particles = new Float64Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    let right = false;
    let left = false;
    let up = false;
    let down = false;

    const promise = init().then(() => {

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
            spheres.push(sphere);
            scene.add(sphere);
        }

        function animate() {
            requestAnimationFrame(animate);

            let cols = new Set(resolve_collisions(particles));

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.05;
            torus.rotation.z += 0.01;

            const speed = 0.1;

            if (right) {
                particles[0] += speed;
            } else if (left) {
                particles[0] -= speed;
            }
            if (up) {
                particles[1] += speed;
            } else if (down) {
                particles[1] -= speed;
            }

            spheres.forEach((sphere, i) => {
                sphere.position.x = particles[i * 2];
                sphere.position.y = particles[i * 2 + 1];
                if (cols.has(i)) {
                    sphere.material.color.setHex(0x00ff00);
                } else {
                    sphere.material.color.setHex(0xff6347);
                }
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

<main>
    <canvas id="bg" class="fixed left-0 top-0"></canvas>
    <!-- <p class="font-bold text-red-400">I am here.</p>
    {#await promise then}
        <button on:click={() => {
            resolve_collisions(particles);
        }}>Move</button>
    {/await} -->
    
    <!-- <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} class="logo" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
            <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
    </div>
    <h1>Vite + Svelte</h1>

    <div class="card">
        <Counter />
    </div>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
        Click on the Vite and Svelte logos to learn more
    </p> -->
</main>

<!-- <style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }


</style> -->
<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>