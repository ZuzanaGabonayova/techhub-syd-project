<template>

    <div id="abouttt">
        <Inspirational />
        <Investors />
        <Meetups />
        <Startups />
    </div>

</template>


<script>
import Inspirational from '../components/about/InspirationalTalksComponent.vue'
import Investors from '../components/about/InvestorPitchesComponent.vue'
import Meetups from '../components/about/MeetupsComponent.vue'
import Startups from '../components/about/StartupsComponent.vue'


export default {
    name: 'AboutPage',

    components:{
        Inspirational,
        Investors,
        Meetups,
        Startups
    }
}
</script>




