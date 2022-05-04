<template>
    <div class="p-4" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'info',
            validator(value: string) {
                return ['info'].includes(value)
            }
        }
    },
    setup() {}
})
</script>

<style scoped></style>
