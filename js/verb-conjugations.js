
/**
 * Program ilk basladiginda random bir fiil render edilir.
 */
renderVerb();

/**
 * Program ilk basladiginda tum fiiller render edilir.
 */
renderVerbs();

/**
 * Bu fonksiyon, eger parametre olarak id gonderilmemisse random bir fiil render eder. Eger parametre olarak bir id gonderilmisse o id'ye sahip fiili render eder.
 */
function renderVerb(pVerbId){

    if(pVerbId === undefined){
        let randomNumber = getRandomNumber(dbVerbList.length);
        getElementById("verb").innerHTML = dbVerbList[randomNumber].italian + " (" + dbVerbList[randomNumber].english + ")";
        getElementById("verb").setAttribute("verb-id", dbVerbList[randomNumber].id);
    } else{
        let clickedVerb = dbVerbList.find(item => item.id == pVerbId);
        getElementById("verb").innerHTML = clickedVerb.italian + " (" + clickedVerb.english + ")";
        getElementById("verb").setAttribute("verb-id", pVerbId);
    }

    clearBorderColor();
}

/**
 * Bu fonksiyon, tum fiilleri alfabetik sirayla render eder.
 */
function renderVerbs(){
    let verbList = dbVerbList
                    .sort(function(a, b) {
                        return a.italian.localeCompare(b.italian);
                    })
                    .map(item => {
                        return `<div class="col-md-6"><div><a id="${item.id}" href="#!">${item.italian}</a></div></div>`;
                    })
                    .join("");
    
    getElementById("accordion-body").innerHTML = verbList;
}

/**
 * Fiil listesinden hangi fiile tiklanirsa o fiil render edilir.
 */
getElementById("accordion-body").addEventListener("click", function(e){
    clear("presente");
    clear("passato-prossimo");
    clear("futuro-semplice");
    clearBorderColor();
    renderVerb(e.target.id);    
})

/**
 * New Verb butonuna tiklanirsa random bir fiil render edilir.
 */
getElementById("btn-new-verb").addEventListener("click", function(e){
    clear("presente");
    clear("passato-prossimo");
    clear("futuro-semplice");
    clearBorderColor();
    renderVerb();
})

/******************************************************
* Show butonlarina tiklandiginda inputlara dogru cevaplar yazdirilir.
*******************************************************/
getElementById("show-presente").addEventListener("click", function(){
    let verbId = getElementById("verb").getAttribute("verb-id");
    let verb = dbVerbList.find(item => item.id == verbId);

    getElementById("presente-io").value = verb.presente[0];
    getElementById("presente-tu").value = verb.presente[1];
    getElementById("presente-lui-lei").value = verb.presente[2];
    getElementById("presente-noi").value = verb.presente[3];
    getElementById("presente-voi").value = verb.presente[4];
    getElementById("presente-loro").value = verb.presente[5];

    clearBorderColor();
});

getElementById("show-passato-prossimo").addEventListener("click", function(){
    let verbId = getElementById("verb").getAttribute("verb-id");
    let verb = dbVerbList.find(item => item.id == verbId);

    getElementById("passato-prossimo-io").value = verb.passatoProssimo[0];
    getElementById("passato-prossimo-tu").value = verb.passatoProssimo[1];
    getElementById("passato-prossimo-lui-lei").value = verb.passatoProssimo[2];
    getElementById("passato-prossimo-noi").value = verb.passatoProssimo[3];
    getElementById("passato-prossimo-voi").value = verb.passatoProssimo[4];
    getElementById("passato-prossimo-loro").value = verb.passatoProssimo[5];

    clearBorderColor();
});

getElementById("show-futuro-semplice").addEventListener("click", function(){
    let verbId = getElementById("verb").getAttribute("verb-id");
    let verb = dbVerbList.find(item => item.id == verbId);

    getElementById("futuro-semplice-io").value = verb.futuroSemplice[0];
    getElementById("futuro-semplice-tu").value = verb.futuroSemplice[1];
    getElementById("futuro-semplice-lui-lei").value = verb.futuroSemplice[2];
    getElementById("futuro-semplice-noi").value = verb.futuroSemplice[3];
    getElementById("futuro-semplice-voi").value = verb.futuroSemplice[4];
    getElementById("futuro-semplice-loro").value = verb.futuroSemplice[5];

    clearBorderColor();
});

/******************************************************
* Clear butonlarina tiklandiginda inputlar temizlenir.
*******************************************************/
function clear(pTense){
    getElementById(`${pTense}-io`).value = "";
    getElementById(`${pTense}-tu`).value = "";
    getElementById(`${pTense}-lui-lei`).value = "";
    getElementById(`${pTense}-noi`).value = "";
    getElementById(`${pTense}-voi`).value = "";
    getElementById(`${pTense}-loro`).value = "";
}

getElementById("clear-presente").addEventListener("click",function(){
    clear("presente");
    clearBorderColor();
});

getElementById("clear-passato-prossimo").addEventListener("click",function(){
    clear("passato-prossimo");
    clearBorderColor();
});

getElementById("clear-futuro-semplice").addEventListener("click",function(){
    clear("futuro-semplice");
    clearBorderColor();
});

/******************************************************
* Inputlara verilen border renklerini temizler.
*******************************************************/
function clearBorderColor(){
    getElementById("presente-io").classList.remove("is-valid");
    getElementById("presente-io").classList.remove("is-invalid");
    getElementById("presente-tu").classList.remove("is-valid");
    getElementById("presente-tu").classList.remove("is-invalid");
    getElementById("presente-lui-lei").classList.remove("is-valid");
    getElementById("presente-lui-lei").classList.remove("is-invalid");
    getElementById("presente-noi").classList.remove("is-valid");
    getElementById("presente-noi").classList.remove("is-invalid");
    getElementById("presente-voi").classList.remove("is-valid");
    getElementById("presente-voi").classList.remove("is-invalid");
    getElementById("presente-loro").classList.remove("is-valid");
    getElementById("presente-loro").classList.remove("is-invalid");

    getElementById("passato-prossimo-io").classList.remove("is-valid");
    getElementById("passato-prossimo-io").classList.remove("is-invalid");
    getElementById("passato-prossimo-tu").classList.remove("is-valid");
    getElementById("passato-prossimo-tu").classList.remove("is-invalid");
    getElementById("passato-prossimo-lui-lei").classList.remove("is-valid");
    getElementById("passato-prossimo-lui-lei").classList.remove("is-invalid");
    getElementById("passato-prossimo-noi").classList.remove("is-valid");
    getElementById("passato-prossimo-noi").classList.remove("is-invalid");
    getElementById("passato-prossimo-voi").classList.remove("is-valid");
    getElementById("passato-prossimo-voi").classList.remove("is-invalid");
    getElementById("passato-prossimo-loro").classList.remove("is-valid");
    getElementById("passato-prossimo-loro").classList.remove("is-invalid");

    getElementById("futuro-semplice-io").classList.remove("is-valid");
    getElementById("futuro-semplice-io").classList.remove("is-invalid");
    getElementById("futuro-semplice-tu").classList.remove("is-valid");
    getElementById("futuro-semplice-tu").classList.remove("is-invalid");
    getElementById("futuro-semplice-lui-lei").classList.remove("is-valid");
    getElementById("futuro-semplice-lui-lei").classList.remove("is-invalid");
    getElementById("futuro-semplice-noi").classList.remove("is-valid");
    getElementById("futuro-semplice-noi").classList.remove("is-invalid");
    getElementById("futuro-semplice-voi").classList.remove("is-valid");
    getElementById("futuro-semplice-voi").classList.remove("is-invalid");
    getElementById("futuro-semplice-loro").classList.remove("is-valid");
    getElementById("futuro-semplice-loro").classList.remove("is-invalid");
}

/******************************************************
* Inputlara cevaplar yazildiginda dogrulugunu kontrol eder.
*******************************************************/
/**
 * 
 * @param {Hangi input'a focuslandigini parametre olarak veriyoruz} pFocusingInput 
 * @param {Hangi tense oldugunu parametre olarak veriyoruz} pTense 
 * @param {Hangi ozne oldugunu parametre olarak veriyoruz} pSubject 
 */
function inputControl(pFocusingInput, pTense, pSubject){
    let inputValue = getElementById(pFocusingInput).value;
    let verbId = getElementById("verb").getAttribute("verb-id");
    let verb = dbVerbList.find(item => item.id == verbId);
    let index;
    let answer;

    switch (pSubject) {
        case "io":
            index = 0;
            break;
        case "tu":
            index = 1;
            break;
        case "lui-lei":
            index = 2;
            break;
        case "noi":
            index = 3;
            break;
        case "voi":
            index = 4;
            break;
        case "loro":
            index = 5;
            break;
    }

    switch (pTense) {
        case "presente":
            answer = verb.presente[index];
            break;
        case "passato-prossimo":
            answer = verb.passatoProssimo[index];
            break;
        case "futuro-semplice":
            answer = verb.futuroSemplice[index];
            break;
    }

    if(answer === inputValue){
        getElementById(pFocusingInput).classList.add("is-valid");
        getElementById(pFocusingInput).classList.remove("is-invalid");
    } else {
        getElementById(pFocusingInput).classList.add("is-invalid");
        getElementById(pFocusingInput).classList.remove("is-valid");
    }
}

/**
 * Presente
 */
getElementById("presente-io").addEventListener("input", function(){
    inputControl("presente-io", "presente", "io");
})

getElementById("presente-tu").addEventListener("input", function(){
    inputControl("presente-tu", "presente", "tu");
})

getElementById("presente-lui-lei").addEventListener("input", function(){
    inputControl("presente-lui-lei", "presente", "lui-lei");
})

getElementById("presente-noi").addEventListener("input", function(){
    inputControl("presente-noi", "presente", "noi");
})

getElementById("presente-voi").addEventListener("input", function(){
    inputControl("presente-voi", "presente", "voi");
})

getElementById("presente-loro").addEventListener("input", function(){
    inputControl("presente-loro", "presente", "loro");
})

/**
 * Passato Prossimo
 */
getElementById("passato-prossimo-io").addEventListener("input", function(){
    inputControl("passato-prossimo-io", "passato-prossimo", "io");
})

getElementById("passato-prossimo-tu").addEventListener("input", function(){
    inputControl("passato-prossimo-tu", "passato-prossimo", "tu");
})

getElementById("passato-prossimo-lui-lei").addEventListener("input", function(){
    inputControl("passato-prossimo-lui-lei", "passato-prossimo", "lui-lei");
})

getElementById("passato-prossimo-noi").addEventListener("input", function(){
    inputControl("passato-prossimo-noi", "passato-prossimo", "noi");
})

getElementById("passato-prossimo-voi").addEventListener("input", function(){
    inputControl("passato-prossimo-voi", "passato-prossimo", "voi");
})

getElementById("passato-prossimo-loro").addEventListener("input", function(){
    inputControl("passato-prossimo-loro", "passato-prossimo", "loro");
})

/**
 * Futuro Semplice
 */
getElementById("futuro-semplice-io").addEventListener("input", function(){
    inputControl("futuro-semplice-io", "futuro-semplice", "io");
})

getElementById("futuro-semplice-tu").addEventListener("input", function(){
    inputControl("futuro-semplice-tu", "futuro-semplice", "tu");
})

getElementById("futuro-semplice-lui-lei").addEventListener("input", function(){
    inputControl("futuro-semplice-lui-lei", "futuro-semplice", "lui-lei");
})

getElementById("futuro-semplice-noi").addEventListener("input", function(){
    inputControl("futuro-semplice-noi", "futuro-semplice", "noi");
})

getElementById("futuro-semplice-voi").addEventListener("input", function(){
    inputControl("futuro-semplice-voi", "futuro-semplice", "voi");
})

getElementById("futuro-semplice-loro").addEventListener("input", function(){
    inputControl("futuro-semplice-loro", "futuro-semplice", "loro");
})