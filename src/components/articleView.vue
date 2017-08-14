<template>
    <div>
        <div class="article-content-head">
            <h1>{{ article.title }}</h1>
            <h3>{{ article.author }}</h3>
        </div>
        <div class="article-content">
            <div v-html="article.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        article() {
            return this.$store.state.articlesList[this.id]
        }
    }
}
</script>

<style scoped>
    .article-content, .article-content-head {
        width: 90%;
        margin: auto;
    }
</style>