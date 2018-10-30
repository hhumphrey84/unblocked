import { randomNumberWithExclusionGetter } from './randomNumberWithExclusion';

describe('randomNumberWithExclusion()', () => {
    it('should return the first number that does not match the exclusion', () => {
        const randomNumberStub = jest.fn();
        const exclusionValue = 4;
        const expectedReturnValue = 5;

        randomNumberStub
            .mockReturnValueOnce(exclusionValue)
            .mockReturnValueOnce(exclusionValue)
            .mockReturnValueOnce(expectedReturnValue)
            .mockReturnValueOnce(7);

        const randomNumberWithExclusion = randomNumberWithExclusionGetter(randomNumberStub);
        const returnedValue = randomNumberWithExclusion(0, 10, exclusionValue);

        expect(randomNumberStub.mock.calls.length).toBe(3);
        expect(returnedValue).toBe(expectedReturnValue);
    });
});
