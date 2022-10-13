<template>
  <div class="header-container">
    <UiSection class="mini-header">
      <div class="flex">
        <a href="#"><b>Download App</b></a>
        <a href="#">Mulai Jualan</a>
        <a href="#">Jadi Mitra</a>
        <a href="#">Bantuan</a>
      </div>
    </UiSection>
    <UiSection class="main-header">
      <div class="col-12 flex">
        <nuxt-link class="flex items-center" style="margin: 0;" to="/">
          <img class="logo" src="~/assets/image/logo/logo.png" />
          <img class="logo-mobile" src="~/assets/image/logo/logo-mobile.jpeg" />
        </nuxt-link>
        <input class="input-search" type="text" placeholder="Search" />
        <div class="navbar-mobile" @click="handleNavbar" style="margin: auto;">
          <fa :icon="['fa', 'bars']" style="color: #fff; font-size: 20px;" />
        </div>
      </div>
      <div class="navbar flex float-right">
        <a href="#">Daftar</a>
        <a href="#">Login</a>
      </div>
    </UiSection>
    <div v-if="showNavbar" class="myLinks">
        <a href="#">Daftar</a>
        <a href="#">Login</a>
        <a href="#">Download App</a>
        <a href="#">Mulai Jualan</a>
        <a href="#">Jadi Mitra</a>
        <a href="#">Bantuan</a>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false
    }
  },
  methods: {
    handleNavbar() {
      this.showNavbar = !this.showNavbar
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10000;

  .mini-header {
    background-color: #d0fa93;
    transition: .4s cubic-bezier(.64,.05,.35,1);

    a {
      padding: 6px 10px;
      color: #054d4d;
    }
  }

  .navbar-mobile {
    display: none;
    margin: auto;
  }

  .main-header {
    transition: .4s cubic-bezier(.64,.05,.35,1);
    background-color: #054d4d;
    display: flex;

    .logo {
      height: 5rem;
      width: auto;
    }

    .logo-mobile {
      display: none;
      height: 3rem;
      width: auto;
      margin: 16px 0 !important;
    }

    a {
      color: #ffff;
      margin: 25px 10px;
    }

    .input-search {
      width: 500px;
      height: 40px;
      margin: 20px;
      z-index: 2;
      border: 0;
    }
  }
}

.myLinks {
  width: 100%;
  margin: auto;
  background-color: #054d4d;
  position: absolute;
  a {
    color: #fff;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    width: 100%;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }
}

@media screen and (max-width: 90rem) {
  .mini-header {
   display: none !important;
  }

  .navbar-mobile {
    display: block !important
  }

  .main-header {
    .logo {
      display: none !important;
    }

    .logo-mobile {
      display: block !important;
    }

    .navbar {
      display: none !important;
    }
  }
}

</style>
