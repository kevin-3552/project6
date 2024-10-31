// Sabit bir dolar kuru API'den alınacak
let dolarKuru = 1;

// Dolar kurunu API'den al
fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        dolarKuru = data.rates.TRY;
        console.log('Güncel Dolar Kuru:', dolarKuru);
    })
    .catch(error => {
        console.error('Dolar kuru alınırken hata oluştu:', error);
    });

// Maliyet hesaplama fonksiyonları
function hesaplaMaliyet(A, B, H, D) {

    // ara kat tonajı
    AKT = D*50

    // Bina yaklaşık çelik tonajı (BYÇT)
    
    let ÇAKT;
    if (H <= 6) {
        ÇAKT = 60;
    } else if (H > 6 && H <= 12) {
        ÇAKT = 60 + 5 * (H-6);
    } else {
        ÇAKT = 90 + 4 * (H-6);
    }

    const BYÇT = (A * B * ÇAKT) +AKT; // kg

    const YÇM = BYÇT * 2; // Çelik maliyeti ($)

    // Bina toplam cephe alanı (CA)
    const CA = (A * 2 + B * 2) * H;

    // Bina toplam çatı alanı (TÇA)
    const TÇA = A * B;

    // Toplam kaplama alanı (TKA)
    const TKA = CA + TÇA;

    // Toplam kaplama maliyeti (TKM)
    const TKM = TKA * 20; // $/m²

     // ARA KAT SAHA BETONU
     AKSB = D*0.12

    // Toplam saha betonu alanı (SBA)
    const SBA = ((A + 2) * (B + 2) );
   

      // Yaklaşık saha betonu hacmi (YSBH)
    const YSBH = SBA * 0.2 + AKSB; // m³

    // Yaklaşık saha betonu maliyeti (YSBM)
    const YSBM = YSBH * 180; // $/m³

    // Toplam yaklaşık kaba yapı maliyeti (TYKMD) DOLAR
    const TYKMD = YÇM + TKM + YSBM; // Dolar cinsinden toplam maliyet

    return { TYKMD, BYÇT, YÇM, TKM, YSBM };
}

// Butona basıldıktan sonra maliyet hesaplama ve gösterim
document.getElementById('create').addEventListener('click', () => {
    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const H = parseFloat(document.getElementById('H').value);
    const D = parseFloat(document.getElementById('D').value);


    // Maliyet hesapla
    const { TYKMD, BYÇT, YÇM, TKM, YSBM } = hesaplaMaliyet(A, B, H, D);
    const maliyetTRY = TYKMD * dolarKuru;

    // Maliyet kutusunu göster
    document.getElementById('maliyetBox').style.display = 'block';

    // Maliyet değerlerini güncelle
    document.getElementById('costUSD').textContent = TYKMD.toLocaleString('tr-TR', { minimumFractionDigits: 0})+' $';
    document.getElementById('costTRY').textContent = maliyetTRY.toLocaleString('tr-TR', { maximumFractionDigits: 0})+' TL';

    // Ek bilgileri güncelle
    const kapaliAlan = (A * B).toLocaleString('tr-TR', { minimumFractionDigits: 0 }) + ' m²';
    const toplamCelik = (BYÇT/1000).toLocaleString('tr-TR', { minimumFractionDigits: 0});
    const toplamKaplama = (A * B + (A * 2 + B * 2) * H).toLocaleString('tr-TR', { minimumFractionDigits: 0});
    const sahaBetonu = ((A + 2) * (B + 2) * 0.2+AKSB).toLocaleString('tr-TR', { maximumFractionDigits: 0 });

    // Parasal karşılıkları hesapla
    const toplamCelikParasi = `<span style="color:yellow;">${YÇM.toLocaleString('tr-TR', { minimumFractionDigits: 0})} $</span>`;
    const toplamKaplamaParasi = `<span style="color:yellow;">${TKM.toLocaleString('tr-TR', { minimumFractionDigits: 0})} $</span>`;
    const sahaBetonuParasi = `<span style="color:yellow;">${YSBM.toLocaleString('tr-TR', { maximumFractionDigits: 0})} $</span>`;

    // Dinamik olarak hesaplanan değerleri HTML'de güncelle
    document.getElementById("kapaliAlan").textContent = `${kapaliAlan}`;
    document.getElementById("toplamCelik").innerHTML = `${toplamCelik} ton - ${toplamCelikParasi}`;
    document.getElementById("toplamKaplama").innerHTML = `${toplamKaplama} m² - ${toplamKaplamaParasi}`;
    document.getElementById("sahaBetonu").innerHTML = `${sahaBetonu} m³ - ${sahaBetonuParasi}`;

// Gizle/Göster işlevi
const maliyetBox = document.getElementById('maliyetBox');
const maliyetToggleButton = document.getElementById('maliyetToggleButton');

maliyetToggleButton.addEventListener('click', () => {
    if (maliyetBox.style.display === 'none') {
        maliyetBox.style.display = 'block';
        maliyetToggleButton.textContent = '▲';
    } else {
        maliyetBox.style.display = 'none';
        maliyetToggleButton.textContent = '▼';
    }
});
    
});
    window.addEventListener('resize', function () {
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
