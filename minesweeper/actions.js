const makeAction = type => payload => ({ type, payload });

export const OPEN_CELL = 'OPEN_CELL';
export const openCell = makeAction(OPEN_CELL);

export const NEW_GAME = 'NEW_GAME';
export const newGame = makeAction(NEW_GAME);