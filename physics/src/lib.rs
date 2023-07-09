use wasm_bindgen::prelude::*;
use std::collections::HashSet;
use particle::ParticleList;
use vector2::Vector2;

mod particle;
mod vector2;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn resolve_collisions() -> Vec<i32> {
    let mut out_list: HashSet<i32> = HashSet::new();
    let mut list = ParticleList;

    for i in 0..list.len() - 1 {
        for j in i + 1..list.len() {

            // let pos_i = list.get_pos(i);
            // let pos_j = list.get_pos(j);

            if Vector2::dist(list[i].pos, list[j].pos) < 2.0 {
                out_list.insert(i as i32);
                out_list.insert(j as i32);
            }

        }
    }

    out_list.into_iter().collect()
}
