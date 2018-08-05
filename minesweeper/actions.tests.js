import 'chai/register-should';

import {
  OPEN_CELL, openCell,
  NEW_GAME, newGame
} from "./actions";

const actions = [
  { type: OPEN_CELL, maker: openCell },
  { type: NEW_GAME, maker: newGame },
]

describe('minesweeper actions', () => {
  for (const a of actions) {
    it('should have correct type and payload for ' + a.type, () => {
      const payload = Math.random();
      const action = a.maker(payload);
      action.should.deep.equal({
        type: a.type, payload: payload
      });
    });
  }
});
