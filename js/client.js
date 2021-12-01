const newCafe = async () => {
  const response = await fetch('/.netlify/functions/photo');
  const data = await response.json();
  // Sorting by Hashtags
  const newCoffee = await data.find((item) => item.caption.includes('#coffee'));
  console.log(newCoffee)
  // Output to index
  document.querySelector('.container').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${newCoffee.url}" alt="" width="400">
    </a>
    <figcaption><a href="${address}">${cap}</a></figcaption>
  </figure>
  `

  console.log(data);
}
newCafe()
