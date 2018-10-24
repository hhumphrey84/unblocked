import Vuex from 'vuex';

import QuiltSizeStore, { IQuiltSizeState } from './modules/QuiltSize.Store';

interface IRootState {
    quiltSize: IQuiltSizeState;
}

const createStore = () => {
    return new Vuex.Store({
        modules: {
            quiltSize: QuiltSizeStore,
        },
        strict: process.env.NODE_ENV !== 'production',
    });
};

export {
    createStore as default,
    IRootState,
};
