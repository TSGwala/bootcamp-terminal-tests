import { isFromBellville } from '../isFromBellville.js';
import assert from 'assert';

describe('isFromBellville function', function() {
    it('should return true if the registration number is from Bellville', function() {
        assert.strictEqual(isFromBellville('CY 123'), true);
        assert.strictEqual(isFromBellville('CA 123'), false);
    });
});

