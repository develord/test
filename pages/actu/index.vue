<template>
<div>
<div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-md-8">
			<h5 class="font-weight-bold spanborder"><span>Nos dernière actualité</span></h5>
			<div class="mb-3 d-flex justify-content-between" v-for="item in listArticle" :key="item._id">
				<div class="pr-3">
					<h2 class="mb-1 h4 font-weight-bold">
						<NuxtLink class="text-dark" :to="item.link">{{item.h1}}</NuxtLink>
					</h2>
					<p>
						 {{item.description}}
					</p>
					<div class="card-text text-muted small">
						 {{item.tags[0].name}}
					</div>
					<small class="text-muted">{{ new Date(item.created_at).getFullYear() }} · 5 min read</small>
				</div>
				<img
					v-lazy="{ src: './images/' + item.image_small.high, loading: './images/' + item.image_small.low}"
					height="120"
					width="125"
					class="is-lazy"
					:alt="item.title"
					:title="item.title"
					:src="'../images/' + item.image_small.low"
				>
			</div>
		</div>
		<div class="col-md-4 pl-4">
			<div class="sticky-top">
				<h5 class="font-weight-bold spanborder"><span>Les plus visités</span></h5>
				<ol class="list-featured">
					<li>
					<span>
					<h6 class="font-weight-bold">
					<a href="./article.html" class="text-dark">Did Supernovae Kill Off Large Ocean Animals?</a>
					</h6>
					<p class="text-muted">
						 Jake Bittle in SCIENCE
					</p>
					</span>
					</li>
					<li>
					<span>
					<h6 class="font-weight-bold">
					<a href="./article.html" class="text-dark">Humans Reversing Climate Clock: 50 Million Years</a>
					</h6>
					<p class="text-muted">
						 Jake Bittle in SCIENCE
					</p>
					</span>
					</li>
					<li>
					<span>
					<h6 class="font-weight-bold">
					<a href="./article.html" class="text-dark">Unprecedented Views of the Birth of Planets</a>
					</h6>
					<p class="text-muted">
						 Jake Bittle in SCIENCE
					</p>
					</span>
					</li>
					<li>
					<span>
					<h6 class="font-weight-bold">
					<a href="./article.html" class="text-dark">Effective New Target for Mood-Boosting Brain Stimulation Found</a>
					</h6>
					<p class="text-muted">
						 Jake Bittle in SCIENCE
					</p>
					</span>
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>
</div>
</template>
<script>
import { categoryElements } from '@/apollo/query'
export default {
  layout: 'Default',
  apollo: {
    categoryElements: {
      query: categoryElements,
      fetchPolicy: 'cache-first',
      variables() {
        return { link: this.$route.name, nb: 10 }
      }
    },
  },
  data: () => {
    return {
      content: null,
      listArticle: []
    }
  },
  watch: {
	 categoryElements(val) {
		this.listArticle =  val
	},
  }
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