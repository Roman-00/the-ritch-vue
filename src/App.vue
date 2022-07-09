<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Default from '@/layout/Default.vue';
import Main from '@/layout/Main.vue';

const route = useRoute();

const isAuth = computed(() => route.path === '/');
</script>

<template>
    <Default
        v-if="isAuth"
    >
        <router-view/>
    </Default>
    <Main
        v-else
    >
        <router-view/>
    </Main>
</template>
