
renderVerbForLearnWords();

function renderVerbForLearnWords(){
    let verbItalian = getElementById("card-verb-italian");
    let verbEnglish = getElementById("card-verb-english");
    let randomNumber = getRandomNumber(dbVerbList.length);
    let verb = dbVerbList[randomNumber];

    verbItalian.innerHTML = verb.italian;
    verbEnglish.innerHTML = verb.english;
}

getElementById("btn-get-verb").addEventListener("click", function(){
    renderVerbForLearnWords();
});


renderAdjectiveForLearnWords();

function renderAdjectiveForLearnWords(){
    let adjectiveItalian = getElementById("card-adjective-italian");
    let adjectiveEnglish = getElementById("card-adjective-english");
    let randomNumber = getRandomNumber(dbAdjectiveList.length);
    let adjective = dbAdjectiveList[randomNumber];

    adjectiveItalian.innerHTML = adjective.italian;
    adjectiveEnglish.innerHTML = adjective.english;
}

getElementById("btn-get-adjective").addEventListener("click", function(){
    renderAdjectiveForLearnWords();
});

renderNounForLearnWords();

function renderNounForLearnWords(){
    let nounItalian = getElementById("card-noun-italian");
    let nounEnglish = getElementById("card-noun-english");
    let randomNumber = getRandomNumber(dbNounList.length);
    let noun = dbNounList[randomNumber];

    nounItalian.innerHTML = noun.italian;
    nounEnglish.innerHTML = noun.english;
}

getElementById("btn-get-noun").addEventListener("click", function(){
    renderNounForLearnWords();
});