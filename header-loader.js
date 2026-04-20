(() => {
  const mountNode = document.querySelector("#site-header");
  if (!mountNode) return;

  fetch("./header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`header load failed: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      mountNode.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
})();
