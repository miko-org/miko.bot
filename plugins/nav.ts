import { computed, useRoute } from '@nuxtjs/composition-api'

export function useNav() {
    const route = useRoute()

    const isHome = computed(() => {
        let path = route.value.path

        if (!path.endsWith('/')) {
            path += '/'
        }

        return path === '/'
    })

    const currentPath = computed(() => {
        return route.value.path
    })

    return { isHome, currentPath }
}
