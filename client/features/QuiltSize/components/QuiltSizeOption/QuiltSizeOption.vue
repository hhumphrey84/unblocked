<template>
    <li
        :aria-selected="isSelected"
        :class="{ focused: isSelected }"
        :data-test-id="testIds.WRAPPER"
        :data-test-value="data.id"
        class="option"
        role="option"
        @click="onClick(data.id)"
    >
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
    </li>
</template>

<style scoped src="./quilt-size-option.css"></style>

<script>
    import QuiltOptionTestIds from '../constants/QuiltOptionTestIds';

    const props = {
        data: {
            type: Object,
            required: true,
        },
        isSelected: {
            type: Boolean,
            required: true,
        },
        onClick: {
            type: Function,
            required: true,
        },
    };

    const data = {
        testIds: QuiltOptionTestIds,
    };

    const computed = {
        title() {
            return this.data.id;
        },

        description() {
            return `${this.data.width}" x ${this.data.height}"`;
        },
    };

    export default {
        name: 'QuiltSizeOption',
        props,
        data: () => data,
        computed,
    };
</script>
