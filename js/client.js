const newCafe = async () => {
  // Fetch API
  const response = await fetch('/.netlify/functions/photo');
  const data = await response.json();
  // Sorting by Hashtags
  const newCoffee = await data.find((item) => item.caption.includes('#coffee'));
  console.log(newCoffee)
  // Older posts
  let olderPost = await data.filter((item) => item.caption.includes('#coffee'));
  // Output to index
  document.querySelector('.container').innerHTML = `
  <figure>
    <h1> Newest Post! </h1>
    <a href="${newCoffee.url}">
      <img src="${newCoffee.url}" alt="" width="400">
    </a>
    <figcaption>${newCoffee.caption}</figcaption>
  </figure>
  <figure>
    <h1> Older Posts! </h1>
    <a href="${olderPost[1, 2].url}">
      <img src="${olderPost[1, 2].url}" alt="" width="400">
    </a>
    <figcaption>${olderPost[1, 2].caption}</figcaption>
  </figure>
  `

  console.log(data);
}
newCafe()
