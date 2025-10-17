# Harcosok
## Bemutatás
A harcosok olümposzában van 10 harcos akik megmérközhetnek egymással.

A harcosok rendelkeznek névvel, életerővel és erő-erővel.

Ezeknek a harcosoknak minden újjászületéskor változnak az erejük mértéke és nevűk.

A harcosok képesek egymással megbírkozni.

---

## Technologiák
html lesz használva a vizuális megjelenítéshez.

Ezt a CSS fogja segíteni hogy egy (talán) szebb környezetben tudjuk bámulni a képernyőt.

A JavaScript a hátérben lévő varázst fogja megvalósítani.

Ai nem lett alkalmazva

---
## html

### index.html

1. **inline CSS**
   - Az "*Olümposz*" hiper hivatkozásos div fölévitelekor halványabb lesz

2. **body**
   - Az "*Olümposz*" hiper hivatkozásos div kattintéskor átvisz a "*olumposz.html*" oldalra

### olumposz.html

1. **header**
   - Meghívja a "*style.css*"-t és a "*js.js*"-t
   
2. **harcolás**

   1. **Első harcos**
      - Egy lenyíló lista a "*harcosSelect*" class-val, "*selectHarcos1*" id-val
      - fellesz töltve js-ből a hozzá tartozó "*option*"-ökkel 

   2. **Második harcos**
      - Egy lenyíló lista a "*harcosSelect*" class-val, "*selectHarcos2*" id-val
      - fellesz töltve js-ből a hozzá tartozó "*option*"-ökkel 

   3. **Kiválasztás**
      - Egy gomb ami meghívja a "*harc()*" fügvényt

   4. **Harc Kimenetel**
      - Ide érkezik a harc kimenetele
      - rendelekzik a "*harcKimenetel*" id-val

3. **Legerősebb**
   - A "találd ki ki a legerősebb" gomb lenyomásával meghívja a "*legjobbKivalasztas()*" fügvényt
   - A "*kimenetel*" paragrafus érkezik a eredmény

4. **Leggyengébb**  
   - A "találd ki ki a leggyengébb" gomb lenyomásával meghívja a "*legjbenabbKivalasztas()*" fügvényt
   - A "*kimenetel*" paragrafus érkezik a eredmény

### szadmaz.html

1. **inline CSS**
   - Az "*vissza*" hiper hivatkozásos div fölévitelekor halványabb lesz

2. **body**
   1. **szöveg**
      - "*szadista*"
      
   2. **vissza**
      - vissza dob a "*olumposz.html*" oldalra



---

## JavaScript

### Fügvények

1. **legjobbKivalasztas()**
   - Kiválasztjuk és kiírjuk a legjobb harcost életerő * erő-erő alapján
     
2. **legbenabbKivalasztas()**
   - Kiválasztjuk és kiírjuk a legbénabb harcost életerő * erő-erő alapján
     
3. **randomHarcosGenerator()**
   - készít egy harcost random erőkkel
   - A nevét 2 tömb elemeiből véletlen szerüen álítjuk össze
   - Ha a név már szerepel a "*harcosLista*"-ban akkor készít egy új nevet
   - mind a életerőt és erő-erőt véletlen szerüen állítjuk össze, előre meghatározott maximum értékekkel és kéttizedes jegyre kerekítve
     
4. **harc()**
   - Bekéri az előre kiválasztott harcosokat a listárol
   - Meghatározza kik a választott harcosok a nevük alapján
   - A harcosok harcol egymással addig amíg egyikük vagy midketőjük életereje el nem fogy
   - Kiírja a nyertest nevét, vagy döntetlen esetén "*döntetlen*"-t
   - Ha mindkettő lenyíló listában ugyyanazt a harcost választja akkor Nyissa meg a "*szadmaz.html*"-t

### region

1. **harcosok listája**
   - Meghívja a "*randomHarcosGenerator()*" fügvényt az előre megadott harcosok száma alapján

2. **option list**
   - készít egy "option"-t a "*harcosLista*" lista elemeivel
   - Feltölti a "*selectHarcos1*" és "*selectHarcos2*" lenyíló listákat elemekkel

---

## CSS

1. **többség** 
   - érzés alapján

2. **button:hover**
   - az egér fölévitelekor a szín halványabb lesz

3. **body**
   - középre helyezi magát
   - fix hosszal és magassággal rendelkezik

---

## téma
**harcosok**
