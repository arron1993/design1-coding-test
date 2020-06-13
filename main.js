const readline = require("readline");

const Robot = require('./robot/robot.js');
const Grid = require('./grid/grid.js');
const Commander = require('./commander/commander.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter grid size: ", function(gridInput) {
    [x, y] = gridInput.split(' ');
    const grid = new Grid(x, y);

    const commander = new Commander(grid);
    rl.question("Enter commands: ", function(commands) {
        console.log(commander.processCommands(commands));
        rl.close();
    });
});
