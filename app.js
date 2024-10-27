//#region DEĞİŞKENLER ATAMA
let scene, camera, renderer, controls;
let kolonGrubu;
let altbaşlıkgrubuSOL; // 
let altbaşlıkgrubuSAĞ; // 
let üstbaşlıkgrubuSOL; // 
let üstbaşlıkgrubuSAĞ; //
let soldiyagonelGrup //
let sağdiyagonelGrup
let zeminesasfonk; //
let currentGroundMesh = null;
window.MKSHG=35 // MAKSİMUM HOL GENİŞLİĞİ

// Global değişkenler
let A, B, H, K;  // En, Boy, Yükseklik değişkenleri
window.YATAYHOLGENİŞLİĞİ; 
window.YATAYHOLSAYISI;
window.YATAYAKSSAYISI; 

// Yeni eklenen makas değişkenleri
let dikmeGrubu = null;  
let dikmeGrubu2 = null;  

let createButton; 
//#endregion

//#region IMPORT'lar
// İMPORTLAR FONKSİYON
import { DİKMEHESAPLA, hesaplaDüşeyAks, hesaplaYatayKolon, ÇATIEĞİMHETKİSİHESAP, MAKASBOYUHESAP, ZEMİNESASEBATHESAP
    } from './hesapla.js'; 

// DEĞİŞKENLER İMPORT FONKSİYON
    import { MYÜKS, MKAÇI, YATAYHOLGENİŞLİĞİ, 
  MALTBÇAP, DİKMESAYISI, İKİDİKMEARASI, DİKME_Y_ARTIŞ, MDDİYGÇAP, YATAYHOLSAYISI, esaszeminA, esaszeminB} from './hesapla.js';

// NESNELER İMPORT FONKSİYON
import { MAKASALTBAŞLIKGRUBUSOL, MAKASÜSTBAŞLIKGRUBUSOL, MAKASALTBAŞLIKGRUBUSAĞ, MAKASÜSTBAŞLIKGRUBUSAĞ, YATAYKOLONGRUBU 
  , DİKME1_GRUP_SOL, DİKME1_GRUP_SAĞ, SOLDİYAGONELGRUBU, SAĞDİYAGONELGRUBU} from './nesneler.js';  // 
//#endregion 

// #region FORM - HTML vs İŞLEMLERİ...
// HTML form yapısını tamamen JavaScript ile oluşturma ve sayfaya ekleme
function createFormContainer() {
  const formContainer = document.createElement('div');
  formContainer.id = 'formContainer'; 
  formContainer.style.position = 'absolute';
  formContainer.style.top = '3px';
  formContainer.style.left = '10px';
  formContainer.style.zIndex = '10';
  formContainer.style.backgroundColor = 'rgba(240, 240, 240, 0.9)';
  formContainer.style.padding = '5px';
  formContainer.style.border = '1px solid #000';
  formContainer.style.borderRadius = '8px';
  formContainer.style.width = '200px';

  // Formu sayfaya ekliyoruz
    document.body.appendChild(formContainer);   return formContainer;}
  // Fonksiyonu çağırarak formu sayfaya ekleyin
  const formContainer = createFormContainer();

// Butonları ve formu oluşturmak için bir fonksiyon
function createFormAndButton() {
  // Form Container oluşturma
  const formContainer = document.createElement('div');
  formContainer.id = 'formContainer';
  formContainer.style.position = 'absolute';
  formContainer.style.top = '3px';
  formContainer.style.left = '10px';
  formContainer.style.zIndex = '10';
  formContainer.style.backgroundColor = 'rgba(240, 240, 240, 0.9)';
  formContainer.style.padding = '5px';
  formContainer.style.border = '1px solid #000';
  formContainer.style.borderRadius = '8px';
  formContainer.style.width = '200px';

  // Tablo elemanlarını oluşturma
  const table = document.createElement('table');
  table.style.width = '100%';

  // Bir satır ve hücreler oluşturan yardımcı işlev
  function createRow(labelText, inputId, defaultValue) {
      const row = document.createElement('tr');
      const labelCell = document.createElement('td');
      labelCell.style.padding = '5px';
      labelCell.style.textAlign = 'right';
      labelCell.textContent = labelText;

      const inputCell = document.createElement('td');
      inputCell.style.padding = '6px';

      const input = document.createElement('input');
      input.type = 'number';
      input.id = inputId;
      input.value = defaultValue;
      input.style.width = '100%';
      input.style.padding = '5px';
      input.style.borderRadius = '4px';
      input.style.border = '1px solid #ccc';

      inputCell.appendChild(input);
      row.appendChild(labelCell);
      row.appendChild(inputCell);

      return row;
  }

  // Tabloya satırları ekleme
  table.appendChild(createRow('En (A):', 'A', '20'));
  table.appendChild(createRow('Boy (B):', 'B', '50'));
  table.appendChild(createRow('Yükseklik (H):', 'H', '6'));
  table.appendChild(createRow('Aks Arası:', 'K', '6'));

  // Tabloyu formContainer içine ekleme
  formContainer.appendChild(table);

  // 3D BİNA MODELLE butonunu ekleme
  createButton = document.createElement('button');
  createButton.id = 'createCube';
  createButton.textContent = '3D BİNA MODELLE';
  createButton.style.marginTop = '10px';
  createButton.style.width = '100%';
  createButton.style.padding = '10px';
  createButton.style.backgroundColor = '#007BFF';
  createButton.style.color = 'white';
  createButton.style.border = 'none';
  createButton.style.borderRadius = '4px';
  createButton.style.cursor = 'pointer';
  formContainer.appendChild(createButton);

  // FormContainer'ı body içine ekleme
  document.body.appendChild(formContainer);
}
// Bu fonksiyonu çağırarak buton ve formu oluşturabilirsiniz
createFormAndButton();

// Butona click olay işleyicisi ekleyelim
createButton.addEventListener('click', () => {
    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const H = parseFloat(document.getElementById('H').value);
    const K = parseFloat(document.getElementById('K').value);

    // Burada 3D bina modelleme işlemlerini başlatabilirsiniz
});

// ZEMİNESAS sabiti
const ZEMİNESAS_TEXTURE = new THREE.TextureLoader().load('textures/zemin9.png');
// #endregion 

// #region: Işık Ayarları
// Yönlü ışık ekleme fonksiyonu
function addDirectionalLight() {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);
}
// Ambient light ekleme fonksiyonu
function addAmbientLight() {
  const ambientLight = new THREE.AmbientLight(0x404040, 1); // Yumuşak aydınlatma
  scene.add(ambientLight);
}
//#endregion

// #region🔥 INIT fonksiyonu & BUTON🔥
// #region BUTON ÖNCESİ  
function init() {
  // Sahne oluşturma
  scene = new THREE.Scene();

  // Kamera ayarları
  camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // OrbitControls ekleme
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;

    // Işıkları ekleme
    addDirectionalLight();
    addAmbientLight();

  // Zemin ekleme
  function createGround(scene) {
    // Texture yükleyici
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load('textures/zemin.png');
    groundTexture.wrapS = THREE.RepeatWrapping;
    groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(50, 50);  // Zemin dokusunun tekrarlanmasını sağlar
    // Doku y ekseninde aşağı kaydırılıyor
    groundTexture.offset.y = -1; // Y ekseninde dokuyu aşağı taşır (negatif değerle)

    // Geometri ve malzeme oluşturma
    const groundGeometry = new THREE.PlaneGeometry(300, 200);  // Büyük bir zemin düzlemi
    const groundMaterial = new THREE.MeshBasicMaterial({
        map: groundTexture,
        side: THREE.DoubleSide  // Zeminin iki yüzüne de doku ekler
    });

    // Mesh oluşturma ve ayarlama
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2; // Yatay hale getiriyoruz
    groundMesh.position.set(50, 0, -50);  // X, Y, Z koordinatları

    // Zemini bir grup içinde organize ediyoruz
    const groundGroup = new THREE.Group();
    groundGroup.add(groundMesh);

    // Zemini sahneye ekliyoruz
    scene.add(groundGroup);

    return groundGroup;  // İleride kontrol için zemini geri döndürüyoruz
}
// Fonksiyonu çağırarak zemini sahneye ekleyin
const ground = createGround(scene);

// Gökyüzü küresi ekleme
function createSky(scene) {
  const textureLoader = new THREE.TextureLoader();
  const skyTexture = textureLoader.load('textures/sky.png');
  
  const skyGeometry = new THREE.SphereGeometry(1000, 60, 40); // Büyük bir küre, gökyüzü etkisi için
  const skyMaterial = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide // Kürenin iç yüzeyi görünsün
  });
  
  const skyMesh = new THREE.Mesh(skyGeometry, skyMaterial);
  skyMesh.position.y = 500; // Gökyüzü küresi yukarıda yerleştirildi
  
  // Gökyüzü küresini sahneye ekleme
  scene.add(skyMesh);
}

// Fonksiyonu çağırarak gökyüzünü sahneye ekleyin
createSky(scene);

// ZEMİNESAS fonksiyonu
function ZEMİNESAS() {
  const groundTexture = ZEMİNESAS_TEXTURE;
  groundTexture.wrapS = THREE.RepeatWrapping;
  groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(1, 1);  // Zemin dokusunun tekrarlanmasını sağlar

  const groundGeometry = new THREE.PlaneGeometry(esaszeminA, esaszeminB);  // Zemin ebatları A+10 ve B+10
  const groundMaterial = new THREE.MeshBasicMaterial({
    map: groundTexture,
    side: THREE.DoubleSide // Zeminin iki yüzüne de doku ekler
  });

  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  groundMesh.rotation.x = -Math.PI / 2;  // Yatay hale getiriyoruz
  groundMesh.position.set(A/2, 0.5,-B/2);  // Pozisyon x=-5, z=5 olacak şekilde ayarlanıyor
  return groundMesh;

}

document.addEventListener('keydown', function(event) {
  // Alt + M tuş kombinasyonunu kontrol edin
  if (event.altKey && (event.key === 'm' || event.key === 'M')) {
      document.getElementById('createCube').click();
  }
});
// #endregion 
//#region🔥🔥🔥🔥🔥🔥 BUTONA BASINCA OLACAKLAR   🔥🔥🔥🔥🔥🔥🔥🔥
  document.getElementById('createCube').addEventListener('click', () => {
    // Önceki kolon grubunu temizleyelim
    if (kolonGrubu) {scene.remove(kolonGrubu);}
    if (altbaşlıkgrubuSOL) {scene.remove(altbaşlıkgrubuSOL);}
    if (altbaşlıkgrubuSAĞ) { scene.remove(altbaşlıkgrubuSAĞ); }
    if (üstbaşlıkgrubuSOL) {scene.remove(üstbaşlıkgrubuSOL);}
    if (üstbaşlıkgrubuSAĞ) {scene.remove(üstbaşlıkgrubuSAĞ);}
    if (soldiyagonelGrup) {scene.remove(soldiyagonelGrup);}
    if (sağdiyagonelGrup) {scene.remove(sağdiyagonelGrup);}
    if (zeminesasfonk) { scene.remove(zeminesasfonk); }
    if (currentGroundMesh) {scene.remove(currentGroundMesh);}  // Önceki zemini sahneden kaldırıyoruz
    if (dikmeGrubu) { scene.remove(dikmeGrubu);}
    if (dikmeGrubu2) { scene.remove(dikmeGrubu2);}

         
    // A, B, H değerlerini inputlardan alalım  - BUTON HESAP !!!!!!!!!!!!!!!!!!!!!
    A = parseFloat(document.getElementById('A').value);   // En (A)
    hesaplaYatayKolon(A); // Yatay kolon hesaplaması
    B = parseFloat(document.getElementById('B').value);   // Boy (B)
    H = parseFloat(document.getElementById('H').value);   // Yükseklik (H)
    K = parseFloat(document.getElementById('K').value);   // Aks Arası (K)

    hesaplaDüşeyAks(B, K);  // Düşey aks hesaplaması
    hesaplaYatayKolon(A); // Yatay kolon hesaplaması
    ÇATIEĞİMHETKİSİHESAP(H, YATAYHOLGENİŞLİĞİ, MKAÇI); // Bu fonksiyon çalışmalı
    MAKASBOYUHESAP()
    ZEMİNESASEBATHESAP(A,B) // zemin ebatı hesaplıyor
    DİKMEHESAPLA(MKAÇI)

    kolonGrubu = YATAYKOLONGRUBU(H);  // Kolon grubu oluşturuluyor
    altbaşlıkgrubuSOL = MAKASALTBAŞLIKGRUBUSOL(H);  // 
    altbaşlıkgrubuSAĞ = MAKASALTBAŞLIKGRUBUSAĞ(H);
    üstbaşlıkgrubuSOL = MAKASÜSTBAŞLIKGRUBUSOL(H);  // 
    üstbaşlıkgrubuSAĞ = MAKASÜSTBAŞLIKGRUBUSAĞ(H);  // 
    soldiyagonelGrup = SOLDİYAGONELGRUBU(H);
    sağdiyagonelGrup = SAĞDİYAGONELGRUBU(H);
    dikmeGrubu = DİKME1_GRUP_SOL(H);
    dikmeGrubu2 = DİKME1_GRUP_SAĞ(H);
    zeminesasfonk =ZEMİNESAS();
    
    scene.add(kolonGrubu);  // KOLON1 ile oluşturulan kolonları sahneye ekle
    scene.add(altbaşlıkgrubuSOL);  // makas alt başlık grubusahneye ekle
    scene.add(altbaşlıkgrubuSAĞ);
    scene.add(üstbaşlıkgrubuSOL);
    scene.add(üstbaşlıkgrubuSAĞ);
    scene.add(soldiyagonelGrup);  // Sahneye ekle
    scene.add(sağdiyagonelGrup);  // Sahneye ekle
    const zemin = ZEMİNESAS();  // ZEMİNESAS fonksiyonunu çağırıyoruz
    scene.add(zemin);  // Zemin sahneye ekleniyor
    currentGroundMesh = zemin;
    scene.add(dikmeGrubu);
    scene.add(dikmeGrubu2);
    //#endregion

    // Kamera pozisyonu
  camera.position.set(-60, 35, 55);
// `controls` ile odak noktası belirleme
  controls.target.set(A/3, H/3, -B/3);
  controls.update();
  
    renderer.render(scene, camera);
    animate();
  });
}
// #endregion🔥

function animate() {
  requestAnimationFrame(animate);
  controls.update();  // Kontrolleri güncelle
  renderer.render(scene, camera);  // Sahneyi render et 
}

init();
// Resize olduğunda ekranın boyutlarını güncelle
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Kamera en-boy oranını güncelle
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Renderer boyutlarını güncelle
    renderer.setSize(width, height);
  });