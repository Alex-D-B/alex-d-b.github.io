use crate::vector2::Vector2;

struct Particle {
    x: f64,
    y: f64,
    // radius: f64
}
const PARTICLE_SIZE: usize = std::mem::size_of::<Particle>() / 8;

pub struct ParticleList<'a> {
    coords: &'a mut [f64],
    size: usize
}

impl<'a> ParticleList<'a> {
    pub fn get_pos(&self, index: usize) -> Vector2 {
        Vector2::new(self.coords[index * PARTICLE_SIZE], self.coords[index * PARTICLE_SIZE + 1])
    }

    pub fn set_pos(&mut self, index: usize, pos: Vector2) {
        (self.coords[index * PARTICLE_SIZE], self.coords[index * PARTICLE_SIZE + 1]) = pos.into();
    }

    pub fn len(&self) -> usize {
        self.size
    }
}

impl<'a> From<&'a mut [f64]> for ParticleList<'a> {
    fn from(coords: &'a mut [f64]) -> Self {
        let size = coords.len() / PARTICLE_SIZE;
        ParticleList { coords, size }
    }
}
