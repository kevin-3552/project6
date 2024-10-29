
// #region// DEĞİŞKENLER
// IMPORT DEĞİŞKENLER
import { MALTBÇAP, DÜŞEYAKSSAYISI, YATAYAKSSAYISI, YATAYHOLGENİŞLİĞİ, MAKASBOYU, DÜŞEYHOLGENİŞLİĞİ, YATAYHOLSAYISI, ALTMAKASYÜKS2, 
MYÜKS, MKAÇI, İKİDİKMEARASI, DİKME_Y_ARTIŞ, MDDİYGÇAP, DİKMESAYISI, MAKAS_YÜKSEKL_HESAPLA, YanKirişArası, YanBağKirişAdet, 
DÜŞEYHOLSAYISI, ÇatıBağKirişSayısı, ÇatıBağKirişAra_Yatay, ÇatıBağKirişAra_Yekseni, 
ÇaprazYükseklik, YanÇaprazAksadet, YanÇaprazDüşeyAdet  } from './hesapla.js';

// Geometriler Import
import { KOLON1, HEA300, KOLON_BOX1, YATAY_MK_GEO_1, Yatay_Kiriş_Profil_1, Yatay_Kiriş_Profil_2, YatayÇaprazProfil,
  YatayÇaprazÇap } from './geometriler.js';

//malzemeler import
import { kolonMaterial2, DİKMEMALZEME, MAKASMALZEME, DİYAGONELMALZEME, BağKirişiMalzeme, BağKirişiMalzeme2, ÇatıÇaprazMalzemesi } from './malzemeler.js';

// #endregion// 

//#region ⛔ KOLONLAR ⛔  
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
    }
  
    return kolonGroup;  // Tüm kolonları içeren grup geri döndürülüyor
}
//#endregion

// #region 🔱 MAKASLAR ara fonksiyonlar🔱
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
export function MakasÜstSağ() {
  const MK_UZUNLUK = YATAYHOLGENİŞLİĞİ / 2; // MK_UZUNLUK değeri atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK); // Grup olarak alınır
  makasAltBaslik.position.set(3*YATAYHOLGENİŞLİĞİ / 4,(ALTMAKASYÜKS2 + MYÜKS), 0); // Pozisyon ayarlanıyor
  makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90 - MKAÇI);  // Z ekseni etrafında 90° + MKAÇI döndürme
  return makasAltBaslik;

}
// #endregion

// #region ❗ DİKMELER  ❗
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
  }


// #endregion

// #region 🚼 DİYAGONELLER 🚼
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

    // SAĞ DİYAGONELGRUBU fonksiyonu
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
  // #endregion

//#region //  MAKAS GRUP ÇOĞALTMA
export function MakasTamGrup (H) {
  const TamMakasGrup = new THREE.Group();

  // SOL ve SAĞ dikme gruplarını alıyoruz
  const dikmeGrupSol = DİKME1_GRUP_SOL(H);
  const dikmeGrupSağ = DİKME1_GRUP_SAĞ(H);
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
    const altBracing = MakasİçiAltTamBracing(H);
    const üstBracing = MakasİçiÜstTamBracing1(H);

    // Alt ve üst bracing gruplarını ana gruba ekliyoruz
    bracingHolTamGroup.add(altBracing);
    bracingHolTamGroup.add(üstBracing);

    return bracingHolTamGroup; // Tüm bracing'leri içeren grubu geri döndür
}


export function MakasİçiAltTamBracing(H) {
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

//#region Çapraz Yanlar

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
