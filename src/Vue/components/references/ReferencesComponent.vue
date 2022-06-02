<template>
    
    <section id="references">

        <div class="container-fluid references">

            <div class="row references-heading">

                <div 
                class="col-sm-12 col-md-8 references-heading-text"
                data-aos="fade-right"
                data-aos-duration="1500"
                >

                    <h2>WHAT PEOPLE SAY ABOUT US?</h2>

                </div>


                <div 
                class="col-sm-12 col-md-4 references-heading-img"
                data-aos="fade-left"
                data-aos-duration="1500"
                >
                    <img src="../../../assets/images/illustrations/message.png" alt="message">
                </div>

            </div>

            <div class="row references-message">


                <div 
                    v-for="(item, index) in referencesList"
                    :key="index"
                    class="col-sm-12 col-md-6 references-messagess"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >

                    <div class="message">
                        <p><q>{{ item.message }}</q></p>
                    </div>

                    <div class="pplinfo">
                        <p> <b>{{ item.name }}</b> <br>
                            <span>{{ item.position }} <br>
                            {{ item.company }}</span>  <br>
                            <a :href="`${item.web}`" target="_blank">{{ item.web }}</a></p>
                    </div>

                </div>

            </div>

        </div>

    </section>
         
</template>


<script>
import data from "../../../data/data.json"

export default {
    name: "ReferencesComp",
    props: {},

    data() {
        return {
        referencesList: data.references.referencesList
        };
    }
}; 
</script>