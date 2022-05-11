<template>
    <AppLink :to="path" class="header__link" :class="{ 'header__link_with-icon': icon }">
        {{ name }}
        <Component :is="icon" v-if="icon" class="header__icon" />
    </AppLink>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AppLink from './AppLink.vue'
import IconFire from '~/components/atoms/icons/IconFire.vue'

export default defineComponent({
    components: {
        AppLink,
        IconFire
    },
    props: {
        path: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: ''
        }
    }
})
</script>

<style lang="postcss">
.header__link {
    @apply text-gray-500;

    &_with-icon {
        @apply text-yellow-500 flex items-center gap-2;
    }
}
</style>
