import { yearsAgo } from '../yearsAgo.js';
import assert from 'assert';

describe('yearsAgo function', function() {
    it('should return the number of years ago from the current year', function() {
        const currentYear = new Date().getFullYear();
        assert.strictEqual(yearsAgo(currentYear - 5), 5);
        assert.strictEqual(yearsAgo(currentYear), 0);
    });
});

