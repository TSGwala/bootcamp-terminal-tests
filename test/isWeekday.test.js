import { isWeekday } from '../isWeekday.js';
import assert from 'assert';

describe('isWeekday function', function() {
    it('should return true for weekdays', function() {
        assert.strictEqual(isWeekday('Monday'), true);
        assert.strictEqual(isWeekday('Sunday'), false);
    });
});
