<template>
    <svg
        :aria-labelledby="id"
        viewBox="0 0 20 21"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title :id="id">{{ title }}</title>
        <slot />
    </svg>
</template>

<script src='./icon.js'></script>
