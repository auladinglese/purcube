<template>
    <div>
        <nav>
            <div class="brand">Purcube</div>
            <div class="pannel">
                <transition name="slide">
                    <div class="form" v-if="showForm">
                        <form>
                            <div><input type="text" name="urlstr" id="urlstr" placeholder="https://"></div>

                                <div class="download" @click="getArticle()"><img src="../assets/svg/download.svg" alt=""></div>

                        </form>
                    </div>
                </transition>
                <div class="settings">
                    <div class="settings-svg"v-bind:class="{ close: showForm }" @click="showForm = !showForm"><img src="../assets/svg/add.svg" alt=""></div>
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
            showForm: false,
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
    form {
        position: relative;
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
    .form form .download {
        height: 20px;
        width: 20px;
        position: absolute;
        top: 7px;
        right: 20px;
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
        transition: all 0.3s;
    }
    .settings img {
        height: 20px;
        width: 20px;
    }
    .close {
        transform: rotate(225deg);
    }
    .slide-enter {
        transform: translateY(-100px);
        opacity: 0;
    }
    .slide-enter-active {
        /*transform: translateX(10px);*/
        transition: all 0.4s;
    }
    .slide-leave {
        /*transform: translateX(0px);*/
    }
    .slide-leave-active {
        transform: translateY(-100px);
        opacity: 0;
        transition: all 0.4s;
    }
</style>