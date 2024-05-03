<template>
    <div class="main">
        <h1 class="main__title">Биржа вакансий и резюме</h1>

        <section class="main__buttons">
            <button class="main__buttons--item">Вакансии</button>
            <button class="main__buttons--item">Резюме</button>
        </section>

        <section class="main__input">
            <input type="text" placeholder="Услуга или специалист" />

            <button class="main__input--button">Найти</button>
        </section>

        <section class="main__tags">
            <span class="main__tags--item">Копирайтер</span>
            <span class="main__tags--item">Создание гайдов</span>
            <span class="main__tags--item">Курьер</span>
        </section>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/fonts' as *;

.main {
    margin-top: 12.5rem;

    &__title {
        @include font(6.2rem, 500, 80.6px);
    }

    &__buttons {
        display: flex;
        gap: 2.5rem;
        margin-top: 1.8rem;

        &--item {
            @include font(1.6rem, 500, 19.36px);

            color: white;
            letter-spacing: 0.02rem;
            padding: 1rem;
            border-radius: 1.4rem;
            background-color: rgba(145 16 22 / 100%);
        }
    }

    &__input {
        display: flex;
        gap: 2.4rem;
        margin-top: 1.7rem;

        input {
            @include font(1.8rem, 500, 21.78px);

            width: 100%;
            letter-spacing: 0.01rem;
            padding: 2.4rem 2rem;
            border: 0.15rem rgba(166 129 68 / 100%) solid;
            background-color: white;
            border-radius: 1.4rem;
        }

        &--button {
            @include font(2rem, 500, 24.2px);

            padding: 2.3rem 6.35rem;
            color: white;
            border-radius: 1.4rem;
            background-color: rgba(145 16 22 / 100%);
        }
    }

    &__tags {
        display: flex;
        gap: 1.6rem;
        margin-top: 1.6rem;

        &--item {
            @include font(1.8rem, 500, 26.91px);

            letter-spacing: 2%;
            height: 2.7rem;
            padding: 0.45rem 1.2rem;
            border-radius: 10rem;
            background-color: rgba(250 248 246 / 100%);
            cursor: pointer;
        }
    }
}
</style>
