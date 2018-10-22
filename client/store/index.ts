import Vuex from 'vuex';

import QuiltSizeStore, { QuiltSizeState } from './modules/QuiltSize.Store';

interface State {}

interface ModulesStateInterface {
    quiltSize: QuiltSizeState,
}

type RootState = ModulesStateInterface & State;

const state = (): State => ({});

const createStore = () => {
    return new Vuex.Store({
        strict: process.env.NODE_ENV !== 'production',
        state,
        modules: {
            quiltSize: QuiltSizeStore,
        }
    })
}

export {
    createStore as default,
    State,
    RootState,
};
