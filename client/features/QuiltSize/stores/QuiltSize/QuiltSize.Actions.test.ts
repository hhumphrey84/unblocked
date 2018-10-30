import { changeSelected } from './QuiltSize.Actions';

describe('QuiltSize.Actions', () => {
    describe('changeSelected()', () => {
        it('should send the correct payload to commit', () => {
            const commit = jest.fn();

            changeSelected({ commit }, '12345');

            expect(commit.mock.calls.length).toBe(1);
            expect(commit.mock.calls[0]).toEqual([
                'setSelected',
                '12345'
            ]);
        });
    });
});
