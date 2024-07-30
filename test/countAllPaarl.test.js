import { countAllPaarl } from '../countAllPaarl.js';
import assert from 'assert';

describe('countAllPaarl function', function() {
    it('should count the number of registration numbers from Paarl', function() {
        assert.strictEqual(countAllPaarl('CJ 123, CJ 456, CA 789'), 2); // Expected to be 2
        assert.strictEqual(countAllPaarl('CJ 123, CA 456'), 1);      // Expected to be 1
    });
});

