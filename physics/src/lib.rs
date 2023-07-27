use wasm_bindgen::prelude::*;
use particle::{ParticleList, SphereContainer, RelativePosition, Gravity, RelativePositionAndGravity};
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
        for interaction in particle.interacts_with.iter() {
            match interaction {
                RelativePosition(i) => {
                    particle.acc += ParticleList[*i].acc;
                },
                Gravity(i) => {
                    let direction = (ParticleList[*i].pos - particle.pos).normalize();
                    let dist = Vector2::dist(ParticleList[*i].pos, particle.pos);
                    particle.acc += GRAV * ParticleList[*i].mass * direction / dist.powi(2);
                },
                RelativePositionAndGravity(i) => {
                    let direction = (ParticleList[*i].pos - particle.pos).normalize();
                    let dist = Vector2::dist(ParticleList[*i].pos, particle.pos);
                    particle.acc += ParticleList[*i].acc + GRAV * ParticleList[*i].mass * direction / dist.powi(2);
                }
            }
        }
    }

    for i in 0..ParticleList.len() - 1 {
        for j in i + 1..ParticleList.len() {

            if ParticleList[i].radius != 0.0 && ParticleList[j].radius != 0.0 {
            
                let dist = Vector2::dist(ParticleList[i].pos, ParticleList[j].pos);
                if ParticleList[i].particle_type == SphereContainer {
                    handle_container_collision(i, j, dist);
                } else if ParticleList[j].particle_type == SphereContainer {
                    handle_container_collision(j, i, dist);
                } else {
                    handle_collision(i, j, dist);
                }

            }
            
        }
    }

}

fn handle_collision(i: usize, j: usize, dist: f64) {
    let direction = (ParticleList[j].pos - ParticleList[i].pos).normalize();

    let min_dist = ParticleList[i].radius + ParticleList[j].radius;
    if dist < min_dist {
        
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

fn handle_container_collision(container_idx: usize, particle_idx: usize, dist: f64) {
    if dist > ParticleList[container_idx].radius {
        handle_collision(container_idx, particle_idx, dist)
    } else {
        let direction = (ParticleList[container_idx].pos - ParticleList[particle_idx].pos).normalize();

        let min_dist = ParticleList[container_idx].radius - ParticleList[particle_idx].radius;
        if dist > min_dist {
            
            let overlap = dist - min_dist;

            ParticleList[particle_idx].pos += overlap * direction;

            let total_momentum = ParticleList[container_idx].mass * ParticleList[container_idx].vel + ParticleList[particle_idx].mass * ParticleList[particle_idx].vel;
            let total_mass = ParticleList[container_idx].mass + ParticleList[particle_idx].mass;

            let a_vel = (total_momentum + ParticleList[particle_idx].mass * RESTITUTION * (ParticleList[particle_idx].vel - ParticleList[container_idx].vel)) / total_mass;
            let b_vel = (total_momentum + ParticleList[container_idx].mass * RESTITUTION * (ParticleList[container_idx].vel - ParticleList[particle_idx].vel)) / total_mass;

            // ParticleList[container_idx].vel = a_vel;
            ParticleList[particle_idx].vel = b_vel;

        }
    }
}

fn compute_drag() {
    for particle in ParticleList.iter_mut() {
        let drag = particle.vel * DRAG;
        particle.acc += drag;
    }
}
