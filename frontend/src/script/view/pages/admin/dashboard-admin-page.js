const DashboardAdminPage = {
  async render() {
    return `
    <div class="container">
    <div class="content">
      <div>
        <h3 class="fs-4 fw-bold d-flex justify-content-center mx-2">Pusat data Grave Discover</h3>
      </div>
      <div class="container px-5">
        <div class="row g-2 my-3 gap-5 justify-content-center">
          <div class="col-md-4">
            <div class="card-dashboard p-3 shadow-sm d-flex justify-content-around align-items-center">
              <div>
                <h3 class="fs-5 text-white">Total Jenazah</h3>
                  <p class="total fs-2 fw-bold">58</p>
            </div>
            <img src="./img/icon-data.png" height="60px" alt="">
                <i class="fas rounded-full p-2"></i>
          </div>
        </div>
          <div class="col-md-4">
            <div class="card-dashboard p-3 shadow-sm d-flex justify-content-around align-items-center">
                <div>
                  <h3 class="fs-5 text-white">Total Pesanan</h3>
                    <p class="total fs-2 fw-bold">12</p>
                </div>
                <img src="./img/icon-pesanan.png" height="60px" alt="">
                  <i class="fas rounded-full p-2"></i>
            </div>
          </div>
          <div class="contact-info row-2">
              <div class="item">
                <h5 class="fw-bold d-flex justify-content-center px-1">Data Makam</h1>
                    <div class="p-2">
                      <span class="info">Alamat :</span>
                      <span class="contact border border-dark pl-2 d-flex">Jalan Imam Bonjol gang lebar Blok C No. 23</span>
                    </div>
                    <div class="p-2">
                      <span class="info">No. Telepon :</span>
                      <span class="contact border border-dark pl-3 d-flex">08123456789</span>
                    </div>
                    <div class="p-2">
                      <span class="info">Email :</span>
                      <span class="contact border border-dark pl-3 d-flex">admin@grave-discover.sipapasi. com</span>
                    </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

          `;
  },

  async afterRender() {
    // page
  },
};

export default DashboardAdminPage;
