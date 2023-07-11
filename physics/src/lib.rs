use wasm_bindgen::prelude::*;
use particle::ParticleList;
use vector2::Vector2;

mod particle;
mod vector2;

const DRAG: f64 = -1.0;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn update(dt: f64) {
    let mut list = ParticleList;

    compute_drag();
    
    for particle in list.iter_mut() {
        particle.vel += particle.acc * dt;
        particle.pos += particle.vel * dt;
        particle.acc = Vector2::zero();
    }
    
    resolve_collisions();
}

fn resolve_collisions() {
    let mut list = ParticleList;

    for i in 0..list.len() - 1 {
        for j in i + 1..list.len() {

            let dist = Vector2::dist(list[i].pos, list[j].pos);
            let min_dist = list[i].radius + list[j].radius;
            if dist < min_dist {
                
                let direction = (list[j].pos - list[i].pos).normalize();
                let overlap = min_dist - dist;

                list[i].pos -= overlap * direction / 2.0;
                list[j].pos += overlap * direction / 2.0;

            }

        }
    }

}

fn compute_drag() {
    let mut list = ParticleList;

    for particle in list.iter_mut() {
        let drag = particle.vel * DRAG;
        particle.acc += drag;
    }
}
