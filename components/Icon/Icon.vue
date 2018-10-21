<template>
    <svg
        :aria-labelledby="id"
        :data-test-id="dataTestId"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title :id="id">{{ title }}</title>
        <slot />
    </svg>
</template>

<script>
    import testIds from './testIds.constants';

    const props = {
        dataTestId: {
            type: String,
            required: false,
            default: testIds.WRAPPER,
        },
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    }

    export default {
        props,
    };
</script>
