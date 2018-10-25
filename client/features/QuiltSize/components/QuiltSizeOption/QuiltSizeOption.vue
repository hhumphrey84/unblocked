<template>
    <li
        :aria-selected="isSelected"
        :class="{ focused: isSelected }"
        :data-test-id="testIds.WRAPPER"
        role="option"
        @click="onClick(data.id)"
    >
        {{ description }} {{ data.width }} x {{ data.height }}
    </li>
</template>

<script>
    import { QUILT_OPTION_TEST_IDS } from '../../quilt-size.constants';

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
        testIds: QUILT_OPTION_TEST_IDS,
    };

    const computed = {
        description() {
            return `Some description: ${this.data.id}`;
        },
    };

    export default {
        name: 'QuiltSizeOption',
        props,
        data: () => data,
        computed,
    };
</script>
