<template>
    <div class="container">
        <HomeHero />
        <HomeNumbers />
        <HomeFeatures />
        <HomeCTA />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import HomeHero from '~/components/organisms/home/HomeHero.vue'
import HomeNumbers from '~/components/organisms/home/HomeNumbers.vue'
import HomeFeatures from '~/components/organisms/home/HomeFeatures.vue'
import HomeCTA from '~/components/organisms/home/HomeCTA.vue'

export default defineComponent({
    components: {
        HomeHero,
        HomeNumbers,
        HomeFeatures,
        HomeCTA
    }
})
</script>

<style lang="postcss" scoped>
.container {
    @apply mx-auto max-w-7xl;
}
</style>
