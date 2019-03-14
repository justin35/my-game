var fakenews = ["Il est impatient de faire partager à son pote vegan toutes ses nouvelles blagues sur son régime alimentaire", "Le comité de médecine du ministère de l'intérieur confirme que le lanceur de balle de défense est bon pour la santé", "Après plusieurs décès accidentels, la mairie de Paris renonce à installer un trampoline au sommet de la tour Montparnasse", "Le prix au kilo du footballeur du PSG s’effondre à Rungis", "news5Soupçon de corruption après la validation de la candidature d’Abdelaziz Bouteflika à l’élection de Miss Algérie", "Européennes : François Asselineau propose de supprimer la station «Europe» de la ligne 3", "Des maisons de retraite mettent en place une boîte pour abandonner vos personnes âgées discrètement", "Le parquet va demander la saisie de tous les stylos et claviers de Mediapart", "Il partage une vidéo sur le danger du réchauffement climatique puis commande un Double Whopper", "Jean-Michel Aphatie arrêté après avoir mordu un Gilet Jaune à la gorge" ];
var news = ["news1", "news2", "news3", "news4", "news5", "news6", "news7", "news8", "news9", "news10" ];






function threeNews(){
    var myNews = [];
    var temp = news.slice();

    for (var i = 0; i < 3 ; i++ ){
        var supp = Math.floor(Math.random() * temp.length);;
        var removed = temp.splice(supp, 1);
        myNews.push(removed[0]); 
    }
    return myNews;
}

function randomNum(){
    return Math.floor(Math.random() * 3);
}


function allNews(){
    var newstemps = threeNews();
    newstemps.push(fakenews[randomNum()]);
    return newstemps;

}



window.onload = function(){
    var button1 = document.getElementById('button1')
    var button2 = document.getElementById('button2')
    var button3 = document.getElementById('button3')
    var button4 = document.getElementById('button4')
    
    
    
    var button = document.getElementsByTagName('button')[0];
    
    function init() {
        fetch("https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey=f5937a86eb79418d950735a5cca1d5ea")
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.articles)
            news = resp.articles.map(a=>a.title)
            let  choices = allNews();
            choices = _.shuffle(choices);
            button1.innerHTML = choices[0];
            button2.innerHTML = choices[1];
            button3.innerHTML = choices[2];
            button4.innerHTML = choices[3];
        })
    }
    
    button.onclick = function(){
        var input = document.getElementsByTagName('input')[0];
        console.log(input.value);
        var name = document.getElementById("mypseudo")
        name.innerHTML = input.value
        init();
    };
    
      var buttons = document.getElementsByClassName("buttons");
    
      var buttonsCount = buttons.length;
    
    
    
    
      for (var i = 0; i < buttonsCount; i += 1) {
        buttons[i].onclick = function(e) {
            console.log(this.id);
            console.log(this.querySelector(".title").innerHTML);
            console.log(fakenews.includes(this.querySelector(".title").innerHTML))
            alert( (fakenews.includes(this.querySelector(".title").innerHTML)) ? "Gagné" : "Perdu")

            init();
        };
    }
}
