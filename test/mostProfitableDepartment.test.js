import { mostProfitableDepartment } from '../mostProfitableDepartment.js';
import assert from 'assert';

describe('mostProfitableDepartment function', function() {
    it('should return the most profitable department', function() {
        const salesData = [
            { department: 'Electronics', sales: 1000 },
            { department: 'Clothing', sales: 2000 },
            { department: 'Books', sales: 1500 }
        ];
        assert.strictEqual(mostProfitableDepartment(salesData), 'Clothing');
    });
});
