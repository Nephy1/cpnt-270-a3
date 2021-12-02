const newCafe = async () => {
  // Fetch API
  const response = await fetch('/.netlify/functions/photo');
  const data = await response.json();
  // Sorting by Hashtags
  const newCoffee = await data.find((item) => item.caption.includes('#coffee'));
  console.log(newCoffee)
  // Older posts
  let olderPosts = newCoffee[1]
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
    <a href="${olderPosts.url}">
      <img src="${olderPosts.url}" alt="" width="400">
    </a>
    <figcaption>${olderPosts.caption}</figcaption>
  </figure>
  `

  console.log(data);
}
newCafe()
