import { IRootState } from 'store';
import {
    ActionTree,
    MutationTree
} from 'vuex';

import QuiltSize from './models/QuiltSize';

// TODO: move out of this file
const defaultQuiltSizes = [
    {
        height: 52,
        id: 'baby',
        width: 36,
    },
    {
        height: 65,
        id: 'single',
        width: 50,
    },
    {
        height: 90,
        id: 'twin',
        width: 70,
    },
    {
        height: 110,
        id: 'double',
        width: 85,
    },
    {
        height: 110,
        id: 'queen',
        width: 90,
    },
    {
        height: 110,
        id: 'king',
        width: 110,
    },
];

interface IQuiltSizeState {
    selectedId: string;
    sizes: QuiltSize[];
}

const state = (): IQuiltSizeState => ({
    selectedId: defaultQuiltSizes[0].id,
    sizes: defaultQuiltSizes,
});

const actions: ActionTree<IQuiltSizeState, IRootState> = {
    changeSelected({ commit }, selectedOptionId: string) {
        commit('setSelected', selectedOptionId);
    },
};

const mutations: MutationTree<IQuiltSizeState> = {
    setSelected(state: IQuiltSizeState, payload: string) {
        state.selectedId = payload;
    },
};

const QuiltSizeStore = {
    actions,
    mutations,
    namespaced: true,
    state,
};

export {
    QuiltSizeStore as default,
    IQuiltSizeState,
};
