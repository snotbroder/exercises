const url = "https://kea-alt-del.dk/kata-distortion/";

function fetchUrl(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Nyt interval");

      if (data.inQueue <= 5) {
        document.querySelector("h1").innerHTML = "Det er snart din tur!";
      } else {
        document.querySelector("h1").innerHTML = "Data visualisation";
      }

      document.querySelector("h2 span").innerHTML = `${data.inQueue}`;
    });
}

setInterval(() => fetchUrl(url), 10000);

//kør funktionen én gang ved pageload
fetchUrl(url);
