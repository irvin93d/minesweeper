import 'chai/register-should';

import reducers from './reducers'
import * as actions from './actions'

describe('minesweeper reducers', () => {
    it('should return the initial state', () => {
        const state = reducers(undefined, {});
        state.should.have.deep.equal({
            'cols': 0,
            'foundMines': 0,
            'minefield': [],
            'mines': 0,
            'rows': 0,
        });
    });

    describe('on action ' + actions.NEW_GAME, () => {
        const rows = 6;
        const cols = 8;
        const mines = 13;
        const state = reducers(undefined, actions.newGame({ rows, cols, mines }));
        const minefield = state.minefield

        it('should create the correct size', () => {
            minefield.should.have.lengthOf(rows);
            forAllRows(state, (row) => row.should.have.lengthOf(cols));
            state.should.have.property('rows', rows);
            state.should.have.property('cols', cols);
        });

        it('should have all closed', () => {
            forAllCells(state, (cell) => cell.should.have.property('open', false));
        });

        it('should have correct number of mines', () => {
            let count = 0;
            forAllCells(state, (cell) => {
                cell.mine.should.be.an('boolean')
                count += cell.mine;
            });
            count.should.equal(mines);
        });
    });
});

const forAllRows = (state, f) => {
    for (let r = 0; r < state.rows; r++) { f(state.minefield[r]) }
}

const forAllCells = (state, f) => {
    forAllRows(state, (row) => {
        for (let c = 0; c < state.cols; c++) { f(row[c]) }
    });
}
