use wasm_bindgen::prelude::*;
use particle::ParticleList;
use vector2::Vector2;
use constants::*;

mod particle;
mod vector2;
mod constants;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn update(dt: f64) {
    resolve_pair_interactions();
    compute_drag();

    for particle in ParticleList.iter_mut() {
        particle.vel += particle.acc * dt;
        particle.pos += particle.vel * dt;
        particle.acc = Vector2::zero();
    }
    
}

fn resolve_pair_interactions() {

    for particle in ParticleList.iter_mut() {
        for i in particle.receives_gravity_from.iter() {
            let direction = (ParticleList[*i].pos - particle.pos).normalize();
            let dist = Vector2::dist(ParticleList[*i].pos, particle.pos);
            particle.acc += ParticleList[*i].acc + GRAV * ParticleList[*i].mass * direction / dist.powi(2);
        }
    }

    for i in 0..ParticleList.len() - 1 {
        for j in i + 1..ParticleList.len() {
            
            let direction = (ParticleList[j].pos - ParticleList[i].pos).normalize();

            let dist = Vector2::dist(ParticleList[i].pos, ParticleList[j].pos);
            let min_dist = ParticleList[i].radius + ParticleList[j].radius;
            if dist < ParticleList[i].radius + ParticleList[j].radius {
                
                let overlap = min_dist - dist;

                ParticleList[i].pos -= overlap * direction / 2.0;
                ParticleList[j].pos += overlap * direction / 2.0;

                let total_momentum = ParticleList[i].mass * ParticleList[i].vel + ParticleList[j].mass * ParticleList[j].vel;
                let total_mass = ParticleList[i].mass + ParticleList[j].mass;

                let a_vel = (total_momentum + ParticleList[j].mass * RESTITUTION * (ParticleList[j].vel - ParticleList[i].vel)) / total_mass;
                let b_vel = (total_momentum + ParticleList[i].mass * RESTITUTION * (ParticleList[i].vel - ParticleList[j].vel)) / total_mass;

                ParticleList[i].vel = a_vel;
                ParticleList[j].vel = b_vel;

            }
            
        }
    }

}

fn compute_drag() {
    for particle in ParticleList.iter_mut() {
        let drag = particle.vel * DRAG;
        particle.acc += drag;
    }
}
