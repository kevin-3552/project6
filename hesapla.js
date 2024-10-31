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
export let YANBAĞKİRİŞİMAKS = 4
export let YanBağKirişAraAdet 
export let YanKirişArası
export let YanBağKirişAdet
export let ÇatıBağKirişAra_Yekseni
export let ÇatıBağKirişSayısı
export let ÇatıBağKirişAra_Yatay
export let ÇatıBağKirişMaks = 6
export let YanÇaprazAra
export let YanÇaprazAksadet
export let ÇaprazYükseklik
export let YanÇaprazDüşeyAdet
export let ÇatıÇaprazZekseniAra
export let ÇatıÇaprazZekseniAdet
export let BinaYükseklik
export let ArkaKaplamaSınır

import { KOLONEBAT, MK_EN} from './geometriler.js';

//#endregion 



//#region Makas Yüksekliği Hespalama
export function MAKAS_YÜKSEKL_HESAPLA(YATAYHOLGENİŞLİĞİ, H) {
  
    if (YATAYHOLGENİŞLİĞİ > 0 && YATAYHOLGENİŞLİĞİ <= 10) {
      if (H <= 6) {
        MYÜKS = 0.5;
      } else if (H > 6 && H <= 10) {
        MYÜKS = 0.8;
      } else if (H > 10 && H <= 15) {
        MYÜKS = 1;
      } else {
        MYÜKS = 1.2;
      }
    } else if (YATAYHOLGENİŞLİĞİ > 10 && YATAYHOLGENİŞLİĞİ <= 20) {
      if (H < 6) {
        MYÜKS = 0.5;
      } else if (H >= 6 && H <= 10) {
        MYÜKS = 0.9;
      } else if (H > 10 && H <= 15) {
        MYÜKS = 1.1;
      } else {
        MYÜKS = 1.2;
      }
    } else if (YATAYHOLGENİŞLİĞİ > 20 && YATAYHOLGENİŞLİĞİ <= 28) {
      if (H < 6) {
        MYÜKS = 0.5;
      } else if (H >= 6 && H <= 10) {
        MYÜKS = 0.9;
      } else if (H > 10 && H <= 15) {
        MYÜKS = 1.1;
      } else {
        MYÜKS = 1.2;
      }
    } else if (YATAYHOLGENİŞLİĞİ > 28) {
      if (H < 6) {
        MYÜKS = 0.6;
      } else if (H >= 6 && H <= 10) {
        MYÜKS = 1;
      } else if (H > 10 && H <= 15) {
        MYÜKS = 1.5;
      } else {
        MYÜKS = 1.8;
      }
    } else {
      console.error("Geçersiz YATAYHOLGENİŞLİĞİ veya H değeri.");
      MYÜKS = null;
    }
  
    return MYÜKS;
  }
  //#endregion 

//#region DİKMEHESAP
export function DİKMEHESAPLA(H) {
    if (YATAYHOLGENİŞLİĞİ > 0 && YATAYHOLGENİŞLİĞİ <= 10) 
      { MALTBÇAP = 0.1;
         MÜÜSTBÇAP = 0.1; 
         MDDİYGÇAP = 0.06; 
         DİKMEYAKLAŞIKARA = 1.5
    } 
    else if   (YATAYHOLGENİŞLİĞİ > 10 && YATAYHOLGENİŞLİĞİ <= 20){ 
      MALTBÇAP = 0.135;   
      MÜÜSTBÇAP = 0.135;   
      MDDİYGÇAP = 0.08; 
      DİKMEYAKLAŞIKARA = 1.5
    }
   else if   (YATAYHOLGENİŞLİĞİ > 20 && YATAYHOLGENİŞLİĞİ <= 28){ 
    MALTBÇAP = 0.18; 
      MÜÜSTBÇAP = 0.18; 
      MDDİYGÇAP = 0.1; 
      DİKMEYAKLAŞIKARA = 1.8
      } 
    else if (YATAYHOLGENİŞLİĞİ > 28) {  
      MALTBÇAP = 0.20; 
      MÜÜSTBÇAP = 0.18; 
      MDDİYGÇAP = 0.12; 
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
    BinaYükseklik= H+ MYÜKS+DİKME_Y_ARTIŞ*DİKMESAYISI
console.log("BinaYükseklik",BinaYükseklik)


    }
//#endregion

//#region YATAY KOLON HESAP
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
//#endregion

//#region Çatı Eğim Etkisi Hesap
  export function ÇATIEĞİMHETKİSİHESAP(H) {
    ÇATIEĞİMHETKİSİ = ((YATAYHOLGENİŞLİĞİ * Math.tan(Math.PI / 180 * MKAÇI)) / 4);
    ALTMAKASYÜKS2 = H + ÇATIEĞİMHETKİSİ;
}
//#endregion

//#region Makas Boyu Hesap
export function MAKASBOYUHESAP() {
    MAKASBOYU = (YATAYHOLGENİŞLİĞİ/2)*MAKASBÜYKATSAYISI
  }
//#endregion
  
//#region Düşey aks hesaplama fonksiyonu
export function hesaplaDüşeyAks(B, K) {
    DÜŞEYHOLSAYISI = Math.floor(B / K);  // Düşey aks ara sayısı (alta yuvarlanır)
    DÜŞEYHOLGENİŞLİĞİ = B / DÜŞEYHOLSAYISI;  // Düşey aks hol genişliği
    DÜŞEYAKSSAYISI = DÜŞEYHOLSAYISI + 1;  // Düşey aks sayısı
    
  }
//#endregion
  
//#region Zemin Esas Ebat Hesap
export function ZEMİNESASEBATHESAP(A, B) {
    esaszeminA = A+10
    esaszeminB = B+10
    }
//#endregion

//#region yan bağ kirişi geometriler hesaap
export function YanBağKirişHesap(H) {

    // H değerine göre YanBağKirişAraAdet değerini belirleyin
    if (H > 0 && H <= 12) {
      YanBağKirişAraAdet = 2;
  } else if (H > 12 && H <= 18) {
      YanBağKirişAraAdet = 3;
  } else if (H > 18) {
      YanBağKirişAraAdet = Math.floor(H / YANBAĞKİRİŞİMAKS);
  }

YanKirişArası = H/YanBağKirişAraAdet
YanBağKirişAdet=YanBağKirişAraAdet-1
console.log("YanKirişArası hesapla içi", YanKirişArası)

ÇatıBağKirişSayısı = Math.ceil((YATAYHOLGENİŞLİĞİ/2)/ÇatıBağKirişMaks)
console.log("ÇatıBağKirişSayısı", ÇatıBağKirişSayısı)
ÇatıBağKirişAra_Yatay = (YATAYHOLGENİŞLİĞİ/2)/ÇatıBağKirişSayısı
ÇatıBağKirişAra_Yekseni = Math.tan(MKAÇI * (Math.PI / 180))*ÇatıBağKirişAra_Yatay

}
//#endregion

//#region Çapraz Yan Hesap ve Çatı Çapraz Değişkenler

export function ÇaprazYanHesap() {
YanÇaprazAksadet = Math.ceil(DÜŞEYHOLSAYISI/2)
YanÇaprazAra =2*DÜŞEYHOLGENİŞLİĞİ
ÇaprazYükseklik = YanKirişArası
YanÇaprazDüşeyAdet=YanBağKirişAraAdet+1

ÇatıÇaprazZekseniAra = YanÇaprazAra
ÇatıÇaprazZekseniAdet = YanÇaprazAksadet
}

//#endregion

//#region Kaplama için sınırlar hesap
// ArkaKaplamaSınır değerini hesaplayan fonksiyon
export function KaplamaSınırHesap ( ) {
  console.log("KOLONEBAT",KOLONEBAT)
  console.log("MK_EN",MK_EN)
  
  if (KOLONEBAT >= MK_EN) {
      ArkaKaplamaSınır = KOLONEBAT;
  } else {
      ArkaKaplamaSınır = MK_EN;
  }
}

//#endregion