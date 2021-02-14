<template>
  <div class="widget sidebar-widget">
    <div class="widget-title">
      <h3>Filters</h3>
    </div><ul v-if="listTag">
      <li class="cat-item cat-item-27">
        <nuxt-link :to="{ name: 'slug-req', query: { req: 'all' }}">
          All
        </nuxt-link>
      </li>
      <li v-for="item in listTag" :key="item" class="cat-item cat-item-27">
        <nuxt-link :to="{ name: 'slug-req', query: { req: item }}">
          {{ item }}
        </nuxt-link>
      </li>
      <li v-for="item in listDate" :key="item" class="cat-item cat-item-27">
        <nuxt-link :to="{ name: 'slug-req', query: { req: item }}">
          {{ item }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listTag: null,
      listDate: null
    }
  },
  computed: {
    listPublication () {
      return this.$store.state.listPublication.map(el => ({ tags: el.tags, published: el.published })).flat()
    }
  },
  watch: {
    listPublication: {
      immediate: true,
      handler (newVal) {
        if (newVal) {
          this.listTag = [...new Set(newVal.map(el => el.tags).flat().map(el => el.name))]
          this.listDate = [...new Set(newVal.map(el => el.published).flat().map(el => el?.substring(0, 4)))].sort((a, b) => (a.published < b.published) ? 1 : ((b.published < a.published) ? -1 : 0))
        }
      }
    }
  }
}
</script>

<style>
ul {
  margin-top: 12px;
}
.widget ul li {
    position: relative;
    display: block;
    margin-bottom: 14px;
    padding-left: 28px;
}
.widget ul li:before {
    position: absolute;
    content: '';
    background: transparent;
    border: 1px solid #d1d1d1;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    left: 0;
    top: 10px;
    transition: all 500ms ease;
}
.sidebar-widget {
    position: relative;
    margin-bottom: 55px;
    border: solid 1px #dcdcdccc;
    padding: 43px;
    margin-top: 28px;
}
.sidebar .widget-title h3 {
    font-weight: 600;
}

h3 {
    position: relative;
    display: block;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
}
h1, h2, h3, h4, h5, h6 {
    color: #1d165c;
}
.sidebar-page-container .sidebar .widget-title {
    position: relative;
    margin-bottom: 20px;
}
.widget ul li a {
    position: relative;
    display: inline-block;
    font-size: 16px;
    line-height: 26px;
    font-family: 'Muli',sans-serif;
    color: #666;
}
</style>
