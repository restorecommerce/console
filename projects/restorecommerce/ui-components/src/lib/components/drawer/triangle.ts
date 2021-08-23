
export interface Point {
  x: number;
  y: number;
}

export class Triangle {

  constructor(private a: Point, private b: Point, private c: Point) { }

  containsPoint(point: Point) {
    const v0 = [this.c.x - this.a.x, this.c.y - this.a.y];
    const v1 = [this.b.x - this.a.x, this.b.y - this.a.y];
    const v2 = [point.x - this.a.x, point.y - this.a.y];

    const dot00 = (v0[0] * v0[0]) + (v0[1] * v0[1]);
    const dot01 = (v0[0] * v1[0]) + (v0[1] * v1[1]);
    const dot02 = (v0[0] * v2[0]) + (v0[1] * v2[1]);
    const dot11 = (v1[0] * v1[0]) + (v1[1] * v1[1]);
    const dot12 = (v1[0] * v2[0]) + (v1[1] * v2[1]);

    const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);

    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    return ((u >= 0) && (v >= 0) && (u + v < 1));
  }
}
