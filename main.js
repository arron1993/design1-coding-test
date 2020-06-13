const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var gridX = 0;
var gridY = 0;

const orientations = ['N', 'E', 'S', 'W'];

class Robot {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
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

        } else if (direction === 'L'){
            newIndex = currentIndex - 1
        }
        if (newIndex < 0) {
            newIndex = orientations.length;
        }
        else if (newIndex > orientations.length) {
            newIndex = 0
        }
        this.orientation = orientations[newIndex];
    }

    get position() {
        return `(${this.x}, ${this.y}, ${this.orientation})`
    }
}



rl.question("Enter grid size: ", function(grid) {
    [gridX, gridY] = grid.split(' ');


    rl.question("Enter commands: ", function(commands) {
        processCommands(commands);
        rl.close();
    });
});


function processCommands(commands) {
    let robot = new Robot(0, 0, 'N');

    for (let command of commands) {
        if (command === 'F') {
            robot.move()
        }
        else {
            robot.rotate(command);
        }

    }

    console.log(robot.position)
}
