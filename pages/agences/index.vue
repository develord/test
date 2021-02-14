<template>
<div>
    <!--------------------------------------
    HEADER
    --------------------------------------->
    <div class="container">
      <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
        <div class="h-100 tofront">
          <div class="row justify-content-between">
            <div class="col-md-12 pt-6 pb-1 pr-6 align-self-center">
              <h1 class="display-4 secondfont mb-3 bloc-title text-center font-weight-bold">
                Marques construction des bus
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
 <!--------------------------------------
    MAIN
    --------------------------------------->
    <div class="container pt-4 pb-4">
      <div class="row justify-content-center">
        <div class="col-lg-2 pb-1 col-md-4 " v-for="(item,i) in categories" :key="i">
            <NuxtLink :to="item.link">
            <img
                v-lazy="{ src:  (item.image_small ? '/images/' + item.image_small.high : '/img/placeholder.jpg'), loading:  (item.image_small ? '/images/' + item.image_small.high : '/img/placeholder.jpg')}"
                class="is-lazy logo-brand-constructor"
                width="150"
                height="150"
                :alt="item.h1"
                :title="item.h1"
                :src=" (item.image_small ? item.image_small.high + '/images/': '/img/placeholder.jpg')"
            >
            <span class="text-center bus-name">{{item.name}}</span>
            </NuxtLink>
        </div>
      </div>
    </div>
    <!-- End Main -->
</div>
</template>
<script>
import { categories } from '@/apollo/query'
export default {
  layout: 'Default',
  apollo: {
    categories: {
      query: categories,
      fetchPolicy: 'cache-and-network',
      variables() {
        return { link: this.$route.path }
      }
    }
  },
}
</script>
<style>
.logo-brand-constructor {
    border-radius: 12px;
}
.bus-name {
  margin: auto;
  display: block;
}
.bloc-title:before {
    content: '';
    position: absolute;
    border-bottom: 1px solid #d1d1d1;
    height: 1px;
    width: 180px;
    bottom: 2px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}
.fa-angle-right:before {
    content: "\f105";
}
article td p {
  padding: 0 !important;
  margin: 0 !important;
}
table td {
  padding: 12px;
  border: solid 1px #dadadaaa;
}


table {
  width: 100%;
  margin-bottom: 28px;
}

tr:nth-child(odd) {
  background-color: #eee;
}

th {
  background-color: #eee;
}

th,
td {
  text-align: left;
  padding: 0.5em 1em;
}
</style>