const Robot = require('../robot/robot.js');
const assert = require('assert');

describe('Robot', function() {
    robot = new Robot(0, 1, 'N');

    describe('init', function() {
        it('robot x value should be 0', function() {
            assert.equal(robot.x, 0);
        });
        it('robot y value should be 1', function() {
            assert.equal(robot.y, 1);
        });
        it('robot orientation should be N', function() {
            assert.equal(robot.orientation, 'N');
        });
        it('robot position should be (0, 1, N)', function() {
            assert.equal(robot.position, '(0, 1, N)');
        });
    });

    describe('move forward', function() {
        it('after move new y should be 1', function() {
            robot.move();
            assert.equal(robot.y, 2);
        });
    });

    describe('rotate right', function() {
        it('after rotate right new orientation should be E', function() {
            robot.rotate('R');
            assert.equal(robot.orientation, 'E');
        });
    });

    describe('rotate right twice', function() {
        it('after rotating right twice  new orientation should be W', function() {
            robot.rotate('R');
            robot.rotate('R');
            assert.equal(robot.orientation, 'W');
        });
    });

    describe('rotate left once', function() {
        it('after rotating left once new orientation should be S', function() {
            robot.rotate('L');
            assert.equal(robot.orientation, 'S');
        });
    });

    describe('rotate left three times to loop around', function() {
        it('after rotating left three times new orientation should be W', function() {
            robot.rotate('L');
            robot.rotate('L');
            robot.rotate('L');
            assert.equal(robot.orientation, 'W');
        });
    });
});
