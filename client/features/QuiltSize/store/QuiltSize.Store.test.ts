import {
    actions,
    mutations,
} from './QuiltSize.Store';

describe('QuiltSize > mutations', () => {
    it('setSelected > should set the selectedId', () => {
        const state = {
            selectedId: '1',
            sizes: [],
        };

        mutations.setSelected(state, '2');

        expect(state.selectedId).toBe('2');
    });
});

describe('QuiltSize > actions', () => {
    it('changeSelected > should send the correct payload to commit', () => {
        const commit = jest.fn();

        actions.changeSelected({ commit }, '12345');

        expect(commit.mock.calls.length).toBe(1);
        expect(commit.mock.calls[0]).toEqual([
            'setSelected',
            '12345'
        ]);
    });
});
