# Helló kedves látogató! 

### Megtaláltad a Project Athena névre keresztelt projektem GitHub oldalát

## Mi az a Project Athena?
A Project Athena (továbbiakban legyen PA) egy tudástár / archívum szortírozó rendszer, ami előre megadott adathalmazból listáz ki érdekesebb és különlegesebb témákat, különböző témakörökben, amiket a felhasználók átnézhetnek.  

**Fontos megjegyeznem**: Ezen infókat nem én írom, nem lektorálom, nem az én munkám, én csak összegyűjtöm őket a későbbiekre magamnak, és/vagy más látogatóknak.

### Kicsit szakmaibb szemmel:  
Az adatokat JSON file-ban tárolom jelenleg, amiket a rendszer bejegyzési dátum, valamint kategóriák szempontjából csoportosítja és szortírozza. 

## Miért indult el ez az egész?
**Az kezdeményezés nagyon egyszerű:**  
Olyan világot élünk, ahol mindenki kezd rákattani mind vállalati szinten, úgy fogyasztóként is a TikTok és hozzá hasonló klón projektek (Youtube Shorts, megújult Instagram felület, Facebook Reels, csak hogy párat említsek...) népbutító, ingerküszöb csökkentő, felhasználóját beszippantó rendszerére.  
Kortól és nemtől függetlenül érezhető saját családtagjaink érdektelenedése a 2-3 percnél hosszab időt igénylő témák tekintetében, legyen az egy hosszabb olvasmány, vagy egy 15-20 perces ismeretterjesztő Youtube videó.  

Innen indult az alap ötlet, ugyanis bár töröltem a Tiktok-ot, a Youtube Shorts még mindíg kísért, és erre szeretnék egy mindentől mentes tudástárat létrehozni, hogy figyelem elterelés mentesen élvezhessük a hosszabb, érdekes témákat.  

Ha magamon kívül másnak is segítek ezzel az "archívum rendezővel", akkor már megérte a kezdeményezés.

## Szerkesztési útmutató

Minden szerkesztést követően **git push előtt** le kell futtatni a következő kódot, hogy le build-eljük a projetet a GitHub Pages számára:
```bash
 npm run deploy
```