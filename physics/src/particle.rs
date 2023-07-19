use wasm_bindgen::prelude::*;
use std::ops::{Deref, DerefMut};

use crate::vector2::Vector2;
use crate::GRAV;
use crate::alert;

const MAX_SPEED: f64 = 20.0;

#[derive(Clone, Debug)]
pub struct Particle {
    pub pos: Vector2,
    pub vel: Vector2,
    pub acc: Vector2,
    pub mass:   f64,
    pub radius: f64,
    pub receives_gravity_from: Vec<usize>
}

static mut LIST: Vec<Particle> = Vec::new();

#[wasm_bindgen]
pub fn add_particle(x: f64, y: f64, mass: f64, radius: f64) {
    unsafe { LIST.push(Particle {
        pos: Vector2::new(x, y),
        vel: Vector2::new(0.0, 0.0),
        acc: Vector2::new(0.0, 0.0),
        mass,
        radius,
        receives_gravity_from: Vec::new()
    }) }
}

#[wasm_bindgen]
pub fn add_orbiting_particle(index: usize, x: f64, y: f64, mass: f64, radius: f64, orbit_clockwise: bool) {

    if let Some(base) = ParticleList.get(index) {
        let local_pos = Vector2::new(x, y) - base.pos;
        let mut direction = local_pos.normalize();
        (direction.x, direction.y) = (-direction.y, direction.x);
        if orbit_clockwise {
            direction = -1.0 * direction;
        }
        let velocity_magnitude = (GRAV * base.mass / local_pos.magnitude()).sqrt();
        
        unsafe { LIST.push(Particle {
            pos: Vector2::new(x, y),
            vel: velocity_magnitude * direction + base.vel,
            acc: Vector2::new(0.0, 0.0),
            mass,
            radius,
            receives_gravity_from: vec![index]
        }) }
    } else {
        alert("no particle found when constructing orbit");
    }

}

#[wasm_bindgen]
pub fn add_orbiting_pair(x: f64, y: f64, mass1: f64, mass2: f64, radius1: f64, radius2: f64, orbit_clockwise: bool) {

    // if let Some(base) = ParticleList.get(index) {

    // }

    add_particle(x, y, mass1, radius1);
    add_orbiting_particle(0, x + 20.0, y, mass2, radius2, orbit_clockwise);
    // ParticleList[0].vel = -1.0 * ParticleList[1].vel * ParticleList[1].mass / (ParticleList[0].mass + ParticleList[1].mass);
    // ParticleList[1].vel += ParticleList[0].vel;

}

#[wasm_bindgen]
pub fn remove_particle(index: usize) {
    unsafe { LIST.remove(index); }
}

#[wasm_bindgen]
pub fn apply_x(force: f64) {
    unsafe { if LIST[0].vel.magnitude() < MAX_SPEED { LIST[0].acc.x += force; } }
}

#[wasm_bindgen]
pub fn apply_y(force: f64) {
    unsafe { if LIST[0].vel.magnitude() < MAX_SPEED { LIST[0].acc.y += force; } }
}

#[wasm_bindgen]
pub fn get_particle(index: usize) -> Option<Vec<f64>> {
    unsafe { LIST.get(index).map(|p| vec![p.pos.x, p.pos.y]) }
}

pub struct ParticleList;

impl Deref for ParticleList {
    type Target = [Particle];

    fn deref(&self) -> &[Particle] {
        unsafe { LIST.deref() }
    }
}

impl DerefMut for ParticleList {
    fn deref_mut(&mut self) -> &mut [Particle] {
        unsafe { LIST.deref_mut() }
    }
}
