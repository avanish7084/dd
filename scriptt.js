fetch("moviesss.json")
.then(function(response){
   return response.json();
})
.then(function(moviesss){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   let i=1;
   for(let movie of moviesss){
    let aa="Click For More Information";
    let l="https://www.imdb.com/"+movie.Link_of_Movie
    let m=movie.Poster;
    
    
   //  let k = "<a href='l'>" + aa + "</a>";
      console.log(m)
      out += `
         <tr>
            <td><img src=${m} width="80" height="80">
            <td>${i+". "} ${movie.Movie_Name}</td>
            <td>${movie.Rating}</td>
            <td><a href=${l} target="_blank"> ${aa} </a></td>
            
         </tr>

      `;
      i=i+1;
   }
 
   placeholder.innerHTML = out;
});