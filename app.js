//#region DEĞİŞKENLER ATAMA
export let scene, camera, renderer, controls;
let controlFly
let hideButton
let İlkkutu
let formVisible = true;
export let vinçcheckbox 

// Global değişkenler
export let A, B, H, K;  // En, Boy, Yükseklik değişkenleri
window.YATAYHOLGENİŞLİĞİ; 
window.YATAYHOLSAYISI;
window.YATAYAKSSAYISI; 

//#endregion

//#region IMPORT'lar
// Nesneler
import { YATAYKOLONGRUBU, SOLDİYAGONELGRUBU, SAĞDİYAGONELGRUBU, MakasGrupÇoğalt, YanKiriş_1, MakasİçiAltTamBracing, 
  Bracing_MakasİçiTam, ÇaprazYanKomple, ÇatıÇapraz1MakasGrup, ÇatıÇaprazTam, Totem1,CepheKaplamaSağSol, SolÇatıKaplama,
  MK_UZUNLUK, ZEMİNESAS, VinçKirişi, VincKancasi, loadedFont} from './nesneler.js';  // 

// Hesaplar
import { DİKMEHESAPLA, hesaplaDüşeyAks, hesaplaYatayKolon, ÇATIEĞİMHETKİSİHESAP, MAKASBOYUHESAP, 
  ZEMİNESASEBATHESAP, YanBağKirişHesap , ÇaprazYanHesap, KaplamaSınırHesap, ArkaKaplamaSınır } from './hesapla.js'; 

// Hesapla Const
  import { MKAÇI, YanKirişArası, YanBağKirişAdet, YATAYHOLGENİŞLİĞİ, DÜŞEYHOLSAYISI, DÜŞEYHOLGENİŞLİĞİ ,
   MAKAS_YÜKSEKL_HESAPLA, ÇaprazYükseklik} from './hesapla.js';

// Geometriler
import { YatayÇaprazÇap, KOLONEBAT, KOLON_BOX1 , MK_EN, YATAY_MK_GEO_1 } from './geometriler.js';  // 

// Malzemeler
import { ÇimZeminMalzeme1  } from './malzemeler.js';  // 

// Maliyetler Import
import { ÇelikTonajı , ÇelikTonaj,  MlytToplamÇlk, MlytToplamÇlkTL, dolarKuru} from './maliyet.js';  // 

// BUTON Import
import { üçdbutonabas, CepheKaplamaCons, SolÇatıKaplamacons,vinçkirişicons, vinçkirişkaldir, üçgenOpaklıkAyarlama,
  maliyetgösterfonk
 } from './butonfonk.js';  // 

//#endregion Form ve Butonların Sonu

//#region Formlar
function İLKFORM() {
   // Eğer form daha önce oluşturulduysa, eski formu kaldır
   /*if (İlkkutu) {
    İlkkutu.remove();
  }*/

  // Form Container oluşturma
  İlkkutu = document.createElement('div');
  İlkkutu.id = 'formContainer';
  İlkkutu.style.position = 'absolute';
  İlkkutu.style.top = '3px';
  İlkkutu.style.left = '10px';
  İlkkutu.style.zIndex = '10';
  İlkkutu.style.backgroundColor = 'rgba(240, 240, 240, 0.9)';
  İlkkutu.style.padding = '5px';
  İlkkutu.style.border = '1px solid #000';
  İlkkutu.style.borderRadius = '8px';
  İlkkutu.style.width = '200px';

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
  table.appendChild(createRow('En (A):', 'A', '60'));
  table.appendChild(createRow('Boy (B):', 'B', '50'));
  table.appendChild(createRow('Yükseklik (H):', 'H', '6'));
  table.appendChild(createRow('Aks Arası:', 'K', '6'));

  // Tabloyu İlkkutu içine ekleme
  İlkkutu.appendChild(table);

  // Vinç seçeneğini ekleme (sol alt köşe)
  const vinçcheckboxkutu = document.createElement('div');
  vinçcheckboxkutu.style.display = 'flex';
  vinçcheckboxkutu.style.alignItems = 'center';
  vinçcheckboxkutu.style.marginTop = '3px';

  vinçcheckbox = document.createElement('input');
  vinçcheckbox.type = 'checkbox';
  vinçcheckbox.id = 'craneCheckbox';
  vinçcheckbox.checked = true; // Checkbox'u varsayılan olarak işaretli yapar

  
  vinçcheckbox.style.marginRight = '5px';
  vinçcheckbox.style.marginBottom = '2px';

  const vinçcheckboxLabel = document.createElement('label');
  vinçcheckboxLabel.textContent = 'Vinç Yolu';
  vinçcheckboxLabel.style.fontSize = '12px';
  vinçcheckboxLabel.style.marginBottom = '1px'
  vinçcheckboxLabel.htmlFor = 'craneCheckbox';

  vinçcheckboxkutu.appendChild(vinçcheckbox );
  vinçcheckboxkutu.appendChild(vinçcheckboxLabel );
  İlkkutu.appendChild(vinçcheckboxkutu);
  

  // 3D BİNA MODELLE butonunu ekleme
  const createButton = document.createElement('button');
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
  İlkkutu.appendChild(createButton);

  // İlkkutu'ı body içine ekleme
  document.body.appendChild(İlkkutu);

  // Hide/Show butonunu ekleme
  hideButton = document.createElement('img');
  hideButton.src = 'textures/hide.png'; // Buton ikonu
  hideButton.alt = 'Show/Hide Form';
  hideButton.style.position = 'absolute';
  hideButton.style.top = '5px';
  hideButton.style.left = '220px'; // Formun yanında konumlandırma
  hideButton.style.width = '24px';
  hideButton.style.height = '24px';
  hideButton.style.cursor = 'pointer';
  hideButton.style.zIndex = '15';
  document.body.appendChild(hideButton);
}
//#endregion İLK FORM SONU
İLKFORM()
üçgenOpaklıkAyarlama();

//#region Buton Çağırmalar

// Hide/Show işlevselliğini ekleme
hideButton.addEventListener('click', () => {
  formVisible = !formVisible;
  İlkkutu.style.display = formVisible ? 'block' : 'none';
});

vinçkirişkaldir();
İlkkutuAdjustfonk();  // sayfa yüklendiğinde en boy ayarı

// Form Hizalama Fonksion
function İlkkutuAdjustfonk() {
  const İlkkutu = document.getElementById('İlkkutu');
  if (İlkkutu) {
    İlkkutu.style.width = `${Math.min(window.innerWidth * 0.9, 200)}px`; // Maksimum genişlik 200px
  }
}

// Ekran Resize En Boy ayarla
window.addEventListener('resize', İlkkutuAdjustfonk);
window.addEventListener('orientationchange', İlkkutuAdjustfonk);

// Fonksiyon çağırmalar 

//#endregion



//#region Işık Ayarları
function addDirectionalLight() { // Yönlü ışık ekleme fonksiyonu

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);
}
function addAmbientLight() { // Ambient light ekleme fonksiyonu

  const ambientLight = new THREE.AmbientLight(0x404040, 1); // Yumuşak aydınlatma
  scene.add(ambientLight);
}
//#endregion

//#region ÇİM & GÖKYÜZÜ Fonksiyonları
function createGround() { // Çim Zemin ekleme
  const groundGeometry = new THREE.PlaneGeometry(300, 200);  // 
  const groundMesh = new THREE.Mesh(groundGeometry, ÇimZeminMalzeme1);
  groundMesh.rotation.x = -Math.PI / 2; // Yatay hale getiriyoruz
  groundMesh.position.set(50, -0.2, -50);  // X, Y, Z koordinatları
  const groundGroup = new THREE.Group();  // Zemini bir grup içinde organize ediyoruz
  groundGroup.add(groundMesh);
  scene.add(groundGroup);
  return groundGroup;} // İleride kontrol için zemini geri döndürüyoruz

  function gökyüzüfonksiyon(scene) {
    const textureLoader = new THREE.TextureLoader();
    const skyTexture = textureLoader.load('textures/sky.png');
    
    const skyGeometry = new THREE.SphereGeometry(1000, 60, 40); // Büyük bir küre, gökyüzü etkisi için
    const skyMaterial = new THREE.MeshBasicMaterial({
        map: skyTexture,
        side: THREE.BackSide // Kürenin iç yüzeyi görünsün
    });
    
    const skyMesh = new THREE.Mesh(skyGeometry, skyMaterial);
    skyMesh.position.y = 500; 
    skyMesh.position.x = 500; 
    skyMesh.position.z = 500; 
  
    scene.add(skyMesh);     // Gökyüzü küresini sahneye ekleme

  }
//#endregion

//#region🔥 INIT fonksiyonu
function init() {
  // Sahne & Kamera & REndere
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer(); // renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement); // // OrbitControls 
  controls.enableZoom = true;
  addDirectionalLight();    // Işıkları ekleme
  addAmbientLight();
  const ZeminEkleConst = createGround();
  gökyüzüfonksiyon(scene); // Gökyüzü küresi ekleme
animate();
}
//#endregion

//#region Butonlar: 3D Modelle Butonu EventListener
document.addEventListener('DOMContentLoaded', () => {
  const createCubeButton = document.getElementById('createCube');
  if (createCubeButton) {
    console.log("createCube butonu bulundu ve event listener eklendi."); // Bu mesaj DOM yüklendiğinde bir kez görünmeli
    createCubeButton.addEventListener('click', () => {
      console.log("createCube butonuna tıklanıldı.");
      üçdbutonabas(A, B, K,H); // Butona tıklandığında Üçdbutonhandler çalışır
    });
  } else {
    console.log("createCube butonu bulunamadı.");
  }
});
document.addEventListener('keydown', function(event) { // Alt + M kısayolu
  if (event.altKey && (event.key === 'm' || event.key === 'M')) {
      document.getElementById('createCube').click();
  }
});

//#endregion

//#region İLK SAYFA AÇILIŞ MODEL GÖSTER

window.addEventListener('DOMContentLoaded', () => {
  // Varsayılan değerleri inputlardan alarak A, B, H ve K'ya atıyoruz
  const A = parseFloat(document.getElementById('A').value);
  const B = parseFloat(document.getElementById('B').value);
  const H = parseFloat(document.getElementById('H').value);
  const K = parseFloat(document.getElementById('K').value);

  // Varsayılan değerlere göre modeli oluştur
  if (document.getElementById('createCube')) {
      document.getElementById('createCube').click(); // Modelleme butonuna tıklayarak modeli otomatik oluşturuyoruz
  }
});
//#endregion

//#region animate Fonksiyonu Tanımlama
function animate() {
  requestAnimationFrame(animate);
  controls.update();  // Kontrolleri güncelle
  if (controlFly) controlFly.update(0.1); // Delta zamanı geçin

  renderer.render(scene, camera);  // Sahneyi render et 
}
//#endregion

//#region Init Çağırma ve Resize
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
  //#endregion

// #endregion

//#region Maliyet Hesap ve kutucuk

// Gösterilecek alanları tanımlayın ve stil özelliklerini ayarlayın
export function createCostDisplay() {
  const costDisplayContainer = document.createElement('div');
  costDisplayContainer.id = 'costDisplayContainer';
  costDisplayContainer.style.position = 'absolute';
  costDisplayContainer.style.bottom = '10px';
  costDisplayContainer.style.left = '20px';
  costDisplayContainer.style.width = '200px';
  costDisplayContainer.style.zIndex = '20';
  costDisplayContainer.style.color = 'yellow';

  const tonajElement = document.createElement('div');
  tonajElement.id = 'tonajContainer';
  tonajElement.innerHTML = `<div id="celikTonaj">Çelik Tonaj: </div>`;

  const maliyetElement = document.createElement('div');
  maliyetElement.id = 'maliyetContainer';
  maliyetElement.innerHTML = `<div id="maliyetCelik">Maliyet: </div>`;

  costDisplayContainer.appendChild(tonajElement);
  costDisplayContainer.appendChild(maliyetElement);
  document.body.appendChild(costDisplayContainer);
}

// Sayfa yüklendiğinde göstergeleri oluştur
createCostDisplay();

export function checkDolarKuruReady(callback) {
  if (dolarKuru) {
      callback();
  } else {
      setTimeout(() => checkDolarKuruReady(callback), 100); // 100 ms sonra tekrar kontrol et
  }
}
//#endregion