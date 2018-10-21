<template>
    <header
        :data-test-id="testIds.WRAPPER"
        class="wrapper"
    >
        <div class="branding">
            <span class="logo">
                <nuxt-link
                    :data-test-id="testIds.HOME_LINK"
                    to="/"
                >
                    <icon
                        id="headerLogo"
                        title="UnBlocked – Back to home"
                    >
                        <logo />
                    </icon>
                </nuxt-link>
            </span>

            <h1 class="title">UnBlocked</h1>
        </div>
    </header>
</template>

<style scoped src="./header.css"></style>
<script>
    import Icon from '~/components/Icon/Icon.vue';
    import Logo from '~/components/svgs/Logo.vue';
    import testIds from './testIds.constants';

    const data = {
        testIds,
    };

    const components = {
        Logo,
        Icon,
    };

    export default {
        components,
        data: () => data,
    }
</script>
