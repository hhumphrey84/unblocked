import QuiltSize from './models/QuiltSize';

interface QuiltSizeState {
    selected: number,
    sizes: QuiltSize[],
}

const state = (): QuiltSizeState => ({
    selected: 0,
    sizes: [{
        width: 1,
        height: 2,
        id: 'baby',
    }],
});

const QuiltSizeStore = {
    namespaced: true,
    state,
};

export {
    QuiltSizeStore as default,
    QuiltSizeState,
};
