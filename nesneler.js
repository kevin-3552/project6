//SABİTLER
let MAKASMALZEME;       // Makas malzemesi
let DİKMEMALZEME;  // DİKME MALZEMESİ
let DİYAGONELMALZEME;  // DİYAGONEL MALZEMESİ

// #region// DEĞİŞKENLER
// IMPORT DEĞİŞKENLER
import { MALTBÇAP, DÜŞEYAKSSAYISI, YATAYAKSSAYISI, YATAYHOLGENİŞLİĞİ, MAKASBOYU, DÜŞEYHOLGENİŞLİĞİ, YATAYHOLSAYISI, ALTMAKASYÜKS2, 
MYÜKS, MKAÇI, İKİDİKMEARASI, DİKME_Y_ARTIŞ, MDDİYGÇAP, DİKMESAYISI} from './hesapla.js';
import { KOLON1, HEA300 } from './geometriler.js';
// #endregion// 

// #region// MALZEMELER
// MAKAS MALZEMESİ
const textureLoader = new THREE.TextureLoader();
MAKASMALZEME = new THREE.MeshBasicMaterial({
  map: textureLoader.load('textures/makas1.png')});  // Makas malzemesi texture atanıyor

  // DİKME MALZEMESİ
const textureLoader2 = new THREE.TextureLoader();
DİKMEMALZEME = new THREE.MeshBasicMaterial({
  map: textureLoader2.load('textures/dikme1.png')});  // DİYAGONEL malzemesi texture atanıyor

  // DİYAGONEL MALZEMESİ
const textureLoader3 = new THREE.TextureLoader();
DİYAGONELMALZEME= new THREE.MeshBasicMaterial({
map: textureLoader3.load('textures/diyagonel1.png')});  // DİYAGONEL malzemesi texture atanıyor
// #endregion

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
  
    for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
      const kolon = KOLON1(H);
      kolon.position.set(0, 0, i * -DÜŞEYHOLGENİŞLİĞİ);  // Z ekseni boyunca DÜŞEYHOLGENİŞLİĞİ mesafesiyle yerleştiriliyor
      kolonGroup.add(kolon);
    }
  
    return kolonGroup;  // Tüm kolonları içeren grup geri döndürülüyor
}
//#endregion

// #region 🔱 MAKASLAR 🔱
// TEKLİ SOL MAKAS ALT BAŞLIK Fonksiyonu
export function MAKASALTBAŞLIKSOL(H) {
    const geometry = new THREE.CylinderGeometry(MALTBÇAP, MALTBÇAP, MAKASBOYU, 32);  // Silindir
    const makasAltBaslik = new THREE.Mesh(geometry, MAKASMALZEME);  // Silindir malzemesi atanıyor
    makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ / 4, H, 0);  // Yükseklik ALTMAKASYÜKS2 kullanılıyor
    return makasAltBaslik;
  } 
// SOL ALT MAKAS ÇOĞALTMA Fonksiyonu
export function MAKASALTBAŞLIKGRUBUSOL(H) {
    const makasGrubu = new THREE.Group();
  
    if (A < MKSHG) {
      for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
        const altBaslik = MAKASALTBAŞLIKSOL(H);
        altBaslik.position.z = i * -DÜŞEYHOLGENİŞLİĞİ;  // Z ekseni boyunca
        altBaslik.rotation.z = THREE.MathUtils.degToRad(90);  // Z ekseninde 90° döndürme
        makasGrubu.add(altBaslik);
      }
    } else {
      for (let x = 0; x < YATAYHOLSAYISI; x++) {
        for (let z = 0; z < DÜŞEYAKSSAYISI; z++) {
          const altBaslik = MAKASALTBAŞLIKSOL(H);
          altBaslik.position.set((YATAYHOLGENİŞLİĞİ / 4 + x * YATAYHOLGENİŞLİĞİ), H, z * -DÜŞEYHOLGENİŞLİĞİ);  // X ve Z ekseni boyunca
          altBaslik.rotation.z = THREE.MathUtils.degToRad(90);  // Z ekseninde 90° döndürme
          makasGrubu.add(altBaslik);
        }
      }
    }
    return makasGrubu;
  }

    // SOL ÜST MAKAS BAŞLIK GRUBU OLUŞTURMA
export function MAKASÜSTBAŞLIKGRUBUSOL(H) { 
    const makasGrubu = new THREE.Group();
  
    if (A < MKSHG) {
    for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
        const altBaslik = MAKASALTBAŞLIKSOL();
        altBaslik.position.z = i * -DÜŞEYHOLGENİŞLİĞİ;  // Z ekseni boyunca
        altBaslik.position.y = ALTMAKASYÜKS2 + MYÜKS;
        altBaslik.rotation.z = THREE.MathUtils.degToRad(90 + MKAÇI);  // Z ekseni etrafında 90° + MKAÇI döndürme
        makasGrubu.add(altBaslik);
    }
    } else {
    for (let x = 0; x < YATAYHOLSAYISI; x++) {
        for (let z = 0; z < DÜŞEYAKSSAYISI; z++) {
            const altBaslik = MAKASALTBAŞLIKSOL();
            altBaslik.position.set((YATAYHOLGENİŞLİĞİ / 4 + x * YATAYHOLGENİŞLİĞİ), ALTMAKASYÜKS2 + MYÜKS, z * -DÜŞEYHOLGENİŞLİĞİ);
            altBaslik.rotation.z = THREE.MathUtils.degToRad(90 + MKAÇI);
            makasGrubu.add(altBaslik);         }}  }   return makasGrubu;}
// TEKLİ MAKAS SAĞ ALT BAŞLIK tekli fonksiyon
function MAKASALTBAŞLIKSAĞ(H) {
    const geometry = new THREE.CylinderGeometry(MALTBÇAP, MALTBÇAP, MAKASBOYU, 32);  // Silindir
    const makasAltBaslik = new THREE.Mesh(geometry, MAKASMALZEME);  // Silindir malzemesi atanıyor
    makasAltBaslik.position.set(YATAYHOLGENİŞLİĞİ *0.75, H, 0);  // Sağ tarafa yerleştiriliyor
    makasAltBaslik.rotation.z = THREE.MathUtils.degToRad(90+MKAÇI*-1);  // Z ekseni etrafında -10° döndürme
    return makasAltBaslik;
   }
    //SAĞ ALT MAKAS BAŞLIK OLUŞTURMA Fonksiyonu
  export function MAKASALTBAŞLIKGRUBUSAĞ(H) {
    const makasGrubu = new THREE.Group();
  
    if (A < MKSHG) {
      for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
        const altBaslik = MAKASALTBAŞLIKSAĞ();
        altBaslik.position.z = i * -DÜŞEYHOLGENİŞLİĞİ;  // Z ekseni boyunca yerleştiriliyor
        altBaslik.rotation.z = THREE.MathUtils.degToRad(90);  // Z ekseninde 90° döndürme
        makasGrubu.add(altBaslik);
      }
      } else {
      for (let x = 0; x < YATAYHOLSAYISI; x++) {
        for (let z = 0; z < DÜŞEYAKSSAYISI; z++) {
          const altBaslik = MAKASALTBAŞLIKSAĞ();
          altBaslik.position.set((YATAYHOLGENİŞLİĞİ*0.75 + x * YATAYHOLGENİŞLİĞİ), H, z * -DÜŞEYHOLGENİŞLİĞİ);  // X ve Z ekseni boyunca yerleştiriliyor
          altBaslik.rotation.z = THREE.MathUtils.degToRad(90);  // Z ekseninde 90° döndürme
          makasGrubu.add(altBaslik);
        }
      }
    }
    return makasGrubu;
  }
  //SAĞ ÜST MAKAS BAŞLIK OLUŞTURMA Fonksiyonu
export function MAKASÜSTBAŞLIKGRUBUSAĞ() {
    const makasGrubu = new THREE.Group();
  
    if (A < MKSHG) {
      for (let i = 0; i < DÜŞEYAKSSAYISI; i++) {
        const altBaslik = MAKASALTBAŞLIKSAĞ();
        altBaslik.position.z = i * -DÜŞEYHOLGENİŞLİĞİ;  // Z ekseni boyunca yerleştiriliyor
        altBaslik.position.y = ALTMAKASYÜKS2 + MYÜKS;
        makasGrubu.add(altBaslik);
      }
    } else {
      for (let x = 0; x < YATAYHOLSAYISI; x++) {
        for (let z = 0; z < DÜŞEYAKSSAYISI; z++) {
          const altBaslik = MAKASALTBAŞLIKSAĞ();
          altBaslik.position.set((YATAYHOLGENİŞLİĞİ*0.75 + x * YATAYHOLGENİŞLİĞİ), ALTMAKASYÜKS2+MYÜKS, z * -DÜŞEYHOLGENİŞLİĞİ);  // X ve Z ekseni boyunca yerleştiriliyor
          makasGrubu.add(altBaslik);
        }
      }
    }
  return makasGrubu;
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
    console.log("DİKMESAYISI DİKME fonk daki", DİKMESAYISI)

  
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
      const yKoordinati = H + ((DİKMESAYISI+1)* DİKME_Y_ARTIŞ)- (((i-DİKMESAYISI) * DİKME_Y_ARTIŞ)/2) ;

      // Dikmenin konumunu yeni x ve y koordinatlarına göre ayarlıyoruz
      dikme.position.set(xKoordinati, yKoordinati, 0);
  
      // Dikmeyi gruba ekliyoruz
      dikmeGrubu.add(dikme);
    }
  
    return dikmeGrubu;  // Tüm dikmeleri içeren grubu geri döndürüyoruz
  }



// #endregion

// #region 🚼 DİYAGONELLER 🚼
  // DİYAGONELSOL1 fonksiyonu (Başlangıç ve bitiş koordinatları dışarıdan gönderiliyor)
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
      // 1. Diyagonel: startX = 1* İKİDİKMEARASI, endX = 0
      // 2. Diyagonel: startX = 2* İKİDİKMEARASI, endX = 1* İKİDİKMEARASI vb.
  
      const endX = (i + 1) * İKİDİKMEARASI;  // X ekseninde offset
      const endY = H;  // Başlangıç yüksekliği (H)
  
      const startX = i * İKİDİKMEARASI;  // Bir önceki X noktası
      const startY = H + MYÜKS + i * DİKME_Y_ARTIŞ;  // Y ekseninde artış
  
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
  

  