const Robot = require('../robot/robot.js');
class Commander {
    constructor(grid) {
        this.grid = grid;
    }

    parseCommands(commands) {
        const commandBlock = commands.match(/^\(([^)]+)\) (\S+)$/);
        const robotPosition = commandBlock[1].replace(/ /g, '').split(',');
        const movementCommands = commandBlock[2];
        return [robotPosition, movementCommands];
    }
    processCommands(commands) {
        const [robotPosition, movementCommands] = this.parseCommands(commands);

        const robot = new Robot(
            robotPosition[0],
            robotPosition[1],
            robotPosition[2],
        );

        for (const command of movementCommands) {
            if (command === 'F') {
                robot.move();
                if (this.grid.isOnGrid(r.position)) {
                    robot.lastKnownPosition = r.position;
                } else {
                    robot.state = 'LOST';
                }
            } else {
                robot.rotate(command);
            }
        }
        return robot.position;
    }
}

module.exports = Commander;
