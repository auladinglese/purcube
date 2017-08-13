<template>
    <div>
        <app-nav></app-nav>
        <app-grid></app-grid>
    </div>
</template>

<script>
    import appNav from './components/appNav.vue';
    import appGrid from './components/appGrid.vue';
    export default {
        components: {
            appNav,
            appGrid
        }
    }
</script>

<style>

</style>