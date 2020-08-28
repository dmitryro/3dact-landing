<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-left">
          <div class="columns">
              <div class="column is-1"></div>
              <div class="column is-11 has-text-left">
                  <h1 class="title">How to chose</h1>
                  <p class="subtitle">Some important considerations for making the right decision</p>
              </div>
          </div>
          <div class="columns">
                <div class="column is-1"></div>
                <div class="column is-5">
                   <div class="container">
                       <figure class="image is-fullwidth">
                           <img src="../assets/svg/howtochoose.svg">
                       </figure>
                   </div>
                   <div class="container mt-6">
                   </div>                                
                </div> <!-- end column-->
                <div class="column is-5">
                   <Howchoose
                    v-for="how in choose"
                    :key="how.id"
                    v-bind:index="how.index"
                    v-bind:title="how.title"
                    v-bind:list="how.list"
                    />

                </div>
                <div class="column is-1"></div>
             </div> <!-- end columns -->
   
          </div><!-- end container -->
      </div>
  </section>
</template>

<script>
//import api from '../api';


import api from '../api';
import Howchoose from '../components/Howchoose.vue';
const choose = api.getChoose();

export default {
  name: 'Howtochoose',
  components: {
     Howchoose,
  },
  data() {
    return {
      choose: choose,
    };
  },
  mounted() {
  },
};
</script>
<style>
  .footer {
    margin-top: 50px;
  }

  .listitem {
   }

  .whybullet {
    color: #707070;
  }

  .left {
     float:left;
     width:5%;
   }

  .right {
     float:left;
     width:94%;
   }

   .clear {
     clear:both;
   }
  .choosedisc {
     color:#1B7DF0;
     font-size:0.8em;
   }
  .chooseblock {
     margin-bottom: 1.0em; 
   }

  .chooselist {
    list-style: disc;
    font-size: 20px;
    padding-left: 1.0em;
    color: #1B7DF0;
  }
</style>
