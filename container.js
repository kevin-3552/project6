export let vinçcheckbox 
export let İlkkutu
export let hideButton

import {} from './app.js'
import { ÇelikTonajı , dolarKuru, checkDolarKuruReady} from './maliyet.js';  // 
import translations from './translations.js';
import { currentLanguage } from './app.js'; // Mevcut dili içe aktar
import { applyTranslations } from './translations.js'; // Mevcut dili içe aktar

//#region 3D Model İlk Form container

export function İLKFORM() {
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
    if (window.innerWidth < 768) { // Mobil cihazlar için
        İlkkutu.style.width = '170px';
    } else { // PC veya daha geniş ekranlar için
        İlkkutu.style.width = '200px';
    }
    
    // Tablo elemanlarını oluşturma
    const table = document.createElement('table');
    table.style.width = '100%';

    function createRow(labelKey, inputId, defaultValue) {
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        labelCell.style.padding = '5px';
        labelCell.style.textAlign = 'right';
        labelCell.setAttribute('data-label', labelKey);

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
    table.appendChild(createRow('enLabel', 'A', '60'));
    table.appendChild(createRow('boyLabel', 'B', '50'));
    table.appendChild(createRow('yukseklikLabel', 'H', '6'));
    table.appendChild(createRow('aksArasiLabel', 'K', '6'));
    İlkkutu.appendChild(table);

    // Vinç seçeneğini ekleme
    const vinçcheckboxkutu = document.createElement('div');
    vinçcheckboxkutu.style.display = 'flex';
    vinçcheckboxkutu.style.alignItems = 'center';
    vinçcheckboxkutu.style.marginTop = '3px';

    vinçcheckbox = document.createElement('input');
    vinçcheckbox.type = 'checkbox';
    vinçcheckbox.id = 'craneCheckbox';
    vinçcheckbox.checked = true;

    const vinçcheckboxLabel = document.createElement('label');
    vinçcheckboxLabel.setAttribute('data-label', 'craneCheckboxLabel');
    vinçcheckboxkutu.appendChild(vinçcheckbox);
    vinçcheckboxkutu.appendChild(vinçcheckboxLabel);
    İlkkutu.appendChild(vinçcheckboxkutu);

    // 3D Bina Modelle Butonu
    const createButton = document.createElement('button');
    createButton.id = 'createCube';
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

    // Hide/Show Buton
    hideButton = document.createElement('img');
    hideButton.id = 'hideButton';
    hideButton.src = 'textures/hide.png';
    hideButton.style.position = 'absolute';
    hideButton.style.top = '5px';
    hideButton.style.width = '24px';
    hideButton.style.height = '24px';
    hideButton.style.cursor = 'pointer';

    if (window.innerWidth < 768) { // Mobil cihazlar için
        hideButton.style.left = '200px';
    } else { // PC veya daha geniş ekranlar için
        hideButton.style.left = '220px';
    }
    document.body.appendChild(hideButton);




    applyTranslations(currentLanguage);
}
  
//#endregion 

//#region Maliyet Ctr
export function maliyetgösterfonk(A, B, H) {
    // Önceden var olan maliyetContainer ve toggleIcon öğelerini kaldır
    const existingContainer = document.getElementById('maliyetContainer');
    const existingToggleIcon = document.getElementById('toggleIcon');
    if (existingContainer) {
        existingContainer.remove();
    }
    if (existingToggleIcon) {
        existingToggleIcon.remove();
    }

  checkDolarKuruReady(() => {
    
      const { ÇelikTonaj, MlytToplamÇlk, MlytToplamÇlkTL } = ÇelikTonajı(A, B, H);

      // Formatlanmış maliyet ve tonaj değerleri
      const formattedTonaj = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 0 }).format(ÇelikTonaj);
      const formattedMaliyet = new Intl.NumberFormat('tr-TR').format(MlytToplamÇlk);
      const formattedMaliyetTL = new Intl.NumberFormat('tr-TR').format(MlytToplamÇlkTL);
      const formattedDolarKuru = dolarKuru.toFixed(2);

// Maliyet container oluştur
const maliyetContainer = document.createElement('div');
maliyetContainer.id = 'maliyetContainer';
maliyetContainer.style.position = 'fixed';
maliyetContainer.style.right = '10px';
maliyetContainer.style.bottom = '10px';
maliyetContainer.style.zIndex = '10';
maliyetContainer.style.backgroundColor = 'rgba(240, 240, 240, 0.9)';
maliyetContainer.style.padding = '10px';
maliyetContainer.style.border = '1px solid #000';
maliyetContainer.style.borderRadius = '8px';
const maliyetcontgenişlik = '220px';
maliyetContainer.style.width = maliyetcontgenişlik;
maliyetContainer.style.transition = 'height 0.3s ease, opacity 0.3s ease';
maliyetContainer.style.overflow = 'hidden';

// WhatsApp logosu ekle
const whatsappLogo = document.createElement('img');
whatsappLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'; // Şeffaf arka planlı WhatsApp ikonu
whatsappLogo.alt = 'WhatsApp';
whatsappLogo.style.position = 'fixed';
whatsappLogo.style.right = '10px';
whatsappLogo.style.bottom = '70px'; // Maliyet container'in hemen üstü
whatsappLogo.style.width = '40px';
whatsappLogo.style.height = '40px';
whatsappLogo.style.cursor = 'pointer';
whatsappLogo.style.zIndex = '11'; // Üstte görünmesi için

// WhatsApp linkine yönlendirme
whatsappLogo.addEventListener('click', () => {
  window.open('https://wa.me/905077908002', '_blank');
});

// Sayfaya ekleme
document.body.appendChild(maliyetContainer);
document.body.appendChild(whatsappLogo);

      // İçerik container (contentContainer) oluştur
      const contentContainer = document.createElement('div');

      // Tonaj bilgisini ekle
      const tonajDiv = document.createElement('div');
      tonajDiv.style.marginBottom = '10px';
      tonajDiv.textContent = `Metal Yapı: ${formattedTonaj} ton`;
      contentContainer.appendChild(tonajDiv);

      // TL maliyet bilgisini ekle
      const maliyetTLDiv = document.createElement('div');
      maliyetTLDiv.style.marginBottom = '5px';
      maliyetTLDiv.textContent = `Maliyet: ${formattedMaliyetTL} ₺`;
      contentContainer.appendChild(maliyetTLDiv);

      // USD maliyet ve dolar kuru bilgisini ekle
      const maliyetUsdDiv = document.createElement('div');
      maliyetUsdDiv.textContent = `${formattedMaliyet} $ (1 $ = ${formattedDolarKuru} ₺)`;
      contentContainer.appendChild(maliyetUsdDiv);

      maliyetContainer.appendChild(contentContainer);

      // İkon oluştur ve `maliyetContainer` dışında ekle
      const toggleIcon = document.createElement('div');
      toggleIcon.id = 'toggleIcon'; // ID ekliyoruz
      toggleIcon.textContent = '▶'; // Katlanır simge olarak ok kullanıyoruz
      toggleIcon.style.cursor = 'pointer';
      toggleIcon.style.position = 'fixed';
      toggleIcon.style.color= 'yellow';
      toggleIcon.style.bottom = '32px'; // `maliyetContainer`'in hemen üstünde konumlandır
      const gizlebutonkenar =  `250px`
      toggleIcon.style.right = gizlebutonkenar;
      console.log("gizle sağ", toggleIcon.style.right)
      toggleIcon.style.fontSize = '20px';
      toggleIcon.style.zIndex = '20'; // Üstte kalması için daha yüksek bir z-index veriyoruz

      document.body.appendChild(toggleIcon); // İkonu doğrudan `body` içine ekle

      // Göster/Gizle işlevi
      let isHidden = false;
      toggleIcon.addEventListener('click', () => {
          isHidden = !isHidden;
          if (isHidden) {
              maliyetContainer.style.height = '0px';
              maliyetContainer.style.opacity = '0';
              toggleIcon.style.opacity = '0.8';
              toggleIcon.textContent = '◀'; // İkonu değiştir
          } else {
              maliyetContainer.style.height = 'auto';
              maliyetContainer.style.opacity = '1';
              toggleIcon.textContent = '▶';
          }
      });

      // `appContainer` öğesi yoksa doğrudan `body` içine ekle
      if (!document.getElementById('appContainer')) {
          document.body.appendChild(maliyetContainer);
      } else {
          const appContainer = document.getElementById('appContainer');
          appContainer.innerHTML = ''; // Önceki içeriği temizle
          appContainer.appendChild(maliyetContainer);
      }
  });
}
//#endregion


