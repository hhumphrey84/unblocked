<template>
    <div>
        <app-header />
        <quilt-size-selector />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import AppHeader from '~/components/Header/Header.vue';
    import QuiltSizeSelector from '~/features/QuiltSize/components/QuiltSizeSelector/QuiltSizeSelector';

    const components = {
        AppHeader,
        QuiltSizeSelector,
    };

    export default {
        components,
    }
</script>
