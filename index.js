
// This file for fetching data and store into new json file

const cheerio=require('cheerio'); //Cheerio-> library for parsing and manipulating HTML and XML.
const axios=require('axios'); // Axios-> open source library that allows you to make HTTP requests.
const j2cp=require("json2csv").Parser;
const fs=require("fs");

const url="https://www.imdb.com/chart/top/?ref_=nv_mv_250";

let movies=[];
let i=0;



axios.get(url).         //Request url thruogh get method
then((response)=>{


    console.log(response);
    // console.log(response.data);

    let $=cheerio.load(response.data);  // All html data store in $ with the help of cheerio



    $('.lister-list tr').each(function(el,index){
        
        // console.log($(this).find('td.titleColumn a').text()); // Name of movie
        //console.log($(this).find('td.titleColumn a').attr('href')); // link of the m
        let title=$(this).find('td.titleColumn a').text();
        let poster=$(this).find('td.posterColumn img').attr('src');
        let url=$(this).find('td.titleColumn a').attr('href');
        let rating=$(this).find('td.imdbRating').text();
        //return false;
        

        movies.push({Poster:poster,Movie_Name:title,Rating:rating,Link_of_Movie:"www.imdb.com/"+url});
        // if(i==100){what is use of $ keyword in Javascript 
        //     return false;
        // }


    });
    


    console.log(movies);

    const jsonData = {
        moviess: movies
      };
      
      // Convert JSON object to string
      const jsonString = JSON.stringify(jsonData, null, 2);
      
      // Write JSON string to a file
      fs.writeFile('moviesss.json', jsonString, 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
          return;
        }
        console.log('JSON file has been saved!');
      });


    // /clJSON.stringify(movies);
    // console.log(movies);
    // const parser=new j2cp();
    // const csv =parser.parse(movies);

    // fs.writeFileSync("./movies.csv",csv);



}).catch((error)=>{       // if throw any type of error
    console.log(error);
})