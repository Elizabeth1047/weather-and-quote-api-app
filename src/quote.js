let quote=document.getElementById("quote")
let author = document.getElementById("author");
let body = document.getElementsByTagName("body");


//const url="https://github.com/lukePeavey/quotable";
 const url = "https://api.quotable.io/random";




const getquote=()=>{
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    })
    
  setTimeout(getquote, 5000);
}

getquote()


