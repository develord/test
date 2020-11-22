<template>
  <section class="page-title text-center style-two">
    <div class="pattern-layer" style="background-image: url(https://727512.smushcdn.com/1872762/wp-content/themes/naxly/assets/images/shape/shape-62.png?lossy=1&amp;strip=1&amp;webp=1);" /><div class="auto-container">
      <div class="content-box">
        <h1>{{ h1 }}</h1>
        <!-- block auther -->
        <div class="article-content-meta">
          <div class="author-avatar">
            <a href="#">
              <img
                alt="Avatar of Neale Van Fleet"
                src="https://secure.gravatar.com/avatar/d7a76198094edbb412cf4d525b16d545?s=80&amp;d=retro&amp;r=pg"
                srcset="https://secure.gravatar.com/avatar/d7a76198094edbb412cf4d525b16d545?s=160&amp;d=retro&amp;r=pg 2x"
                class="avatar avatar-80 photo skip-lazy"
                height="80"
                width="80"
                loading="lazy"
              >
            </a>
            <div class="half-circle" width="80px" height="80px" />
          </div>
          <div class="author-name-area">
            <div class="author-name-prefix">
              Author
            </div>
            <a class="author-name" href="https://css-tricks.com/author/nealevanfleet/">
              {{ user.name }} </a>
          </div>
          <div class="date">
            <div class="date-prefix">
              Published
            </div>
            <time datetime="">
              {{ created_at.substring(0, 10) }} </time>
          </div>
        </div>
        <div class="article-tags">
          <div class="tag-avatar">
            <img
              height="50"
              width="50"
              loading="lazy"
              src="@/assets/images/tag-biology.png"
            >
          </div>
          <div class="tag-avatar">
            <img
              height="50"
              width="50"
              loading="lazy"
              src="@/assets/images/tag-genomis.png"
            >
          </div>
          <div class="tag-avatar">
            <img
              height="50"
              width="50"
              loading="lazy"
              src="@/assets/images/tag-cancer.png"
            >
          </div>
          <div class="tag-avatar">
            <img
              height="50"
              width="50"
              loading="lazy"
              src="@/assets/images/tag-fetus.png"
            >
          </div>
          <div class="tag-avatar">
            <img
              height="50"
              width="50"
              loading="lazy"
              src="@/assets/images/tag-cell.png"
            >
          </div>
          <div class="tag-avatar">
            <img
              height="50"
              width="50"
              loading="lazy"
              src="@/assets/images/tag-oncology.png"
            >
          </div>
        </div>
      <!-- ending -->
      </div>
    </div>
  </section>
</template>
<script>
import page from '~/mixins/page.js'
export default {
  mixins: [page]
}
</script>
<style scoped>
.article-tags {
  display: flex;
  align-items: stretch;
}
.article-content-meta, .article-publication-meta {
    white-space: nowrap;
}
a {
    color: #fff;
}
a {
    text-decoration: none;
}
.date {
    grid-area: date;
}
.author-name-area {
  grid-area: author;
  text-align: left;
}
.date time {
    color: #fff;
}
.author-name-prefix, .comments-prefix, .date-prefix, .shared-by-prefix, .type-of-guide {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
}
.author-name, .comments-link, time {
  text-transform: capitalize;
    font-weight: 700;
}
.author-avatar img {
    width: 60px;
    height: 60px!important;
    display: block;
    overflow: hidden;
    margin: 16px 10px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
iframe, img, video {
    max-width: 100%;
}
img, video {
    height: auto!important;
}
img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.article-content-meta {
    font-size: .7rem;
    display: grid;
    grid-template-columns: 80px -webkit-min-content -webkit-min-content;
    grid-template-columns: 80px min-content min-content;
    grid-template-areas: "avatar author date comments";
    grid-gap: .25rem 1rem;
    align-items: center;
    margin: 0 0 1.5rem;
}
.author-avatar {
    grid-area: avatar;
    align-self: start;
    position: relative;
}
*, :after, :before {
    box-sizing: border-box;
}
.article-content-meta, .article-publication-meta {
    white-space: nowrap;
}
.half-circle {
    width: 78px;
    height: 39px;
    background-color: none;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border: 10px solid;
    border-image-source: linear-gradient(45deg, rgb(190 2 255), rgb(250,224,66));
  border-image-slice: 1;
    border-top: 0;
    position: absolute;
    bottom: 6px;
}
*, :after, :before {
    box-sizing: border-box;
}
svg:not(:root) {
    overflow: hidden;
}
</style>
