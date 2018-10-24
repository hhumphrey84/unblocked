<template>
    <div>
        <p id="quiltListLabel">Select a quilt list:</p>
        <ul
            role="listbox"
            tabindex="0"
            aria-labelledby="quiltListLabel"
        >
            <quilt-size-option
                v-for="option of options"
                :key="option.id"
                :data="option"
                :is-selected="option.id === selectedOptionId"
                :on-click="onOptionClick"
            />
        </ul>
    </div>
</template>

<script>
    import QuiltSizeOption from '../QuiltSizeOption/QuiltSizeOption';

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

    export default {
        name: 'QuiltList',
        components,
        props,
    };
</script>
