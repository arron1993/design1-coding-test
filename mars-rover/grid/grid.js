// Class resprensation of the grid
class Grid {
    // initialise the grid with a max x and max y value
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // check if the supplied x/y co-ordinates are on the grid
    isOnGrid(x, y) {
        return (
            (x > 0 && x < this.x) && (y > 0 && y < this.y)
        );
    }
}

module.exports = Grid;
