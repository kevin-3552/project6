
// #region// Hesapla & Import 

export let KOLONUZUNLUK
export let MK_UZUNLUK
export let loadedFont = null;
export let kancatoplamyükseklik


import { MALTBÇAP, DÜŞEYAKSSAYISI, YATAYAKSSAYISI, YATAYHOLGENİŞLİĞİ, MAKASBOYU, DÜŞEYHOLGENİŞLİĞİ, 
  YATAYHOLSAYISI, ALTMAKASYÜKS2, MYÜKS, MKAÇI, İKİDİKMEARASI, DİKME_Y_ARTIŞ, MDDİYGÇAP, DİKMESAYISI, MAKAS_YÜKSEKL_HESAPLA, 
  YanKirişArası, YanBağKirişAdet, DÜŞEYHOLSAYISI, ÇatıBağKirişSayısı, ÇatıBağKirişAra_Yatay, ÇatıBağKirişAra_Yekseni, 
ÇaprazYükseklik, YanÇaprazAksadet, YanÇaprazDüşeyAdet,  ÇatıÇaprazZekseniAra, ÇatıÇaprazZekseniAdet,
 BinaYükseklik, ArkaKaplamaSınır, KaplamaSınırHesap, esaszeminA, esaszeminB} from './hesapla.js';

// Geometriler Import
import { KOLON1, HEA300, KOLON_BOX1, YATAY_MK_GEO_1, Yatay_Kiriş_Profil_1, Yatay_Kiriş_Profil_2, YatayÇaprazProfil,
  YatayÇaprazÇap, ÇatıÇaprazProfil, KOLONEBAT, MK_EN} from './geometriler.js';

// MALZEMELER import
import { kolonMaterial2, DİKMEMALZEME, MAKASMALZEME, DİYAGONELMALZEME, BağKirişiMalzeme, BağKirişiMalzeme2, kolonMaterial3
   , createKaplamaTexture, createKaplamaTexture2  } from './malzemeler.js';


// #endregion// 

//#region Zemin - Beton
// ZEMİNESAS fonksiyonu
export function ZEMİNESAS(A, B) {
  const ZEMİNESAS_TEXTURE = new THREE.TextureLoader().load('textures/zemin9.png');
  ZEMİNESAS_TEXTURE.wrapS = THREE.RepeatWrapping;
  ZEMİNESAS_TEXTURE.wrapT = THREE.RepeatWrapping;
  ZEMİNESAS_TEXTURE.repeat.set(1, 1);  // Zemin dokusunun tekrarlanmasını sağlar

  const groundGeometry = new THREE.PlaneGeometry(esaszeminA, esaszeminB);  // Zemin ebatları A+10 ve B+10
  const groundMaterial = new THREE.MeshBasicMaterial({
    map: ZEMİNESAS_TEXTURE,
    side: THREE.DoubleSide // Zeminin iki yüzüne de doku ekler
  });
console.log("esaszeminA", esaszeminA)
  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  groundMesh.rotation.x = -Math.PI / 2;  // Yatay hale getiriyoruz
  groundMesh.position.set(A/2, -0.1,-B/2);  // Pozisyon x=-5, z=5 olacak şekilde ayarlanıyor
  return groundMesh;
}
// #endregion 

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
  KOLONUZUNLUK = H
    for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
      const kolon = KOLON_BOX1(H, kolonMaterial3);
      kolon.position.set(0, 0, i * -DÜŞEYHOLGENİŞLİĞİ);  // Z ekseni boyunca DÜŞEYHOLGENİŞLİĞİ mesafesiyle yerleştiriliyor
      kolonGroup.add(kolon);
    }
  
    return kolonGroup;  // Tüm kolonları içeren grup geri döndürülüyor
}
//#endregion

// #region 🔱 Makaslar ara fonksiyonlar🔱
// TEKLİ SOL MAKAS ALT BAŞLIK Fonksiyonu
export function MakasAlt(H) {
   MK_UZUNLUK = YATAYHOLGENİŞLİĞİ; // MK_UZUNLUK değeri atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK); // Grup olarak alınır
  makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ / 2, H, 0); // Pozisyon ayarlanıyor
  makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90);  // Z ekseni etrafında 90° + MKAÇI döndürme
  return makasAltBaslik;
}

export function MakasÜstSol() {
   MK_UZUNLUK = YATAYHOLGENİŞLİĞİ / 2; // MK_UZUNLUK değeri atanıyor
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

export function CepheKaplamaSağSol(B, H, A) {
  const kaplamaYukseklik = H+MYÜKS;

  // Texture tekrar değerlerini B ve H'ye göre ayarlayalım
  const kaplamaTexture1 = createKaplamaTexture();
  const kaplamaTexture2 = createKaplamaTexture(A * 2, 1);
  const kaplamaTexture3 = createKaplamaTexture();
  const kaplamaTexture4 = createKaplamaTexture(A * 2, 1);

  // Kaplama Geometrisi: Uzunluk B, Yükseklik H
  const kaplamaGeometry = new THREE.PlaneGeometry(B+ArkaKaplamaSınır+0.1, kaplamaYukseklik+MK_EN+0.15);

  // Kaplama Malzemesi
  const kaplamaMaterial = new THREE.MeshBasicMaterial({
      map: kaplamaTexture1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
  });

  // Kaplama Mesh'i oluşturuluyor
  const kaplamaMesh1 = new THREE.Mesh(kaplamaGeometry, kaplamaMaterial);

  // Pozisyon ve rotasyon ayarı
  kaplamaMesh1.position.set(-KOLONEBAT/2- 0.05, kaplamaYukseklik / 2, -B / 2);
  kaplamaMesh1.rotation.y = Math.PI / 2;
  kaplamaTexture1.repeat.set( B,1);



  // İkinci Kaplama (mesh2)
  const kaplamaMesh2 = kaplamaMesh1.clone();
  const mirrorMatrix = new THREE.Matrix4().makeScale(-1, 1, 1);
  mirrorMatrix.setPosition(new THREE.Vector3(A, 0, 0));
  kaplamaMesh2.applyMatrix4(mirrorMatrix);

// Arka Kaplama Geometrisi: Uzunluk A, Yükseklik H
const arkaKaplamaGeometry = new THREE.PlaneGeometry((A+(KOLONEBAT)+0.1), kaplamaYukseklik+MK_EN);
const arkaKaplamaMaterial = new THREE.MeshBasicMaterial({
    map: kaplamaTexture2,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
});
kaplamaTexture2.repeat.set(YATAYHOLGENİŞLİĞİ*2,1);
const arkaKaplamaMesh = new THREE.Mesh(arkaKaplamaGeometry, arkaKaplamaMaterial);
arkaKaplamaMesh.position.set(A / 2, kaplamaYukseklik / 2, -B - ArkaKaplamaSınır / 2 - 0.05);
console.log("ArkaKaplamaSınır ",ArkaKaplamaSınır )

// Üçgen Kaplama Malzemesi
const triangleMaterial = new THREE.MeshBasicMaterial({
  map: kaplamaTexture3,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.5,
});

// Üçgen şeklin geometrisini oluşturma
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(YATAYHOLGENİŞLİĞİ / 2, BinaYükseklik - H - MYÜKS);
shape.lineTo(YATAYHOLGENİŞLİĞİ, 0);
shape.lineTo(0, 0);
const triangleGeometry = new THREE.ShapeGeometry(shape);
kaplamaTexture3.repeat.set(YATAYHOLGENİŞLİĞİ,1);


// UV koordinatlarını ayarlama
triangleGeometry.attributes.uv.array[0] = 0; // (0,0) noktasının u değeri
triangleGeometry.attributes.uv.array[1] = 0; // (0,0) noktasının v değeri

triangleGeometry.attributes.uv.array[2] = 0.5; // (YATAYHOLGENİŞLİĞİ / 2, BinaYükseklik - H - MYÜKS) u değeri
triangleGeometry.attributes.uv.array[3] = 1;   // (YATAYHOLGENİŞLİĞİ / 2, BinaYükseklik - H - MYÜKS) v değeri

triangleGeometry.attributes.uv.array[4] = 1;   // (YATAYHOLGENİŞLİĞİ, 0) u değeri
triangleGeometry.attributes.uv.array[5] = 0;   // (YATAYHOLGENİŞLİĞİ, 0) v değeri

// Üçgen Mesh oluşturma
const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
triangleMesh.position.set(0, H + MYÜKS+MK_EN/2, -B - KOLONEBAT  - 0.1);

// Aynalanmış Üçgen Mesh
const triangleMeshMirror = triangleMesh.clone();
const mirrorMatrix2 = new THREE.Matrix4().makeScale(-1, 1, 1); // x ekseninde aynalama
mirrorMatrix2.setPosition(new THREE.Vector3(YATAYHOLGENİŞLİĞİ, 0, 0)); // Aynalama konumu ayarı
triangleMeshMirror.applyMatrix4(mirrorMatrix);


  // Kaplama grubu
  const kaplamaGroup = new THREE.Group();
/* bu doğrusu eskisi  kaplamaGroup.add(kaplamaMesh1, kaplamaMesh2, arkaKaplamaMesh, triangleMesh); */
  kaplamaGroup.add(kaplamaMesh1,kaplamaMesh2, arkaKaplamaMesh, triangleMesh, triangleMeshMirror);

  return kaplamaGroup;
}


//#endregion

//#region Çatı Kaplama
export function SolÇatıKaplama(H, B) {
  // Dört köşe noktasının koordinatları
  const vertices = [
    new THREE.Vector3(-KOLONEBAT, H + MYÜKS+MK_EN, 0),                                         // 1. nokta
    new THREE.Vector3(YATAYHOLGENİŞLİĞİ / 2, BinaYükseklik+MK_EN, 0),                 // 2. nokta
    new THREE.Vector3(YATAYHOLGENİŞLİĞİ / 2, BinaYükseklik+MK_EN, -B - KOLONEBAT / 2), // 3. nokta
    new THREE.Vector3(-KOLONEBAT, H + MYÜKS+MK_EN, -B - KOLONEBAT / 2)                         // 4. nokta
  ];

  // Geometri oluşturuluyor ve köşeler ekleniyor
  const geometry = new THREE.BufferGeometry().setFromPoints(vertices);

  // Geometriye yüzey tanımlanıyor
  geometry.setIndex([0, 1, 2, 2, 3, 0]);
  geometry.computeVertexNormals();

  // UV koordinatları 90° döndürülmüş olarak tanımlanıyor
  const uvs = [
    1, 1,  // 1. nokta için UV koordinatı
    1, 0,  // 2. nokta için UV koordinatı
    0, 0,  // 3. nokta için UV koordinatı
    0, 1   // 4. nokta için UV koordinatı
  ];
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  // Texture oluşturma ve malzeme ayarı
  const kaplamaTexture2 = createKaplamaTexture2(B, 1); // Texture tekrar değerlerini `B` ve `1` olarak ayarlayın
  const kaplamaMaterial = new THREE.MeshBasicMaterial({
    map: kaplamaTexture2,
    side: THREE.DoubleSide,
    transparent: true,       // Transparan özelliğini etkinleştirin
    opacity: 0.5            // Opaklık değerini ayarlayın (0.5 örneği yarı saydamlık verir)

  });

  // Mesh oluşturuluyor
  const solCatiKaplamaMesh = new THREE.Mesh(geometry, kaplamaMaterial);
  kaplamaTexture2.repeat.set(B,1);

  // `SolÇatıKaplamacons` adında grup oluşturup mesh'i ekleyin
  const SolÇatıKaplamacons = new THREE.Group();
  SolÇatıKaplamacons.add(solCatiKaplamaMesh);

  // Grubu döndür
  return SolÇatıKaplamacons;



  // Sonucu döndür
  return solCatiKaplama;
}


//#endregion

//#region Vinç Kirişi
// Vinç Kirişi Fonksiyonu

export function VinçKirişi(H, B) {
  const VinçKirişGenişliği = YATAYHOLGENİŞLİĞİ - KOLONEBAT;
  const VinçKirişYükseklik = 0.7;
  const VinçKirişKalınlık = 0.3;
  const kirisRenk = 0xffff00; // Sarı renk (Hexadecimal)
  const VinçKirişYüksektenİniş = 0.75;
  const vinçöndenmesafe = -2;
  const ikivinçkediarası= 1;


  // Tüm kirişleri içerecek ana grubu oluşturun
  const kirisGroup = new THREE.Group();

  // Vinç kirişi için temel 3D kutu geometrisi ve malzeme oluşturma
  const kirisGeometry = new THREE.BoxGeometry(VinçKirişGenişliği, VinçKirişYükseklik, VinçKirişKalınlık);
  const kirisMaterial = new THREE.MeshStandardMaterial({ color: kirisRenk });
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Siyah renk

  // Vinç kirişlerini oluşturma ve gruba ekleme
  for (let i = 0; i < YATAYHOLSAYISI; i++) {
      for (let j = 0; j < 2; j++) {
          const kirisMesh = new THREE.Mesh(kirisGeometry, kirisMaterial);
          kirisMesh.position.set(
              YATAYHOLGENİŞLİĞİ / 2 + i * YATAYHOLGENİŞLİĞİ,
              H - VinçKirişYüksektenİniş,
              vinçöndenmesafe + j * ikivinçkediarası
          );

          const wireframe = new THREE.LineSegments(
              new THREE.WireframeGeometry(kirisGeometry),
              wireframeMaterial
          );
          kirisMesh.add(wireframe);
          kirisGroup.add(kirisMesh);
      }
  }

  // Vinç kancaları
  for (let i = 0; i < YATAYHOLSAYISI; i++) {
      const kanca = VincKancasi();
      kanca.scale.set(0.3, 0.3, 0.7);
      kanca.position.set(
          YATAYHOLGENİŞLİĞİ / 2 + i * YATAYHOLGENİŞLİĞİ,
          H - VinçKirişYüksektenİniş -kancatoplamyükseklik/2,
          vinçöndenmesafe+ikivinçkediarası/2
      );
      kirisGroup.add(kanca);
  }

  // Yazı ekleme
  const canvas = document.createElement('canvas');
  canvas.width = 700;
  /*const ölçekFaktörü = 100;  */   // 1 birimi 100 piksele ölçekleyelim
  canvas.height = 300
  const context = canvas.getContext('2d');
  context.fillStyle = 'black';

  const ölçekFaktörü2 = 150; // 1 birimi 100 piksele ölçekleyelim
  const textHeight = VinçKirişYükseklik * ölçekFaktörü2; // Yazı yüksekliği, VinçKirişYükseklik'in ölçeklenmiş hali
  context.font = `${textHeight}px Arial`;
    
// Yazının genişliğini alarak yatayda ortalama
const text = 'C   R   A   N   E';
const textWidth = context.measureText(text).width;
const x = (canvas.width - textWidth) / 2;

// Dikeyde ortalamak için `textBaseline` ve `y` koordinatını ayarlama
context.textBaseline = 'middle';
const y = canvas.height / 2;

// Metni belirtilen x ve y konumunda çizme (tam ortalanmış)
context.fillText(text, x, y);
  const texture = new THREE.CanvasTexture(canvas);
  const textMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

  for (let i = 0; i < YATAYHOLSAYISI; i++) {
      const textPlane = new THREE.Mesh(new THREE.PlaneGeometry(5, 2.5), textMaterial);
      textPlane.position.set(
          YATAYHOLGENİŞLİĞİ / 2 + i * YATAYHOLGENİŞLİĞİ,
          H - VinçKirişYüksektenİniş ,
          vinçöndenmesafe + 1.5
      );
      kirisGroup.add(textPlane);
  }

  // Vinç yolu eklemek için gerekli parametreler
  const box_en = 0.3;
  const box_yükseklik = 0.40;

  // birvinçyolukiriş nesnesi için grup oluştur
  const birholvinçyolu = new THREE.Group();

  // birvinçyolukiriş nesnesi oluştur ve gruba ekle
  const birvinçyolukirişGeometry = new THREE.BoxGeometry(box_en, box_yükseklik, B);
  const birvinçyolukirişMaterial = new THREE.MeshStandardMaterial({ color: 0x575758 });
  const birvinçyolukiriş = new THREE.Mesh(birvinçyolukirişGeometry, birvinçyolukirişMaterial);
  const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(birvinçyolukirişGeometry),
      wireframeMaterial
  );
  birvinçyolukiriş.add(wireframe);

  // birvinçyolukiriş konum ayarı
  birvinçyolukiriş.position.set(
      (KOLONEBAT / 2) + 0.05 + (box_en / 2),
      H - VinçKirişYüksektenİniş-(VinçKirişYükseklik/2)- (box_yükseklik / 2),
      -B / 2
  );
  birholvinçyolu.add(birvinçyolukiriş);

  // birholvinçyolu'nun aynasını oluşturma ve gruba ekleme
  const mirrorVinçYolu = birvinçyolukiriş.clone();
  mirrorVinçYolu.position.x = YATAYHOLGENİŞLİĞİ-(KOLONEBAT / 2) - 0.05 - (box_en / 2);
  birholvinçyolu.add(mirrorVinçYolu);

  // Vinç yollarını çoğaltmak için vinçyollarıtam grubunu oluşturma
  const vinçyollarıtam = new THREE.Group();
  for (let i = 0; i < YATAYHOLSAYISI; i++) {
      const clonedVinçYolu = birholvinçyolu.clone();
      clonedVinçYolu.position.x = i * YATAYHOLGENİŞLİĞİ;
      vinçyollarıtam.add(clonedVinçYolu);
  }

  // Tüm vinç yollarını kirisGroup'a ekleyin
  kirisGroup.add(vinçyollarıtam);
  console.log("Vinç Kiriş Genişliği:", VinçKirişGenişliği);
  console.log("VinçKirişYüksektenİniş", VinçKirişYüksektenİniş)
  console.log("B:", B);
  console.log("YATAYHOLSAYISI:", YATAYHOLSAYISI);
  console.log("YATAYHOLGENİŞLİĞİ:", YATAYHOLGENİŞLİĞİ);
  console.log("KOLONEBAT:", KOLONEBAT);
  
  // Grubu döndür
  return kirisGroup;
}

export function VincKancasi() {
  const kancaGroup = new THREE.Group();

  // Kanca kısmı (bükülmüş halka şeklinde)
  const kancaGeometry = new THREE.TorusGeometry(1, 0.15, 16, 100, Math.PI * 1.5); // Çeyrek halka
  const kancaMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, metalness: 0.6, roughness: 0.4 });
  const kancaMesh = new THREE.Mesh(kancaGeometry, kancaMaterial);
  kancaMesh.rotation.z = Math.PI / 2; // Yatay olarak döndürme
  kancaGroup.add(kancaMesh);

  // Bağlantı kısmı (silindir)
  const baglantiGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
  const baglantiMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, metalness: 0.6, roughness: 0.4 });
  const baglantiMesh = new THREE.Mesh(baglantiGeometry, baglantiMaterial);
  baglantiMesh.position.y = 1; // Bağlantıyı yukarıda konumlandırma
  kancaGroup.add(baglantiMesh);

  // Üst bağlantı halkası
  const halkaGeometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100);
  const halkaMesh = new THREE.Mesh(halkaGeometry, baglantiMaterial);
  halkaMesh.position.y = 1.6; // Kancanın üstüne yerleştirme
  halkaMesh.rotation.x = Math.PI / 2; // Yatay döndürme
  kancaGroup.add(halkaMesh);

  kancatoplamyükseklik = 1

  return kancaGroup;
}



//#endregion
