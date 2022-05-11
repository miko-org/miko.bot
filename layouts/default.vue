<template>
    <div class="w-full relative">
        <AppHeader :links="headerLinks" />
        <Nuxt />
        <AppFooter :links="footerLinks" />

        <CookieBanner
            v-if="showCookieBanner"
            class="fixed bottom-0 inset-x-0 z-40"
            @cookie-banner="showCookieBanner = false"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from '~/components/theme/app/AppHeader.vue'
import AppFooter from '~/components/theme/app/AppFooter.vue'
import CookieBanner from '~/components/molecules/CookieBanner.vue'

export default defineComponent({
    components: { AppFooter, AppHeader, CookieBanner },
    data() {
        return {
            headerLinks: [
                { name: 'Home', path: '/', icon: '' },
                { name: 'Documentation', path: '/documentation', icon: '' },
                { name: 'Community', path: '/community', icon: '' },
                { name: 'Premium', path: '/premium', icon: 'IconFire' }
            ],
            footerLinks: [],
            showCookieBanner: false
        }
    },
    mounted() {
        const cookieBanner = 'cookieconsent_status'
        const docCookies = `; ${document.cookie}`

        this.showCookieBanner = !docCookies.includes(cookieBanner)
    }
})
</script>
