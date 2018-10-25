<template>
    <div :data-test-id="testIds.WRAPPER">
        <p
            id="quiltListLabel"
            :data-test-id="testIds.TITLE"
        >
            Select a quilt list:
        </p>
        <ul
            role="listbox"
            tabindex="0"
            aria-labelledby="quiltListLabel"
            :data-test-id="testIds.LIST"
        >
            <quilt-size-option
                v-for="option of options"
                :key="option.id"
                :data="option"
                :data-test-id="testIds.OPTION"
                :is-selected="option.id === selectedOptionId"
                :on-click="onOptionClick"
            />
        </ul>
    </div>
</template>

<script>
    import QuiltSizeOption from '../QuiltSizeOption/QuiltSizeOption';
    import { QUILT_LIST_TEST_IDS } from '../../quilt-size.constants';

    const components = {
        QuiltSizeOption,
    };

    const props = {
        options: {
            type: Array,
            required: true,
        },
        selectedOptionId: {
            type: String,
            required: true,
        },
        onOptionClick: {
            type: Function,
            required: true,
        },
    };

    const data = {
        testIds: QUILT_LIST_TEST_IDS,
    };

    export default {
        name: 'QuiltList',
        components,
        props,
        data: () => data,
    };
</script>
