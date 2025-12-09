const searchinput = document.querySelector('.search-input');

//it findes the HTML element with the classs .search-input and store into variable searchinput 

searchinput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        search();
    }

});


function search(){

    const input = searchinput.value;
    window.location.href ="https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"

}