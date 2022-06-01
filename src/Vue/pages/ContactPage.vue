<template>

    <div id="contacttt">
        <Idea />
        <Join />
        <Footer />
    </div>

</template>


<script>
import Idea from '../components/contact/IdeaComponent.vue'
import Join from '../components/contact/JoinComponent.vue'
import Footer from '../components/FooterComponent.vue'


export default {
    name: 'AboutPage',

    components:{
        Idea,
        Join,
        Footer
    }
}
</script>




