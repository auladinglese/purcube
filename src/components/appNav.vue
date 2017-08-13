<template>
    <div>
        <nav>
            <div class="brand">Purcube</div>
            <div class="form">
                <form action="">
                    <input type="text" name="urlstr" id="urlstr" placeholder="https://">
                    <div @click="getArticle()"><img src="../assets/svg/download.svg" alt=""></div>
                </form>
            </div>
            <div class="settings">
                <img src="../assets/svg/settings.svg" alt="">
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data: () => {
        return {

        }
    },
    methods: {
        getArticle() {
            this.$http.get('https://pauls-playground-abialbonpaul.c9users.io/test')
                .then((response) => { this.$store.commit('addArticle', response) },
                    (error) => { console.log('Some error happened with the http request!') })
        }
    }
}
</script>

<style scoped>
    nav {
        height: 70px;
        background-color: purple;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .brand {
        color: white;
        font-size: 2.0em;
    }
    form {
        display: flex;
    }
    .form form input[type="text"] {
        min-width: 270px;
        height: 35px;
        border: none;
        padding: 4px;
        border-radius: 4px;
        font-size: 1.0em;
    }
    .form form div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form form img {
        margin-left: 5px;
        height: 25px;
        width: 25px;
    }
    .settings img {
        height: 40px;
        width: 40px;
    }
</style>