<template>
    <div class="cta-section">
        <h3>The fastest way from idea to live site. Period</h3>

        <p class="cta-section__description">
            Flex is a Small SaaS Business. Flex isn't a traditional company.<br class="wrap" />
            We believe a diverse team, approaches to work and transparency are key to our success.
        </p>

        <AppButton href="https://invite.miko.bot/" button-class="cta-section__discord">Add to Discord</AppButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppButton from '~/components/atoms/buttons/AppButton.vue'

export default defineComponent({
    components: {
        AppButton
    }
})
</script>

<style lang="postcss">
.cta-section {
    @apply py-28.75 px-10 flex flex-col text-center items-center;

    &__description {
        @apply mt-4 mb-5;
    }

    &__discord {
        @apply py-3.5 px-10 bg-primary-500 rounded-md drop-shadow-2xl text-white font-medium text-lg hover:bg-primary-400;
    }
}
</style>
