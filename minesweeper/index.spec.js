import 'chai/register-should';

import minesweeper from '.';
import * as ActionTypes from './actions-types'

describe('minesweeper game', () => {
    it.skip('should generate correct size', () => {
    });
    it.skip('should have correct number of mines', () => {
    });
    it.skip('should all be closed', () => {
    });
    it.skip('should open correct cell', () => {
    });
    it.skip('should open recursively if empty', () => {
    });
});


describe('New Minesweeper', () => {
    // TODO Generate a bunch of random fields
    const rows = 6;
    const cols = 10;
    const mines = 30;
    const minefield = minesweeper(null, {
        type: ActionTypes.NEW_MINESWEEPER,
        payload: { rows, cols }
    });

    it('should generate correct size', () => {
        minefield.should.be.an('array');
        minefield.should.have.length(rows);
        minefield.forEach((row) => {
            row.should.be.an('array');
            row.should.have.length(cols);
        })
    });
    it('should all be closed', () => {
        minefield.reduce((a, b) => a.concat(b), [])
            .forEach((cell) => cell.open.should.be.false)
    });
    it.skip('should have correct number of mines', () => {
        let count = 0;
        minefield.reduce((a, b) => a.concat(b), [])
            .forEach((cell) => count += cell.mine)
        count.should.equal(mines);
    });
    it.skip('should open correct cell', () => {
        // TODO Open corners
        // TODO Open edges
        // TODO Open arbitrary on field
    });
    it.skip('should open recursively if empty', () => {
        // TODO Open corners
        // TODO Open edges
        // TODO Open arbitrary on field
    });
    it.skip('should not allow to many mines', () => {
    });
    it.skip('should not allow negative mines', () => {
    });
});

