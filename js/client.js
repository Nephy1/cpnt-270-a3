const newsFun = async () => {
  const response = await fetch('/.netlify/functions/photo');
  const data = await response.json();
  // Sorting by Hashtags
  const newsFigure = await data.find((item) => item.caption.includes('#news'));
  console.log(newsFigure)
  // Output to index
  document.querySelector('.news').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${newsFigure.url}" alt="" width="400">
    </a>
    <figcaption><a href="${address}">${cap}</a></figcaption>
  </figure>
  `

  console.log(data);
}
newsFun()
