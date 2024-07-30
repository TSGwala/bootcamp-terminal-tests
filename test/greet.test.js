import { greet } from '../greet.js';
import assert from 'assert';

describe('greet function', function() {
    it('should return a greeting message', function() {
        const result = greet('John');
        const expected = 'Hello, John!';
        assert.strictEqual(result, expected);
    });
});
