// Class resprensation of the grid
class Grid {
    // initialise the grid with a max x and max y value
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // check if the supplied x/y co-ordinates are on the grid
    // is the x value greater than 0 and less than the width
    // and
    // is the y value greater than 0 and less than the height
    isOnGrid(x, y) {
        return (
            (x >= 0 && x <= this.x) && (y >= 0 && y <= this.y)
        );
    }
}

module.exports = Grid;
