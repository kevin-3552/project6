// #region KOLON MALZEMELERİ - KOLON MATERIAL 1
export const kolonMaterial1 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('textures/çelik7.png')
});
//#endregion

// #region KOLON MALZEMELERİ - KOLON MATERIAL 2
export const kolonMaterial2 = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('textures/çelik13.png')
  });
// #endregion

//#region MAKAS MALZEMESİ
const textureLoader = new THREE.TextureLoader();
export const MAKASMALZEME = new THREE.MeshBasicMaterial({
  map: textureLoader.load('textures/makas1.png')});  // Makas malzemesi texture atanıyor
//#endregion

//#region  DİKME MALZEMESİ
export const DİKMEMALZEME = new THREE.MeshStandardMaterial({
  color: 0x8229c0,   // Açık mavi renk
  roughness: 0.5,    // Pürüzlülük; 0’a yakınsa daha parlak, 1’e yakınsa mat olur
  metalness: 0.1     // Metalik görünüm; 0 mat, 1 tamamen metalik
});
//#endregion

//#region // DİYAGONEL MALZEMESİ
export const DİYAGONELMALZEME = new THREE.MeshStandardMaterial({
  color: 0x87CEEB,   // Açık mavi renk
  roughness: 0.5,    // Pürüzlülük; 0’a yakınsa daha parlak, 1’e yakınsa mat olur
  metalness: 0.1     // Metalik görünüm; 0 mat, 1 tamamen metalik
});
// #endregion

//#region BağKirişi MALZEMESİ
export const BağKirişiMalzeme = new THREE.MeshStandardMaterial({
  color: 0x2c20c1 
});
//#endregion

/*
// #region ESKİ - AĞIR YÜKLENEN MALZEMELER 
//#region // DİYAGONEL MALZEMESİ ESKİ
const textureLoader3 = new THREE.TextureLoader();
export const DİYAGONELMALZEME= new THREE.MeshBasicMaterial({
map: textureLoader3.load('textures/diyagonel1.png')});  // DİYAGONEL malzemesi texture atanıyor
// #endregion

DİYAGONEL MALZEMESİ ESKİ
const textureLoader2 = new THREE.TextureLoader();
export const DİKMEMALZEME = new THREE.MeshBasicMaterial({
  map: textureLoader2.load('textures/dikme1.png')});  // DİYAGONEL malzemesi texture atanıyor

MAKAS MALZEME ESKİ
  const textureLoader = new THREE.TextureLoader();
export const MAKASMALZEME = new THREE.MeshBasicMaterial({
  map: textureLoader.load('textures/makas1.png')});  // Makas malzemesi texture atanıyor
//#endregion


// #endregion
*/
