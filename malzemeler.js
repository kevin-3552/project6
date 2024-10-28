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
const textureLoader2 = new THREE.TextureLoader();
export const DİKMEMALZEME = new THREE.MeshBasicMaterial({
  map: textureLoader2.load('textures/dikme1.png')});  // DİYAGONEL malzemesi texture atanıyor
//#endregion

//#region // DİYAGONEL MALZEMESİ
const textureLoader3 = new THREE.TextureLoader();
export const DİYAGONELMALZEME= new THREE.MeshBasicMaterial({
map: textureLoader3.load('textures/diyagonel1.png')});  // DİYAGONEL malzemesi texture atanıyor
// #endregion
