<template>
    <div class="card">
        <div class="icon-wrapper">
            <Component :is="icon" />
        </div>

        <h4 class="card__title">{{ title }}</h4>

        <p class="card__description">{{ description }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="postcss" scoped>
.card {
    @apply flex flex-col items-center py-8 tracking-wide;

    &__title {
        @apply mt-6 mb-2;
    }

    &__description {
        @apply text-base px-8;
    }
}

.icon-wrapper {
    @apply bg-primary-100 rounded-md w-16 h-16;
}
</style>
