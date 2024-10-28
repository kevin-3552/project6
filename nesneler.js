
// #region// DEĞİŞKENLER
// IMPORT DEĞİŞKENLER
import { MALTBÇAP, DÜŞEYAKSSAYISI, YATAYAKSSAYISI, YATAYHOLGENİŞLİĞİ, MAKASBOYU, DÜŞEYHOLGENİŞLİĞİ, YATAYHOLSAYISI, ALTMAKASYÜKS2, 
MYÜKS, MKAÇI, İKİDİKMEARASI, DİKME_Y_ARTIŞ, MDDİYGÇAP, DİKMESAYISI, MAKAS_YÜKSEKL_HESAPLA, YanKirişArası, YanBağKirişAdet} from './hesapla.js';
// Geometriler Import
import { KOLON1, HEA300, KOLON_BOX1, YATAY_MK_GEO_1, Yatay_Kiriş_Profil_1 } from './geometriler.js';
//malzemeler import
import { kolonMaterial2, DİKMEMALZEME, MAKASMALZEME, DİYAGONELMALZEME } from './malzemeler.js';

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

// #region 🔱 MAKASLAR 🔱
// TEKLİ SOL MAKAS ALT BAŞLIK Fonksiyonu
export function MakasAltSol(H) {
  const MK_UZUNLUK = YATAYHOLGENİŞLİĞİ / 2; // MK_UZUNLUK değeri atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK); // Grup olarak alınır
  makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ / 4, H, 0); // Pozisyon ayarlanıyor
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

// TEKLİ MAKAS SAĞ ALT BAŞLIK tekli fonksiyon
function MakasAltSağ(H) {
  const MK_UZUNLUK = YATAYHOLGENİŞLİĞİ / 2; // Örneğin, `MK_UZUNLUK` olarak `YATAYHOLGENİŞLİĞİ` atanıyor
  const makasAltBaslik = YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK);
  makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ * 0.75, H, 0);
  
  // Z ekseni etrafında döndürme
  makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90* -1);

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
  console.log("DİKMESAYISI DİKME fonk daki", DİKMESAYISI)
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

//#region // TAM MAKAS GRUP ÇOĞALTMA
export function MakasTamGrup (H) {
  const TamMakasGrup = new THREE.Group();

  // SOL ve SAĞ dikme gruplarını alıyoruz
  const dikmeGrupSol = DİKME1_GRUP_SOL(H);
  const dikmeGrupSağ = DİKME1_GRUP_SAĞ(H);
  const makasaltsol = MakasAltSol(H);
  const makasüstsol = MakasÜstSol()
  const makasüstsağ = MakasÜstSağ()
  const makasaltsağ = MakasAltSağ(H)
  const soldiyagonel = SOLDİYAGONELGRUBU(H)
  const sağdiyagonel = SAĞDİYAGONELGRUBU(H)
  


  // Grupları birleştiriyoruz
  TamMakasGrup.add(dikmeGrupSol);
  TamMakasGrup.add(dikmeGrupSağ);
  TamMakasGrup.add(makasaltsol);
  TamMakasGrup.add(makasüstsol);
  TamMakasGrup.add(makasüstsağ);
  TamMakasGrup.add(makasaltsağ);
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

//#region Yan Kirişler - oluştur ve çoğalt
export function YanKiriş_1(H, A, YanKirişArası, YanBağKirişAdet, DÜŞEYHOLSAYISI, DÜŞEYHOLGENİŞLİĞİ) {
    const yanKirişGrubu = new THREE.Group();
    const yatayboy_1 = DÜŞEYHOLGENİŞLİĞİ - 0.2; // Yatay kirişin boyunu belirledik

    if (H < 6) {
        // H < 6 olduğunda, tek bir profil ekleyin ve y ekseninde H/2 yüksekliğinde konumlandırın
        for (let z = 0; z < DÜŞEYHOLSAYISI; z++) {
            for (let x = 0; x < 2; x++) {
                const yatayProfil = Yatay_Kiriş_Profil_1(yatayboy_1); // Yatay profilin boyunu geçiyoruz
                yatayProfil.position.set(
                    x * A,                  // x ekseninde A aralıkla 2 adet
                    H / 2,                  // y ekseninde H/2 yüksekliği
                    -z * DÜŞEYHOLGENİŞLİĞİ  // z ekseninde DÜŞEYHOLGENİŞLİĞİ aralıkla
                );
                yanKirişGrubu.add(yatayProfil);
            }
        }
    } else {
        // H > 6 olduğunda, y ekseninde YanKirişArası aralıkla çoğaltma yap
        for (let y = 0; y < YanBağKirişAdet; y++) {
            for (let z = 0; z < DÜŞEYHOLSAYISI; z++) {
                for (let x = 0; x < 2; x++) {
                    const yatayProfil = Yatay_Kiriş_Profil_1(yatayboy_1); // Yatay profilin boyunu geçiyoruz
                    yatayProfil.position.set(
                        x * A,                 // x ekseninde A aralıkla 2 adet
                        y * YanKirişArası,     // y ekseninde YanKirişArası aralıkla YanBağKirişAdet adet
                        -z * DÜŞEYHOLGENİŞLİĞİ // z ekseninde DÜŞEYHOLGENİŞLİĞİ aralıkla DÜŞEYHOLSAYISI adet
                    );
                    yanKirişGrubu.add(yatayProfil);
                }
            }
        }
    }

    return yanKirişGrubu;
}


