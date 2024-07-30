import { countAllFromTown } from '../countAllFromTown.js';
import assert from 'assert';

describe('countAllFromTown function', function() {
    it('should count the number of registration numbers from a specific town', function() {
        assert.strictEqual(countAllFromTown('CJ 123, CJ 456, CA 789', 'CJ'), 2); // Expected to be 2
        assert.strictEqual(countAllFromTown('CJ 123, CA 456', 'CJ'), 1);      // Expected to be 1
    });
});
