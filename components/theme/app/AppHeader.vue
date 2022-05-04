<template>
    <header
        class="fixed inset-x-0 top-0 z-10 w-full bg-white dark:bg-opacity-75 dark:bg-gray-900 border-tw-gray-200 navbar bg-opacity-75 bg-blur"
    >
        <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6"></div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    setup() {}
})
</script>

<style scoped></style>
