namespace endaufgabe_jogi {
    export class Vector {
        public x: number;
        public y: number;

        public constructor(_x: number = 0, _y: number = 0) {
            this.set(_x, _y);
        }

        public static getDifference(_vector1: Vector, _vector2: Vector): Vector {
            return new Vector(_vector1.x - _vector2.x, _vector1.y -  _vector2.y);
            
        }

        public static getNormalisedVector(_normalise: Vector, _length: number): Vector | undefined {
            let magnitude: number = Math.sqrt(_normalise.x * _normalise.x + _normalise.y * _normalise.y);
            if (magnitude > 0) {
                let normalised: Vector = new Vector (_normalise.x / magnitude, _normalise.y / magnitude);
                let scaledNormalised: Vector = new Vector (normalised.x * 10, normalised.y * 10);
                return scaledNormalised;
            }
            return undefined;
        }

        /*public static getRandom(_minLength: number, _maxLength: number): Vector {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;
            return Vector.getPolar(direction, length);
        }

        public static getPolar(_angle: number, _length: number): Vector {
            let vector: Vector = new Vector();
            vector.set(Math.cos(_angle), Math.sin(_angle));
            vector.scale(_length);
            return vector;
        } */

        public get length(): number {
            return Math.hypot(this.x, this.y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_end: Vector): void {
            this.x += _end.x;
            this.y += _end.y;
        }

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}