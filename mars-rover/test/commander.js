const assert = require('assert');

const Grid = require('../grid/grid.js');
const Commander = require('../commander/commander.js');

describe('commander with 4x8 grid', function() {
    grid = new Grid(4, 8);
    commander = new Commander(grid);

    describe('commander initilised with grid', function() {
        commander.grid.x = 4;
        commander.grid.y = 8;
    });

    describe('command "(0, 0, N) FFLR"', function() {
        it('should return "(0, 2, N)"', function() {
            const res = commander.processCommands('(0, 0, N) FFLR');
            assert.equal(res, '(0, 2, N)');
        });
    });

    describe('command "(0, 0, N) FFR"', function() {
        it('should return "(0, 2, E)"', function() {
            const res = commander.processCommands('(0, 0, N) FFR');
            assert.equal(res, '(0, 2, E)');
        });
    });

    describe('command "(2, 3, N) FLLFR"', function() {
        it('should return "(1, 4, N)"', function() {
            const res = commander.processCommands('(2, 3, N) FLLFR');
            assert.equal(res, '(2, 3, W)');
        });
    });

    describe('command "(0, 0, S) FFF"', function() {
        it('should return "(0, 0, S) LOST"', function() {
            const res = commander.processCommands('(0, 0, S) F');
            assert.equal(res, '(0, 0, S) LOST');
        });
    });

    describe('command "(1, 0, S) FFRLF"', function() {
        it('should return "(1, 0, S) LOST"', function() {
            const res = commander.processCommands('(1, 0, S) FFRLF');
            assert.equal(res, '(1, 0, S) LOST');
        });
    });
});
