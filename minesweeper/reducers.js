import * as actions from './actions';

const initialState = {
    cols: 0,
    foundMines: 0,
    minefield: [],
    mines: 0,
    rows: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.NEW_GAME:
            return newGame(action.payload);

        default:
            return state;
    }
}

const newGame = (payload) => {
    const minefield = new Array(payload.rows);
    for (let r = 0; r < minefield.length; r++) {
        minefield[r] = new Array(payload.cols)
        for (let c = 0; c < minefield[r].length; c++) {
            minefield[r][c] = newMineCell();
        }
    }
    return {
        cols: payload.cols,
        minefield: minefield,
        rows: payload.rows,
    };
};

const newMineCell = () => {
    return { 
        open: false,
        mine: false
    }
};