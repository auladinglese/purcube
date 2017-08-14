<template>
    <router-link tag="div" :to="articleLink" class="article-card">
        <div class="lead-image" :style=" { backgroundImage: backgroundImageUrl } "></div>
        <div class="card-title">
            {{ article.title }}
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            article: {
                type: Object,
                default: {}
            },
            index: Number
        },
        computed: {
            backgroundImageUrl() {
                return "url(" + this.article.lead_image_url + ")"
            },
            articleLink() {
                return `article/${this.index}`
            }
        }
    }
</script>

<style>
    .article-card {
        height: 350px;
        background-color: white;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        cursor: pointer;
    }
    .article-card .lead-image {
        height: 270px;
        background-size: cover;
        background-position: center;
    }
    .article-card .card-title {
        padding: 8px;
        height: 30px;
        font-size: 1.125em;
    }
</style>