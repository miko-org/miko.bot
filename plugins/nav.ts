import { computed, useRoute } from '@nuxtjs/composition-api'

export function useNav() {
    const route = useRoute()

    const isHome = computed(() => route.value.path === '/')
        const path = route.value.path

        return path === '/'
    })

    const currentPath = computed(() => route.value.path)

    return { isHome, currentPath }
}
