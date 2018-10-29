<template>
    <div
        :data-test-id="testIds.WRAPPER"
        class="wrapper"
    >
        <p
            id="quiltListLabel"
            :data-test-id="testIds.TITLE"
            class="list-title"
        >
            Select a quilt list:
        </p>
        <ul
            :data-test-id="testIds.LIST"
            class="list"
            role="listbox"
            tabindex="0"
            aria-labelledby="quiltListLabel"
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

<style scoped src="./quilt-list.css"></style>

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
