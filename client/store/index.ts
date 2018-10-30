import Vuex from 'vuex';

import QuiltSizeStore from '../features/QuiltSize/stores/QuiltSize/QuiltSize.Store';
import IQuiltSizeState from '../features/QuiltSize/stores/types/QuiltSizeState';

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
