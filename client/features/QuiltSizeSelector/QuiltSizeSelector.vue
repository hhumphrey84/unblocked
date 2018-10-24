<template>
    <div>
        <quilt-list
            :options="options"
            :selected-option-id="selectedOptionId"
            :on-option-click="onOptionClick"
        />
    </div>

</template>

<script>
    import {
        mapState,
        mapActions,
    } from 'vuex';

    import QuiltList from './QuiltList/QuiltList';

    const components = {
        QuiltList,
    };

    const computed = {
        ...mapState({
            options: state => state.quiltSize.sizes,
            selectedOptionId: state => state.quiltSize.selectedId,
        }),
    };

    const methods = {
        ...mapActions({
            onOptionClick: 'quiltSize/changeSelected'
        }),
    };

    export default {
        name: 'QuiltSizeSelector',
        components,
        computed,
        methods,
    };
</script>
