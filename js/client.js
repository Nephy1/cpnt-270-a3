const newCafe = async () => {
  // Fetch API
  const response = await fetch('/.netlify/functions/photo');
  const data = await response.json();
  // Sorting by Hashtags
  const newCoffee = await data.find((item) => item.caption.includes('#coffee'));
  console.log(newCoffee)
  // Output to index
  document.querySelector('.container').innerHTML = `
  <figure>
    <h1> Newest Post! </h1>
    <a href="${newCoffee.url}">
      <img src="${newCoffee.url}" alt="" width="400">
    </a>
    <figcaption>${newCoffee.caption}</figcaption>
  </figure>
  `

  console.log(data);
}
newCafe()
