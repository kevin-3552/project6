//3d button diller
const translations = {
    tr: {
        createCube: "3D Bina Modelle",
        hideButtonAlt: "Formu Göster/Gizle",
        enLabel: 'En (A):',
        boyLabel: 'Boy (B):',
        yukseklikLabel: 'Yükseklik:',
        aksArasiLabel: 'Aks-m:',
        craneCheckboxLabel: 'vinç',
        metalYapi: "Metal Yapı",
        maliyet: "Maliyet",
        maliyetUsd: "Maliyet (USD)",
        whatsappLink: "WhatsApp'ta paylaş",
        hideButtonText: 'gizle',
        bodrumlabel:  'bodrum'


    },
    en: {
        createCube: "Create 3D Model",
        hideButtonAlt: "Show/Hide Form",
        enLabel: 'Width(A):',
        boyLabel: 'Length(B):',
        yukseklikLabel: 'Height(H):',
        aksArasiLabel: 'Axis:',
        craneCheckboxLabel: 'crane',
        metalYapi: "Metal Structure",
        maliyet: "Cost",
        maliyetUsd: "Cost (USD)",
        whatsappLink: "Share on WhatsApp",
        hideButtonText: 'hide',
        bodrumlabel:  'basem.'


    },
    ar: {
        createCube: "إنشاء ثلاثي الأبعاد",
        hideButtonAlt: "إظهار/إخفاء النموذج",
        enLabel: 'عرض',
        boyLabel: 'طول',  
        yukseklikLabel: 'ارتفاع:',
        aksArasiLabel: 'ديسمبر:',
        craneCheckboxLabel: 'رافعة',
        metalYapi: "الهيكل المعدني",
        maliyet: "التكلفة",
        maliyetUsd: "التكلفة (بالدولار الأمريكي)",
        whatsappLink: "شارك على الواتساب",
        hideButtonText: 'يخفي',
        bodrumlabel:  'الطابق السفلي'



    }
};

export function applyTranslations(lang) {
    document.getElementById('createCube').textContent = translations[lang].createCube;
    document.getElementById('hideButton').alt = translations[lang].hideButtonAlt;

    document.querySelectorAll('[data-label]').forEach(label => {
        const key = label.getAttribute('data-label');
        label.textContent = translations[lang][key];
    });
}

export default translations;
