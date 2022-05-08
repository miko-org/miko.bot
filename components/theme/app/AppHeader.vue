<template>
    <header class="header">
        <AppLink to="/">
            <Logo />
        </AppLink>
        <nav class="header__nav">
            <HeaderNavLink
                v-for="(link, index) in links"
                :key="index"
                v-bind="link"
                :class="{ active: link.path === currentPath }"
            />
        </nav>
        <AppButton to="/login">Log In</AppButton>
    </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Logo from '~/components/atoms/icons/Logo.vue'
import AppButton from '~/components/atoms/buttons/AppButton.vue'
import AppLink from '~/components/atoms/links/AppLink.vue'
import HeaderNavLink from '~/components/atoms/links/HeaderNavLink.vue'
import { useNav } from '~/plugins/nav'

export default defineComponent({
    components: {
        Logo,
        AppButton,
        AppLink,
        HeaderNavLink
    },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const currentPath = useNav().currentPath

        return {
            currentPath
        }
    }
})
</script>

<style lang="postcss">
@import '~/assets/main.css';

.header {
    @apply flex items-center justify-between sticky top-0;
    height: var(--header-height);
}

.header__nav {
    @apply grid grid-flow-col gap-12;
}

.active {
    @apply text-gray-900;
}

.header__link_with-icon.active {
    @apply text-orange-500;
}

.active .icon path {
    @apply fill-orange-500;
}
</style>
