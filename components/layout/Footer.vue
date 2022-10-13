<template>
  <div>
    <UiSection class="main-footer">
      <div class="col-12">
        <div class="col-4 color-white">
          <h4>Evermos</h4>
          <ul>
            <li><a>Tentang Kami</a></li>
            <li><a>Kontak</a></li>
            <li><a>Artikel dan Berita</a></li>
            <li><a>Panduan Reseller</a></li>
            <li><a>Karir</a></li>
            <li><a>Kebijakan Privasi</a></li>
            <li><a>Syarat dan Ketentuan</a></li>
          </ul>
        </div>
         <div class="col-4 color-white">
          <h4>Informasi Lainnya</h4>
          <ul>
            <li><a>Jadi Supplier</a></li>
            <li><a>Ekonomi Umat</a></li>
            <li><a>Ekonomi Syariah</a></li>
            <li><a>Beramal Jariyah</a></li>
            <li><a>Peta Situs</a></li>
            <li><a>FAQ</a></li>
            <li><a>Produk Evermos</a></li>
          </ul>
        </div>
        <div class="col-4">
          <img style="height: 20rem; width: auto; margin: 20px;" src="https://evermos.com/reg/wp-content/uploads/2022/03/LP-Regist_Section-16.png" />
        </div>
      </div>
    </UiSection>
    <UiSection class="mini-footer">
       <span><small>@2022 Evermos</small></span>
    </UiSection>
  </div>
</template>

<style lang="scss" scoped>
.mini-footer {
  background-color: #d0fa93;
  text-align: center;
  padding: 10px 0;
}

.main-footer {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  z-index: 1000;
  background-color: #054d4d;
  transition: .4s cubic-bezier(.64,.05,.35,1);

  a {
    color: #ffff;
  }

  .input-search {
    width: 500px;
    height: 40px;
    margin: 20px;
    z-index: 2;
    border: 0;
  }
}

@media screen and (max-width: 90rem) {
  .main-footer img {
    margin: 20px 0 !important;
  }
}

</style>
