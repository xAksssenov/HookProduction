<template>
    <div class="footer">
        <p class="footer__text">© 2023 Институт запусков</p>

        <section class="footer__info">
            <p class="footer__info--text">Политика конфидециальности</p>
            <p class="footer__info--text">Правовая информация</p>
        </section>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/fonts' as *;

.footer {
    display: flex;
    justify-content: space-between;
    margin: 11.5rem 9rem 2.7rem;

    &__text {
        @include font(1.4rem, 400, 18.2px);

        color: rgba(148 129 113 / 100%);
    }

    &__info {
        display: flex;
        gap: 2rem;

        &--text {
            @include font(1.4rem, 400, 130%);

            color: rgba(145 16 22 / 100%);
            cursor: pointer;
        }
    }
}

@media (max-width: 500px) {
    .footer {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        margin: 3rem 2rem 1.5rem;

        &__info {
            flex-direction: column;
            gap: 1rem;
        }
    }
}
</style>
