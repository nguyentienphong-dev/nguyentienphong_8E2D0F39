function legjobbKivalasztas(){

    var ki = document.getElementById("max");
    maximumHaros = harcosLista[0];
    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].hp * harcosLista[i].ero > maximumHaros.hp * maximumHaros.ero) {
            maximumHaros = harcosLista[i];
        }
    }
    ki.textContent = maximumHaros.nev + " a legerősebb " + (maximumHaros.ero * maximumHaros.hp).toFixed(2) + " ponttal" + " " + maximumHaros.ero +" "+ maximumHaros.hp; // test
};

function legjbenabbKivalasztas(){

    var ki = document.getElementById("min");
    minimumHaros = harcosLista[0];
    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].hp * harcosLista[i].ero < minimumHaros.hp * minimumHaros.ero) {
            minimumHaros = harcosLista[i];
        }
    }
    ki.textContent = minimumHaros.nev + " a leggyengébb " + (minimumHaros.ero * minimumHaros.hp).toFixed(2) + " ponttal" + " " + minimumHaros.ero +" "+ minimumHaros.hp; // test

};

function randomHarcosGenerator(){

    const nevek1 = ["Sajt", "Gőz", "Acél", "Véres", "Roppantó", "SSR"];
    const nevek2 = ["Evő", "Fej", "Cérna", "Penge", "SUS", "Ár"];
    
    const nevresz1 = nevek1[Math.floor(Math.random() * nevek1.length)];
    const nevresz2 = nevek2[Math.floor(Math.random() * nevek2.length)];
    
    const nev = `${nevresz1} ${nevresz2}`;
    var hp  = 0;
    hp  = ((Math.random() * 9) + 1).toFixed(2);
    var ero = 0;
    ero = ((Math.random() * 2) + 1).toFixed(2);

    return { nev, hp, ero };
}

function harc(){

    var ki = document.getElementById("harcKimenetel");

    var harcos1Nev = document.getElementById("selectHarcos1");
    var harcos2Nev = document.getElementById("selectHarcos2");

    var harcos1 = {
        nev:"asd", 
        hp:0, 
        ero:0
    };
    var harcos2 = {
        nev:"asd", 
        hp:0, 
        ero:0
    };

    // hiba itt
    for (let i = 0; i < harcosLista.length; i++) {
        
        if (harcos1Nev == harcosLista[i].nev){
            harcos1.nev = harcosLista[i].nev;
            harcos1.hp = harcosLista[i].hp;
            harcos1.ero = harcosLista[i].ero;
        }
         
    }

    console.log(harcos1.nev + " " + harcos1.hp + " " + harcos1.ero); // test
    console.log(harcos2.nev + " " + harcos2.hp + " " + harcos2.ero); // test
    console.log(harcosLista); // test

    var harcveg = false;
    var idx = 1; // test
    while (harcveg != true){

        var tempharcos1 = harcos1;
        tempharcos1.hp -= (harcos2.ero * Math.random()).toFixed(2);
        
        var tempharcos2 = harcos2;
        tempharcos2.hp -= (harcos1.ero * Math.random()).toFixed(2);

        if (harcos1.hp <= 0 && harcos2.hp <= 0){
            ki.textContent = "döntetlen";
            harcveg = true;
        }
        else if (harcos1.hp <= 0){
            ki.textContent = harcos2.nev + " nyert";
            harcveg = true;
        }
        else if (harcos2.hp <= 0){
            ki.textContent = harcos1.nev + " nyert";
            harcveg = true;
        }
        console.log(idx +" kör"); // test
        idx++; // test
    }
    console.log("lefutott"); // test
};

// harcosok listája
const harcosokMennyisege = 4;
const harcosLista = [];
for (let i = 0; i < harcosokMennyisege; i++) {
    harcosLista[i] = randomHarcosGenerator();
}

// option list
for (let i = 0; i < harcosLista.length; i++) {
    for (let j = 1; j < 3; j++) {
        var opt = harcosLista[i];

        var ki = document.createElement("option");
        
        ki.value = opt.nev;
        ki.textContent = opt.nev;

        if (j == 1){
            document.getElementById("selectHarcos1").appendChild(ki);
        }
        else{
            document.getElementById("selectHarcos2").appendChild(ki);
        }
    }
    
}