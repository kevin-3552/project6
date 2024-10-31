//#region DEĞİŞKENLER ATAMA
let scene, camera, renderer, controls;
let kolonGrubu;
let soldiyagonelGrup //
let sağdiyagonelGrup
let zeminesasfonk; //
let makasçoğal
let yankirişcons
let makasiçbracingAltCons
let makasiçibracingTamCons
let ÇaprazYanCons
let ÇatıÇAprazCons 
let totemcons
let CepheKaplamaCons
let controlFly
let SolÇatıKaplamacons

let currentGroundMesh = null;
window.MKSHG=35 // MAKSİMUM HOL GENİŞLİĞİ

// Global değişkenler
let A, B, H, K;  // En, Boy, Yükseklik değişkenleri
window.YATAYHOLGENİŞLİĞİ; 
window.YATAYHOLSAYISI;
window.YATAYAKSSAYISI; 

let createButton; 
//#endregion

//#region IMPORT'lar

// Nesneler
import { YATAYKOLONGRUBU, SOLDİYAGONELGRUBU, SAĞDİYAGONELGRUBU, MakasGrupÇoğalt, YanKiriş_1, MakasİçiAltTamBracing, 
  Bracing_MakasİçiTam, ÇaprazYanKomple, ÇatıÇapraz1MakasGrup, ÇatıÇaprazTam, Totem1,CepheKaplamaSağSol, SolÇatıKaplama,
  MK_UZUNLUK  } from './nesneler.js';  // 

// Hesaplar
import { DİKMEHESAPLA, hesaplaDüşeyAks, hesaplaYatayKolon, ÇATIEĞİMHETKİSİHESAP, MAKASBOYUHESAP, 
  ZEMİNESASEBATHESAP, YanBağKirişHesap , ÇaprazYanHesap, KaplamaSınırHesap, ArkaKaplamaSınır } from './hesapla.js'; 

// Hesapla Const
  import { MKAÇI, YanKirişArası, YanBağKirişAdet, YATAYHOLGENİŞLİĞİ, DÜŞEYHOLSAYISI, DÜŞEYHOLGENİŞLİĞİ ,
  esaszeminA, esaszeminB, MAKAS_YÜKSEKL_HESAPLA, ÇaprazYükseklik} from './hesapla.js';

// Geometriler
import { YatayÇaprazÇap, KOLONEBAT, KOLON_BOX1 , MK_EN, YATAY_MK_GEO_1 } from './geometriler.js';  // 

// Malzemeler
import { ÇimZeminMalzeme1  } from './malzemeler.js';  // 

//#endregion 

// #region FORM - HTML vs İŞLEMLERİ...
// HTML form yapısını tamamen JavaScript ile oluşturma ve sayfaya ekleme
function createFormContainer() {
  const formContainer = document.createElement('div');
  formContainer.id = 'formContainer'; 
  formContainer.style.position = 'absolute';
  formContainer.style.top = '3px';
  formContainer.style.left = '10px';
  formContainer.style.zIndex = '10';  // Formun z-index değeri
  formContainer.style.backgroundColor = 'rgba(240, 240, 240, 0.9)';
  formContainer.style.padding = '5px';
  formContainer.style.border = '1px solid #000';
  formContainer.style.borderRadius = '8px';
  formContainer.style.width = '200px';

  // Formu sayfaya ekleyin
  document.body.appendChild(formContainer);   
  return formContainer;
}

// `createFormContainer` fonksiyonunu çağırın
const formContainer = createFormContainer();


function createCameraIconWithTooltip() {
  // Kamera ikonu oluştur ve doğrudan `body`'ye ekle
  const cameraIcon = document.createElement('img');
  cameraIcon.src = 'textures/cameraicon.png';       // Kamera ikonunun yolunu belirtin
  cameraIcon.style.position = 'fixed';
  cameraIcon.style.top = '170px';                   // Ekranda konumlandırma
  cameraIcon.style.left = '20px';
  cameraIcon.style.width = '24px';
  cameraIcon.style.height = '15px';
  cameraIcon.style.cursor = 'pointer';
  cameraIcon.style.zIndex = '9999';
  cameraIcon.title = "Kamera ayarlarını sıfırlayın"; // Masaüstü için tooltip

  // Mobil cihazlarda dokunulduğunda gösterilecek mesaj kutusu
  const tooltip = document.createElement('div');
  tooltip.innerText = "Kamera ayarlarını sıfırlayın";
  tooltip.style.position = 'fixed';
  tooltip.style.top = '200px';                     // Tooltip'in konumunu ikona göre ayarlayın
  tooltip.style.left = '20px';
  tooltip.style.padding = '5px 10px';
  tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  tooltip.style.color = 'white';
  tooltip.style.borderRadius = '5px';
  tooltip.style.display = 'none';                  // Başlangıçta gizli
  tooltip.style.zIndex = '10000';
  document.body.appendChild(tooltip);

  // Kamera ikonuna tıklama ve dokunma olaylarını ekle
  cameraIcon.addEventListener('click', () => {
    camera.position.set(-60, 35, 55);              // Kamera pozisyonunu ayarla
    controls.target.set(A / 3, H / 3, -B / 3);     // Odak noktasını belirle
    controls.update();
  });

  // Mobil cihazlarda dokunulduğunda tooltip'i göster
  cameraIcon.addEventListener('touchstart', () => {
    tooltip.style.display = 'block';
    setTimeout(() => {
      tooltip.style.display = 'none';
    }, 2000); // Tooltip 2 saniye sonra kaybolur
  });

  // Kamera ikonunu doğrudan body'ye ekle
  document.body.appendChild(cameraIcon);
}

// Fonksiyonu çağırarak kamera ikonu ve tooltip’i oluştur
createCameraIconWithTooltip();



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
  table.appendChild(createRow('En (A):', 'A', '60'));
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

// Mevcut `createFormContainer` fonksiyonunun altına ekleyin
function adjustFormContainerWidth() {
  const formContainer = document.getElementById('formContainer');
  if (formContainer) {
    formContainer.style.width = `${Math.min(window.innerWidth * 0.9, 200)}px`; // Maksimum genişlik 200px
  }
}

// Ekran yeniden boyutlandırıldığında veya yön değiştiğinde genişliği ayarla
window.addEventListener('resize', adjustFormContainerWidth);
window.addEventListener('orientationchange', adjustFormContainerWidth);

// Sayfa yüklendiğinde başlangıçta boyut ayarlaması yap
adjustFormContainerWidth();

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

//#region Işık Ayarları
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

//#region🔥 INIT fonksiyonu & BUTON🔥
function init() {
  // Sahne oluşturma
  scene = new THREE.Scene();

//#region Kamera ayarları
  camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
//#endregion



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
//#endregion
  //#region Çim - Gökyüzü & Zemin Ekleme
  // Çim Zemin ekleme
  function createGround() {
    // Geometri oluşturma
    const groundGeometry = new THREE.PlaneGeometry(300, 200);  // Büyük bir zemin düzlemi
      // Mesh oluşturma ve ayarlama
    const groundMesh = new THREE.Mesh(groundGeometry, ÇimZeminMalzeme1);
    groundMesh.rotation.x = -Math.PI / 2; // Yatay hale getiriyoruz
    groundMesh.position.set(50, -0.2, -50);  // X, Y, Z koordinatları
    const groundGroup = new THREE.Group();  // Zemini bir grup içinde organize ediyoruz
    groundGroup.add(groundMesh);
    scene.add(groundGroup);
    return groundGroup;  // İleride kontrol için zemini geri döndürüyoruz
  }
  const ZeminEkleConst = createGround();

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
  skyMesh.position.y = 500; 
  skyMesh.position.x = 500; 
  skyMesh.position.z = 500; 

  // Gökyüzü küresini sahneye ekleme
  scene.add(skyMesh);
}
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
  groundMesh.position.set(A/2, -0.1,-B/2);  // Pozisyon x=-5, z=5 olacak şekilde ayarlanıyor
  return groundMesh;

}

document.addEventListener('keydown', function(event) {
  // Alt + M tuş kombinasyonunu kontrol edin
  if (event.altKey && (event.key === 'm' || event.key === 'M')) {
      document.getElementById('createCube').click();
  }
});
//#endregion
  //#region🔥🔥🔥🔥🔥🔥 BUTONA BASINCA OLACAKLAR   🔥🔥🔥🔥🔥🔥🔥🔥
  document.getElementById('createCube').addEventListener('click', () => {
    // Önceki kolon grubunu temizleyelim
    if (kolonGrubu) {scene.remove(kolonGrubu);}
    if (soldiyagonelGrup) {scene.remove(soldiyagonelGrup);}
    if (sağdiyagonelGrup) {scene.remove(sağdiyagonelGrup);}
    if (zeminesasfonk) { scene.remove(zeminesasfonk); }
    if (currentGroundMesh) {scene.remove(currentGroundMesh);}  // Önceki zemini sahneden kaldırıyoruz
    if (makasçoğal) { scene.remove(makasçoğal);}
    if (yankirişcons) { scene.remove(yankirişcons);}
    if (makasiçibracingTamCons) { scene.remove(makasiçibracingTamCons);}
    if (ÇaprazYanCons) { scene.remove(ÇaprazYanCons);}
    if (ÇatıÇAprazCons) { scene.remove(ÇatıÇAprazCons);}
    if (totemcons) { scene.remove(totemcons);}
    if (CepheKaplamaCons) { scene.remove(CepheKaplamaCons);}
    if (SolÇatıKaplamacons) { scene.remove(SolÇatıKaplamacons);}


       
    // A, B, H değerlerini inputlardan alalım  - BUTON HESAP !!!!!!!!!!!!!!!!!!!!!
    A = parseFloat(document.getElementById('A').value);   // En (A)
    B = parseFloat(document.getElementById('B').value);   // Boy (B)
    H = parseFloat(document.getElementById('H').value);   // Yükseklik (H)
    K = parseFloat(document.getElementById('K').value);   // Aks Arası (K)

    hesaplaDüşeyAks(B, K); 
    hesaplaYatayKolon(A); 
    MAKAS_YÜKSEKL_HESAPLA(YATAYHOLGENİŞLİĞİ, H)
    ÇATIEĞİMHETKİSİHESAP(H, YATAYHOLGENİŞLİĞİ, MKAÇI);
    MAKASBOYUHESAP()
    ZEMİNESASEBATHESAP(A,B)
    DİKMEHESAPLA(H)
    YanBağKirişHesap(H)
    ÇaprazYanHesap() 
    YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ, MK_UZUNLUK)
    KaplamaSınırHesap ()
        console.log("ArkaKaplamaSınır - app içi ",ArkaKaplamaSınır )

    /*KOLON_BOX1(H)*/
    console.log("KOLONEBAT değeri:", KOLONEBAT); // Değeri kontrol ediyoruz
    
    kolonGrubu = YATAYKOLONGRUBU(H);  // Kolon grubu oluşturuluyor
    soldiyagonelGrup = SOLDİYAGONELGRUBU(H);
    sağdiyagonelGrup = SAĞDİYAGONELGRUBU(H);
    makasçoğal = MakasGrupÇoğalt(H);
    zeminesasfonk =ZEMİNESAS();
    yankirişcons = YanKiriş_1(H, A);
    makasiçibracingTamCons =  Bracing_MakasİçiTam(H)
    ÇaprazYanCons = ÇaprazYanKomple(H)
    ÇatıÇAprazCons = ÇatıÇaprazTam(H)
    totemcons= Totem1(H)
    CepheKaplamaCons = CepheKaplamaSağSol(B, H, A)
    SolÇatıKaplamacons = SolÇatıKaplama(H, B,)
    
    scene.add(kolonGrubu);  // KOLON1 ile oluşturulan kolonları sahneye ekle
    scene.add(soldiyagonelGrup);  // Sahneye ekle
    scene.add(sağdiyagonelGrup);  // Sahneye ekle
    const zemin = ZEMİNESAS();  // ZEMİNESAS fonksiyonunu çağırıyoruz
    scene.add(zemin);  // Zemin sahneye ekleniyor
    currentGroundMesh = zemin;
    scene.add(makasçoğal);
    scene.add(yankirişcons);
    scene.add(makasiçibracingTamCons);
    scene.add(ÇaprazYanCons);
    scene.add(ÇatıÇAprazCons);
    scene.add(totemcons)
    scene.add(CepheKaplamaCons)
    scene.add(SolÇatıKaplamacons)


//
    // Kamera pozisyonu
  camera.position.set(-60, 35, 55);
// `controls` ile odak noktası belirleme
  controls.target.set(A/3, H/3, -B/3);

  // FlyControls başlatma ve ayar yapma
  controlFly = new THREE.FlyControls(camera, renderer.domElement);
  controlFly.movementSpeed = 2.0;
  controlFly.rollSpeed = 0.02;
  controlFly.dragToLook = true;
  controlFly.autoForward = false;


  controls.update();
  
    renderer.render(scene, camera);
    animate();
  });
}
// #endregion🔥

//#region animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();  // Kontrolleri güncelle
  if (controlFly) controlFly.update(0.1); // Delta zamanı geçin

  renderer.render(scene, camera);  // Sahneyi render et 
}
//#endregion

//#region init
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

// #region Üçgen ve kaydırma çubuğu için HTML elemanlarını oluşturma
// Üçgen ve kaydırma çubuğu için ana wrapper oluşturma
const triangleWrapper = document.createElement("div");
triangleWrapper.style.position = "absolute";
triangleWrapper.style.top = "20px"; // Formun sağ tarafına hizalayın
triangleWrapper.style.left = "250px"; // Formdan biraz boşluk bırakın
triangleWrapper.style.display = "flex";
triangleWrapper.style.flexDirection = "column";
triangleWrapper.style.alignItems = "center";

// Opaklık yazısı ekleme
const opacityLabel = document.createElement("span");
opacityLabel.textContent = "Opaklık";
opacityLabel.style.fontSize = "14px";
opacityLabel.style.color = "black";
opacityLabel.style.marginBottom = "5px";
triangleWrapper.appendChild(opacityLabel);

// Üçgen şekli oluşturma (sabit kalacak)
const opacityTriangle = document.createElement("div");
opacityTriangle.style.width = "0";
opacityTriangle.style.height = "0";
opacityTriangle.style.borderTop = "7px solid transparent";
opacityTriangle.style.borderBottom = "7px solid transparent";
opacityTriangle.style.borderLeft = "80px solid rgba(0, 0, 0, 0.5)";
triangleWrapper.appendChild(opacityTriangle);

// İşaretçi olarak hareket edecek dikdörtgen oluşturma
const sliderHandle = document.createElement("div");
sliderHandle.style.position = "absolute";
sliderHandle.style.width = "10px";
sliderHandle.style.height = "20px";
sliderHandle.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Yarı saydam siyah
sliderHandle.style.cursor = "pointer";
sliderHandle.style.top = "18px"; // Üçgenin üzerine hizalamak için
sliderHandle.style.left = "10px"; // Başlangıç konumu
triangleWrapper.appendChild(sliderHandle);

// Elemanları DOM'a ekleme
document.body.appendChild(triangleWrapper);

let isDragging = false;

// Masaüstü için sürükleme başlatma
sliderHandle.addEventListener("mousedown", function() {
  isDragging = true;
});

// Mobil için sürükleme başlatma
sliderHandle.addEventListener("touchstart", function() {
  isDragging = true;
});

// Sürükleme bitirme olayları
document.addEventListener("mouseup", function() {
  isDragging = false;
});

document.addEventListener("touchend", function() {
  isDragging = false;
});

// Sürükleme esnasında işaretçiyi hareket ettirme (Masaüstü ve Mobil)
function moveSlider(event) {
  if (isDragging) {
    const minLeft = 0;
    const maxLeft = 70;

    // Mouse veya touch konumunu alın
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    let newLeft = clientX - triangleWrapper.offsetLeft;
    newLeft = Math.max(minLeft, Math.min(maxLeft, newLeft));

    sliderHandle.style.left = `${newLeft}px`;

    /*const opacityValue = 0.4 + ((newLeft - minLeft) / (maxLeft - minLeft)) * (1 - 0.2); */
    const opacityValue = 1 - ((newLeft - minLeft) / (maxLeft - minLeft)) * (1 - 0.1);

    /*SolÇatıKaplamacons*/

    if (typeof CepheKaplamaCons !== "undefined") {
      CepheKaplamaCons.children.forEach(mesh => {
        if (mesh.material) {
          mesh.material.opacity = opacityValue;
          mesh.material.needsUpdate = true;
        }
      });
    }
    
    if (typeof SolÇatıKaplamacons !== "undefined") {
      SolÇatıKaplamacons.children.forEach(mesh => {
        if (mesh.material) {
          mesh.material.opacity = opacityValue;
          mesh.material.needsUpdate = true;
        }
      });
    }
      }
}

// Masaüstü için sürükleme hareketini algıla
document.addEventListener("mousemove", moveSlider);

// Mobil için sürükleme hareketini algıla
document.addEventListener("touchmove", moveSlider);

// #endregion

