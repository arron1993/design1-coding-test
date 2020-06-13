const orientations = ['N', 'E', 'S', 'W'];

class Robot {
    constructor(x, y, orientation) {
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.orientation = orientation;
        this.lastKnownPosition = this.position;
        this.state = 0;
    }

    move() {
        switch (this.orientation) {
        case 'N':
            this.y += 1;
            break;
        case 'E':
            this.x += 1;
            break;
        case 'S':
            this.y -= 1;
            break;
        case 'W':
            this.x -= 1;
            break;
        }
    }

    rotate(direction) {
        // use the index of the orientation array to track how we should rotate
        const currentIndex = orientations.indexOf(this.orientation);
        let newIndex;
        if (direction === 'R') {
            newIndex = currentIndex + 1;
        } else if (direction === 'L') {
            newIndex = currentIndex - 1;
        }

        // if the new index is less than 0 or greater than max length
        // then when need to wrap around
        // e.g. -1 becomes 3
        if (newIndex < 0) {
            newIndex = orientations.length - 1;
        } else if (newIndex > orientations.length - 1) {
            newIndex = 0;
        }
        this.orientation = orientations[newIndex];
    }

    get position() {
        if (this.state === 1) {
            return `${this.lastKnownPosition} LOST`;
        } else {
            return `(${this.x}, ${this.y}, ${this.orientation})`;
        }
    }
}

module.exports = Robot;
