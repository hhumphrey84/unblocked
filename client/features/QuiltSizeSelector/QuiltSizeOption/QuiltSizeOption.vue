<template>
    <li
        :aria-selected="isSelected"
        :class="{ focused: isSelected }"
        role="option"
        @click="onClick(data.id)"
    >
        {{ data.id }} {{ data.width }} x {{ data.height }}
    </li>
</template>

<script>
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

    export default {
        name: 'QuiltSizeOption',
        props,
    };
</script>
