<template>
    <header class="header-wrapper">
        <div class="header">
            <AppLink to="/" class="header__logo" aria-label="homeLink">
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

            <div class="header__button-wrapper">
                <AppButton to="/login">Log In</AppButton>
            </div>
        </div>
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
        const { currentPath } = useNav()

        return {
            currentPath
        }
    }
})
</script>

<style lang="postcss">
.header {
    &-wrapper {
        @apply bg-opacity-80 backdrop-blur-md backdrop-filter sticky top-0 bg-transparent bg-white;
    }

    @apply flex items-center h-[var(--header-height)] max-w-7xl mx-auto lg:px-10;

    &__logo {
        @apply flex flex-1 justify-start;
    }

    &__nav {
        @apply flex items-center gap-12;
    }

    &__button-wrapper {
        @apply flex flex-1 justify-end;
    }

    &__link_with-icon.active {
        @apply text-orange-500;
    }
}

.active {
    @apply text-gray-900;

    .header__icon path {
        @apply fill-orange-500;
    }
}
</style>
