// kész
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

// kész
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

// kész
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

// dolgozni kell rajta
// external js function with dual properties invite from index.html form as action or onclick
function harc(harcos1Nev, harcos2Nev){
    var ki = document.getElementById("harcKimenetel");

    for (let i = 0; i < harcosLista.length; i++) {
        if (harcosLista[i].nev == harcos1Nev) {
            harcos1 = harcosLista[i];
        }
        if (harcosLista[i].nev == harcos2Nev) {
            harcos2 = harcosLista[i];
        }
    }

    while (true){
        var rnd = Math.random();
        harcos1.hp -= harcos2.ero * rnd;
        harcos2.hp -= harcos1.ero * rnd;

        if (harcos1.hp <= 0 && harcos2.hp <= 0){
            ki.textContent("döntetlen");
        }
        else if (harcos1.hp <= 0){
            ki.textContent(harcos2.nev + " nyert");
        }
        else if (harcos2.hp <= 0){
            ki.textContent(harcos1.nev + " nyert");
        }
    }
};

// harcosok listája
var harcosokMennyisege = 4;
const harcosLista = [];
for (let i = 0; i < harcosokMennyisege; i++) {
    harcosLista[i] = randomHarcosGenerator();
}


const select = document.getElementById("selectHarcos1");

for (let i = 0; i < harcosLista.length; i++) {
    const opt = harcosLista[i];

    const ki = document.createElement("option");
    ki.textContent = opt.nev;
    ki.value = opt.nev;

    // valami bajvan az "select.appendChild(ki)"-val!!! 
    //select.appendChild(ki);
}

