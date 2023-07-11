use wasm_bindgen::prelude::*;
use std::ops::{Deref, DerefMut};

use crate::vector2::Vector2;

#[derive(Copy, Clone, Debug)]
pub struct Particle {
    pub pos: Vector2,
    pub vel: Vector2,
    pub acc: Vector2,
    pub radius: f64
}

static mut LIST: Vec<Particle> = Vec::new();

#[wasm_bindgen]
pub fn add_particle(x: f64, y: f64, radius: f64) {
    unsafe { LIST.push(Particle {
        pos: Vector2::new(x, y),
        vel: Vector2::new(0.0, 0.0),
        acc: Vector2::new(0.0, 0.0),
        radius
    }) }
}

#[wasm_bindgen]
pub fn remove_particle(index: usize) {
    unsafe { LIST.remove(index); }
}

#[wasm_bindgen]
pub fn apply_x(force: f64) {
    unsafe { LIST[0].acc.x += force; }
}

#[wasm_bindgen]
pub fn apply_y(force: f64) {
    unsafe { LIST[0].acc.y += force; }
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
