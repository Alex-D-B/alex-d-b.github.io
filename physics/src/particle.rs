use wasm_bindgen::prelude::*;
use std::ops::{Deref, DerefMut};

use crate::vector2::Vector2;

#[derive(Copy, Clone, Debug)]
pub struct Particle {
    pub pos: Vector2,
    // radius: f64
}

static mut LIST: Vec<Particle> = Vec::new();

#[wasm_bindgen]
pub fn add_particle(x: f64, y: f64) {
    unsafe { LIST.push(Particle { pos: Vector2::new(x, y) }) }
}

#[wasm_bindgen]
pub fn remove_particle(index: usize) {
    unsafe { LIST.remove(index); }
}

#[wasm_bindgen]
pub fn update_x(delta: f64) {
    unsafe { LIST[0].pos.x += delta; }
}

#[wasm_bindgen]
pub fn update_y(delta: f64) {
    unsafe { LIST[0].pos.y += delta; }
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
