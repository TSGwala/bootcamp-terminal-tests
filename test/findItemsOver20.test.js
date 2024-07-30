import { findItemsOver20 } from '../findItemsOver20.js';
import assert from 'assert';

describe('findItemsOver20 function', function() {
    it('should return items with quantity over 20', function() {
        const items = [{ name: 'item1', qty: 21 }, { name: 'item2', qty: 15 }];
        assert.deepStrictEqual(findItemsOver20(items), [{ name: 'item1', qty: 21 }]);
    });
});
