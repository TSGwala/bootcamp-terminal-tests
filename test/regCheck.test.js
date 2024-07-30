import { regCheck } from '../regCheck.js';
import assert from 'assert';

describe('regCheck function', function() {
    it('should return true if the registration number ends with the specified location', function() {
        assert.strictEqual(regCheck('ABC 123', '123'), true);
        assert.strictEqual(regCheck('ABC 456', '789'), false);
    });
});

