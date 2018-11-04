import { setSelected } from './QuiltSize.Mutations';

describe('QuiltSize.Mutations', () => {
    describe('setSelected()', () => {
        it('should set the selectedId', () => {
            const state = {
                selectedId: '1',
                sizes: [],
            };

            setSelected(state, '2');

            expect(state.selectedId).toBe('2');
        });
    });
});
