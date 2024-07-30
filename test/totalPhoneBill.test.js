import { totalPhoneBill } from '../totalPhoneBill.js';
import assert from 'assert';

describe('totalPhoneBill function', function() {
    it('should calculate the total phone bill based on calls and sms', function() {
        assert.strictEqual(totalPhoneBill('call, sms, call'), '6.25'); // Expected to be 6.25
        assert.strictEqual(totalPhoneBill('call, sms'), '3.50');      // Expected to be 3.50
    });
});

