







var newsOne = news[randomNumberNews()];
var newsTwo = news[randomNumberNews()];
var newsThree = news[randomNumberNews()];
var myNews = [newsOne, newsTwo, newsThree];

function differentNews (){
    
    if (myNews[0] =! myNews[1] && myNews[1] != myNews[2] && myNews[2] != myNews[0]){
        console.log(true)
       return myNews
    }
    else {
         newsOne = news[randomNumberNews()];
         newsTwo = news[randomNumberNews()];
         newsThree = news[randomNumberNews()];
         return myNews = [newsOne, newsTwo, newsThree];
    }
    
}













function randomNews(){

var newsOne = Math.floor(Math.random() * fakenews.length);
var newsTwo = Math.floor(Math.random() * fakenews.length);
var newsThree = Math.floor(Math.random() * fakenews.length);

for (newsOne == newsTwo || ne )

console.log(fakenews[newsOne]);
}

function randomFake(){

}



function player (name, score) {
    this name = name;
    this score = score;
}




function randomNum(){
    return Math.floor(Math.random() * news.length);
}
