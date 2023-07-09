use std::ops::{Add, Sub, Mul, Div};

#[derive(Copy, Clone, Debug)]
pub struct Vector2 {
    pub x: f64,
    pub y: f64
}

impl Vector2 {
    pub fn new(x: f64, y: f64) -> Vector2 {
        Vector2 { x, y }
    }

    pub fn dot(self, other: &Vector2) -> f64 {
        self.x * other.x + self.y * other.y
    }

    pub fn magnitude(self) -> f64 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }

    pub fn normalize(self) -> Vector2 {
        let mag = (self.x.powi(2) + self.y.powi(2)).sqrt();
        Vector2 { x: self.x / mag, y: self.y / mag }
    }

    pub fn dist(p1: Vector2, p2: Vector2) -> f64 {
        ((p1.x - p2.x).powi(2) + (p1.y - p2.y).powi(2)).sqrt()
    }
}

impl Add for Vector2 {
    type Output = Vector2;

    fn add(self, rhs: Vector2) -> Self::Output {
        Vector2 { x: self.x + rhs.x, y: self.y + rhs.y }
    }
}

impl Sub for Vector2 {
    type Output = Vector2;

    fn sub(self, rhs: Vector2) -> Self::Output {
        Vector2 { x: self.x - rhs.x, y: self.y - rhs.y }
    }
}

impl Mul<Vector2> for f64 {
    type Output = Vector2;

    fn mul(self, rhs: Vector2) -> Self::Output {
        Vector2 { x: self * rhs.x, y: self * rhs.y }
    }
}

impl Div<f64> for Vector2 {
    type Output = Vector2;

    fn div(self, rhs: f64) -> Self::Output {
        Vector2 { x: self.x / rhs, y: self.y / rhs }
    }
}

impl From<Vector2> for (f64, f64) {
    fn from(v: Vector2) -> Self {
        (v.x, v.y)
    }
}
