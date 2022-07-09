<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="default-layout">
        <Header />
        <div class="app__content">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.default-layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}
</style>
