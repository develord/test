<template>
  <div class="widget sidebar-widget widget_categories">
    <div class="widget-title">
      <h3>Categories</h3>
    </div><ul>
      <li class="cat-item cat-item-27">
        <a href="blog-masonry.html">Blog Masonry</a> (2)
      </li><li class="cat-item cat-item-7">
        <a href="latest-news.html">Latest News</a> (10)
      </li><li class="cat-item cat-item-1">
        <a href="our-blog.html">Our Blog</a> (7)
      </li><li class="cat-item cat-item-50">
        <a href="%d9%87%d9%86%d8%af%d8%b3%d8%a9-%d8%a7%d9%84%d8%a8%d9%8a%d8%a7%d9%86%d8%a7%d8%aa.html">هندسة البيانات</a> (3)
      </li>
    </ul>
  </div>
  </divclass="widget>
</template>
<script>
export default {
}
</script>
<style>
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
.sidebar .sidebar-widget {
    position: relative;
    margin-bottom: 55px;
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
