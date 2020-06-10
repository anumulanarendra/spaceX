import { reposLoaded } from '../actions';
import { LOAD_REPOS_SUCCESS } from '../constants';

describe('History actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_REPOS_SUCCESS,
      };
      expect(reposLoaded()).toEqual(expected);
    });
  });
});
