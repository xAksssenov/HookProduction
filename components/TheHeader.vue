<template>
    <header class="header">
        <div class="header__naming">
            <SvgoIconLogo class="header__naming--logo" filled />
            <h3 class="header__naming--name">Институт запусков</h3>
        </div>

        <button class="header__button">
            <SvgoIconAvatar class="header__button--avatar" filled />

            <div class="header__login">
                <p class="header__login--text">Войти</p>
                <SvgoIconArrow class="header__login--icon" filled />
            </div>
        </button>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'assets/scss/fonts' as *;

.header {
    display: flex;
    justify-content: space-between;

    &__naming {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        &--logo {
            width: 4.8rem;
            height: 4.8rem;
        }

        &--name {
            @include font(2.5rem, 400, 30.88px);

            font-family: Inter, sans-serif;
            color: rgba(145 16 22 / 100%);
        }
    }

    &__button {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        padding: 1.2rem 1.6rem;
        background-color: white;
        box-shadow: rgba(0 0 0 / 5%);
        border-radius: 1.6rem;

        &--avatar {
            width: 3.6rem;
            height: 3.6rem;
        }
    }

    &__login {
        display: flex;
        align-items: center;
        gap: 3.6rem;

        &--text {
            @include font(1.6rem, 500, 19.36px);

            color: rgba(54 70 112 / 100%);
        }

        &--icon {
            width: 13.39px;
        }
    }
}
</style>
