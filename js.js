function legjobbKivalasztas(){

    var ki = document.getElementById("max");
    maximumHaros = harcosLista[0];
    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].hp * harcosLista[i].ero > maximumHaros.hp * maximumHaros.ero) {
            maximumHaros = harcosLista[i];
        }
    }
    ki.textContent = maximumHaros.nev + " a legerősebb " + Math.floor(maximumHaros.ero * maximumHaros.hp) + " ponttal";
};

function legjbenabbKivalasztas(){

    var ki = document.getElementById("min");
    minimumHaros = harcosLista[0];
    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].hp * harcosLista[i].ero < minimumHaros.hp * minimumHaros.ero) {
            minimumHaros = harcosLista[i];
        }
    }
    ki.textContent = minimumHaros.nev + " a leggyengébb " + Math.floor(minimumHaros.ero * minimumHaros.hp) + " ponttal";

};

function randomHarcosGenerator(){
    const rnd = Math.random();

    const nevek1 = ["Sajt", "Gőz", "Acél", "Véres", "Roppantó", "SSR"];
    const nevek2 = ["Evő", "Fej", "Cérna", "Penge", "SUS", "Ár"];
    
    const nevresz1 = nevek1[Math.floor(Math.random() * nevek1.length)];
    const nevresz2 = nevek2[Math.floor(Math.random() * nevek2.length)];
    
    const nev = `${nevresz1} ${nevresz2}`;
    let hp =  (Math.random() * 9 + 1).toFixed(2);
    let ero = (Math.random() * 3 + 1).toFixed(2);

    return { nev, hp, ero };
}

function harc(){
    var ki = document.getElementById("harcKimenetel");

    var harcos1Nev = document.getElementById("selectHarcos1");
    var harcos2Nev = document.getElementById("selectHarcos2");

    var harcos1 = {nev:"", hp:0, ero:0};
    var harcos2 = {nev:"", hp:0, ero:0};

    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].nev == harcos1Nev) {
            harcos1 = harcosLista[i];
        }
        if (harcosLista[i].nev == harcos2Nev) {
            harcos2 = harcosLista[i];
        }
    }

    var harcveg = false;
    while (harcveg != true){
        var rnd = Math.random();
        harcos1.hp -= harcos2.ero * rnd;
        harcos2.hp -= harcos1.ero * rnd;

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