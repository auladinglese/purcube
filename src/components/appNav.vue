<template>
    <div>
        <nav>
            <div class="brand">Purcube</div>
            <div class="pannel">
                <transition name="slide">
                    <div class="form" v-if="showForm">
                        <form>
                            <div><input placeholder="https://" v-model="articleUrl" @keyup.enter="getArticle"></div>
                            <div class="download" @click="getArticle"><img src="../assets/svg/download.svg" alt=""></div>
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
            articleUrl: '',
            requestUrl: '',
            showForm: false,
        }
    },
    methods: {
        getArticle() {
            // Test the validity of the URL
            if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(this.articleUrl)) {

            } else {
                // Temporary - Show alert here
                alert('Please enter a valid url!');
                return;
            }
            // Request send function
            this.$http.get('https://pauls-playground-abialbonpaul.c9users.io/test', { params: { url: this.articleUrl }})
            .then((response) => { this.$store.commit('addArticle', JSON.parse(response.bodyText) )},
                (error) => { console.log('[Error]: ' + error.message) });

            // Clear the form and hide it
            this.articleUrl = '';
            this.showForm = false;        
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
    .form form input {
        width: calc(100vw - 160px);
        height: 35px;
        border: none;
        padding: 4px;
        border-radius: 4px;
        font-size: 1.0em;
        margin-right: 10px;
    }
    .download {
        height: 28px;
        width: 40px;
        position: absolute;
        top: 4px;
        right: 12px;
        background-color: white;
        padding: 4px 10px;
        border-left: 1px solid #A20090;
    }
    .download img {
        height: 20px;
        width: 20px;
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
        transition: all 0.4s;
    }
    .slide-leave-active {
        transform: translateY(-100px);
        opacity: 0;
        transition: all 0.4s;
    }
</style>