import * as ActionTypes from './actions-types'

const initialState = [];

export default function minesweeper(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.NEW_MINESWEEPER:
            return newMinefield(state, action.payload);
        default:
            return state;
    }
}

function newMinefield(state, payload) {
    const mf = [];
    for (let r = 0; r < payload.rows; r++) {
        const row = [];
        for (let c = 0; c < payload.cols; c++) {
            row[c] = { open: false, mine: false, surrounding: undefined }
        }
        mf[r] = row;
    }
    return mf;
}

//function initMinefield(rows, cols, mines) {
//}
/*
export function emptyMinefield(rows, cols) {
    const mf = [];
    for (let r ; r < rows ; r++){
        row = []
        for (let c ; c < cols ; c++){
            row[c] = {open: false, mine: false, surrounding: undefined}
        }
        mf[r] = row;
    }
    return mf;
}
*/