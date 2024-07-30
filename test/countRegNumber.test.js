import { countRegNumber } from '../countRegNumbers.js';
import assert from 'assert';

describe('countRegNumber function', function() {
    it('should return the number of registration numbers', function() {
        assert.strictEqual(countRegNumber('ABC 123, DEF 456'), 2);
        assert.strictEqual(countRegNumber('ABC 123'), 1);
    });
});
