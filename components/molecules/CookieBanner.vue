<template>
    <div class="bg-info border-t border-t-sky-light text-center md:text-left text-sky-dark font-medium">
        <VueIfBot>
            <CookieConsent
                class="max-w-80rem ml-auto mr-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0"
            >
                <template slot="message">
                    <p class="md:w-1/2">
                        This website uses cookies to ensure you get the best experience on our website.
                        <AppLink href="https://www.cookiesandyou.com/" class="underline">Learn More</AppLink>
                    </p>
                </template>
                <template slot="button">
                    <AppButton @click.native="$emit('cookie-banner')">Got it</AppButton>
                </template>
            </CookieConsent>
        </VueIfBot>
    </div>
</template>

<script>
import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
import { defineComponent } from '@nuxtjs/composition-api'
import AppLink from '~/components/atoms/links/AppLink'
import AppButton from '~/components/atoms/buttons/AppButton'

export default defineComponent({
    components: {
        AppButton,
        AppLink,
        VueIfBot,
        CookieConsent
    }
})
</script>

<style scoped></style>
