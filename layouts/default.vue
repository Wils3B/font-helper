<template>
  <div class="upper-container">
    <nav class="sidebar">
      <ul class="list-unstyled">
        <li class="link-item">
          <nuxt-link to="/" class="text-light">
            <i class="fa fa-home" />
            <span>Home</span>
          </nuxt-link>
        </li>
        <li class="link-item">
          <nuxt-link to="settings" class="text-light">
            <i class="fa fa-cog" />
            <span>Settings</span>
          </nuxt-link>
        </li>
      </ul>
      <ul class="list-unstyled mt-auto">
        <li class="link-item">
          <nuxt-link to="about" class="text-light">
            <i class="fa fa-info" />
            <span>About</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <main class="main">
      <nuxt class="main-content" />
    </main>
  </div>
</template>

<style>
  @import url("~/assets/fontawesome/css/all.min.css");

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .upper-container, .sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .sidebar {
    background-color: #282828;
    width: 16rem;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 3rem;
  }

  .link-item{
    display: flex;
    align-content: center;
  }

  .link-item .fa{
    font-size: 120%;
    margin-right: 10px;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 16rem;
  }

  .main{
    width: 100%;
    height: 100%;
  }
</style>
