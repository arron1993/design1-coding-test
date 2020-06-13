const readline = require('readline');

const Grid = require('./grid/grid.js');
const Commander = require('./commander/commander.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function readCommands(grid) {
    const commands = [];
    rl.setPrompt('');
    rl.prompt();

    rl.on('line', function(cmd) {
        // if the user didn't enter anything then start processing
        if (cmd === '') {
            // the first command should be the grid size
            // so remove that from the list
            [x, y] = commands.shift().split(' ');

            const grid = new Grid(x, y);
            const commander = new Commander(grid);

            for (const commandInput of commands) {
                console.log(commander.processCommands(commandInput));
            }
            process.exit(0);
        } else {
            // user entered a command so add it to the list
            commands.push(cmd);
        }
    });
}

readCommands();
