<template>
    <div id="app">
        <Header/>
        <Content v-bind:theTitle="aryTvshows"/> 
    </div>
</template>

<script> //Created the bind for the for loop and added components in the template
import axios from 'axios' //importing axios and the vue components
import Header from './components/Header.vue'
import Content from './components/Content.vue'
export default {
    name: 'App',
    components: {
        Header,
        Content
    },
    data(){
        return { //returning my array
            aryTvshows: ''
        }
    },
    mounted() //mounted axios
    {   
        axios
        .get('https://api.themoviedb.org/3/tv/popular?api_key=7bac788961983c6b5d7b9480614ea387&language=en-US&page=1')
        .then( (response)=> { 
            this.aryTvshows = response.data.results.slice(0,4);
        })
    }
} // extended the boxes like in the video on line 38-41
</script>

<style> 
#app {
    text-align: center; 
}
* { 
    margin: 0;
    padding: 0;
}
</style>