<template>
    <div class="content">
        <div v-for="name in theTitle" v-bind:key="name" class="iBlocks">
            <h1>{{name.original_name}}</h1>
            <img v-bind:src="'https://image.tmdb.org/t/p/w300//' + name.poster_path" alt="Poster">
            <p>{{name.overview}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Content",
    props:['theTitle'], //Set up the made up prop for rendering data from the array
}
</script>

<style scoped>
    .content
    {
        background: red;
        width: 100%;
        color: white;
    }
    .iBlocks
    {
        width: 20%;
        display: inline-block;
        height: 100%;
    }
</style>

