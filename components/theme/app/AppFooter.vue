<template>
    <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        links: {
            type: Array,
            default: () => []
        }
    }
})
</script>

<style scoped></style>
