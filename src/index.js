function importAll(r) {
  // r.keys() returns an array of all of the relative file paths
  // e.g. ['./138.jpeg', '139.jpeg', '140.jpeg', ...]
  //
  // Passing a relative path to r will require() the file and return
  // the url of the file.
  // e.g. r('./138.jpeg') => 'http://localhost:8080/138.jpeg'
  //
  // So if you want a map of all the relative paths to their
  // absolute urls, you can do something like:
  //
  const entries = r.keys().map((key) => {
    return [key.replace("./", ""), r(key)];
  });
  const result = Object.fromEntries(entries);
  console.log("Result is:", result);
  return result;
}

function createImageTags(images, root) {
  for (const [key, value] of Object.entries(images)) {
    const img = document.createElement("img");
    img.src = value;
    img.alt = key;
    root.appendChild(img);
  }
}

const images = importAll(require.context("./images/", true, /\.jpeg$/));
createImageTags(images, document.body);
