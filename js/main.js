async function loadComponent(id, file){
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

/* HEADERとFOOTERをLOAD */
loadComponent(
  "header",
  "./header.html"
);

loadComponent(
  "footer",
  "./footer.html"
);