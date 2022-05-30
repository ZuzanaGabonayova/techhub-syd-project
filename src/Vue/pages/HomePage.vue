<template>

    <div id="homeee">
        <Navigation />
        <Home />
    </div>

</template>


<script>
import Navigation from '../components/NavigationComponent.vue'
import Home from '../components/home/HomeComp.vue'


export default {
    name: 'HomePage',

    components:{
        Navigation,
        Home
    }
}
</script>




