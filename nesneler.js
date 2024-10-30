
// #region// Değişkenler
// IMPORT DEĞİŞKENLER
import { MALTBÇAP, DÜŞEYAKSSAYISI, YATAYAKSSAYISI, YATAYHOLGENİŞLİĞİ, MAKASBOYU, DÜŞEYHOLGENİŞLİĞİ, 
  YATAYHOLSAYISI, ALTMAKASYÜKS2, MYÜKS, MKAÇI, İKİDİKMEARASI, DİKME_Y_ARTIŞ, MDDİYGÇAP, DİKMESAYISI, MAKAS_YÜKSEKL_HESAPLA, YanKirişArası, YanBağKirişAdet, 
DÜŞEYHOLSAYISI, ÇatıBağKirişSayısı, ÇatıBağKirişAra_Yatay, ÇatıBağKirişAra_Yekseni, 
ÇaprazYükseklik, YanÇaprazAksadet, YanÇaprazDüşeyAdet,  ÇatıÇaprazZekseniAra, ÇatıÇaprazZekseniAdet,   } from './hesapla.js';

// Geometriler Import
import { KOLON1, HEA300, KOLON_BOX1, YATAY_MK_GEO_1, Yatay_Kiriş_Profil_1, Yatay_Kiriş_Profil_2, YatayÇaprazProfil,
  YatayÇaprazÇap, ÇatıÇaprazProfil, KOLONEBAT} from './geometriler.js';

// MALZEMELER import
import { kolonMaterial2, DİKMEMALZEME, MAKASMALZEME, DİYAGONELMALZEME, BağKirişiMalzeme, BağKirişiMalzeme2 
   } from './malzemeler.js';


// #endregion// 

//#region ⛔ Kolonlar ⛔  
// YATAY KOLON OLUŞTURMA GRUBU fonksiyonu
export function YATAYKOLONGRUBU(H) {
    const yatayKolonGroup = new THREE.Group();
  
    for (let i = 0; i < YATAYAKSSAYISI; i++) {
      const kolon = DKG(H);  // DKG fonksiyonundan kolon oluşturuyoruz
      kolon.position.set(i * YATAYHOLGENİŞLİĞİ, 0, 0);  // X ekseninde YATAYHOLGENİŞLİĞİ mesafesiyle
      yatayKolonGroup.add(kolon);
    }
  
    return yatayKolonGroup;  // Grubu geri döndürüyoruz
  }
  
  // DKG fonksiyonu: Düşey kolon grubu
  function DKG(H) {
    const kolonGroup = new THREE.Group();
  let KOLONUZUNLUK = H
    for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
      const kolon = KOLON_BOX1(KOLONUZUNLUK, kolonMaterial2);
      kolon.position.set(0, 0, i * -DÜŞEYHOLGENİŞLİĞİ);  // Z ekseni boyunca DÜŞEYHOLGENİŞLİĞİ mesafesiyle yerleştiriliyor
      kolonGroup.add(kolon);
      console.log("KOLONEBAT - kolon fonk içindeki - ", KOLONEBAT)
    }
  
    return kolonGroup;  // Tüm kolonları içeren grup geri döndürülüyor
}
//#endregion

// #region 🔱 Makaslar ara fonksiyonlar🔱
// TEKLİ SOL MAKAS ALT BAŞLIK Fonksiyonu
export function MakasAlt(H) {
  const MK_UZUNLUK = YATAYHOLGENİŞLİĞİ; // MK_UZUNLUK değeri atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK); // Grup olarak alınır
  makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ / 2, H, 0); // Pozisyon ayarlanıyor
  makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90);  // Z ekseni etrafında 90° + MKAÇI döndürme
  return makasAltBaslik;
}

export function MakasÜstSol() {
  const MK_UZUNLUK = YATAYHOLGENİŞLİĞİ / 2; // MK_UZUNLUK değeri atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK); // Grup olarak alınır
  makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ / 4,(ALTMAKASYÜKS2 + MYÜKS), 0); // Pozisyon ayarlanıyor
  makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90 + MKAÇI);  // Z ekseni etrafında 90° + MKAÇI döndürme
  return makasAltBaslik;
}
   
  //SAĞ ÜST MAKAS BAŞLIK OLUŞTURMA Fonksiyonu
/*
  export function MakasÜstSağ() {
  const MK_UZUNLUK = YATAYHOLGENİŞLİĞİ / 2; // MK_UZUNLUK değeri atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK); // Grup olarak alınır
  makasAltBaslik.position.set(3*YATAYHOLGENİŞLİĞİ / 4,(ALTMAKASYÜKS2 + MYÜKS), 0); // Pozisyon ayarlanıyor
  makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90 - MKAÇI);  // Z ekseni etrafında 90° + MKAÇI döndürme
  return makasAltBaslik;
*/
export function MakasÜstSağ() {
  const tümÇatıGrup = new THREE.Group();

  // Sol makas grubu
  const üstMakasSol = MakasÜstSol(H);

  // Sol makası ana gruba ekle
  tümÇatıGrup.add(üstMakasSol);

  // Sol makasın aynalanmış kopyası (sağ makas)
  const üstMakasSağ = üstMakasSol.clone();

  // Aynalamak için sağ makasın pozisyonunu ve rotasyonunu ayarla
  üstMakasSağ.position.x = YATAYHOLGENİŞLİĞİ*0.75; // X eksenine göre simetri
  üstMakasSağ.position.z = 0; // Z eksenine göre simetri
  üstMakasSağ.rotation.y = -Math.PI; // Y ekseninde 180 derece döndürme

  // Sağ makası ana gruba ekle
  tümÇatıGrup.add(üstMakasSağ);

  return tümÇatıGrup;
}

// #endregion

// #region ❗ Dikmeler  ❗
  // 1 DİKME FONKSİYONU
export function DİKME1() {
    const geometry = new THREE.CylinderGeometry(MDDİYGÇAP, MDDİYGÇAP, MYÜKS, 32);  // Silindir
    const dikme = new THREE.Mesh(geometry, DİKMEMALZEME);  // Silindirin malzemesi atanıyor
    dikme.position.set(0, H + MYÜKS / 2, 0);  // Dikmenin başlangıç noktası (x, y, z)
    dikme.rotation.z = 0;  // Y ekseninde konumlandırılıyor
    return dikme;  // Tek dikmeyi geri döndürüyor
  }
  
    // DİKME SOL GRUBU FONKSİYONU 
export function DİKME1_GRUP_SOL(H) {
    const dikmeGrubu = new THREE.Group(); 
  
    for (let i = 0; i < DİKMESAYISI; i++) {
      const yeniMYÜKS = MYÜKS + i * DİKME_Y_ARTIŞ;  
      const geometry = new THREE.CylinderGeometry(MDDİYGÇAP, MDDİYGÇAP, yeniMYÜKS, 32);  
      const dikme = new THREE.Mesh(geometry, DİKMEMALZEME);  
  
      // X ve Y koordinatları her dikmede artıyor
      const xKoordinati = i * İKİDİKMEARASI;  
      const yKoordinati = H + MYÜKS/ 2 + i * (DİKME_Y_ARTIŞ / 2); 

      // Dikmenin konumunu yeni x ve y koordinatlarına göre ayarlıyoruz
      dikme.position.set(xKoordinati, yKoordinati, 0);
  
      // Dikmeyi gruba ekliyoruz
      dikmeGrubu.add(dikme);
    }
  
    return dikmeGrubu;  // Tüm dikmeleri içeren grubu geri döndürüyoruz
  }
      // DİKME SAĞ GRUBU FONKSİYONU 
      /*  eskisi bu - yerine mirror koydum
export function DİKME1_GRUP_SAĞ(H) {
    const dikmeGrubu = new THREE.Group(); 
    for (let i = DİKMESAYISI; i < 2*DİKMESAYISI+1; i++) {
      const yeniMYÜKS = MYÜKS + (DİKMESAYISI * DİKME_Y_ARTIŞ)-(i-DİKMESAYISI) * DİKME_Y_ARTIŞ;  
      const geometry = new THREE.CylinderGeometry(MDDİYGÇAP, MDDİYGÇAP, yeniMYÜKS, 32);  
      const dikme = new THREE.Mesh(geometry, DİKMEMALZEME);  
  
      // X ve Y koordinatları her dikmede artıyor
      const xKoordinati = i * İKİDİKMEARASI;  
      const yKoordinati = H + (MYÜKS/2)+(DİKMESAYISI*DİKME_Y_ARTIŞ/2) - ((i-DİKMESAYISI) * (DİKME_Y_ARTIŞ )/2); 

      // Dikmenin konumunu yeni x ve y koordinatlarına göre ayarlıyoruz
      dikme.position.set(xKoordinati, yKoordinati, 0);
  
      // Dikmeyi gruba ekliyoruz
      dikmeGrubu.add(dikme);
    }
  
    return dikmeGrubu;  // Tüm dikmeleri içeren grubu geri döndürüyoruz
  }*/

    export function DİKME1_GRUP_SAĞ(H) {
      const tümDikmeGrup = new THREE.Group();
    
      // Sol dikme grubu
      const dikmeSol = DİKME1_GRUP_SOL(H);
    
      // Sol dikme grubunu ana gruba ekle
      tümDikmeGrup.add(dikmeSol);
    
      // Sol dikme grubunun aynalanmış kopyası (sağ dikme)
      const dikmeSağ = dikmeSol.clone();
    
      // Aynalamak için sağ dikmenin pozisyonunu ve rotasyonunu ayarla
      dikmeSağ.position.x = YATAYHOLGENİŞLİĞİ; // X eksenine göre simetri
      dikmeSağ.rotation.y = -Math.PI; // Y ekseninde 180 derece döndürme
    
      // Sağ dikmeyi ana gruba ekle
      tümDikmeGrup.add(dikmeSağ);
    
      return tümDikmeGrup;
    }

    export function DİKME1_orta(H) {
      const dikmeGrubu = new THREE.Group();
    
      // Orta dikmenin uzunluğunu hesapla
      const uzunluk = MYÜKS + DİKME_Y_ARTIŞ * DİKMESAYISI;
    
      // Orta dikme için geometry ve mesh oluştur
      const geometry = new THREE.CylinderGeometry(MDDİYGÇAP, MDDİYGÇAP, uzunluk, 32);
      const dikme = new THREE.Mesh(geometry, DİKMEMALZEME);
    
      // Orta dikmenin koordinatlarını ayarla
      dikme.position.x = YATAYHOLGENİŞLİĞİ / 2;
      dikme.position.z = 0;
      dikme.position.y = H+(uzunluk / 2);
    
      // Dikmeyi gruba ekle
      dikmeGrubu.add(dikme);
    
      return dikmeGrubu;
    }
// #endregion

// #region 🚼 Diyagoneller 🚼
  // DİYAGONELSOL1 fonksiyonu 
export function DİYAGONELSOL1(startX, startY, endX, endY) {
    // Diyagonelin boyu iki nokta arasındaki mesafeden hesaplanıyor
    const boy = Math.sqrt(Math.pow(endY - startY, 2) + Math.pow(endX - startX, 2));  // Hipotenüs
  
    // Silindir geometrisi
    const geometry = new THREE.CylinderGeometry(MDDİYGÇAP, MDDİYGÇAP, boy, 32);  // Silindir çapı ve boyu belirleniyor
    const diyagonel = new THREE.Mesh(geometry, DİYAGONELMALZEME);  // Malzemesi atanıyor
  
    // Rotasyonu belirleme (alfa açısı)
    const alfa = Math.atan((endY - startY) / (endX - startX));  // Arc tan ile doğru açı hesaplanıyor
    diyagonel.rotation.z = (Math.PI / 2) + Math.atan2(endY - startY, endX - startX);  // Z ekseninde 90 - alfa açısına göre döndürülüyor
    
    // Diyagonelin pozisyonu ayarlanıyor (başlangıç ve bitiş noktalarının ortalaması)
    diyagonel.position.set((startX + endX) / 2, (startY + endY) / 2, 0);  // Ortalaması alınarak konum ayarlanıyor
  
    return diyagonel;  // Diyagonel elemanı geri döndürüyor
  }
  
  // SOLDİYAGONELGRUBU fonksiyonu
 export function SOLDİYAGONELGRUBU(H) {
    const diyagonelGrubu = new THREE.Group();  // Tüm diyagonelleri içerecek bir grup oluşturuluyor
  
    // Her diyagonel için başlangıç ve bitiş noktaları ayarlanıyor
    for (let i = 0; i < DİKMESAYISI; i++) {
  
      const endX = (i + 1) * İKİDİKMEARASI;  
      const endY = H;   
      const startX = i * İKİDİKMEARASI; 
      const startY = H + MYÜKS + i * DİKME_Y_ARTIŞ; 
  
      // Her diyagoneli oluşturalım ve gruba ekleyelim
      const diyagonel = DİYAGONELSOL1(startX, startY, endX, endY);
      diyagonelGrubu.add(diyagonel);
    }
      return diyagonelGrubu;  // Tüm diyagonelleri içeren grup geri döndürüyoruz
  }

  
  export function SAĞDİYAGONELGRUBU(H) {
    const sağDiyagonelGrup = new THREE.Group();
  
    // Sol diyagonel grubunu alıp aynalayarak sağ grubu oluşturuyoruz
    const solDiyagonelGrup = SOLDİYAGONELGRUBU(H);
  
    // Aynalama işlemi: x ekseninde YATAYHOLGENİŞLİĞİ kadar kaydırarak simetri sağlanır
    const sağDiyagonel = solDiyagonelGrup.clone();
    sağDiyagonel.position.x = YATAYHOLGENİŞLİĞİ; // X ekseninde simetrik konumlandırma
    sağDiyagonel.rotation.y = Math.PI; // Y ekseninde 180 derece döndürme
  
    // Sağ diyagonel grubuna aynalanmış sol grubu ekle
    sağDiyagonelGrup.add(sağDiyagonel);
  
    return sağDiyagonelGrup;
  }
  

    // SAĞ DİYAGONELGRUBU fonksiyonu
    /* ESKİ MİRROR'SUZ
 export function SAĞDİYAGONELGRUBU(H) {
  const diyagonelGrubu = new THREE.Group();  // Tüm diyagonelleri içerecek bir grup oluşturuluyor

  // Her diyagonel için başlangıç ve bitiş noktaları ayarlanıyor
  for (let i = DİKMESAYISI; i < 2*DİKMESAYISI; i++) {
    // 1. Diyagonel: startX = 1* İKİDİKMEARASI, endX = 0
    // 2. Diyagonel: startX = 2* İKİDİKMEARASI, endX = 1* İKİDİKMEARASI vb.

    const startX = (i + 1) * İKİDİKMEARASI;  // X ekseninde offset
    const endY = H;  // Başlangıç yüksekliği (H)

    const endX = i * İKİDİKMEARASI;  // Bir önceki X noktası
    const startY = H + MYÜKS +  (DİKMESAYISI-1)* DİKME_Y_ARTIŞ-((i-DİKMESAYISI)*DİKME_Y_ARTIŞ);  // Y ekseninde artış

    // Her diyagoneli oluşturalım ve gruba ekleyelim
    const diyagonel = DİYAGONELSOL1(startX, startY, endX, endY);
    diyagonelGrubu.add(diyagonel);
  }
    return diyagonelGrubu;  // Tüm diyagonelleri içeren grup geri döndürüyoruz
}

*/


  // #endregion

//#region //  Makas Grup Çoğaltma
export function MakasTamGrup (H) {
  const TamMakasGrup = new THREE.Group();

  // SOL ve SAĞ dikme gruplarını alıyoruz
  const dikmeGrupSol = DİKME1_GRUP_SOL(H);
  const dikmeGrupSağ = DİKME1_GRUP_SAĞ(H);
  const dikmeOrta = DİKME1_orta(H);
  const makasaltsol = MakasAlt(H);
  const makasüstsol = MakasÜstSol()
  const makasüstsağ = MakasÜstSağ()
  const soldiyagonel = SOLDİYAGONELGRUBU(H)
  const sağdiyagonel = SAĞDİYAGONELGRUBU(H)
 

  // Grupları birleştiriyoruz
  TamMakasGrup.add(dikmeGrupSol);
  TamMakasGrup.add(dikmeGrupSağ);
  TamMakasGrup.add(makasaltsol);
  TamMakasGrup.add(makasüstsol);
  TamMakasGrup.add(makasüstsağ);
  TamMakasGrup.add(soldiyagonel);
  TamMakasGrup.add(sağdiyagonel);
  TamMakasGrup.add(dikmeOrta);

  
  return TamMakasGrup; // Tam dikme grubunu geri döndür
}

export function MakasGrupÇoğalt(H) {
  const tamMakasGrubu = new THREE.Group();

  // X ve Z yönlerinde çoğaltma işlemi
  for (let x = 0; x < YATAYHOLSAYISI; x++) {
    for (let z = 0; z < DÜŞEYAKSSAYISI; z++) {
      // TAMDİKMEGRUP'u her döngüde çağırarak çoğaltıyoruz
      const makasgrubu = MakasTamGrup(H);

      // Çoğaltılmış grubun pozisyonunu ayarlıyoruz
      makasgrubu.position.set(
        x * YATAYHOLGENİŞLİĞİ, 0, -z * DÜŞEYHOLGENİŞLİĞİ
      );

      // Grupları ana gruba ekliyoruz
      tamMakasGrubu.add(makasgrubu);
    }
  }

  return tamMakasGrubu; // Tüm çoğaltılmış dikmeleri içeren grubu geri döndür
}

//#endregion

//#region Yan Bracing Kirişler - oluştur ve çoğalt
export function YanKiriş_1(H) {
    const yanKirişGrubu = new THREE.Group();
    const yatayboy_1 = DÜŞEYHOLGENİŞLİĞİ - 0.2;
    if (H < 6) {/*
        for (let z = 0; z < DÜŞEYHOLSAYISI+1; z++) {
          for (let x = 0; x < YATAYHOLSAYISI+1; x++) {
          const yatayProfil = Yatay_Kiriş_Profil_1(yatayboy_1, BağKirişiMalzeme, H);
          yatayProfil.position.set( x * YATAYHOLGENİŞLİĞİ * A, (-z * DÜŞEYHOLGENİŞLİĞİ) );
          yatayProfil.rotation.x= (Math.PI / 2)
          yanKirişGrubu.add(yatayProfil);
            } 
        } */
    } else {
        for (let y = 0; y < YanBağKirişAdet; y++) {
        for (let z = 0; z < DÜŞEYHOLSAYISI; z++) {
        for (let x = 0; x < YATAYHOLSAYISI+1; x++) {
            const yatayProfil = Yatay_Kiriş_Profil_1(yatayboy_1, BağKirişiMalzeme, H); // Yatay profilin boyunu geçiyoruz
            yatayProfil.position.set(  x * YATAYHOLGENİŞLİĞİ, YanKirişArası+ y * YanKirişArası, - DÜŞEYHOLGENİŞLİĞİ/2+ (-z * DÜŞEYHOLGENİŞLİĞİ));
            yatayProfil.rotation.x= (Math.PI / 2)
            yanKirişGrubu.add(yatayProfil);}
            }
        }
    }
// MAKAS ÜSTÜNDEKİ

    for (let x = 0; x < YATAYHOLSAYISI+1; x++) {
    for (let z = 0; z < DÜŞEYHOLSAYISI; z++) {
      for (let y = 0; y < 2; y++) {
      const yatayProfilEkstra = Yatay_Kiriş_Profil_1(yatayboy_1, BağKirişiMalzeme, H );
      yatayProfilEkstra.position.set(x * YATAYHOLGENİŞLİĞİ, H + y*MYÜKS,  - DÜŞEYHOLGENİŞLİĞİ/2+ (-z * DÜŞEYHOLGENİŞLİĞİ)); // Z ekseninde merkezde
      yatayProfilEkstra.rotation.x = Math.PI / 2;
      yanKirişGrubu.add(yatayProfilEkstra);
    }}
}
    return yanKirişGrubu;
}
//#endregion

//#region Makasİçi Tam Bracingler fonksiyonu

// Bi Makas Arası Tam grup oluşturma - Bracing

export function Bracing_MakasİçiTam(H) {
    const bracingTamGroup = new THREE.Group();

    for (let x = 0; x < YATAYHOLSAYISI; x++) {
        for (let z = 0; z < DÜŞEYHOLSAYISI; z++) {
            const bracingInstance = Bracing1HolTam(H);

            // Çoğaltılmış bracing'in konumunu ayarlıyoruz
            bracingInstance.position.set(
                x * YATAYHOLGENİŞLİĞİ,  // x ekseninde YATAYHOLGENİŞLİĞİ aralıklarla
                0,
                -z * DÜŞEYHOLGENİŞLİĞİ  // -z ekseninde DÜŞEYHOLGENİŞLİĞİ aralıklarla
            );

            bracingTamGroup.add(bracingInstance);
        }
    }

    return bracingTamGroup; // Çoğaltılmış tüm bracing gruplarını içeren ana grubu geri döndür
}


export function Bracing1HolTam(H) {
    const bracingHolTamGroup = new THREE.Group();

    // Alt ve üst bracing fonksiyonlarını çağırıyoruz
    /*const altBracing = MakasİçiAltTamBracing(H);!!!!!!!!!  bunu sildim ŞİMDİLİK */ 
    const üstBracing = MakasİçiÜstTamBracing1(H);

    // Alt ve üst bracing gruplarını ana gruba ekliyoruz
    /*bracingHolTamGroup.add(altBracing); */
    bracingHolTamGroup.add(üstBracing);

    return bracingHolTamGroup; // Tüm bracing'leri içeren grubu geri döndür
}


export function MakasİçiAltTamBracing(H) {
  // BUNU ŞİMDİLİK İPTAL EDİYORUM - KOYMUYORUM MODELE ------------
    const tamBracingGrubu = new THREE.Group(); // Tüm bracing yapısını içerecek ana grup

    // makas_içi_bağ_kirişi_alt fonksiyonunu çağırarak bracing grubunu ekleyelim
    const bagKirisGrubu = makas_içi_bağ_kirişi_alt(H, ÇatıBağKirişAra_Yatay, ÇatıBağKirişSayısı);

    // Bracing yapısını ana gruba ekleyin
    tamBracingGrubu.add(bagKirisGrubu);

    return tamBracingGrubu; // Tüm bracing yapısını içeren grubu geri döndür
}

export function MakasİçiÜstTamBracing1(H) {
  const tamBracingGrubu = new THREE.Group(); // Tüm bracing yapısını içerecek ana grup

  // makas_içi_bağ_kirişi_alt fonksiyonunu çağırarak bracing grubunu ekleyelim
  const bagKirisGrubu = makas_içi_bağ_kirişi_üstSol(H, ÇatıBağKirişAra_Yatay, ÇatıBağKirişSayısı);
  const bagKirisGrubu2 = makas_içi_bağ_kirişi_üstSağ(H, ÇatıBağKirişAra_Yatay, ÇatıBağKirişSayısı) 
  // Bracing yapısını ana gruba ekleyin
  tamBracingGrubu.add(bagKirisGrubu);
  tamBracingGrubu.add(bagKirisGrubu2); 

  return tamBracingGrubu; // Tüm bracing yapısını içeren grubu geri döndür
}

export function makas_içi_bağ_kirişi_üstSol(H, ÇatıBağKirişAra_Yatay, ÇatıBağKirişSayısı) {
  const bagKirisGrubu = new THREE.Group();
  const yatayboy_1 = DÜŞEYHOLGENİŞLİĞİ - 0.2;
  // ÇatıBağKirişSayısı / 2'yi üste yuvarlayarak çoğaltma sayısını belirliyoruz
  const adet = Math.ceil(ÇatıBağKirişSayısı / 2);

  for (let i = 1; i < ÇatıBağKirişSayısı+1; i++) {
      const yatayProfil = Yatay_Kiriş_Profil_2(yatayboy_1, BağKirişiMalzeme2, H); // Yatay_Kiriş_Profil_2 geometrisini çağırıyoruz

      // Konumlandırma
      yatayProfil.position.set(
          i * ÇatıBağKirişAra_Yatay, // X ekseninde her adımda ÇatıBağKirişAra_Yatay mesafe kadar
          H+MYÜKS+i*ÇatıBağKirişAra_Yekseni,                         // Y ekseninde H yüksekliği
          -DÜŞEYHOLGENİŞLİĞİ/2                         // Z ekseninde sıfır
      );
      yatayProfil.rotation.x = Math.PI / 2; // X ekseninde 90° döndürme
      bagKirisGrubu.add(yatayProfil); // Profili gruba ekle
  }

  return bagKirisGrubu; // Tüm bağ kirişi grubunu geri döndür
}

export function makas_içi_bağ_kirişi_üstSağ(H, ÇatıBağKirişAra_Yatay, ÇatıBağKirişSayısı) {
  const bagKirisGrubu = new THREE.Group();
  const yatayboy_1 = DÜŞEYHOLGENİŞLİĞİ - 0.2;
  // ÇatıBağKirişSayısı / 2'yi üste yuvarlayarak çoğaltma sayısını belirliyoruz
  const adet = Math.ceil(ÇatıBağKirişSayısı / 2);

  for (let i = 1; i < ÇatıBağKirişSayısı; i++) {
      const yatayProfil = Yatay_Kiriş_Profil_2(yatayboy_1, BağKirişiMalzeme2, H); // Yatay_Kiriş_Profil_2 geometrisini çağırıyoruz

      // Konumlandırma
      yatayProfil.position.set(
        ÇatıBağKirişAra_Yatay*ÇatıBağKirişSayısı + i * ÇatıBağKirişAra_Yatay, // X ekseninde her adımda ÇatıBağKirişAra_Yatay mesafe kadar
          H+MYÜKS+ÇatıBağKirişSayısı*ÇatıBağKirişAra_Yekseni-(i*ÇatıBağKirişAra_Yekseni),                         // Y ekseninde H yüksekliği
          -DÜŞEYHOLGENİŞLİĞİ/2                         // Z ekseninde sıfır
      );
      yatayProfil.rotation.x = Math.PI / 2; // X ekseninde 90° döndürme
      bagKirisGrubu.add(yatayProfil); // Profili gruba ekle
  }

  return bagKirisGrubu; // Tüm bağ kirişi grubunu geri döndür
}

export function makas_içi_bağ_kirişi_alt(H, ÇatıBağKirişAra_Yatay, ÇatıBağKirişSayısı) {
    const bagKirisGrubu = new THREE.Group();
    const yatayboy_1 = DÜŞEYHOLGENİŞLİĞİ - 0.2;
    // ÇatıBağKirişSayısı / 2'yi üste yuvarlayarak çoğaltma sayısını belirliyoruz
    const adet = Math.ceil(ÇatıBağKirişSayısı / 2);
    for (let i = 1; i < ÇatıBağKirişSayısı*2; i++) {
        const yatayProfil = Yatay_Kiriş_Profil_2(yatayboy_1, BağKirişiMalzeme2, H); // Yatay_Kiriş_Profil_2 geometrisini çağırıyoruz

        // Konumlandırma
        yatayProfil.position.set(
            i * ÇatıBağKirişAra_Yatay, // X ekseninde her adımda ÇatıBağKirişAra_Yatay mesafe kadar
            H,                         // Y ekseninde H yüksekliği
            -DÜŞEYHOLGENİŞLİĞİ/2                         // Z ekseninde sıfır
        );
        yatayProfil.rotation.x = Math.PI / 2; // X ekseninde 90° döndürme
        bagKirisGrubu.add(yatayProfil); // Profili gruba ekle
    }

    return bagKirisGrubu; // Tüm bağ kirişi grubunu geri döndür
}
// #endregion

//#region Cephe Çaprazlar

export function ÇaprazYan1Aks(H) {
    const çaprazAksGrubu = new THREE.Group();

    let çapryuksfonk2;
    if (H < 6) {
        çapryuksfonk2 = H;
    } else {
        çapryuksfonk2 = ÇaprazYükseklik;
    }
    
    // Çapraz1Boşluk grubunu tanımlıyoruz
    const Çapraz1Boşluk = new THREE.Group();

    // YanÇapraz1 ve YanÇapraz2 için başlangıç ve bitiş koordinatlarını tanımlayın
    const startCoord1 = new THREE.Vector3(0, 0, 0); // Başlangıç: x: 0, y: 0, z: 0
    const endCoord1 = new THREE.Vector3(0, çapryuksfonk2, -DÜŞEYHOLGENİŞLİĞİ); // Bitiş: x: 0, y: ÇaprazYükseklik, z: -DÜŞEYHOLGENİŞLİĞİ
    
    const startCoord2 = new THREE.Vector3(0, 0, -DÜŞEYHOLGENİŞLİĞİ); // Başlangıç: x: 0, y: 0, z: -DÜŞEYHOLGENİŞLİĞİ
    const endCoord2 = new THREE.Vector3(0, çapryuksfonk2, 0); // Bitiş: x: 0, y: ÇaprazYükseklik, z: 0

    // 1. Çapraz: YanÇapraz1'i oluşturun ve yönlendirin
    const uzunluk1 = startCoord1.distanceTo(endCoord1); // Boyu hesaplayın
    const YanÇapraz1 = YatayÇaprazProfil(H, uzunluk1).mesh; // Hesaplanan uzunlukla profil oluştur
    YanÇapraz1.position.copy(startCoord1); // Başlangıç noktasına yerleştirin

    // Başlangıç ve bitiş arasındaki açıyı hesaplayın ve x ekseni etrafında döndürün
    const angle1 = Math.atan2(endCoord1.y - startCoord1.y, endCoord1.z - startCoord1.z);
    YanÇapraz1.rotation.x = angle1;
    YanÇapraz1.rotation.y = 90 * (Math.PI / 180);
    YanÇapraz1.position.set(0, çapryuksfonk2 / 2, -DÜŞEYHOLGENİŞLİĞİ / 2);
    Çapraz1Boşluk.add(YanÇapraz1);

    // 2. Çapraz: YanÇapraz2'yi oluşturun ve yönlendirin
    const uzunluk2 = startCoord2.distanceTo(endCoord2); // Boyu hesaplayın
    const YanÇapraz2 = YatayÇaprazProfil(H, uzunluk2).mesh; // Hesaplanan uzunlukla profil oluştur
    YanÇapraz2.position.copy(startCoord2); // Başlangıç noktasına yerleştirin

    // Başlangıç ve bitiş arasındaki açıyı hesaplayın ve x ekseni etrafında döndürün
    const angle2 = Math.atan2(endCoord2.y - startCoord2.y, endCoord2.z - startCoord2.z);
    YanÇapraz2.rotation.x = angle2;
    YanÇapraz2.rotation.y = 90 * (Math.PI / 180);

    YanÇapraz2.position.set(0, çapryuksfonk2 / 2, -DÜŞEYHOLGENİŞLİĞİ / 2);
    Çapraz1Boşluk.add(YanÇapraz2);

    
    // Çapraz1Boşluk grubunu ÇaprazDüşeyAdet kadar çoğaltarak yerleştiriyoruz
    if (H >= 6) {
      for (let i = 0; i < (YanÇaprazDüşeyAdet - 1); i++) {
          const yeniÇapraz = Çapraz1Boşluk.clone();
          yeniÇapraz.position.set(0, i * ÇaprazYükseklik, 0);
          çaprazAksGrubu.add(yeniÇapraz);
      }
  } else if (H < 6) {
      for (let i = 0; i < 1; i++) {
          const yeniÇapraz = Çapraz1Boşluk.clone();
          yeniÇapraz.position.set(0, i * ÇaprazYükseklik, 0);
          çaprazAksGrubu.add(yeniÇapraz);
      }
  }
    
    return çaprazAksGrubu;
}

export function ÇaprazYan1AksBütün(H) {
    const çaprazAksBütünGrup = new THREE.Group();

    for (let i = 0; i < YanÇaprazAksadet; i++) {
        const çaprazAks = ÇaprazYan1Aks(H);

        // Z ekseninde 2 * DÜŞEYHOLGENİŞLİĞİ aralıkla yerleştiriliyor
        çaprazAks.position.set(0, 0, -i * 2 * DÜŞEYHOLGENİŞLİĞİ);

        çaprazAksBütünGrup.add(çaprazAks);
    }

    return çaprazAksBütünGrup;
}


export function ÇaprazYanKomple(H) {
    const çaprazKompleGrup = new THREE.Group();

    for (let x = 0; x < YATAYHOLSAYISI+1; x++) {
        const çaprazAksBütün = ÇaprazYan1AksBütün(H);

        // X ekseninde YATAYHOLGENİŞLİĞİ aralıklarla çoğaltıyoruz
        çaprazAksBütün.position.set(x * YATAYHOLGENİŞLİĞİ, 0, 0);

        çaprazKompleGrup.add(çaprazAksBütün);
    }

    return çaprazKompleGrup;
}
//#endregion

//#region Çatı Çaprazlar
/* lazım olacak değişkenler
ÇatıBağKirişAra_Yatay
ÇatıBağKirişAra_Yekseni
ÇatıBağKirişSayısı  
*/

export function ÇatıÇaprazTekSol(H) {
  const çaprazGrup = new THREE.Group();

  // Başlangıç ve bitiş koordinatları
  const startCoord = new THREE.Vector3(0, H + MYÜKS, 0);
  const endCoord = new THREE.Vector3(ÇatıBağKirişAra_Yatay, H + MYÜKS + ÇatıBağKirişAra_Yekseni, -DÜŞEYHOLGENİŞLİĞİ);

  // İki nokta arasındaki uzunluk
  const uzunluk = startCoord.distanceTo(endCoord);

  // Çatı Çapraz Profil geometrisi ve malzemesi
  const çapraz = ÇatıÇaprazProfil(H, uzunluk).mesh;

  // Çaprazın pozisyonunu ortalama noktasına ayarlayın
  const ortaNokta = new THREE.Vector3().addVectors(startCoord, endCoord).multiplyScalar(0.5);
  çapraz.position.copy(ortaNokta);

  // Yön vektörü
  const direction = new THREE.Vector3().subVectors(endCoord, startCoord).normalize();

  // Yön vektörüne göre quaternion dönüşümünü hesapla
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction); // Silindirin başlangıç yönü Y eksenine göre hizalandı

  // Quaternion'u silindirin dönüşüne uygula
  çapraz.applyQuaternion(quaternion);

  çaprazGrup.add(çapraz);

  return çaprazGrup;
}

export function ÇatıÇaprazTek2Sol(H) {
  const çaprazGrup = new THREE.Group();

  // Başlangıç ve bitiş koordinatları
  const startCoord = new THREE.Vector3(0, H + MYÜKS, -DÜŞEYHOLGENİŞLİĞİ);
  const endCoord = new THREE.Vector3(ÇatıBağKirişAra_Yatay, H + MYÜKS + ÇatıBağKirişAra_Yekseni, 0);

  // İki nokta arasındaki uzunluk
  const uzunluk = startCoord.distanceTo(endCoord);

  // Çatı Çapraz Profil geometrisi ve malzemesi
  const çapraz = ÇatıÇaprazProfil(H, uzunluk).mesh;

  // Çaprazın pozisyonunu ortalama noktasına ayarlayın
  const ortaNokta = new THREE.Vector3().addVectors(startCoord, endCoord).multiplyScalar(0.5);
  çapraz.position.copy(ortaNokta);

  // Yön vektörü
  const direction = new THREE.Vector3().subVectors(endCoord, startCoord).normalize();

  // Yön vektörüne göre quaternion dönüşümünü hesapla
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction); // Silindirin başlangıç yönü Y eksenine göre hizalandı

  // Quaternion'u silindirin dönüşüne uygula
  çapraz.applyQuaternion(quaternion);

  çaprazGrup.add(çapraz);

  return çaprazGrup;
}

export function ÇatıÇapraz1AraSol(H) {
  const çatıÇaprazGrup = new THREE.Group();

  // ÇatıÇaprazTek ve ÇatıÇaprazTek2 fonksiyonlarını çağırıyoruz
  const çaprazTek1 = ÇatıÇaprazTekSol(H);
  const çaprazTek2 = ÇatıÇaprazTek2Sol(H);

  // İki fonksiyonun döndürdüğü grupları ana gruba ekliyoruz
  çatıÇaprazGrup.add(çaprazTek1);
  çatıÇaprazGrup.add(çaprazTek2);

  return çatıÇaprazGrup;
}

export function ÇatıÇapraz1SolMakas(H) {
  const solMakasGrup = new THREE.Group();

  // ÇatıBağKirişSayısı / 2 adet çoğaltma yapılacak
  const çoğaltmaAdedi = Math.floor(ÇatıBağKirişSayısı / 2);

  let adet;
  if ((ÇatıBağKirişSayısı / 2) < 1) {
    adet = 1;
  } else {
    adet = (ÇatıBağKirişSayısı / 2) + 1;
  }
console.log("ÇatıBağKirişSayısı / 2",ÇatıBağKirişSayısı / 2)
  for (let i = 0; i < (adet); i++) {
    // Her bir çoğaltmada ÇatıÇapraz1Ara fonksiyonunu çağırıyoruz
    const çapraz = ÇatıÇapraz1AraSol(H);

    // Çoğaltmalar için x ve y pozisyonlarını ayarlıyoruz
    çapraz.position.x = i * ÇatıBağKirişAra_Yatay;
    çapraz.position.y = i * ÇatıBağKirişAra_Yekseni;

    // Çoğaltılmış ÇatıÇapraz1Ara nesnesini ana gruba ekliyoruz
    solMakasGrup.add(çapraz);
  }

  return solMakasGrup;
}

export function ÇatıÇapraz1Ayna(H) {
  const tümÇatıGrup = new THREE.Group();

  // Sol makas grubu
  const solMakas = ÇatıÇapraz1SolMakas(H);

  // Sol makası ana gruba ekle
  tümÇatıGrup.add(solMakas);

  // Sol makasın aynalanmış kopyası
  const sağMakas = solMakas.clone();

  // Aynalamak için sağ makasın pozisyonunu ve rotasyonunu ayarla
  sağMakas.position.x = YATAYHOLGENİŞLİĞİ;  // X eksenine göre simetri
  sağMakas.position.z= -DÜŞEYHOLGENİŞLİĞİ;  // X eksenine göre simetri
  sağMakas.rotation.y = -Math.PI;  // Y ekseninde 180 derece döndürme

  // Sağ makası ana gruba ekle
  tümÇatıGrup.add(sağMakas);

  return tümÇatıGrup;
}

export function ÇatıÇapraz1MakasGrup(H) {
  const makasGrup = new THREE.Group();

  // Sol makas grubunu ekle
  const solMakas = ÇatıÇapraz1SolMakas(H);
  makasGrup.add(solMakas);

  // Sağ makas grubunu (aynalanmış sol makas) ekle
  const sağMakas = ÇatıÇapraz1Ayna(H, YATAYHOLGENİŞLİĞİ, DÜŞEYHOLGENİŞLİĞİ);
  makasGrup.add(sağMakas);

  return makasGrup;
}

export function ÇatıÇaprazTam(H) {
  const tamGrup = new THREE.Group();

  // +z ekseninde ve +x ekseninde çoğaltma
  for (let z = 0; z < ÇatıÇaprazZekseniAdet; z++) {
    for (let x = 0; x < YATAYHOLSAYISI; x++) {
      const makasGrup = ÇatıÇapraz1MakasGrup(H, YATAYHOLGENİŞLİĞİ, DÜŞEYHOLGENİŞLİĞİ);
console.log("ÇatıÇaprazZekseniAdet",ÇatıÇaprazZekseniAdet)
      // Pozisyon ayarları
      makasGrup.position.x = x * YATAYHOLGENİŞLİĞİ;
      makasGrup.position.z = z * -ÇatıÇaprazZekseniAra;

      // Çoğaltılmış grubu ana gruba ekle
      tamGrup.add(makasGrup);
    }
  }

  return tamGrup;
}




//#endregion

//#region TOTEM
export function Totem1(H, logoTexture = null) {
  // Totem Direği
  const totemDirekYukseklik = H + 2;
  const totemDirek = new THREE.CylinderGeometry(0.3, 0.3, totemDirekYukseklik, 32);
  const totemDirekMaterial = new THREE.MeshStandardMaterial({ color: 0x761453 });
  const totemDirekMesh = new THREE.Mesh(totemDirek, totemDirekMaterial);
  totemDirekMesh.position.set(-6, totemDirekYukseklik / 2, 0);

  // Logo dokusunu yükleme
  const logoMap = logoTexture || new THREE.TextureLoader().load('textures/logo.png');

  // Tabela Geometrisi ve Malzemeleri
  const tabelaGeometry = new THREE.BoxGeometry(5, 3, 0.8);

  // Ön, Arka, Üst ve Alt Yüzler İçin Malzeme (logo)
  const logoMaterial = new THREE.MeshBasicMaterial({ map: logoMap });

  // Yan Yüzler İçin Tek Renk Malzeme
  const sideMaterial = new THREE.MeshBasicMaterial({ color: 0x5f6070 });

  // Tüm Yüzlerin Malzemelerini Sırasıyla Tanımlayın
  const tabelaMaterials = [
    sideMaterial,  // Sol yüz
    sideMaterial,  // Sağ yüz
    sideMaterial,  // Ön yüz (logo)
    sideMaterial,  // Arka yüz (logo)
    logoMaterial,  // Üst yüz (logo)
    logoMaterial   // Alt yüz (logo)
  ];

  // Tabela Mesh Oluşturma
  const tabelaMesh = new THREE.Mesh(tabelaGeometry, tabelaMaterials);
  tabelaMesh.position.set(-6, totemDirekYukseklik, 0); // Tabelanın üst konumu

  // Grubu döndürme
  const totemGroup = new THREE.Group();
  totemGroup.add(totemDirekMesh);
  totemGroup.add(tabelaMesh);
  return totemGroup;
}
//#endregion

//#region Cephe Kaplama
//#region Cephe Kaplama
//#region Cephe Kaplama
export function CepheKaplamaSağSol(B, H, KOLONEBAT, A) {
  // Kaplama dokusunu yükleme
  const kaplamaMap = new THREE.TextureLoader().load('textures/mavisandviç.png');
  kaplamaMap.wrapS = THREE.RepeatWrapping;
  kaplamaMap.wrapT = THREE.RepeatWrapping;
  kaplamaMap.repeat.set(A * 2, 1);

  const kaplamaMaterial = new THREE.MeshBasicMaterial({
    map: kaplamaMap,
    side: THREE.DoubleSide,
    transparent: true, // Şeffaflık özelliğini etkinleştir
    opacity: 1         // Şeffaflık değeri (0 tamamen şeffaf, 1 tamamen opak)
  });
  
  // Kaplama Geometrisi: Uzunluk B, Yükseklik H + MYÜKS
  const kaplamaYukseklik = H + MYÜKS;
  const kaplamaGeometry = new THREE.PlaneGeometry(B, kaplamaYukseklik);

  // İlk Kaplama (mesh1)
  const kaplamaMesh1 = new THREE.Mesh(kaplamaGeometry, kaplamaMaterial);
  kaplamaMesh1.position.set(-(KOLONEBAT / 2) - 0.05, kaplamaYukseklik / 2, -B / 2);
  kaplamaMesh1.rotation.y = Math.PI / 2; // Y ekseninde 90° döndürme

  // İkinci Kaplama (mesh2) - x ekseninin A/2 noktasından geçen z eksenine göre mirror
  const kaplamaMesh2 = kaplamaMesh1.clone();
  const mirrorMatrix = new THREE.Matrix4();
  mirrorMatrix.makeScale(-1, 1, 1); // X ekseninde aynalama
  mirrorMatrix.setPosition(new THREE.Vector3(A, 0, 0)); // X ekseninin A/2 noktasından yansıma
  kaplamaMesh2.applyMatrix4(mirrorMatrix); // Aynalama matrisini uyguluyoruz

  // Arka Kaplama oluşturma
  const arkaKaplamaGeometry = new THREE.PlaneGeometry(A, kaplamaYukseklik);
  const arkaKaplamaMaterial = new THREE.MeshBasicMaterial({
    map: kaplamaMap, // Aynı dokuyu kullanıyoruz
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1
  });
  const arkaKaplamaMesh = new THREE.Mesh(arkaKaplamaGeometry, arkaKaplamaMaterial);
  arkaKaplamaMesh.position.set(A / 2, kaplamaYukseklik / 2, -B); // x ekseninde A / 2, y ekseninde ortalanmış, z ekseninde -B

  // Cephe kaplama grubu
  const kaplamaGroup = new THREE.Group();
  kaplamaGroup.add(kaplamaMesh1);
  kaplamaGroup.add(kaplamaMesh2);
  kaplamaGroup.add(arkaKaplamaMesh); // Arka Kaplamayı ekleyin

  return kaplamaGroup;
}


//#endregion


