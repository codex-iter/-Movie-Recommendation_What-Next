const serachBtn = document.getElementById('search-btn');
const mainContainer = document.getElementById('myData');

serachBtn.addEventListener('click', getData);


function getData(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://moviesrecommendation-api.herokuapp.com/movie?title=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        for (let i of data) {
            var div = document.createElement("div");
            div.innerHTML =  i.Name ;
            mainContainer.appendChild(div);
        }
    })

}
