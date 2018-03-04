const should = require('should');
const algo = require('../../index.js');

describe('Binary search', () => {
    it('should return searched number', () => {
        const elemIndex = algo.binarySearch([1, 2, 3, 4, 5, 6], 6);

        should(elemIndex).be.eql(5);
    });
    it.only('should return searched number (sequance length 1)', () => {
		const elementIndex = algo.binarySearch([4], 4);

		should(elementIndex).be.eql(-1);
	});

	it('should return -1 (no elements in sequance)', () => {
		const elementIndex = algo.binarySearch([], 4);

		should(elementIndex).be.eql(-1);
	});
});
