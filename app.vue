<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
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
    overflow-x: hidden;
    background-color: rgba(238 231 225 / 100%);
    transition: all 0.5s ease-in-out;
}

body {
    max-width: 1920px;
    margin: 3.6rem 9rem 2.7rem;
    color: rgba(54 70 112 / 100%);
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
