<template>
    <div class="number-block">
        <h2 class="number-block__title">{{ prefix + processedNumber + postfix }}</h2>

        <p class="number-block__description">{{ description }}</p>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        prefix: {
            type: String,
            default: ''
        },
        number: {
            type: Number,
            required: true
        },
        postfix: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const processedNumber = computed(() => props.number.toLocaleString('de-DE'))
        // dot separation

        return {
            processedNumber
        }
    }
})
</script>

<style lang="postcss" scoped>
.number-block {
    @apply py-8 flex flex-col gap-2;

    &__description {
        @apply text-xl leading-30px;
    }
}
</style>
