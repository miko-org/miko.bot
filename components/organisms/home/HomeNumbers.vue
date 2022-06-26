<template>
    <div class="numbers-section">
        <AppBadge>NUMBERS</AppBadge>

        <h2 class="numbers-section__title">We believe in the power of data</h2>

        <p class="numbers-section__description">
            Flex is the only business platform that lets you run your business on one platform,<br class="wrap" />
            seamlessly across all digital channels.
        </p>

        <div class="numbers-section__numbers">
            <NumberBlock v-for="(item, index) in data" :key="index" v-bind="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppBadge from '~/components/atoms/AppBadge.vue'
import NumberBlock from '~/components/molecules/NumberBlock.vue'
import NumberItem from '~/interfaces/number-item.interface'

export default defineComponent({
    components: {
        AppBadge,
        NumberBlock
    },
    setup() {
        const data: NumberItem[] = [
            { number: 235000, description: 'Projects completed', prefix: '', postfix: '' },
            { number: 10, description: 'APR', prefix: '$', postfix: 'm' },
            { number: 50000, description: 'Hours Saved Annually', prefix: '+', postfix: '' },
            { number: 3500, description: 'Unique Users', prefix: '', postfix: '' }
        ]

        return {
            data
        }
    }
})
</script>

<style lang="postcss">
.numbers-section {
    @apply py-22.5 px-10 flex flex-col items-center text-center;

    &__title {
        @apply my-4;
    }

    &__numbers {
        @apply grid gap-x-8 mt-16 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4;
    }
}
</style>
