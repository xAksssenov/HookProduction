<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@use 'assets/scss/fonts' as *;

* {
    padding: 0;
    margin: 0;
    font-size: 1rem;
}

input,
textarea {
    user-select: text;
}

html {
    font-size: 62.5%;
    background: linear-gradient(rgba(255 255 255 / 30%), rgba(255 255 255 / 0%));
    background-color: rgba(238 231 225 / 100%);
}

body {
    max-width: 1920px;
    color: rgba(54 70 112 / 100%);
    align-self: center;
}

h1 {
    font-size: 1.4rem;
}

h2 {
    font-size: 1.3rem;
}

h3 {
    font-size: 1.2rem;
}

h4 {
    font-size: 1.1rem;
}

h5 {
    font-size: 1rem;
}

a {
    text-decoration: none;
    outline: none;
}

input {
    display: block;
    box-sizing: border-box;
    background: none;
    border: none;
    border-radius: 1.4rem;
    outline: none;
}

button {
    display: block;
    box-sizing: border-box;
    text-align: center;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>
