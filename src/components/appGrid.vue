<template>
    <div class="grid">
        <app-article-card></app-article-card>
    </div>
</template>

<script>
    import appArticleCard from './appArticleCard.vue';
    export default {
        components: {
            appArticleCard
        }
    }
</script>

<style>
    .grid {
        width: 100%;
        min-height: calc(100vh - 70px);
        background: #F0EFEF;
        padding: 30px;
    }
</style>