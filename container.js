export let vinçcheckbox 
export let İlkkutu
export let hideButton

import {} from './app.js'
import { ÇelikTonajı , dolarKuru, checkDolarKuruReady} from './maliyet.js';  // 


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
  
//#endregion 

export function maliyetgösterfonk(A, B, H) {
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
maliyetContainer.style.position = 'absolute';
maliyetContainer.style.right = '10px'; // Sağdan 10px boşluk bırak
maliyetContainer.style.bottom = '10px'; // Alttan 10px boşluk bırak
maliyetContainer.style.zIndex = '10';
maliyetContainer.style.backgroundColor = 'rgba(240, 240, 240, 0.9)';
maliyetContainer.style.padding = '10px';
maliyetContainer.style.border = '1px solid #000';
maliyetContainer.style.borderRadius = '8px';
maliyetContainer.style.width = '220px';

      // Tonaj bilgisini ekle
      const tonajDiv = document.createElement('div');
      tonajDiv.style.marginBottom = '10px';
      tonajDiv.textContent = `Metal Yapı: ${formattedTonaj} ton`;
      maliyetContainer.appendChild(tonajDiv);

      // TL maliyet bilgisini ekle
      const maliyetTLDiv = document.createElement('div');
      maliyetTLDiv.style.marginBottom = '5px';
      maliyetTLDiv.textContent = `Maliyet: ${formattedMaliyetTL} ₺`;
      maliyetContainer.appendChild(maliyetTLDiv);

      // USD maliyet ve dolar kuru bilgisini ekle
      const maliyetUsdDiv = document.createElement('div');
      maliyetUsdDiv.textContent = `${formattedMaliyet} $ (1 $ = ${formattedDolarKuru} ₺)`;
      maliyetContainer.appendChild(maliyetUsdDiv);

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

