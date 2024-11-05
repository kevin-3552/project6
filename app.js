//#region DEĞİŞKENLER ATAMA
export let scene, camera, renderer, controls;
let controlFly
let formVisible = true;

// Global değişkenler
export let A, B, H, K;  // En, Boy, Yükseklik değişkenleri
window.YATAYHOLGENİŞLİĞİ; 
window.YATAYHOLSAYISI;
window.YATAYAKSSAYISI; 

//#endregion

//#region IMPORT'lar
// conteiner.js ve buton fonkden al
import { vinçcheckbox, İlkkutu, İLKFORM, hideButton, maliyetgösterfonk} from './container.js'; 
import { üçdbutonabas, CepheKaplamaCons, SolÇatıKaplamacons,vinçkirişicons, vinçkirişkaldir, üçgenOpaklıkAyarlama,
    } from './butonfonk.js';  // 

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

//#endregion Form ve Butonların Sonu

//#region Buton Çağırmalar
İLKFORM()
üçgenOpaklıkAyarlama();

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

//#region Maliyet Hesap ve kutucuk

//#endregion