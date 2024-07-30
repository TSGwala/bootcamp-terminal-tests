import { findItemsOver } from '../findItemsOver.js';
import assert from 'assert';

describe('findItemsOver function', function() {
    it('should return items with quantity over a given threshold', function() {
        const items = [{ name: 'item1', qty: 30 }, { name: 'item2', qty: 10 }];
        assert.deepStrictEqual(findItemsOver(items, 20), [{ name: 'item1', qty: 30 }]);
    });
});
