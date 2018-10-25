import { IRootState } from 'store';
import {
    ActionTree,
    MutationTree
} from 'vuex';

import { DEFAULT_QUILT_SIZES } from '../quilt-size.constants';

import QuiltSize from './models/QuiltSize';

interface IQuiltSizeState {
    selectedId: string;
    sizes: QuiltSize[];
}

const state = (): IQuiltSizeState => ({
    selectedId: DEFAULT_QUILT_SIZES[0].id,
    sizes: DEFAULT_QUILT_SIZES,
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
    mutations,
};
