import QuiltSize from './models/QuiltSize';

interface IQuiltSizeState {
    selected: number;
    sizes: QuiltSize[];
}

const state = (): IQuiltSizeState => ({
    selected: 0,
    sizes: [{
        height: 2,
        id: 'baby',
        width: 1,
    }],
});

const QuiltSizeStore = {
    namespaced: true,
    state,
};

export {
    QuiltSizeStore as default,
    IQuiltSizeState,
};
