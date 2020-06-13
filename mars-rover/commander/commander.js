const Robot = require('../robot/robot.js');
class Commander {
    constructor(grid) {
        this.grid = grid;
    }

    parseCommands(commands) {
        // (1, 0, S) FFRLF
        // regex splits the above example into (1, 0, 2) and FFRLF
        const commandBlock = commands.match(/^\(([^)]+)\) (\S+)$/);

        // split the x, y, orientation
        // strip any replaces and split on the comma
        // can probably get the regex to this but the regex is unreadable enough
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
                // move forwards
                robot.move();
                if (this.grid.isOnGrid(robot.x, robot.y)) {
                    // if the robot is on the grid
                    // record its last known position
                    // and make sure the state is set to ok
                    robot.lastKnownPosition = robot.position;
                    robot.state = 0;
                } else {
                    // robot has left the grid so
                    // set state to not okay
                    robot.state = 1;
                }
            } else {
                // command is not a F, so it has to be an L or R
                // so rotate
                robot.rotate(command);
            }
        }
        return robot.position;
    }
}

module.exports = Commander;
