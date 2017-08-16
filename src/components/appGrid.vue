<template>
    <div class="grid">
        <div v-if="articleList.length > 0">
            <app-article-card 
            v-for="article, index in articleList" 
            :key="article.id"
            :article="article" 
            :index="index">
            </app-article-card>
        </div>
    </div>
</template>

<script>
    import appArticleCard from './appArticleCard.vue';
    export default {
        computed: {
          articleList() {
              return this.$store.state.articlesList;
          }
        },
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
        padding: 15px;
    }
</style>