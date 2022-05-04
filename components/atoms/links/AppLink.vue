<template>
    <NuxtLink v-bind="attrs">
        <slot />
    </NuxtLink>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        to: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: ''
        },
        blank: {
            type: Boolean,
            default: true
        },
        rel: {
            type: String,
            default: 'noopener nofollow noreferrer'
        }
    },
    setup(props) {
        const attrs = computed(() => {
            if (props.href.length) {
                return {
                    to: props.href,
                    blank: props.blank,
                    static: true,
                    rel: props.rel
                }
            } else {
                return {
                    to: props.to,
                    blank: props.blank
                }
            }
        })

        return {
            attrs
        }
    }
})
</script>
