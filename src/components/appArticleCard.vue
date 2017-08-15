<template>
    <router-link tag="div" :to="articleLink" class="article-card">
        <div class="card-title-area" :style=" { backgroundColor: 'yellow' } ">
            <div class="card-title">{{ article.title }}</div>
        </div>
        <div class="card-details">
            <div class="author-name">{{ article.author }}</div>
            <div class="read-capsule">
                <div class="read-time-indicator"></div>
                <div class="read-time"> 7 min</div>
            </div>
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
    .article-card:first-child {
        margin-top: 0;
    }
    .article-card {
        height: 250px;
        background-color: white;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.5s;
        margin: 20px 0;
    }
    .article-card:hover {
        box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.2);
    }
    .article-card .card-title-area {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 195px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 0 30px 0;
    }
    .article-card .card-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px;
        height: 55px;
        font-size: 1.125em;
    }
    .card-details .author-name {
        font-size: 0.75em;
    }
    .card-details .read-capsule {
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: #F2F1F1;
        height: 16px;
        width: 70px;
    }
    .read-capsule .read-time-indicator {
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: #50E3C2;
        margin: 0 8px;
    }
    .read-capsule .read-time {
        font-size: 0.625em;
    }
</style>