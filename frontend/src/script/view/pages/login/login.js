// const Login = {
//   async render() {
//     return `
//             <h2>Halaman Login<h2>
//             `;
//   },

//   async afterRender() {
//     // page
//   },
// };

// export default Login;

const Login = {
  render() {
    return `
      <h2>Halaman Login</h2>
      <form id="login-form">
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
    `;
  },

  afterRender() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      // Lakukan logika login sesuai kebutuhan Anda, misalnya dengan mengirimkan data ke server
      console.log("Username:", username);
      console.log("Password:", password);
      // Setelah berhasil login, arahkan ke halaman lain menggunakan routes
      routes["/dashboard"].renderPage();
    });
  },
};

export default Login;
