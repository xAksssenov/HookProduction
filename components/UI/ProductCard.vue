<template>
    <div class="card">
        <img class="card__img" :src="props.src" :alt="props.alt" />

        <p class="card__text">{{ props.text }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string
    alt: string
    text: string
}>()
</script>

<style scoped lang="scss">
@use 'assets/scss/fonts' as *;

.card {
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
    cursor: pointer;

    &__img {
        width: 30rem;
        height: 14.2rem;
    }

    &__text {
        @include font(2.3rem, 500, 34.39px);

        width: fit-content;
        letter-spacing: 2%;
        height: 3.4rem;
    }
}
</style>
