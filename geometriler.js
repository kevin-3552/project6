
export function HEA300(H) {
  const FE = 0.3;  // Flanş eni
  const FK = 0.01; // Flanş kalınlığı
  const GE = 0.3;  // Gövde eni
  const GK = 0.01; // Gövde kalınlığı

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('textures/çelik7.png');
  
  // Texture'ün tekrarlanması için wrapS ve wrapT ayarlamaları
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 5);  // 2x2 oranında tekrar eder

  const KM = new THREE.MeshBasicMaterial({
    map: texture
  });

  const F1Geometry = new THREE.BoxGeometry(FK, H, FE);
  const F1 = new THREE.Mesh(F1Geometry, KM);
  F1.position.set(GE / 2, H / 2, 0);

  const F2Geometry = new THREE.BoxGeometry(FK, H, FE);
  const F2 = new THREE.Mesh(F2Geometry, KM);
  F2.position.set(-GE/2, H / 2, 0);

  const G1Geometry = new THREE.BoxGeometry(GE, H, GK);
  const G1 = new THREE.Mesh(G1Geometry, KM);
  G1.position.set(0, H / 2, 0);

  const kolonGroup = new THREE.Group();
  kolonGroup.add(F1);
  kolonGroup.add(F2);
  kolonGroup.add(G1);

  return kolonGroup;  // Grup olarak geri döndürülüyor
}

export function KOLON1(H) {
  const FK = 0.01; // Flanş kalınlığı
  const GK = 0.01; // Gövde kalınlığı

  let FE; // Flanş eni
  let GE; // Gövde eni

  // H değerine göre FE ve GE ayarlanıyor
  if (H > 0 && H <= 6) {
      FE = 0.3;
      GE = 0.3;
    } else if (H > 6 && H <= 7) {
      FE = 0.35;
      GE = 0.35;    
  } else if (H > 7 && H < 8) {
      FE = 0.43;
      GE = 0.43;
  } else if (H >= 8 && H < 12) {
      FE = 0.55;
      GE = 0.55;
  } else if (H >= 12) {
      FE = 0.62;
      GE = 0.62;
  } else {
      console.error("Geçersiz H değeri:", H);
      return null; // Hata durumunda fonksiyonu sonlandır
  }
  
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('textures/çelik7.png');
  
  // Texture'ün tekrarlanması için wrapS ve wrapT ayarlamaları
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 5);  // 2x2 oranında tekrar eder
  
  const KM = new THREE.MeshBasicMaterial({
    map: texture
  });

  const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Siyah kenar çizgisi

  // Flanş ve gövde parçaları oluşturuluyor
  const F1Geometry = new THREE.BoxGeometry(FK, H, FE);
  const F1 = new THREE.Mesh(F1Geometry, KM);
  F1.position.set(GE / 2, H / 2, 0);

  const F1Edges = new THREE.EdgesGeometry(F1Geometry); // Kenar çizgisi için
  const F1Line = new THREE.LineSegments(F1Edges, edgeMaterial);
  F1.add(F1Line); // Kenar çizgilerini ekler

  const F2Geometry = new THREE.BoxGeometry(FK, H, FE);
  const F2 = new THREE.Mesh(F2Geometry, KM);
  F2.position.set(-GE / 2, H / 2, 0);

  const F2Edges = new THREE.EdgesGeometry(F2Geometry);
  const F2Line = new THREE.LineSegments(F2Edges, edgeMaterial);
  F2.add(F2Line);

  const G1Geometry = new THREE.BoxGeometry(GE, H, GK);
  const G1 = new THREE.Mesh(G1Geometry, KM);
  G1.position.set(0, H / 2, 0);

  const G1Edges = new THREE.EdgesGeometry(G1Geometry);
  const G1Line = new THREE.LineSegments(G1Edges, edgeMaterial);
  G1.add(G1Line);

  // Grupları birleştir
  const kolonGroup = new THREE.Group();
  kolonGroup.add(F1);
  kolonGroup.add(F2);
  kolonGroup.add(G1);

  return kolonGroup;  // Grup olarak geri döndürülüyor
}

