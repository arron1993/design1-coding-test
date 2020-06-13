const assert = require('assert');

const Grid = require('../grid/grid.js');
const Commander = require('../commander/commander.js');

describe('commander', function () {
    grid = new Grid(4, 8);
    commander = new Commander(grid);

    describe('commander initilised with grid', function () {
        commander.grid.x = 4;
        commander.grid.y = 8;
    });

    describe('command "(0, 0, N) FFLR"', function () {
        it('should return "(0, 2, N)"', function () {
            const res = commander.processCommands('(0, 0, N) FFLR');
            assert.equal(res, '(0, 2, N)');
        });
    });

    describe('command "(0, 0, N) FFR"', function () {
        it('should return "(0, 2, E)"', function () {
            const res = commander.processCommands('(0, 0, N) FFR');
            assert.equal(res, '(0, 2, E)');
        });
    });

    describe('command "(0, 2, N) FFLFRFF"', function () {
        it('should return "(0, 2, E)"', function () {
            const res = commander.processCommands('(0, 2, N) FFLFRFF');
            assert.equal(res, '(1, 2, N)');
        });
    });
});
