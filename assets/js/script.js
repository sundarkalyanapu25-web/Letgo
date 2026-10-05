const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");


searchButton.addEventListener("click", function () {

    const searchText = searchInput.value;

    if (searchText === "") {

        alert("Please enter something to search.");

    } else {

        alert("You searched for: " + searchText);

    }

});
