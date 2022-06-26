<template>
    <section class="hero-section">
        <AppButton icon="IconStar" to="/announcement" button-class="hero-section__announcement">
            <strong class="font-semibold">Announcement:</strong> hello world!
        </AppButton>

        <div class="hero-section__inner">
            <h1 class="hero-section__title">
                Your <span class="gradient-blue">Community</span> is only as<br class="wrap" />
                good as its <span class="gradient-purple">bots</span>
            </h1>

            <p class="hero-section__description">
                Miko is simple, configurable bot which has many useful features that<br />
                you can control on your Discord server with website.
            </p>

            <div class="hero-section__buttons">
                <AppButton href="https://invite.miko.bot/" button-class="hero-section__discord"
                    >Add to Discord</AppButton
                >

                <AppButton to="/learn" button-class="hero-section__learn">Learn More</AppButton>
            </div>
        </div>
    </section>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AppButton from '~/components/atoms/buttons/AppButton.vue'

export default defineComponent({
    components: {
        AppButton
    }
})
</script>

<style lang="postcss">
.hero-section {
    @apply pt-22.5 pb-56.5 flex flex-col items-center text-center px-10;

    &__announcement {
        @apply flex items-center bg-primary-100 border-primary-300 border-2 border-solid
        text-primary-500 p-2.5 hover:bg-primary-200 rounded-md font-medium text-sm mb-4
        transition-colors duration-200;
    }

    &__inner {
        @apply flex flex-col gap-7;
    }

    &__buttons {
        @apply flex gap-4 justify-center text-lg;
    }

    &__discord {
        @apply py-3.5 px-7 text-primary-50 bg-primary-500 shadow-primary-500 rounded-md
        hover:bg-primary-400 transition-colors duration-200;
    }

    &__learn {
        @apply px-9.5 py-3.5 text-gray-800 border-gray-200 border border-solid rounded-md
        hover:bg-gray-400 transition-colors duration-200;
    }
}

.gradient {
    &-blue {
        @apply bg-gradient-to-r from-[rgba(10,86,211,1)] to-[rgba(130,208,244,1)] bg-clip-text text-transparent;
    }

    &-purple {
        @apply bg-gradient-to-l from-[rgba(161,140,209,1)] to-[rgba(251,194,235,1)] bg-clip-text text-transparent;
    }
}
</style>
