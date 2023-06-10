const SideBarAdmin = {
  async render() {
    return `
    <div class="wrapper">
      <div class="wrapper_inner">
        <div class="vertical_wrap">
          <div class="backdrop"></div>
          <div class="vertical_bar">
            <div class="profile_info">
              <div class="img_holder">
                <img src="./img/avatar.jpeg" alt="profile_pic" />
              </div>
              <p class="title">Admin</p>
              <p class="sub_title">grave-discover@sipapasi.com</p>
            </div>
            <ul class="menu">
              <li>
                <a href="#">
                  <span class="icon"
                    ><i class="fas fa-home" style="color: #f97b22"></i
                  ></span>
                  <span class="text">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon"
                    ><i class="fas fa-file-alt" style="color: #f97b22"></i
                  ></span>
                  <span class="text">Data Jenazah</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon"
                    ><i class="fas fa-solid fa-broom" style="color: #f97b22"></i
                  ></span>
                  <span class="text">Pesanan</span>
                </a>
              </li>
              <li><a href="#">
                <span class="icon"><i class="fas fa-user" style="color: #f97b22"></i></span>
                <span class="text">Profil</span>
              </a></li>
              <li><a href="#">
                <span class="icon"><i class="fas fa-sign-out-alt" style="color: #f97b22"></i></span>
                <span class="text">Keluar</span>
              </a></li>
            </ul>
          </div>
        </div>
        <div class="main_container">
          <div class="top_bar">
            <div class="hamburger">
              <i class="fas fa-bars"></i>
            </div>
            <div class="logo">Grave <span>Discover</span></div>

            <script>
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");
var backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", function () {
wrapper.classList.add("active");
});

backdrop.addEventListener("click", function () {
wrapper.classList.remove("active");
});
</script>
            `;
  },

  async afterRender() {
    // page
  },
};

export default SideBarAdmin;
