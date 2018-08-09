import * as actions from './actions';

const initialState = {
    cols: 0,
    foundMines: 0,
    minefield: [],
    mines: 0,
    rows: 0,
}

const initialMineState = {
    open: false,
    mine: false
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
    let state = emptyGame(payload);
    state = setMines(state, payload);
    return state;
}

const emptyGame = (payload) => {
    const minefield = new Array(payload.rows).fill(
        new Array(payload.cols).fill({...initialMineState})
    );
    const state = {
        cols: payload.cols,
        minefield: minefield,
        rows: payload.rows,
        mines: payload.mines,
    };
    return state;
};

const setMines = (state, payload) => {
    const pos = shuffle(cartesian(range(0, payload.rows), range(0, payload.cols)));
    for (let i = 0 ; i < state.mines ; i++ )
        state = setMine(state, pos[i][0], pos[i][1])
    return state;
}

const setMine = (state, row, col) => {
    const mf = state.minefield;
    const rtn = {...state, 
        minefield: [
            ...mf.slice(0,row),
                [
                    ...mf[row].slice(0,col),
                    {...mf[row][col], mine:true},
                    ...mf[row].slice(col+1)
                ],
            ...mf.slice(row+1)
        ]
    };
    return rtn;
}

const range = (min, max) => {
    const rtn = new Array(max - min);
    for (let i = 0; i < rtn.length; i++)
        rtn[i] = min + i;
    return rtn;
}

const cartesian = (arrA, arrB) => {
    const rtn = new Array(arrA.length * arrB.length);
    for (let a = 0; a < arrA.length; a++)
        for (let b = 0; b < arrB.length; b++)
            rtn[a * arrB.length + b] = [arrA[a], arrB[b]];
    return rtn
}

const shuffle = (arr) => {
    const rtn = arr.slice();
    let j, x;
    for (let i = rtn.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = rtn[i];
        rtn[i] = rtn[j];
        rtn[j] = x;
    }
    return rtn;
}
