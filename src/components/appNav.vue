<template>
    <div>
        <nav>
            <div class="brand">Purcube</div>
            <div class="pannel">
                <div class="form">
                    <form>
                        <input type="text" name="urlstr" id="urlstr" placeholder="https://">
                    </form>
                </div>
                <div class="settings">
                    <div @click="getArticle()" class="settings-svg"><img src="../assets/svg/add.svg" alt=""></div>
                    <div class="settings-svg"><img src="../assets/svg/settings.svg" alt=""></div>
                </div>
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
                .then((response) => { this.$store.commit('addArticle', JSON.parse(response.bodyText)) },
                    (error) => { console.log('Some error happened with the http request!') })
        }
    }
}
</script>

<style scoped>
    nav {
        height: 50px;
        background-color: #A20090;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .brand {
        color: white;
        font-size: 1.125em;
    }
    .form form input[type="text"] {
        /*display: none;*/
        width: calc(100vw - 160px);
        height: 35px;
        border: none;
        padding: 4px;
        border-radius: 4px;
        font-size: 1.0em;
        margin-right: 10px;
    }
    .pannel {
        display: flex;
        align-items: center;
    }
    .settings {
        display: flex;
        align-items: center;
        width: 55px;
        justify-content: space-between;
    }
    .settings-svg {
        height: 20px;
    }
    .settings img {
        height: 20px;
        width: 20px;
    }
</style>