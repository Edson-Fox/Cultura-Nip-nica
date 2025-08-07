document.addEventListener("DOMContentLoaded", function () {
  const bannerContainer = document.getElementById("banner-container");
  if (bannerContainer) {
    const banner = document.createElement("div");
    banner.className = "hero";
    banner.innerHTML = `
      <div class="container">
        <h2>Bem-vindo ao universo da Cultura Japonesa</h2>
        <p>Descubra as tradições, a história e os costumes que moldaram o Japão ao longo dos séculos.</p>
      </div>
    `;
    bannerContainer.appendChild(banner);
  }
});
