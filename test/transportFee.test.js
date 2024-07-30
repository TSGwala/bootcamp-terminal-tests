import { transportFee } from '../transportFee.js';
import assert from 'assert';

describe('transportFee function', function() {
    it('should return the transport fee based on the shift', function() {
        assert.strictEqual(transportFee('morning'), 'R20');
        assert.strictEqual(transportFee('afternoon'), 'R10');
        assert.strictEqual(transportFee('night'), 'R0');
    });
});
