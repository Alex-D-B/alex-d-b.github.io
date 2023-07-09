use wasm_bindgen::prelude::*;
use std::collections::HashSet;
use particle::ParticleList;
use vector2::Vector2;

mod particle;
mod vector2;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

struct Thing<'a> {
    p: &'a &'a mut [f64]
}

#[wasm_bindgen]
pub fn resolve_collisions(pos: &mut [f64]) -> Vec<i32>  {
    let list = ParticleList::from(pos);

    let mut out_list: HashSet<i32> = HashSet::new();

    for i in 0..list.len() - 1 {
        for j in i + 1..list.len() {

            let pos_i = list.get_pos(i);
            let pos_j = list.get_pos(j);

            if Vector2::dist(list.get_pos(i), list.get_pos(j)) < 2.0 {
                out_list.insert(i as i32);
                out_list.insert(j as i32);
            }

        }
    }

    // let mut i = 1;
    // while i < pos.len() {
    //     let tmp = pos[i - 1];
    //     pos[i - 1] = pos[i];
    //     pos[i] = tmp;
    //     i += 2;
    // }

    out_list.into_iter().collect()
}
