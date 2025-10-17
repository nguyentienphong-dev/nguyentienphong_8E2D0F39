function legjobbKivalasztas(){

    var ki = document.getElementById("max");
    maximumHaros = harcosLista[0];
    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].hp * harcosLista[i].ero > maximumHaros.hp * maximumHaros.ero) {
            maximumHaros = harcosLista[i];
        }
    }
    ki.textContent = maximumHaros.nev + " : " + (maximumHaros.ero * maximumHaros.hp).toFixed(2) + " pont";
};

function legjbenabbKivalasztas(){

    var ki = document.getElementById("min");
    minimumHaros = harcosLista[0];
    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].hp * harcosLista[i].ero < minimumHaros.hp * minimumHaros.ero) {
            minimumHaros = harcosLista[i];
        }
    }
    ki.textContent = minimumHaros.nev + " : " + (minimumHaros.ero * minimumHaros.hp).toFixed(2) + " pont";

};

function randomHarcosGenerator(){

    const nevreszek1 = ["Sajt", "Gőz", "Acél", "Véres", "Roppantó", "SSR", "SR", "R" , "Lord", "A", "Hegy", "Fennséges"];
    const nevreszek2 = ["Evő", "Fej", "Cérna", "Penge", "SUS", "Ár", "Hős", "Király", "Az", "Hentes", "Isten"];
    
    var veg = false;
    const nev = "";
    while (veg == false)
    {
        const nevresz1 = nevreszek1[Math.floor(Math.random() * nevreszek1.length)];
        const nevresz2 = nevreszek2[Math.floor(Math.random() * nevreszek2.length)];
        
        nev = `${nevresz1} ${nevresz2}`;

        var sameName = 0;
        harcosLista.forEach(element => {
            if (element.nev == nev){
                sameName += 1;
            }
        });
        if (sameName == 0){
            veg = true;
        }
    }

    var maxHp = 200;
    var maxEro = 30;
    hp  = ((Math.random() * maxHp) + 1).toFixed(2);
    var ero = 0;
    ero = ((Math.random() * maxEro) + 1).toFixed(2);

    return { nev, hp, ero };
}

function harc(){
    const harcos1Nev = document.getElementById("selectHarcos1").value;
    const harcos2Nev = document.getElementById("selectHarcos2").value;

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

    if (harcos1Nev != harcos2Nev) {
        for (let i = 0; i < harcosLista.length; i++) {
        
            if (harcos1Nev == harcosLista[i].nev){
                harcos1 = harcosLista[i];
            }
            if (harcos2Nev == harcosLista[i].nev){
                harcos2 = harcosLista[i];
            }
        }

        var ki = document.getElementById("harcKimenetel");
        var harcveg = false;
        while (harcveg != true){

            harcos1.hp -= (harcos2.ero * Math.random()).toFixed(2); 
            harcos2.hp -= (harcos1.ero * Math.random()).toFixed(2);

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
        }
    }
    else{
        window.open("szadmaz.html", "_self");
    }

    
};

//#region harcosok listája
const harcosokMennyisege = 10;
const harcosLista = [];
for (let i = 0; i < harcosokMennyisege; i++) {
    harcosLista[i] = randomHarcosGenerator();
}
//#endregion harcosok listája

//#region option list
for (let i = 0; i < harcosLista.length; i++) {
    for (let j = 0; j < 2; j++) {
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
//#endregion option list