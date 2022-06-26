<template>
    <div class="features-section">
        <AppBadge>FEATURES</AppBadge>

        <h3 class="features-section__title">Gain more insight into how people use your</h3>

        <p>
            With our integrated CRM, project management, collaboration and invoicing capabilities,<br class="wrap" />
            you can manage every aspect of your business in one secure platform.
        </p>

        <div class="features-section__cards">
            <AppCard v-for="(card, index) in cards" :key="index" v-bind="card" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppBadge from '~/components/atoms/AppBadge.vue'
import AppCard from '~/components/molecules/AppCard.vue'
import Card from '~/interfaces/card.interface'

export default defineComponent({
    components: {
        AppBadge,
        AppCard
    },
    setup() {
        const cards: Card[] = [
            {
                icon: 'IconMessages',
                title: 'Measure your performance',
                description: 'Stay connected with your team and make quick decisions wherever you are.'
            },
            {
                icon: 'IconChart',
                title: 'Custom analytics',
                description:
                    'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.'
            },
            {
                icon: 'IconUsers',
                title: 'Team Management',
                description: 'Our calendar lets you know what is happening with customer and projects so you.'
            },
            {
                icon: 'IconEdit',
                title: 'Build your website',
                description:
                    'A tool that lets you build a dream website even if you know nothing about web design or programming.'
            },
            {
                icon: 'IconGrid',
                title: 'Connect multiple apps',
                description: 'The first business platform to bring together all of your products from one place.'
            },
            {
                icon: 'IconSetting',
                title: 'Easy setup',
                description: 'End to End Business Platform, Sales Management, Marketing Automation, Help Desk.'
            }
        ]

        return {
            cards
        }
    }
})
</script>

<style lang="postcss">
.features-section {
    @apply flex flex-col items-center text-center px-10 pt-22.5 pb-25;

    &__title {
        @apply my-5;
    }

    &__cards {
        @apply grid grid-cols-3 w-full gap-x-8 gap-y-5 mt-5;
    }
}
</style>
