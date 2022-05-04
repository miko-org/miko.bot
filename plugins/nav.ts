import { computed, useContext, useRoute } from '@nuxtjs/composition-api'

export function useNav() {
    const { app } = useContext()
    const route = useRoute()

    const isHome = computed(() => {
        let path = route.value.path

        if (!path.endsWith('/')) {
            path += '/'
        }

        return path === app.localePath('/')
    })

    const currentSlug = computed(() => {
        return route.value.path !== '/' && route?.value?.params?.pathMatch
            ? route.value.params.pathMatch.split('/')[0]
            : null
    })

    return { isHome, currentSlug }
}
