<template>
    <div class="badge">
        <slot />
    </div>
</template>

<style lang="postcss" scoped>
.badge {
    @apply px-2 py-0.5 bg-primary-100 text-primary-500 rounded-36px text-xs leading-18px font-medium;
}
</style>
