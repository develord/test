<template>
  <header class="main-header style-three">
    <div class="header-upper">
      <div class="outer-box clearfix">
        <div class="left-column pull-left clearfix">
          <div class="logo-box pull-left">
            <figure class="logo">
              <NuxtLink to="/" title="home" class="hvr-underline-from-left1">
                <img
                  alt="logo"
                  style="width: 223px;margin-left: 52px;margin-top: 21px;"
                  data-src="/images/LogoValidation.png"
                  class="lazyload"
                  src="/images/LogoValidation.png"
                >
              </NuxtLink>
            </figure>
          </div>
          <div class="menu-area pull-right clearfix">
            <nav class="main-menu navbar-expand-md navbar-light">
              <div id="navbarSupportedContent" class="collapse navbar-collapse show clearfix">
                <ul class="navigation clearfix">
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/" title="home" class="hvr-underline-from-left1">
                      Home
                    </NuxtLink>
                  </li>
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/team" title="team" class="hvr-underline-from-left1">
                      Team
                    </NuxtLink>
                  </li>
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/publication" title="news" class="hvr-underline-from-left1">
                      Publications
                    </NuxtLink>
                  </li><li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/research" title="research" class="hvr-underline-from-left1">
                      Research
                    </NuxtLink>
                  </li>
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/news" title="research" class="hvr-underline-from-left1">
                      News
                    </NuxtLink>
                  </li>
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/giving" title="giving" class="hvr-underline-from-left1">
                      Giving
                    </NuxtLink>
                  </li>
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/about" title="about" class="hvr-underline-from-left1">
                      About
                    </NuxtLink>
                  </li>
                  <li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                    <NuxtLink to="/contact" title="contact" class="hvr-underline-from-left1">
                      Contact
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="right-column pull-right clearfix">
          <div class="btn-box">
            <a href="get-in-touch.html" class="theme-btn style-six">Get in Touch</a>
          </div>
          <ul class="social-links clearfix">
            <li><a href="https://www.facebook.com/" style="background-color:rgba(255, 255, 255, 0.3); color: rgb(255, 255, 255)"><i class="fab fa-facebook" /></a></li>
            <li><a href="https://www.skype.com/" style="background-color:rgba(255, 255, 255, 0.3); color: rgb(255, 255, 255)"><i class="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style="background-color:rgba(255, 255, 255, 0.3); color: rgb(255, 255, 255)"><i class="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sticky-header">
      <div class="outer-box clearfix">
        <div class="left-column pull-left">
          <figure class="logo-box">
            <a href="#" title="amine" />
          </figure>
          <div class="menu-area">
            <nav class="main-menu clearfix" />
            <div class="search-box-outer">
              <form action="" method="post" class="search-btn">
                <button type="button" class="search-toggler">
                  <i class="flaticon-search" />Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="right-column pull-right clearfix">
          <div class="btn-box">
            <a href="get-in-touch.html" class="theme-btn style-six">Get in Touch</a>
          </div>

          <ul class="social-links clearfix">
            <li><a href="https://www.facebook.com/" style="background-color:rgba(255, 255, 255, 0.3); color: rgb(255, 255, 255)"><i class="fab fa-facebook" /></a></li>
            <li><a href="https://www.skype.com/" style="background-color:rgba(255, 255, 255, 0.3); color: rgb(255, 255, 255)"><i class="fab fa-skype" /></a></li>
            <li><a href="https://www.twitter.com/" style="background-color:rgba(255, 255, 255, 0.3); color: rgb(255, 255, 255)"><i class="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
