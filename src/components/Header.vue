<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <h3 class="header__text">
                    Добро пожаловать!
                </h3>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    padding: 20px 50px;
    background: $white;
    box-shadow: 0 8px 5px -6px rgba(0, 0, 0, 0.10);

    .container {
        max-width: 1300px;
        margin: 0 auto;
        padding: 0;
    }

    &__text {
        font-size: 18px;
        font-weight: $font-semi-bold;
        line-height: 28px;
        color: $text-color;
    }
}
</style>
