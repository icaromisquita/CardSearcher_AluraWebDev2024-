function btn_search() {
    // Get reference to the "resultados-pesquisa_id" section
    let section = document.getElementById("results-search_id");
    let searchPlace = document.getElementById("search_place").value;

    // Initialize an empty string to store the results
    let results = "";
    let titleLow= "";
    let descriptionLow ="";
    let searchPlaceLow =searchPlace.toLowerCase();
    let tagsLow = "";
    let colorLow = "";

    
    // Loop through each item in the "data" array
    for (let item of data) {
        //first converting the value in search bar, description
        titleLow = item.title.toLowerCase()
        descriptionLow = item.description.toLowerCase()
        tagsLow = item.tags.toLowerCase()
        colorLow = item.color.toLowerCase()
      
      // if what is written in search bar includes the Title
        if(titleLow.includes(searchPlaceLow) || descriptionLow.includes(searchPlaceLow) || tagsLow.includes(searchPlaceLow) || colorLow.includes(searchPlaceLow)){
            results += `
        <div class="item-results">
            <div class="cardDescription">
              <h2 class="cardTitle">${item.title}</h2>        
              <img class="cardImg" src="${item.img}" alt="Card Art">
              <div class="cardData">
                <ul>
                  <p class="cardCharacteristics">
                  Card Characteristics<br>
                  Type: ${item.type}<br>
                  Card color: ${item.color}<br>
                  Mana cost: ${item.manaValue}<br> 
                  Rarity: ${item.rarity}
                </p>
                </ul>
              </div>
              <p class="description-meta"> ${item.description}</p>
            </div>
          
          <a  href="${item.link}" target="_blank">More info</a>
        </div>
        `;
        }
      //if search bar is an empty string, do nothing  
        if(searchPlaceLow == ""){
            section.innerHTML = "<p class='noResults'> No results found, please provide a seach parameter<p>"
            return}      
    }

    if (!results){
      results = "<p class='noResults'>Nothing was found<p>"
    }            
    
    // Set the innerHTML of the "resultados-pesquisa_id" section with the accumulated results
    section.innerHTML = results;
  }

  // Add event listener for 'blackMana' element click
  document.querySelector(".blackMana").addEventListener("click", function () {
  // Simulate search with 'black' value
  document.getElementById("search_place").value = "black";
  btn_search();
  });

// Add event listener for 'whiteMana' element click
document.querySelector(".whiteMana").addEventListener("click", function () {
  // Simulate search with 'white' value
  document.getElementById("search_place").value = "white";
  btn_search();
});

// Add event listener for 'redMana' element click
  document.querySelector(".redMana").addEventListener("click", function () {
  // Simulate search with 'black' value
  document.getElementById("search_place").value = "red";
  btn_search();
  });

// Add event listener for 'blueMana' element click
document.querySelector(".blueMana").addEventListener("click", function () {
  // Simulate search with 'blue' value
  document.getElementById("search_place").value = "blue";
  btn_search();
  });

// Add event listener for 'greenMana' element click
document.querySelector(".greenMana").addEventListener("click", function () {
  // Simulate search with 'black' value
  document.getElementById("search_place").value = "green";
  btn_search();
  });  