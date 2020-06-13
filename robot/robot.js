const orientations = ['N', 'E', 'S', 'W'];

class Robot {
    constructor(x, y, orientation) {
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.orientation = orientation
    }

    move() {
        switch (this.orientation) {
           case 'N':
                this.y += 1
                break
           case 'E':
                this.x += 1
                break
           case "S":
                this.y -= 1
                break
           case "W":
                this.x -= 1
                break
        }
    }

    rotate(direction) {
        const currentIndex = orientations.indexOf(this.orientation);
        let newIndex;
        if (direction === 'R') {
            newIndex = currentIndex + 1

        } else if (direction === 'L') {
            newIndex = currentIndex - 1
        }

        if (newIndex < 0) {
            newIndex = orientations.length - 1;
        }
        else if (newIndex > orientations.length - 1) {
            newIndex = 0
        }
        this.orientation = orientations[newIndex];
    }

    get position() {
        return `(${this.x}, ${this.y}, ${this.orientation})`
    }
}

module.exports = Robot;
