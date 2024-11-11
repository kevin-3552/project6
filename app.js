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

// #region Firebase kodlar
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


// Firebase yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyDeY9rlshOm3PlvRP3AjDRSIOZ-jUFBGUk",
  authDomain: "kevin-project35.firebaseapp.com",
  projectId: "kevin-project35",
  storageBucket: "kevin-project35.firebasestorage.app",
  messagingSenderId: "387220126426",
  appId: "1:387220126426:web:8b22803b31b2fca38fc3e3",
  measurementId: "G-2BQKX8Y2T1"
};
// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



// #endregion 


// Giriş ve Kayıt Formlarını Oluşturma
function createAuthForm() {
  const authContainer = document.createElement('div');
  authContainer.id = 'auth-container';

  const formTitle = document.createElement('h2');
  formTitle.textContent = 'Kullanıcı Giriş ve Kayıt';
  authContainer.appendChild(formTitle);

  // E-posta Input
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'E-posta';
  authContainer.appendChild(emailInput);

  // Şifre Input
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.placeholder = 'Şifre';
  authContainer.appendChild(passwordInput);

  // Kayıt Ol Butonu
  const signupButton = document.createElement('button');
  signupButton.id = 'signup';
  signupButton.textContent = 'Kayıt Ol';
  authContainer.appendChild(signupButton);

  // Giriş Yap Butonu
  const loginButton = document.createElement('button');
  loginButton.id = 'login';
  loginButton.textContent = 'Giriş Yap';
  authContainer.appendChild(loginButton);

  // Çıkış Yap Butonu
  const logoutButton = document.createElement('button');
  logoutButton.id = 'logout';
  logoutButton.textContent = 'Çıkış Yap';
  logoutButton.style.display = 'none';
  authContainer.appendChild(logoutButton);

  // Stil ekleyerek ekranın ortasına alıyoruz
  authContainer.style.position = 'fixed';
  authContainer.style.top = '50%';
  authContainer.style.left = '50%';
  authContainer.style.transform = 'translate(-50%, -50%)';
  authContainer.style.background = '#ffffff';
  authContainer.style.padding = '20px';
  authContainer.style.borderRadius = '8px';
  authContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  authContainer.style.zIndex = '1000'; // Diğer içeriklerin üstünde kalır

  document.body.appendChild(authContainer);
}

// Sayfa Yüklendiğinde Formu Oluştur
document.addEventListener('DOMContentLoaded', createAuthForm);


import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase Authentication Başlat

// Kayıt İşlemi
document.addEventListener('click', (event) => {
  if (event.target.id === 'signup') {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Kayıt başarılı:', userCredential.user);
        alert('Kayıt başarılı!');
      })
      .catch(error => {
        console.error('Kayıt hatası:', error.message);
        alert('Kayıt hatası: ' + error.message);
      });
  }
});

// Giriş İşlemi
document.addEventListener('click', (event) => {
  if (event.target.id === 'login') {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Giriş başarılı:', userCredential.user);
        alert('Giriş başarılı!');
        document.getElementById('logout').style.display = 'block';
      })
      .catch(error => {
        console.error('Giriş hatası:', error.message);
        alert('Giriş hatası: ' + error.message);
      });
  }
});

// Çıkış İşlemi
document.addEventListener('click', (event) => {
  if (event.target.id === 'logout') {
    signOut(auth)
      .then(() => {
        console.log('Çıkış başarılı.');
        alert('Çıkış başarılı!');
        document.getElementById('logout').style.display = 'none';
      })
      .catch(error => {
        console.error('Çıkış hatası:', error.message);
      });
  }
});


document.getElementById('saveProjectButton').addEventListener('click', () => {
  const projectName = document.getElementById('projectName').value;
  const A = parseFloat(document.getElementById('A').value);
  const B = parseFloat(document.getElementById('B').value);
  const H = parseFloat(document.getElementById('H').value);
  const K = parseFloat(document.getElementById('K').value);
  const hasCrane = document.getElementById('craneCheckbox').checked;

  saveProject(projectName, A, B, H, K, hasCrane);
});


async function saveProject(projectName, A, B, H, K, hasCrane) {
  try {

const user = auth.currentUser;
if (user) {
  console.log("Oturum açan kullanıcı UID:", user.uid);
} else {
  console.log("Kullanıcı oturumu açmamış.");
}
        const projectData = {
      projectName,
      dimensions: { A, B, H, K },
      hasCrane, // Vinç durumu (true/false)
      userId: user.uid, // Kullanıcı ID'si
      createdAt: new Date().toISOString(), // Projenin oluşturulma tarihi
    };
  
    await addDoc(collection(db, 'projects'), projectData);
    alert(`Proje "${projectName}" başarıyla kaydedildi!`);
  } catch (error) {
    /*console.error("Proje kaydedilemedi: ", error);*/
    alert("Proje kaydedilemedi: " + error.message);
  }
}



//#region Kullanıcı girişi kontrol
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Kullanıcı giriş yapmış
    showLoggedInView(user);
  } else {
    // Kullanıcı giriş yapmamış
    showLoggedOutView();
  }
});
//#endregion
