
var rnd = Math.random();

function legjobbKivalasztas(){

    

};

function legjbenabbKivalasztas(){
    
    

};

function randomHarcosGenerator(){
    const nevek1 = ["Sajt", "Gőz", "Acél", "Véres", "Roppantó", "SSR"]
    const nevek2 = ["Evő", "Fej", "Cérna", "Penge", "SUS", "Ár"]
    
    var nevresz1 = nevek1[Math.round(rnd * nevek1.length)]
    var nevresz2 = nevek2[Math.round(rnd * nevek2.length)]
    var nev = nevresz1 + " " + nevresz2;

    var hp = rnd * 9 + 1;
    var ero = rnd * 3 + 1;

    var harcos = {nev:nev, hp:hp, ero:ero};
    return harcos;
};

function harc(harcos1, harcos2){
    while (true){
        var rnd2 = Math.random();
        harcos1.hp -= harcos2.ero * rnd2;
        harcos2.hp -= harcos1.ero * rnd2;

        if (harcos1.hp <= 0 && harcos2.hp <= 0){
            return "döntetlen";
        }
        else if (harcos1.hp <= 0){
            return harcos2.nev + " nyert";
        }
        else if (harcos2.hp <= 0){
            return harcos1.nev + " nyert";
        }
    }
};

var harcosLista = [randomHarcosGenerator ,randomHarcosGenerator, randomHarcosGenerator, randomHarcosGenerator];

function selectionchange(){

    var e = document.getElementById("harcosok2");
    var harcosCsere = e.harcosLista[e.e1].nev;
    
    document.getElementById("").value = harcosCsere;
    
}