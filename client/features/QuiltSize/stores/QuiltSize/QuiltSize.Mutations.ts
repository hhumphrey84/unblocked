import { MutationTree } from 'vuex';

import IQuiltSizeState from '../types/QuiltSizeState';

const setSelected = (state: IQuiltSizeState, payload: string) => {
    state.selectedId = payload;
};

const mutations: MutationTree<IQuiltSizeState> = {
    setSelected,
};

export {
    mutations as default,
    setSelected,
};
