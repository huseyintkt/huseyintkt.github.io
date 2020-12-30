
const dbVerbList = [
      {
        "id" : uuidv4(),
        "english" : "Go",
        "turkish" : "Gitmek",
        "italian" : "Andare",
        "presente" : ["vado", "vai", "va", "andiamo", "andate", "vanno"],
        "passatoProssimo" : ["sono andato", "sei andato", "è andato", "siamo andati", "siete andati", "sono andati"],
        "futuroSemplice" : ["andrò", "andrai", "andrà", "andremo", "andrete", "andranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Come",
        "turkish" : "Gelmek",
        "italian" : "Venire",
        "presente" : ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
        "passatoProssimo" : ["sono venuto", "sei venuto", "è venuto", "siamo venuti", "siete venuti", "sono venuti"],
        "futuroSemplice" : ["verrò", "verrai", "verrà", "verremo", "verrete", "verranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Do, Make",
        "turkish" : "Yapmak",
        "italian" : "Fare",
        "presente" : ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
        "passatoProssimo" : ["ho fatto", "hai fatto", "ha fatto", "abbiamo fatto", "avete fatto", "hanno fatto"],
        "futuroSemplice" : ["farò", "farai", "farà", "faremo", "farete", "faranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Want",
        "turkish" : "İstemek",
        "italian" : "Volere",
        "presente" : ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
        "passatoProssimo" : ["ho voluto", "hai voluto", "ha voluto", "abbiamo voluto", "avete voluto", "hanno voluto"],
        "futuroSemplice" : ["vorrò", "vorrai", "vorrà", "vorremo", "vorrete", "vorranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Say",
        "turkish" : "Söylemek",
        "italian" : "Dire",
        "presente" : ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
        "passatoProssimo" : ["ho detto", "hai detto", "ha detto", "abbiamo detto", "avete detto", "hanno detto"],
        "futuroSemplice" : ["dirò", "dirai", "dirà", "diremo", "direte", "diranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Can",
        "turkish" : "-e Bilmek",
        "italian" : "Potere",
        "presente" : ["posso", "puoi", "può", "possiamo", "potete", "possono"],
        "passatoProssimo" : ["ho potuto; sono potuto", "hai potuto; sei potuto", "ha potuto; è potuto", "abbiamo potuto; siamo potuti", "avete potuto; siete potuti", "hanno potuto; sono potuti"],
        "futuroSemplice" : ["potrò", "potrai", "potrà", "potremo", "potrete", "potranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Know",
        "turkish" : "Bilmek",
        "italian" : "Sapare",
        "presente" : ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
        "passatoProssimo" : ["ho saputo", "hai saputo", "ha saputo", "abbiamo saputo", "avete saputo", "hanno saputo"],
        "futuroSemplice" : ["saprò", "saprai", "saprà", "sapremo", "saprete", "sapranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Drink",
        "turkish" : "İcmek",
        "italian" : "Bere",
        "presente" : ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
        "passatoProssimo" : ["ho bevuto", "hai bevuto", "ha bevuto", "abbiamo bevuto", "avete bevuto", "hanno bevuto"],
        "futuroSemplice" : ["berrò", "berrai", "berrà", "berremo", "berrete", "berranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Give",
        "turkish" : "Vermek",
        "italian" : "Dare",
        "presente" : ["do", "dai", "dà", "diamo", "date", "danno"],
        "passatoProssimo" : ["ho dato", "hai dato", "ha dato", "abbiamo dato", "avete dato", "hanno dato"],
        "futuroSemplice" : ["darò", "darai", "darà", "daremo", "darete", "daranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Finish",
        "turkish" : "Bitirmek",
        "italian" : "Finire",
        "presente" : ["finisco", "finisci", "finisce", "finiamo", "finite", "finiscono"],
        "passatoProssimo" : ["ho finito; sono finito", "hai finito; sei finito", "ha finito; è finito", "abbiamo finito; siamo finiti", "avete finito; siete finiti", "hanno finito; sono finiti"],
        "futuroSemplice" : ["finirò", "finirai", "finirà", "finiremo", "finirete", "finiranno"]
      }, 
      {
        "id" : uuidv4(),
        "english" : "Stay",
        "turkish" : "Kalmak",
        "italian" : "Rimanere",
        "presente" : ["rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"],
        "passatoProssimo" : ["sono rimasto", "sei rimasto", "è rimasto", "siamo rimasti", "siete rimasti", "sono rimasti"],
        "futuroSemplice" : ["rimarrò", "rimarrai", "rimarrà", "rimarremo", "rimarrete", "rimarranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Stay",
        "turkish" : "Kalmak",
        "italian" : "Stare",
        "presente" : ["sto", "stai", "sta", "stiamo", "state", "stanno"],
        "passatoProssimo" : ["sono stato", "sei stato", "è stato", "siamo stati", "siete stati", "sono stati"],
        "futuroSemplice" : ["starò", "starai", "starà", "staremo", "starete", "staranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Must, Have to",
        "turkish" : "-Meli, -Malı",
        "italian" : "Dovere",
        "presente" : ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
        "passatoProssimo" : ["ho dovuto", "hai dovuto", "ha dovuto", "abbiamo dovuto", "avete dovuto", "hanno dovuto"],
        "futuroSemplice" : ["dovrò", "dovrai", "dovrà", "dovremo", "dovrete", "dovranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Paint",
        "turkish" : "Boyamak",
        "italian" : "Dipingere",
        "presente" : ["dipingo", "dipingi", "dipinge", "dipingiamo", "dipingete", "dipingono"],
        "passatoProssimo" : ["ho dipinto", "hai dipinto", "ha dipinto", "abbiamo dipinto", "avete dipinto", "hanno dipinto"],
        "futuroSemplice" : ["dipingerò", "dipingerai", "dipingerà", "dipingeremo", "dipingerete", "dipingeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Forget",
        "turkish" : "Unutmak",
        "italian" : "Dimenticare",
        "presente" : ["dimentico", "dimentichi", "dimentica", "dimentichiamo", "dimenticate", "dimenticano"],
        "passatoProssimo" : ["ho dimenticato", "hai dimenticato", "ha dimenticato", "abbiamo dimenticato", "avete dimenticato", "hanno dimenticato"],
        "futuroSemplice" : ["dimenticherò", "dimenticherai", "dimenticherà", "dimenticheremo", "dimenticherete", "dimenticheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Climb, Go up",
        "turkish" : "Tırmanmak, Yukarı çıkmak",
        "italian" : "Salire",
        "presente" : ["salgo", "sali", "sale", "saliamo", "salite", "salgono"],
        "passatoProssimo" : ["sono salito", "sei salito", "è salito", "siamo saliti", "siete saliti", "sono saliti"],
        "futuroSemplice" : ["salirò", "salirai", "salirà", "saliremo", "salirete", "saliranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Have",
        "turkish" : "Sahip olmak",
        "italian" : "Avere",
        "presente" : ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
        "passatoProssimo" : ["ho avuto", "hai avuto", "ha avuto", "abbiamo avuto", "avete avuto", "hanno avuto"],
        "futuroSemplice" : ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Be",
        "turkish" : "Olmak",
        "italian" : "Essere",
        "presente" : ["sono", "sei", "è", "siamo", "siete", "sono"],
        "passatoProssimo" : ["sono stato", "sei stato", "è stato", "siamo stati", "siete stati", "sono stati"],
        "futuroSemplice" : ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Go out, Exit",
        "turkish" : "Çıkmak",
        "italian" : "Uscire",
        "presente" : ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
        "passatoProssimo" : ["sono uscito", "sei uscito", "è uscito", "siamo usciti", "siete usciti", "sono usciti"],
        "futuroSemplice" : ["uscirò", "uscirai", "uscirà", "usciremo", "uscirete", "usciranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "See",
        "turkish" : "Görmek",
        "italian" : "Vedere",
        "presente" : ["vedo", "vedi", "vede", "vediamo", "vedete", "vedono"],
        "passatoProssimo" : ["ho visto", "hai visto", "ha visto", "abbiamo visto", "avete visto", "hanno visto"],
        "futuroSemplice" : ["vedrò", "vedrai", "vedrà", "vedremo", "vedrete", "vedranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Think",
        "turkish" : "Düşünmek",
        "italian" : "Pensare",
        "presente" : ["penso", "pensi", "pensa", "pensiamo", "pensate", "pensano"],
        "passatoProssimo" : ["ho pensato", "hai pensato", "ha pensato", "abbiamo pensato", "avete pensato", "hanno pensato"],
        "futuroSemplice" : ["penserò", "penserai", "penserà", "penseremo", "penserete", "penseranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Find",
        "turkish" : "Bulmak",
        "italian" : "Trovare",
        "presente" : ["trovo", "trovi", "trova", "troviamo", "trovate", "trovano"],
        "passatoProssimo" : ["ho trovato", "hai trovato", "ha trovato", "abbiamo trovato", "avete trovato", "hanno trovato"],
        "futuroSemplice" : ["troverò", "troverai", "troverà", "troveremo", "troverete", "troveranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Use",
        "turkish" : "Kullanmak",
        "italian" : "Usare",
        "presente" : ["uso", "usi", "usa", "usiamo", "usate", "usano"],
        "passatoProssimo" : ["ho usato", "hai usato", "ha usato", "abbiamo usato", "avete usato", "hanno usato"],
        "futuroSemplice" : ["userò", "userai", "userà", "useremo", "userete", "useranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Pay",
        "turkish" : "Ödemek",
        "italian" : "Pagare",
        "presente" : ["pago", "paghi", "paga", "paghiamo", "pagate", "pagano"],
        "passatoProssimo" : ["ho pagato", "hai pagato", "ha pagato", "abbiamo pagato", "avete pagato", "hanno pagato"],
        "futuroSemplice" : ["pagherò", "pagherai", "pagherà", "pagheremo", "pagherete", "pagheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Learn",
        "turkish" : "Öğrenmek",
        "italian" : "Imparare",
        "presente" : ["imparo", "impari", "impara", "impariamo", "imparate", "imparano"],
        "passatoProssimo" : ["ho imparato", "hai imparato", "ha imparato", "abbiamo imparato", "avete imparato", "hanno imparato"],
        "futuroSemplice" : ["imparerò", "imparerai", "imparerà", "impareremo", "imparerete", "impareranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Modify, Change",
        "turkish" : "Değiştirmek",
        "italian" : "Modificare",
        "presente" : ["modifico", "modifichi", "modifica", "modifichiamo", "modificate", "modificano"],
        "passatoProssimo" : ["ho modificato", "hai modificato", "ha modificato", "abbiamo modificato", "avete modificato", "hanno modificato"],
        "futuroSemplice" : ["modificherò", "modificherai", "modificherà", "modificheremo", "modificherete", "modificheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Add",
        "turkish" : "Eklemek",
        "italian" : "Aggiungere",
        "presente" : ["aggiungo", "aggiungi", "aggiunge", "aggiungiamo", "aggiungete", "aggiungono"],
        "passatoProssimo" : ["ho aggiunto", "hai aggiunto", "ha aggiunto", "abbiamo aggiunto", "avete aggiunto", "hanno aggiunto"],
        "futuroSemplice" : ["aggiungerò", "aggiungerai", "aggiungerà", "aggiungeremo", "aggiungerete", "aggiungeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Send",
        "turkish" : "Göndermek",
        "italian" : "Mandare",
        "presente" : ["mando", "mandi", "manda", "mandiamo", "mandate", "mandano"],
        "passatoProssimo" : ["ho mandato", "hai mandato", "ha mandato", "abbiamo mandato", "avete mandato", "hanno mandato"],
        "futuroSemplice" : ["manderò", "manderai", "manderà", "manderemo", "manderete", "manderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Permit, Allow, Authorize",
        "turkish" : "İzin Vermek",
        "italian" : "Permettere",
        "presente" : ["permetto", "permetti", "permette", "permettiamo", "permettete", "permettono"],
        "passatoProssimo" : ["ho permesso", "hai permesso", "ha permesso", "abbiamo permesso", "avete permesso", "hanno permesso"],
        "futuroSemplice" : ["permetterò", "permetterai", "permetterà", "permetteremo", "permetterete", "permetteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Live",
        "turkish" : "Yaşamak",
        "italian" : "Abitare",
        "presente" : ["abito", "abiti", "abita", "abitiamo", "abitate", "abitano"],
        "passatoProssimo" : ["ho abitato", "hai abitato", "ha abitato", "abbiamo abitato", "avete abitato", "hanno abitato"],
        "futuroSemplice" : ["abiterò", "abiterai", "abiterà", "abiteremo", "abiterete", "abiteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Help",
        "turkish" : "Yardım etmek",
        "italian" : "Aiutare",
        "presente" : ["aiuto", "aiuti", "aiuta", "aiutiamo", "aiutate", "aiutano"],
        "passatoProssimo" : ["ho aiutato", "hai aiutato", "ha aiutato", "abbiamo aiutato", "avete aiutato", "hanno aiutato"],
        "futuroSemplice" : ["aiuterò", "aiuterai", "aiuterà", "aiuteremo", "aiuterete", "aiuteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Love",
        "turkish" : "Sevmek",
        "italian" : "Amare",
        "presente" : ["amo", "ami", "ama", "amiamo", "amate", "amano"],
        "passatoProssimo" : ["ho amato", "hai amato", "ha amato", "abbiamo amato", "avete amato", "hanno amato"],
        "futuroSemplice" : ["amerò", "amerai", "amerà", "ameremo", "amerete", "ameranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Open",
        "turkish" : "Açmak",
        "italian" : "Aprire",
        "presente" : ["apro", "apri", "apre", "apriamo", "aprite", "aprono"],
        "passatoProssimo" : ["ho aperto", "hai aperto", "ha aperto", "abbiamo aperto", "avete aperto", "hanno aperto"],
        "futuroSemplice" : ["aprirò", "aprirai", "aprirà", "apriremo", "aprirete", "apriranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Arrive",
        "turkish" : "Varmak",
        "italian" : "Arrivare",
        "presente" : ["arrivo", "arrivi", "arriva", "arriviamo", "arrivate", "arrivano"],
        "passatoProssimo" : ["sono arrivato", "sei arrivato", "è arrivato", "siamo arrivati", "siete arrivati", "sono arrivati"],
        "futuroSemplice" : ["arriverò", "arriverai", "arriverà", "arriveremo", "arriverete", "arriveranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Listen",
        "turkish" : "Dinlemek",
        "italian" : "Ascoltare",
        "presente" : ["ascolto", "ascolti", "ascolta", "ascoltiamo", "ascoltate", "ascoltano"],
        "passatoProssimo" : ["ho ascoltato", "hai ascoltato", "ha ascoltato", "abbiamo ascoltato", "avete ascoltato", "hanno ascoltato"],
        "futuroSemplice" : ["ascolterò", "ascolterai", "ascolterà", "ascolteremo", "ascolterete", "ascolteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Wait",
        "turkish" : "Beklemek",
        "italian" : "Aspettare",
        "presente" : ["aspetto", "aspetti", "aspetta", "aspettiamo", "aspettate", "aspettano"],
        "passatoProssimo" : ["ho aspettato", "hai aspettato", "ha aspettato", "abbiamo aspettato", "avete aspettato", "hanno aspettato"],
        "futuroSemplice" : ["aspetterò", "aspetterai", "aspetterà", "aspetteremo", "aspetterete", "aspetteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Dance",
        "turkish" : "Dans etmek",
        "italian" : "Ballare",
        "presente" : ["ballo", "balli", "balla", "balliamo", "ballate", "ballano"],
        "passatoProssimo" : ["ho ballato", "hai ballato", "ha ballato", "abbiamo ballato", "avete ballato", "hanno ballato"],
        "futuroSemplice" : ["ballerò", "ballerai", "ballerà", "balleremo", "ballerete", "balleranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Need",
        "turkish" : "İhtiyaç duymak",
        "italian" : "Bisognare",
        "presente" : ["bisogno", "bisogni", "bisogna", "bisogniamo", "bisognate", "bisognano"],
        "passatoProssimo" : ["sono bisognato", "sei bisognato", "è bisognato", "siamo bisognati", "siete bisognati", "sono bisognati"],
        "futuroSemplice" : ["bisognerò", "bisognerai", "bisognerà", "bisogneremo", "bisognerete", "bisogneranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Change",
        "turkish" : "Değiştirmek",
        "italian" : "Cambiare",
        "presente" : ["cambio", "cambi", "cambia", "cambiamo", "cambiate", "cambiano"],
        "passatoProssimo" : ["ho cambiato; sono cambiato", "hai cambiato; sei cambiato", "ha cambiato; è cambiato", "abbiamo cambiato; siamo cambiati", "avete cambiato; siete cambiati", "hanno cambiato; sono cambiati"],
        "futuroSemplice" : ["cambierò", "cambierai", "cambierà", "cambieremo", "cambierete", "cambieranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Walk",
        "turkish" : "Yürümek",
        "italian" : "Camminare",
        "presente" : ["cammino", "cammini", "cammina", "camminiamo", "camminate", "camminano"],
        "passatoProssimo" : ["ho camminato", "hai camminato", "ha camminato", "abbiamo camminato", "avete camminato", "hanno camminato"],
        "futuroSemplice" : ["camminerò", "camminerai", "camminerà", "cammineremo", "camminerete", "cammineranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Sing",
        "turkish" : "Şarkı söylemek",
        "italian" : "Cantare",
        "presente" : ["canto", "canti", "canta", "cantiamo", "cantate", "cantano"],
        "passatoProssimo" : ["ho cantato", "hai cantato", "ha cantato", "abbiamo cantato", "avete cantato", "hanno cantato"],
        "futuroSemplice" : ["canterò", "canterai", "canterà", "canteremo", "canterete", "canteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Understand",
        "turkish" : "Anlamak",
        "italian" : "Capire",
        "presente" : ["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"],
        "passatoProssimo" : ["ho capito", "hai capito", "ha capito", "abbiamo capito", "avete capito", "hanno capito"],
        "futuroSemplice" : ["capirò", "capirai", "capirà", "capiremo", "capirete", "capiranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Have dinner",
        "turkish" : "Akşam yemeği yemek",
        "italian" : "Cenare",
        "presente" : ["ceno", "ceni", "cena", "ceniamo", "cenate", "cenano"],
        "passatoProssimo" : ["ho cenato", "hai cenato", "ha cenato", "abbiamo cenato", "avete cenato", "hanno cenato"],
        "futuroSemplice" : ["cenerò", "cenerai", "cenerà", "ceneremo", "cenerete", "ceneranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Look, Search for",
        "turkish" : "Aramak",
        "italian" : "Cercare",
        "presente" : ["cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano"],
        "passatoProssimo" : ["ho cercato", "hai cercato", "ha cercato", "abbiamo cercato", "avete cercato", "hanno cercato"],
        "futuroSemplice" : ["cercherò", "cercherai", "cercherà", "cercheremo", "cercherete", "cercheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Call",
        "turkish" : "Aramak, Çağırmak",
        "italian" : "Chiamare",
        "presente" : ["chiamo", "chiami", "chiama", "chiamiamo", "chiamate", "chiamano"],
        "passatoProssimo" : ["ho chiamato", "hai chiamato", "ha chiamato", "abbiamo chiamato", "avete chiamato", "hanno chiamato"],
        "futuroSemplice" : ["chiamerò", "chiamerai", "chiamerà", "chiameremo", "chiamerete", "chiameranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Ask",
        "turkish" : "Sormak",
        "italian" : "Chiedere",
        "presente" : ["chiedo", "chiedi", "chiede", "chiediamo", "chiedete", "chiedono"],
        "passatoProssimo" : ["ho chiesto", "hai chiesto", "ha chiesto", "abbiamo chiesto", "avete chiesto", "hanno chiesto"],
        "futuroSemplice" : ["chiederò", "chiederai", "chiederà", "chiederemo", "chiederete", "chiederanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Close",
        "turkish" : "Kapatmak",
        "italian" : "Chiudere",
        "presente" : ["chiudo", "chiudi", "chiude", "chiudiamo", "chiudete", "chiudono"],
        "passatoProssimo" : ["ho chiuso", "hai chiuso", "ha chiuso", "abbiamo chiuso", "avete chiuso", "hanno chiuso"],
        "futuroSemplice" : ["chiuderò", "chiuderai", "chiuderà", "chiuderemo", "chiuderete", "chiuderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Start, Begin",
        "turkish" : "Başlamak",
        "italian" : "Cominciare",
        "presente" : ["comincio", "cominci", "comincia", "cominciamo", "cominciate", "cominciano"],
        "passatoProssimo" : ["ho cominciato; sono cominciato", "hai cominciato; sei cominciato", "ha cominciato; è cominciato", "abbiamo cominciato; siamo cominciati", "avete cominciato; siete cominciati", "hanno cominciato; sono cominciati"],
        "futuroSemplice" : ["comincerò", "comincerai", "comincerà", "cominceremo", "comincerete", "cominceranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Buy, Purchase",
        "turkish" : "Satın almak",
        "italian" : "Comprare",
        "presente" : ["compro", "compri", "compra", "compriamo", "comprate", "comprano"],
        "passatoProssimo" : ["ho comprato", "hai comprato", "ha comprato", "abbiamo comprato", "avete comprato", "hanno comprato"],
        "futuroSemplice" : ["comprerò", "comprerai", "comprerà", "compreremo", "comprerete", "compreranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Know",
        "turkish" : "Bilmek, Tanımak",
        "italian" : "Conoscere",
        "presente" : ["conosco", "conosci", "conosce", "conosciamo", "conoscete", "conoscono"],
        "passatoProssimo" : ["ho conosciuto", "hai conosciuto", "ha conosciuto", "abbiamo conosciuto", "avete conosciuto", "hanno conosciuto"],
        "futuroSemplice" : ["conoscerò", "conoscerai", "conoscerà", "conosceremo", "conoscerete", "conosceranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Continue",
        "turkish" : "Devam etmek",
        "italian" : "Continuare",
        "presente" : ["continuo", "continui", "continua", "continuiamo", "continuate", "continuano"],
        "passatoProssimo" : ["ho continuato", "hai continuato", "ha continuato", "abbiamo continuato", "avete continuato", "hanno continuato"],
        "futuroSemplice" : ["continuerò", "continuerai", "continuerà", "continueremo", "continuerete", "continueranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Run",
        "turkish" : "Koşmak",
        "italian" : "Correre",
        "presente" : ["corro", "corri", "corre", "corriamo", "correte", "corrono"],
        "passatoProssimo" : ["ho corso; sono corso", "hai corso; sei corso", "ha corso; è corso", "abbiamo corso; siamo corsi", "avete corso; siete corsi", "hanno corso; sono corsi"],
        "futuroSemplice" : ["correrò", "correrai", "correrà", "correremo", "correrete", "correranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Believe",
        "turkish" : "İnanmak",
        "italian" : "Credere",
        "presente" : ["credo", "credi", "crede", "crediamo", "credete", "credono"],
        "passatoProssimo" : ["ho creduto", "hai creduto", "ha creduto", "abbiamo creduto", "avete creduto", "hanno creduto"],
        "futuroSemplice" : ["crederò", "crederai", "crederà", "crederemo", "crederete", "crederanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Cook",
        "turkish" : "Pişirmek",
        "italian" : "Cucinare",
        "presente" : ["cucino", "cucini", "cucina", "cuciniamo", "cucinate", "cucinano"],
        "passatoProssimo" : ["ho cucinato", "hai cucinato", "ha cucinato", "abbiamo cucinato", "avete cucinato", "hanno cucinato"],
        "futuroSemplice" : ["cucinerò", "cucinerai", "cucinerà", "cucineremo", "cucinerete", "cucineranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Decide",
        "turkish" : "Karar vermek",
        "italian" : "Decidere",
        "presente" : ["decido", "decidi", "decide", "decidiamo", "decidete", "decidono"],
        "passatoProssimo" : ["ho deciso", "hai deciso", "ha deciso", "abbiamo deciso", "avete deciso", "hanno deciso"],
        "futuroSemplice" : ["deciderò", "deciderai", "deciderà", "decideremo", "deciderete", "decideranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Dry",
        "turkish" : "Kurutmak",
        "italian" : "Asciugare",
        "presente" : ["asciugo", "asciughi", "asciuga", "asciughiamo", "asciugate", "asciugano"],
        "passatoProssimo" : ["ho asciugato", "hai asciugato", "ha asciugato", "abbiamo asciugato", "avete asciugato", "hanno asciugato"],
        "futuroSemplice" : ["asciugherò", "asciugherai", "asciugherà", "asciugheremo", "asciugherete", "asciugheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Sleep",
        "turkish" : "Uyumak",
        "italian" : "Dormire",
        "presente" : ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"],
        "passatoProssimo" : ["ho dormito", "hai dormito", "ha dormito", "abbiamo dormito", "avete dormito", "hanno dormito"],
        "futuroSemplice" : ["dormirò", "dormirai", "dormirà", "dormiremo", "dormirete", "dormiranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Enter, Go in",
        "turkish" : "Giriş",
        "italian" : "Entrare",
        "presente" : ["entro", "entri", "entra", "entriamo", "entrate", "entrano"],
        "passatoProssimo" : ["sono entrato", "sei entrato", "è entrato", "siamo entrati", "siete entrati", "sono entrati"],
        "futuroSemplice" : ["entrerò", "entrerai", "entrerà", "entreremo", "entrerete", "entreranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Function, Work",
        "turkish" : "Çalışmak",
        "italian" : "Funzionare",
        "presente" : ["funziono", "funzioni", "funziona", "funzioniamo", "funzionate", "funzionano"],
        "passatoProssimo" : ["sono funzionato", "sei funzionato", "è funzionato", "siamo funzionati", "siete funzionati", "sono funzionati"],
        "futuroSemplice" : ["funzionerò", "funzionerai", "funzionerà", "funzioneremo", "funzionerete", "funzioneranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Play",
        "turkish" : "Oynamak",
        "italian" : "Giocare",
        "presente" : ["gioco", "giochi", "gioca", "giochiamo", "giocate", "giocano"],
        "passatoProssimo" : ["ho giocato", "hai giocato", "ha giocato", "abbiamo giocato", "avete giocato", "hanno giocato"],
        "futuroSemplice" : ["giocherò", "giocherai", "giocherà", "giocheremo", "giocherete", "giocheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Watch",
        "turkish" : "İzlemek",
        "italian" : "Guardare",
        "presente" : ["guardo", "guardi", "guarda", "guardiamo", "guardate", "guardano"],
        "passatoProssimo" : ["ho guardato", "hai guardato", "ha guardato", "abbiamo guardato", "avete guardato", "hanno guardato"],
        "futuroSemplice" : ["guarderò", "guarderai", "guarderà", "guarderemo", "guarderete", "guarderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Drive",
        "turkish" : "Sürmek",
        "italian" : "Guidare",
        "presente" : ["guido", "guidi", "guida", "guidiamo", "guidate", "guidano"],
        "passatoProssimo" : ["ho guidato", "hai guidato", "ha guidato", "abbiamo guidato", "avete guidato", "hanno guidato"],
        "futuroSemplice" : ["guiderò", "guiderai", "guiderà", "guideremo", "guiderete", "guideranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Start, Begin",
        "turkish" : "Başlamak",
        "italian" : "Iniziare",
        "presente" : ["inizio", "inizi", "inizia", "iniziamo", "iniziate", "iniziano"],
        "passatoProssimo" : ["ho iniziato", "hai iniziato", "ha iniziato", "abbiamo iniziato", "avete iniziato", "hanno iniziato"],
        "futuroSemplice" : ["inizierò", "inizierai", "inizierà", "inizieremo", "inizierete", "inizieranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Let go",
        "turkish" : "Ayrılmak",
        "italian" : "Lasciare",
        "presente" : ["lascio", "lasci", "lascia", "lasciamo", "lasciate", "lasciano"],
        "passatoProssimo" : ["ho lasciato", "hai lasciato", "ha lasciato", "abbiamo lasciato", "avete lasciato", "hanno lasciato"],
        "futuroSemplice" : ["lascerò", "lascerai", "lascerà", "lasceremo", "lascerete", "lasceranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Work",
        "turkish" : "Çalışmak",
        "italian" : "Lavorare",
        "presente" : ["lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano"],
        "passatoProssimo" : ["ho lavorato", "hai lavorato", "ha lavorato", "abbiamo lavorato", "avete lavorato", "hanno lavorato"],
        "futuroSemplice" : ["lavorerò", "lavorerai", "lavorerà", "lavoreremo", "lavorerete", "lavoreranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Read",
        "turkish" : "Okumak",
        "italian" : "Leggere",
        "presente" : ["leggo", "leggi", "legge", "leggiamo", "leggete", "leggono"],
        "passatoProssimo" : ["ho letto", "hai letto", "ha letto", "abbiamo letto", "avete letto", "hanno letto"],
        "futuroSemplice" : ["leggerò", "leggerai", "leggerà", "leggeremo", "leggerete", "leggeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Eat",
        "turkish" : "Yemek",
        "italian" : "Mangiare",
        "presente" : ["mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"],
        "passatoProssimo" : ["ho mangiato", "hai mangiato", "ha mangiato", "abbiamo mangiato", "avete mangiato", "hanno mangiato"],
        "futuroSemplice" : ["mangerò", "mangerai", "mangerà", "mangeremo", "mangerete", "mangeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Put",
        "turkish" : "Koymak",
        "italian" : "Mettere",
        "presente" : ["metto", "metti", "mette", "mettiamo", "mettete", "mettono"],
        "passatoProssimo" : ["ho messo", "hai messo", "ha messo", "abbiamo messo", "avete messo", "hanno messo"],
        "futuroSemplice" : ["metterò", "metterai", "metterà", "metteremo", "metterete", "metteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Die",
        "turkish" : "Ölmek",
        "italian" : "Morire",
        "presente" : ["muoio", "muori", "muore", "moriamo", "morite", "muoiono"],
        "passatoProssimo" : ["sono morto", "sei morto", "è morto", "siamo morti", "siete morti", "sono morti"],
        "futuroSemplice" : ["morirò; morrò", "morirai; morrai", "morirà; morrà", "moriremo; morremo", "morirete; morrete", "moriranno; morranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Sort",
        "turkish" : "Sıralamak",
        "italian" : "Ordinare",
        "presente" : ["ordino", "ordini", "ordina", "ordiniamo", "ordinate", "ordinano"],
        "passatoProssimo" : ["ho ordinato", "hai ordinato", "ha ordinato", "abbiamo ordinato", "avete ordinato", "hanno ordinato"],
        "futuroSemplice" : ["ordinerò", "ordinerai", "ordinerà", "ordineremo", "ordinerete", "ordineranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Speak",
        "turkish" : "Konuşmak",
        "italian" : "Parlare",
        "presente" : ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"],
        "passatoProssimo" : ["ho parlato", "hai parlato", "ha parlato", "abbiamo parlato", "avete parlato", "hanno parlato"],
        "futuroSemplice" : ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Leave",
        "turkish" : "Ayrılmak",
        "italian" : "Partire",
        "presente" : ["parto", "parti", "parte", "partiamo", "partite", "partono"],
        "passatoProssimo" : ["sono partito", "sei partito", "è partito", "siamo partiti", "siete partiti", "sono partiti"],
        "futuroSemplice" : ["partirò", "partirai", "partirà", "partiremo", "partirete", "partiranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Pass",
        "turkish" : "Geçmek",
        "italian" : "Passare",
        "presente" : ["passo", "passi", "passa", "passiamo", "passate", "passano"],
        "passatoProssimo" : ["ho passato; sono passato", "hai passato; sei passato", "ha passato; è passato", "abbiamo passato; siamo passati", "avete passato; siete passati", "hanno passato; sono passati"],
        "futuroSemplice" : ["passerò", "passerai", "passerà", "passeremo", "passerete", "passeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Bring",
        "turkish" : "Getirmek",
        "italian" : "Portare",
        "presente" : ["porto", "porti", "porta", "portiamo", "portate", "portano"],
        "passatoProssimo" : ["ho portato", "hai portato", "ha portato", "abbiamo portato", "avete portato", "hanno portato"],
        "futuroSemplice" : ["porterò", "porterai", "porterà", "porteremo", "porterete", "porteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Have lunch",
        "turkish" : "Öğlen yemeği yemek",
        "italian" : "Pranzare",
        "presente" : ["pranzo", "pranzi", "pranza", "pranziamo", "pranzate", "pranzano"],
        "passatoProssimo" : ["ho pranzato", "hai pranzato", "ha pranzato", "abbiamo pranzato", "avete pranzato", "hanno pranzato"],
        "futuroSemplice" : ["pranzerò", "pranzerai", "pranzerà", "pranzeremo", "pranzerete", "pranzeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Take",
        "turkish" : "Almak",
        "italian" : "Prendere",
        "presente" : ["prendo", "prendi", "prende", "prendiamo", "prendete", "prendono"],
        "passatoProssimo" : ["ho preso", "hai preso", "ha preso", "abbiamo preso", "avete preso", "hanno preso"],
        "futuroSemplice" : ["prenderò", "prenderai", "prenderà", "prenderemo", "prenderete", "prenderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Try, Test",
        "turkish" : "Denemek",
        "italian" : "Provare",
        "presente" : ["provo", "provi", "prova", "proviamo", "provate", "provano"],
        "passatoProssimo" : ["ho provato", "hai provato", "ha provato", "abbiamo provato", "avete provato", "hanno provato"],
        "futuroSemplice" : ["proverò", "proverai", "proverà", "proveremo", "proverete", "proveranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Stay",
        "turkish" : "Kalmak",
        "italian" : "Restare",
        "presente" : ["resto", "resti", "resta", "restiamo", "restate", "restano"],
        "passatoProssimo" : ["ho restato; sono restato", "hai restato; sei restato", "ha restato; è restato", "abbiamo restato; siamo restati", "avete restato; siete restati", "hanno restato; sono restati"],
        "futuroSemplice" : ["resterò", "resterai", "resterà", "resteremo", "resterete", "resteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Remember",
        "turkish" : "Hatırlamak",
        "italian" : "Ricordare",
        "presente" : ["ricordo", "ricordi", "ricorda", "ricordiamo", "ricordate", "ricordano"],
        "passatoProssimo" : ["ho ricordato", "hai ricordato", "ha ricordato", "abbiamo ricordato", "avete ricordato", "hanno ricordato"],
        "futuroSemplice" : ["ricorderò", "ricorderai", "ricorderà", "ricorderemo", "ricorderete", "ricorderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Repeat",
        "turkish" : "Tekrarlamak",
        "italian" : "Ripetere",
        "presente" : ["ripeto", "ripeti", "ripete", "ripetiamo", "ripetete", "ripetono"],
        "passatoProssimo" : ["ho ripetuto", "hai ripetuto", "ha ripetuto", "abbiamo ripetuto", "avete ripetuto", "hanno ripetuto"],
        "futuroSemplice" : ["ripeterò", "ripeterai", "ripeterà", "ripeteremo", "ripeterete", "ripeteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Reply, Answer",
        "turkish" : "Cevaplamak",
        "italian" : "Rispondere",
        "presente" : ["rispondo", "rispondi", "risponde", "rispondiamo", "rispondete", "rispondono"],
        "passatoProssimo" : ["ho risposto", "hai risposto", "ha risposto", "abbiamo risposto", "avete risposto", "hanno risposto"],
        "futuroSemplice" : ["risponderò", "risponderai", "risponderà", "risponderemo", "risponderete", "risponderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Choose, Select",
        "turkish" : "Seçmek",
        "italian" : "Scegliere",
        "presente" : ["scelgo", "scegli", "sceglie", "scegliamo", "scegliete", "scelgono"],
        "passatoProssimo" : ["ho scelto", "hai scelto", "ha scelto", "abbiamo scelto", "avete scelto", "hanno scelto"],
        "futuroSemplice" : ["sceglierò; scerrò", "sceglierai; scerrai", "sceglierà; scerrà", "sceglieremo; scerremo", "sceglierete; scerrete", "sceglieranno; scerranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Write",
        "turkish" : "Yazmak",
        "italian" : "Scrivere",
        "presente" : ["scrivo", "scrivi", "scrive", "scriviamo", "scrivete", "scrivete"],
        "passatoProssimo" : ["ho scritto", "hai scritto", "ha scritto", "abbiamo scritto", "avete scritto", "hanno scritto"],
        "futuroSemplice" : ["scriverò", "scriverai", "scriverà", "scriveremo", "scriverete", "scriveranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Follow",
        "turkish" : "Takip etmek",
        "italian" : "Seguire",
        "presente" : ["seguo", "segui", "segue", "seguiamo", "seguite", "seguono"],
        "passatoProssimo" : ["ho seguito; sono seguito", "hai seguito; sei seguito", "ha seguito; è seguito", "abbiamo seguito; siamo seguiti", "avete seguito; siete seguiti", "hanno seguito; sono seguiti"],
        "futuroSemplice" : ["seguirò", "seguirai", "seguirà", "seguiremo", "seguirete", "seguiranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Hear",
        "turkish" : "Duymak",
        "italian" : "Sentire",
        "presente" : ["sento", "senti", "sente", "sentiamo", "sentite", "sentono"],
        "passatoProssimo" : ["ho sentito; sono sentito", "hai sentito; sei sentito", "ha sentito; è sentito", "abbiamo sentito; siamo sentiti", "avete sentito; siete sentiti", "hanno sentito; sono sentiti"],
        "futuroSemplice" : ["sentirò", "sentirai", "sentirà", "sentiremo", "sentirete", "sentiranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Develop",
        "turkish" : "Geliştirmek",
        "italian" : "Sviluppare",
        "presente" : ["sviluppo", "sviluppi", "sviluppa", "sviluppiamo", "sviluppate", "sviluppate"],
        "passatoProssimo" : ["ho sviluppato", "hai sviluppato", "ha sviluppato", "abbiamo sviluppato", "avete sviluppato", "hanno sviluppato"],
        "futuroSemplice" : ["svilupperò", "svilupperai", "svilupperà", "svilupperemo", "svilupperete", "svilupperanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Hope",
        "turkish" : "Umut etmek",
        "italian" : "Sperare",
        "presente" : ["spero", "speri", "spera", "speriamo", "sperate", "sperano"],
        "passatoProssimo" : ["ho sperato", "hai sperato", "ha sperato", "abbiamo sperato", "avete sperato", "hanno sperato"],
        "futuroSemplice" : ["spererò", "spererai", "spererà", "spereremo", "spererete", "spereranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Explain",
        "turkish" : "Açıklamak",
        "italian" : "Spiegare",
        "presente" : ["spiego", "spieghi", "spiega", "spieghiamo", "spiegate", "spiegano"],
        "passatoProssimo" : ["ho spiegato", "hai spiegato", "ha spiegato", "abbiamo spiegato", "avete spiegato", "hanno spiegato"],
        "futuroSemplice" : ["spiegherò", "spiegherai", "spiegherà", "spiegheremo", "spiegherete", "spiegheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Study",
        "turkish" : "Çalışmak",
        "italian" : "Studiare",
        "presente" : ["studio", "studi", "studia", "studiamo", "studiate", "studiano"],
        "passatoProssimo" : ["ho studiato", "hai studiato", "ha studiato", "abbiamo studiato", "avete studiato", "hanno studiato"],
        "futuroSemplice" : ["studierò", "studierai", "studierà", "studieremo", "studierete", "studieranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Hold",
        "turkish" : "Tutmak",
        "italian" : "Tenere",
        "presente" : ["tengo", "tieni", "tiene", "teniamo", "tenete", "tengono"],
        "passatoProssimo" : ["ho tenuto", "hai tenuto", "ha tenuto", "abbiamo tenuto", "avete tenuto", "hanno tenuto"],
        "futuroSemplice" : ["terrò", "terrai", "terrà", "terremo", "terrete", "terranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Return, Come back",
        "turkish" : "Geri dönmek",
        "italian" : "Tornare",
        "presente" : ["torno", "torni", "torna", "torniamo", "tornate", "tornano"],
        "passatoProssimo" : ["sono tornato", "sei tornato", "è tornato", "siamo tornati", "siete tornati", "sono tornati"],
        "futuroSemplice" : ["tornerò", "tornerai", "tornerà", "torneremo", "tornerete", "torneranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Travel",
        "turkish" : "Seyahat etmek",
        "italian" : "Viaggiare",
        "presente" : ["viaggio", "viaggi", "viaggia", "viaggiamo", "viaggiate", "viaggiano"],
        "passatoProssimo" : ["ho viaggiato", "hai viaggiato", "ha viaggiato", "abbiamo viaggiato", "avete viaggiato", "hanno viaggiato"],
        "futuroSemplice" : ["viaggerò", "viaggerai", "viaggerà", "viaggeremo", "viaggerete", "viaggeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Live",
        "turkish" : "Yaşamak",
        "italian" : "Vivere",
        "presente" : ["vivo", "vivi", "vive", "viviamo", "vivete", "vivono"],
        "passatoProssimo" : ["ho vissuto", "hai vissuto", "ha vissuto", "abbiamo vissuto", "avete vissuto", "hanno vissuto"],
        "futuroSemplice" : ["vivrò", "vivrai", "vivrà", "vivremo", "vivrete", "vivranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Go forward",
        "turkish" : "İlerlemek",
        "italian" : "Avanzare",
        "presente" : ["avanzo", "avanzi", "avanza", "avanziamo", "avanzate", "avanzano"],
        "passatoProssimo" : ["ho avanzato; sono avanzato", "hai avanzato; sei avanzato", "ha avanzato; è avanzato", "abbiamo avanzato; siamo avanzati", "avete avanzato; siete avanzati", "hanno avanzato; sono avanzati"],
        "futuroSemplice" : ["avanzerò", "avanzerai", "avanzerà", "avanzeremo", "avanzerete", "avanzeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Kiss",
        "turkish" : "Öpmek",
        "italian" : "Baciare",
        "presente" : ["bacio", "baci", "bacia", "baciamo", "baciate", "baciano"],
        "passatoProssimo" : ["ho baciato", "hai baciato", "ha baciato", "abbiamo baciato", "avete baciato", "hanno baciato"],
        "futuroSemplice" : ["bacerò", "bacerai", "bacerà", "baceremo", "bacerete", "baceranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Accept",
        "turkish" : "Kabul etmek",
        "italian" : "Accettare",
        "presente" : ["accetto", "accetti", "accetta", "accettiamo", "accettate", "accettano"],
        "passatoProssimo" : ["ho accettato", "hai accettato", "ha accettato", "abbiamo accettato", "avete accettato", "hanno accettato"],
        "futuroSemplice" : ["accetterò", "accetterai", "accetterà", "accetteremo", "accetterete", "accetteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Accustom",
        "turkish" : "Alışmak",
        "italian" : "Abituare",
        "presente" : ["abituo", "abitui", "abitua", "abituiamo", "abituate", "abituano"],
        "passatoProssimo" : ["ho abituato", "hai abituato", "ha abituato", "abbiamo abituato", "avete abituato", "hanno abituato"],
        "futuroSemplice" : ["abituerò", "abituerai", "abituerà", "abitueremo", "abituerete", "abitueranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Cancel, Undo",
        "turkish" : "İptal etmek, Geri almak",
        "italian" : "Annullare",
        "presente" : ["annullo", "annulli", "annulla", "annulliamo", "annullate", "annullano"],
        "passatoProssimo" : ["ho annullato", "hai annullato", "ha annullato", "abbiamo annullato", "avete annullato", "hanno annullato"],
        "futuroSemplice" : ["annullerò", "annullerai", "annullerà", "annulleremo", "annullerete", "annulleranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Approve",
        "turkish" : "Onaylamak",
        "italian" : "Approvare",
        "presente" : ["approvo", "approvi", "approva", "approviamo", "approvate", "approvano"],
        "passatoProssimo" : ["ho approvato", "hai approvato", "ha approvato", "abbiamo approvato", "avete approvato", "hanno approvato"],
        "futuroSemplice" : ["approverò", "approverai", "approverà", "approveremo", "approverete", "approveranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Calculate",
        "turkish" : "Hesaplamak",
        "italian" : "Calcolare",
        "presente" : ["calcolo", "calcoli", "calcola", "calcoliamo", "calcolate", "calcolano"],
        "passatoProssimo" : ["ho calcolato", "hai calcolato", "ha calcolato", "abbiamo calcolato", "avete calcolato", "hanno calcolato"],
        "futuroSemplice" : ["calcolerò", "calcolerai", "calcolerà", "calcoleremo", "calcolerete", "calcoleranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Delete, Erase",
        "turkish" : "Silmek",
        "italian" : "Cancellare",
        "presente" : ["cancello", "cancelli", "cancella", "cancelliamo", "cancellate", "cancellano"],
        "passatoProssimo" : ["ho cancellato", "hai cancellato", "ha cancellato", "abbiamo cancellato", "avete cancellato", "hanno cancellato"],
        "futuroSemplice" : ["cancellerò", "cancellerai", "cancellerà", "cancelleremo", "cancellerete", "cancelleranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Suggest, Recommend, Advise",
        "turkish" : "Tavsiye etmek",
        "italian" : "Consigliare",
        "presente" : ["consiglio", "consigli", "consiglia", "consigliamo", "consigliate", "consigliano"],
        "passatoProssimo" : ["ho consigliato", "hai consigliato", "ha consigliato", "abbiamo consigliato", "avete consigliato", "hanno consigliato"],
        "futuroSemplice" : ["consiglierò", "consiglierai", "consiglierà", "consiglieremo", "consiglierete", "consiglieranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Comment",
        "turkish" : "Yorum yapmak",
        "italian" : "Commentare",
        "presente" : ["commento", "commenti", "commenta", "commentiamo", "commentate", "commentano"],
        "passatoProssimo" : ["ho commentato", "hai commentato", "ha commentato", "abbiamo commentato", "avete commentato", "hanno commentato"],
        "futuroSemplice" : ["commenterò", "commenterai", "commenterà", "commenteremo", "commenterete", "commenteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Consult",
        "turkish" : "Danışmak",
        "italian" : "Consultare",
        "presente" : ["consulto", "consulti", "consulta", "consultiamo", "consultate", "consultano"],
        "passatoProssimo" : ["ho consultato", "hai consultato", "ha consultato", "abbiamo consultato", "avete consultato", "hanno consultato"],
        "futuroSemplice" : ["consulterò", "consulterai", "consulterà", "consulteremo", "consulterete", "consulteranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Apply",
        "turkish" : "Uygulamak",
        "italian" : "Applicare",
        "presente" : ["applico", "applichi", "applica", "applichiamo", "applicate", "applicano"],
        "passatoProssimo" : ["ho applicato", "hai applicato", "ha applicato", "abbiamo applicato", "avete applicato", "hanno applicato"],
        "futuroSemplice" : ["applicherò", "applicherai", "applicherà", "applicheremo", "applicherete", "applicheranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Hide",
        "turkish" : "Gizlemek",
        "italian" : "Nascondere",
        "presente" : ["nascondo", "nascondi", "nasconde", "nascondiamo", "nascondete", "nascondono"],
        "passatoProssimo" : ["ho nascosto", "hai nascosto", "ha nascosto", "abbiamo nascosto", "avete nascosto", "hanno nascosto"],
        "futuroSemplice" : ["nasconderò", "nasconderai", "nasconderà", "nasconderemo", "nasconderete", "nasconderanno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Complete",
        "turkish" : "Tamamlamak",
        "italian" : "Completare",
        "presente" : ["completo", "completi", "completa", "completiamo", "completate", "completano"],
        "passatoProssimo" : ["ho completato", "hai completato", "ha completato", "abbiamo completato", "avete completato", "hanno completato"],
        "futuroSemplice" : ["completerò", "completerai", "completerà", "completeremo", "completerete", "completeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Wish",
        "turkish" : "Dilemek",
        "italian" : "Augurare",
        "presente" : ["auguro", "auguri", "augura", "auguriamo", "augurate", "augurano"],
        "passatoProssimo" : ["ho augurato", "hai augurato", "ha augurato", "abbiamo augurato", "avete augurato", "hanno augurato"],
        "futuroSemplice" : ["augurerò", "augurerai", "augurerà", "augureremo", "augurerete", "augureranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Confirm",
        "turkish" : "Onaylamak",
        "italian" : "Confermare",
        "presente" : ["confermo", "confermi", "conferma", "confermiamo", "confermate", "confermano"],
        "passatoProssimo" : ["ho confermato", "hai confermato", "ha confermato", "abbiamo confermato", "avete confermato", "hanno confermato"],
        "futuroSemplice" : ["confermerò", "confermerai", "confermerà", "confermeremo", "confermerete", "confermeranno"]
      },
      {
        "id" : uuidv4(),
        "english" : "Coordinate, Organize",
        "turkish" : "Koordine olmak, Organize olmak",
        "italian" : "Coordinare",
        "presente" : ["coordino", "coordini", "coordina", "coordiniamo", "coordinate", "coordinano"],
        "passatoProssimo" : ["ho coordinato", "hai coordinato", "ha coordinato", "abbiamo coordinato", "avete coordinato", "hanno coordinato"],
        "futuroSemplice" : ["coordinerò", "coordinerai", "coordinerà", "coordineremo", "coordinerete", "coordineranno"]
      }
]

const dbAdjectiveList = [
  {
    "id" : uuidv4(),
    "english" : "Thin",
    "turkish" : "İnce",
    "italian" : "Magro"    
  },
  {
    "id" : uuidv4(),
    "english" : "Thick",
    "turkish" : "Kalın",
    "italian" : "Spesso"    
  },
  {
    "id" : uuidv4(),
    "english" : "Cheap",
    "turkish" : "Ucuz",
    "italian" : "Economico"    
  },
  {
    "id" : uuidv4(),
    "english" : "Expensive",
    "turkish" : "Pahalı",
    "italian" : "Costosa"    
  },
  {
    "id" : uuidv4(),
    "english" : "Bad",
    "turkish" : "Kötü",
    "italian" : "Male"    
  },
  {
    "id" : uuidv4(),
    "english" : "Good",
    "turkish" : "İyi",
    "italian" : "Bene"    
  },
  {
    "id" : uuidv4(),
    "english" : "Slow",
    "turkish" : "Yavaş",
    "italian" : "Lento"    
  },
  {
    "id" : uuidv4(),
    "english" : "Fast",
    "turkish" : "Hızlı",
    "italian" : "Veloce"    
  },
  {
    "id" : uuidv4(),
    "english" : "Small, Little",
    "turkish" : "Küçük",
    "italian" : "Piccolo"    
  },
  {
    "id" : uuidv4(),
    "english" : "Big",
    "turkish" : "Büyük",
    "italian" : "Grande"    
  }
]

const dbNounList = [
  {
    "id" : uuidv4(),
    "english" : "Book",
    "turkish" : "Kitap",
    "italian" : "il Libro"    
  },
  {
    "id" : uuidv4(),
    "english" : "Bag",
    "turkish" : "Çanta",
    "italian" : "la Borsa"    
  },
  {
    "id" : uuidv4(),
    "english" : "Window",
    "turkish" : "Pencere",
    "italian" : "la Finestra"    
  }
]