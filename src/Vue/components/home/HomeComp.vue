<template>

    <section id="homepage">

        <div class="container-fluid homepagee">

            <div class="row intro">

                <div class="col-sm-12 col-md-7 home-text">
                    <h1>
                        We support 
                        <span class="typed-text">{{ typeValue }}</span> 
                        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                        <br>to grow the tech eco-system 
                        <br>in southern Denmark.
                    </h1>
                </div>

                <div class="col-sm-12 col-md-5 formular-img">
                    <img src="../../../assets/images/illustrations/formular.png" alt="">
                </div>

            </div>

            <div class="row partners fixed-bottom">

                <div class="partners-box ">
                    <div
                        class="partners-box-each"
                        v-for="(item, index) in partnersList"
                        :key="index"
                    >

                        <img :src="require(`../../../assets/images/partners/${item.image}`)" :alt="`${item.name}`" />

                    </div>
                </div>

            </div>
        
        </div>

    </section>


</template>


<script>
import data from "../../../data/data.json"



  export default {
    name: "HomePage",

    /* start of typewriter part */
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ["tech startups", "students", "investors"],
        typingSpeed: 100,
        erasingSpeed: 70,
        newTextDelay: 500,
        typeArrayIndex: 0,
        charIndex: 0,

        /*  data from data.json */
        partnersList: data.partners.partnersList,

      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },

    /* end of typewriter part */


    /* start of data images part */
    /* computed: {
        filteredPeople() {
        var teamList = data.about.teamList;
        var filter = this.currentFilter;
        var filtered = teamList.filter(function(x) {
            return x.filter === filter;
        });
        return filtered;
        },
        filters() {
        var filterList = [];
        var teamList = data.about.teamList;
        filterList = teamList.filter(function(x) {
            if (!filterList.includes(x.filter)) {
            filterList.push(x.filter);
            return x.filter;
            }
        });
        return filterList;
        },
    },
    methods: {
        setFilter(event) {
        this.currentFilter = event.target.dataset.filter;
        },
    }, */

  }
</script>
