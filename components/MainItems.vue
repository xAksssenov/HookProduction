<template>
    <div class="main">
        <h1 class="main__title">Биржа вакансий и резюме</h1>

        <section class="main__buttons">
            <button
                v-for="(button, type) in buttonTypes"
                :key="type"
                class="main__buttons--item"
                :class="{ choice: selectedButton === type }"
                @click="toggleButton(type)"
            >
                {{ button }}
            </button>
        </section>

        <section class="main__input">
            <input v-model="searchText" type="text" placeholder="Услуга или специалист" />

            <div v-if="optionsVisible" class="main__options">
                <p
                    v-for="option in suggestedOptions"
                    :key="option"
                    class="main__options--text"
                    @click="selectOption(option)"
                >
                    <span
                        v-for="char in option.split('')"
                        :key="char"
                        :index="char"
                        :class="{
                            weight: searchText.toLowerCase().includes(char.toLowerCase()),
                        }"
                    >
                        {{ char }}
                    </span>
                </p>
            </div>

            <button class="main__input--button" @click="clearSearch">Найти</button>
        </section>

        <section class="main__tags">
            <span class="main__tags--item">Копирайтер</span>
            <span class="main__tags--item">Создание гайдов</span>
            <span class="main__tags--item">Курьер</span>
        </section>

        <section class="main__card">
            <ProductCard
                v-for="item in filteredData"
                :key="item.index"
                :index="item.index"
                :src="item.src"
                :alt="item.alt"
                :text="item.text"
            />
        </section>
    </div>
</template>

<script setup lang="ts">
const data = [
    {
        index: 1,
        src: '/photo1.png',
        alt: 'photo1',
        text: 'Копирайтер',
    },
    {
        index: 2,
        src: '/photo2.png',
        alt: 'photo2',
        text: 'Механик',
    },
    {
        index: 3,
        src: '/photo3.png',
        alt: 'photo3',
        text: 'Шеф-повар',
    },
    {
        index: 4,
        src: '/photo4.png',
        alt: 'photo4',
        text: 'Адвокат',
    },
]

const buttonTypes = { vacancies: 'Вакансии', resumes: 'Резюме' }
const selectedButton = ref('vacancies')

const toggleButton = (type: string) => {
    selectedButton.value = type
}

const filteredData = computed(() => {
    return selectedButton.value === 'vacancies' ? data.slice() : data.slice().reverse()
})

const searchText = ref('')
const optionsVisible = ref(false)

let suggestedOptions = ['Reels maker', 'Reels съемка', 'Reels maker обучение', 'Reels монтаж']

watch(searchText, (value) => {
    if (value.trim() !== '') {
        optionsVisible.value = true
        const text = value.toLowerCase().trim()
        suggestedOptions = [
            'Reels maker',
            'Reels съемка',
            'Reels maker обучение',
            'Reels монтаж',
        ].filter((option) => option.toLowerCase().includes(text))
    } else {
        optionsVisible.value = false
    }
})

const selectOption = (option: string) => {
    searchText.value = option
    optionsVisible.value = false
}

function clearSearch() {
    searchText.value = ''
}
</script>

<style scoped lang="scss">
@use 'assets/scss/fonts' as *;

.choice {
    color: white !important;
    background-color: rgba(145 16 22 / 100%);
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(145 16 22 / 90%);
    }
}

.main {
    margin: 12.5rem 9rem 0;

    &__title {
        @include font(6.2rem, 500, 130%);

        width: fit-content;
    }

    &__buttons {
        display: flex;
        gap: 2.5rem;
        margin-top: 1.8rem;

        &--item {
            @include font(1.6rem, 500);

            color: rgba(145 16 22 / 100%);
            letter-spacing: 0.02rem;
            padding: 1rem;
            border-radius: 1.4rem;
            transition: all 0.2s ease;

            &:hover {
                transform: translateY(-1px);
            }
        }
    }

    &__input {
        display: flex;
        gap: 2.4rem;
        margin-top: 1.7rem;
        height: 7rem;
        position: relative;

        input {
            @include font(1.8rem, 700, 21.78px);

            color: rgba(54 70 112 / 100%);
            width: 100%;
            letter-spacing: 0.01rem;
            padding: 2.4rem 2rem;
            border: 0.15rem rgba(166 129 68 / 100%) solid;
            background-color: white;
            border-radius: 1.4rem;

            &::placeholder {
                font-weight: 500;
                color: rgba(146 146 157 / 100%);
            }
        }

        &--button {
            @include font(2rem, 500);

            padding: 2.3rem 6.35rem;
            color: white;
            border-radius: 1.4rem;
            background-color: rgba(145 16 22 / 100%);
            transition: all 0.3s ease;

            &:hover {
                background-color: rgba(145 16 22 / 90%);
                transform: translateY(-1px);
            }
        }
    }

    &__options {
        position: absolute;
        width: calc(100% - 21.2rem);
        top: 7rem;
        border-radius: 1.4rem;
        background-color: white;

        &--text {
            letter-spacing: 0.01rem;
            padding: 1.1rem 1.6rem;

            &:hover {
                background-color: rgba(241 241 245 / 100%);
            }

            &:first-child {
                border-radius: 1.4rem 1.4rem 0 0;
            }

            &:last-child {
                border-radius: 0 0 1.4rem 1.4rem;
            }

            span {
                @include font(1.8rem, 500, 21.78px);
            }

            .weight {
                font-weight: 700;
            }
        }
    }

    &__tags {
        display: flex;
        gap: 1.6rem;
        margin-top: 1.6rem;

        &--item {
            @include font(1.8rem, 500, 149.5%);

            letter-spacing: 0.036rem;
            height: 2.7rem;
            padding: 0.45rem 1.2rem;
            border-radius: 10rem;
            background-color: rgba(250 248 246 / 100%);
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: rgba(250 248 246 / 90%);
                transform: translateY(-1px);
            }
        }
    }

    &__card {
        display: flex;
        justify-content: space-between;
        margin-top: 11.5rem;
    }
}

@media (max-width: 500px) {
    .main {
        margin: 4rem 2rem 0;

        &__title {
            @include font(4rem, 500, 110%);

            width: 100%;
            text-align: center;
        }

        &__buttons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2.5rem;

            &--item {
                @include font(1.4rem, 500);

                padding: 0.8rem;
            }
        }

        &__input {
            gap: 1.8rem;
            margin-top: 1.6rem;
            height: fit-content;

            input {
                @include font(1.6rem, 700, 21.78px);

                padding: 1.2rem 1.8rem;
            }

            &--button {
                @include font(1.6rem, 500);

                padding: 1.2rem 1.8rem;
                height: fit-content;
            }
        }

        &__tags {
            flex-direction: column;
            gap: 1rem;

            &--item {
                @include font(1.4rem, 500, 149.5%);

                height: fit-content;
                width: fit-content;
                padding: 0.4rem 1rem;
            }
        }

        &__card {
            flex-direction: column;
            justify-content: center;
            margin-top: 1.6rem;
        }

        &__options {
            width: calc(100% - 10.2rem);
            top: 5rem;

            &--text {
                padding: 1rem 1.4rem;

                span {
                    @include font(1.6rem, 500, 21.78px);
                }
            }
        }
    }
}
</style>
