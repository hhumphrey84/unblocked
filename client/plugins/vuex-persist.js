import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    return new VuexPersistence({
        storage: window.localStorage,
    }).plugin(store);
}
