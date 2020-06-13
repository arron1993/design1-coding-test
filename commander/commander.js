const Robot = require('../robot/robot.js');
class Commander {
    constructor(grid) {
        this.grid = grid;
    }

    parseCommands(commands) {
        const commandBlock = commands.match(/^\(([^)]+)\) (\S+)$/);
        const robotPosition = commandBlock[1].replace(' ', '').split(',');
        const movementCommands = commandBlock[2];
        return [robotPosition, movementCommands];
    }
    processCommands(commands) {
        const [robotPosition, movementCommands] = this.parseCommands(commands);
        console.log(robotPosition);

        let r = new Robot(
            robotPosition[0],
            robotPosition[1],
            robotPosition[2],
        );

        for (let command of movementCommands) {
            console.log(command);
            if (command === 'F') {
                r.move()
            }
            else {
                r.rotate(command);
            }

        }
        return r.position
    }
}

module.exports = Commander;
