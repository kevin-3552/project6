//#region DEĞİŞKENLER ATAMA
export let YATAYHOLGENİŞLİĞİ
export let MALTBÇAP = 0.11;     // Makas alt başlık çapı
export let MÜÜSTBÇAP = 0.18;    // Makas üst başlık çapı
export let MKAÇI = 5;         // Makas açısı
export let MDDİYGÇAP;   // Makas diyagonel çapı
export let MYÜKS      // Makas yüksekliği
export let YATAYHOLSAYISI
export let YATAYAKSSAYISI
export let MAKASBOYU
export let DÜŞEYHOLGENİŞLİĞİ
export let DÜŞEYAKSSAYISI
export let ÇATIEĞİMHETKİSİ
export let esaszeminA // BETON ZEMİN X ÖLÇÜSÜ
export let esaszeminB // BETON ZEMİN Z ÖLÇÜSÜ
let DİKMEARALIK_VİRGÜLLÜ
let DİKMEARALIK_ALTAYUVARLA
let DİKMEARASIONDALIK
let HOLGENİŞLİĞİTAM
export let DİKMESAYISI
export let İKİDİKMEARASI
export let DİKME_Y_ARTIŞ
export let DİKMEYAKLAŞIKARA
let ÇAPRAZ_Y_ARTIŞ 
export let DÜŞEYHOLSAYISI
export let ALTMAKASYÜKS2; // Global değişken
let MAKASBÜYKATSAYISI = 1.02 // MAKAS BÜYÜTME KATSAYISI
//#endregion 

//#region EXPORTLAR
export function DİKMEHESAPLA() {
    if (YATAYHOLGENİŞLİĞİ > 0 && YATAYHOLGENİŞLİĞİ <= 10) 
      { MALTBÇAP = 0.1;
         MÜÜSTBÇAP = 0.1; 
         MDDİYGÇAP = 0.06; 
         MYÜKS = 0.8;
         DİKMEYAKLAŞIKARA = 1.5
    } 
    else if   (YATAYHOLGENİŞLİĞİ > 10 && YATAYHOLGENİŞLİĞİ <= 20){ 
      MALTBÇAP = 0.135;   
      MÜÜSTBÇAP = 0.135;   
      MDDİYGÇAP = 0.08; 
      MYÜKS = 1 
      DİKMEYAKLAŞIKARA = 1.5
    }
   else if   (YATAYHOLGENİŞLİĞİ > 10 && YATAYHOLGENİŞLİĞİ <= 28){ 
    MALTBÇAP = 0.18; 
      MÜÜSTBÇAP = 0.18; 
      MDDİYGÇAP = 0.1; 
      MYÜKS = 1.3
      DİKMEYAKLAŞIKARA = 1.8
      } 
    else if (YATAYHOLGENİŞLİĞİ > 28) {  
      MALTBÇAP = 0.20; 
      MÜÜSTBÇAP = 0.18; 
      MDDİYGÇAP = 0.12; 
      MYÜKS = 2
      DİKMEYAKLAŞIKARA = 2.8
    } 
      else { }
    
    DİKMEARALIK_VİRGÜLLÜ = (YATAYHOLGENİŞLİĞİ / 2) / DİKMEYAKLAŞIKARA
    DİKMEARALIK_ALTAYUVARLA = Math.floor(DİKMEARALIK_VİRGÜLLÜ);
    İKİDİKMEARASI = (YATAYHOLGENİŞLİĞİ / 2) / DİKMEARALIK_ALTAYUVARLA
    DİKMEARASIONDALIK = (YATAYHOLGENİŞLİĞİ / 3) - HOLGENİŞLİĞİTAM
    DİKMESAYISI = YATAYHOLGENİŞLİĞİ /(İKİDİKMEARASI*2)
    DİKME_Y_ARTIŞ = İKİDİKMEARASI * Math.tan(MKAÇI * Math.PI / 180);
    ÇAPRAZ_Y_ARTIŞ = DİKME_Y_ARTIŞ + MYÜKS
    }
//#endregion

// YATAY KOLON HESAP
export function hesaplaYatayKolon(A) {
    if (A < MKSHG) {
      YATAYHOLGENİŞLİĞİ = A;
      YATAYHOLSAYISI = 1;
      YATAYAKSSAYISI = 2;
    } else {
      YATAYHOLSAYISI = Math.ceil(A / MKSHG);  // Üste yuvarla
      YATAYHOLGENİŞLİĞİ = A / YATAYHOLSAYISI;
      YATAYAKSSAYISI = YATAYHOLSAYISI + 1;
    }
  }
  
  export function ÇATIEĞİMHETKİSİHESAP(H) {
    ÇATIEĞİMHETKİSİ = ((YATAYHOLGENİŞLİĞİ * Math.tan(Math.PI / 180 * MKAÇI)) / 4);
    ALTMAKASYÜKS2 = H + ÇATIEĞİMHETKİSİ;
    console.log("ALTMAKASYÜKS2 - çatıeğimetkisi içindeki:", ALTMAKASYÜKS2);
    console.log("ÇATIEĞİMHETKİSİ:", ÇATIEĞİMHETKİSİ);
    console.log("YATAYHOLGENİŞLİĞİ:", YATAYHOLGENİŞLİĞİ);
    console.log("MKAÇI:", MKAÇI);

}

// MAKAS BOYU HESAP
export function MAKASBOYUHESAP() {
    MAKASBOYU = (YATAYHOLGENİŞLİĞİ/2)*MAKASBÜYKATSAYISI
  }
  
// Düşey aks hesaplama fonksiyonu
export function hesaplaDüşeyAks(B, K) {
    DÜŞEYHOLSAYISI = Math.floor(B / K);  // Düşey aks ara sayısı (alta yuvarlanır)
    DÜŞEYHOLGENİŞLİĞİ = B / DÜŞEYHOLSAYISI;  // Düşey aks hol genişliği
    DÜŞEYAKSSAYISI = DÜŞEYHOLSAYISI + 1;  // Düşey aks sayısı

  }
  
//ZEMİN ESAS EBAT HESAP
export function ZEMİNESASEBATHESAP(A, B) {
    esaszeminA = A+10
    esaszeminB = B+10
    }
      