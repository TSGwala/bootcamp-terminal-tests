import { fromWhere } from '../fromWhere.js';
import assert from 'assert';

describe('fromWhere function', function() {
    it('should return the town based on the registration number', function() {
        assert.strictEqual(fromWhere('CY 123'), 'Bellville');
        assert.strictEqual(fromWhere('CJ 123'), 'Paarl');
        assert.strictEqual(fromWhere('CA 123'), 'Cape Town');
        assert.strictEqual(fromWhere('ZZ 123'), 'Unknown');
    });
});
