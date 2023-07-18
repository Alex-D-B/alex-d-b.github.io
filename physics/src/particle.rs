use wasm_bindgen::prelude::*;
use std::ops::{Deref, DerefMut};

use crate::vector2::Vector2;
use crate::GRAV;

const MAX_SPEED: f64 = 20.0;

#[derive(Copy, Clone, Debug)]
pub struct Particle {
    pub pos: Vector2,
    pub vel: Vector2,
    pub acc: Vector2,
    pub mass:   f64,
    pub radius: f64
}

static mut LIST: Vec<Particle> = Vec::new();

#[wasm_bindgen]
pub fn add_particle(x: f64, y: f64, mass: f64, radius: f64) {
    unsafe { LIST.push(Particle {
        pos: Vector2::new(x, y),
        vel: Vector2::new(0.0, 0.0),
        acc: Vector2::new(0.0, -10.0),
        mass,
        radius
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
            radius
        }) }
    }

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
