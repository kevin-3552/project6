(function(_0x17ea9f,_0x2e595f){const _0x51e2a2=_0x2b11,_0xc06797=_0x17ea9f();while(!![]){try{const _0x51e94a=parseInt(_0x51e2a2(0x108))/0x1*(-parseInt(_0x51e2a2(0xeb))/0x2)+parseInt(_0x51e2a2(0xe2))/0x3*(parseInt(_0x51e2a2(0x109))/0x4)+-parseInt(_0x51e2a2(0xf8))/0x5+-parseInt(_0x51e2a2(0xcc))/0x6*(-parseInt(_0x51e2a2(0xfb))/0x7)+parseInt(_0x51e2a2(0xd8))/0x8*(-parseInt(_0x51e2a2(0xce))/0x9)+-parseInt(_0x51e2a2(0xd5))/0xa*(parseInt(_0x51e2a2(0xe0))/0xb)+parseInt(_0x51e2a2(0xf1))/0xc*(parseInt(_0x51e2a2(0x10e))/0xd);if(_0x51e94a===_0x2e595f)break;else _0xc06797['push'](_0xc06797['shift']());}catch(_0x4ca0fc){_0xc06797['push'](_0xc06797['shift']());}}}(_0x49c9,0x46ff1));export let KOLONUZUNLUK;export let MK_UZUNLUK;export let loadedFont=null;import{MALTBÇAP,DÜŞEYAKSSAYISI,YATAYAKSSAYISI,YATAYHOLGENİŞLİĞİ,MAKASBOYU,DÜŞEYHOLGENİŞLİĞİ,YATAYHOLSAYISI,ALTMAKASYÜKS2,MYÜKS,MKAÇI,İKİDİKMEARASI,DİKME_Y_ARTIŞ,MDDİYGÇAP,DİKMESAYISI,MAKAS_YÜKSEKL_HESAPLA,YanKirişArası,YanBağKirişAdet,DÜŞEYHOLSAYISI,ÇatıBağKirişSayısı,ÇatıBağKirişAra_Yatay,ÇatıBağKirişAra_Yekseni,ÇaprazYükseklik,YanÇaprazAksadet,YanÇaprazDüşeyAdet,ÇatıÇaprazZekseniAra,ÇatıÇaprazZekseniAdet,BinaYükseklik,ArkaKaplamaSınır,KaplamaSınırHesap,esaszeminA,esaszeminB}from'./hesapla.js';import{KOLON1,HEA300,KOLON_BOX1,YATAY_MK_GEO_1,Yatay_Kiriş_Profil_1,Yatay_Kiriş_Profil_2,YatayÇaprazProfil,YatayÇaprazÇap,ÇatıÇaprazProfil,KOLONEBAT,MK_EN}from'./geometriler.js';import{kolonMaterial2,DİKMEMALZEME,MAKASMALZEME,DİYAGONELMALZEME,BağKirişiMalzeme,BağKirişiMalzeme2,kolonMaterial3,createKaplamaTexture,createKaplamaTexture2}from'./malzemeler.js';export function ZEMİNESAS(_0x40e96b,_0x117a90){const _0x4d608d=_0x2b11,_0x3585e8=new THREE[(_0x4d608d(0x101))]()['load'](_0x4d608d(0xfe));_0x3585e8['wrapS']=THREE[_0x4d608d(0x104)],_0x3585e8['wrapT']=THREE[_0x4d608d(0x104)],_0x3585e8['repeat']['set'](0x1,0x1);const _0x19e1e7=new THREE[(_0x4d608d(0xe5))](esaszeminA,esaszeminB),_0x4f7ef7=new THREE[(_0x4d608d(0xcd))]({'map':_0x3585e8,'side':THREE[_0x4d608d(0xfa)]});console[_0x4d608d(0xca)](_0x4d608d(0xf9),esaszeminA);const _0x354a4d=new THREE[(_0x4d608d(0x10c))](_0x19e1e7,_0x4f7ef7);return _0x354a4d[_0x4d608d(0xdb)]['x']=-Math['PI']/0x2,_0x354a4d[_0x4d608d(0xd7)][_0x4d608d(0xd2)](_0x40e96b/0x2,-0.1,-_0x117a90/0x2),_0x354a4d;}export function YATAYKOLONGRUBU(_0x152ced){const _0x4b0d21=_0x2b11,_0x2b85cd=new THREE[(_0x4b0d21(0xd0))]();for(let _0x73c814=0x0;_0x73c814<YATAYAKSSAYISI;_0x73c814++){const _0x171c26=DKG(_0x152ced);_0x171c26[_0x4b0d21(0xd7)]['set'](_0x73c814*YATAYHOLGENİŞLİĞİ,0x0,0x0),_0x2b85cd[_0x4b0d21(0xd6)](_0x171c26);}return _0x2b85cd;}function DKG(_0x2b9bd8){const _0x25f2cc=_0x2b11,_0x413e66=new THREE['Group']();KOLONUZUNLUK=_0x2b9bd8;for(let _0x361ec4=0x0;_0x361ec4<DÜŞEYAKSSAYISI;_0x361ec4++){const _0x3ad8a5=KOLON_BOX1(_0x2b9bd8,kolonMaterial3);_0x3ad8a5[_0x25f2cc(0xd7)][_0x25f2cc(0xd2)](0x0,0x0,_0x361ec4*-DÜŞEYHOLGENİŞLİĞİ),_0x413e66[_0x25f2cc(0xd6)](_0x3ad8a5);}return _0x413e66;}export function MakasAlt(_0x346f12){const _0x42c982=_0x2b11;MK_UZUNLUK=YATAYHOLGENİŞLİĞİ;const _0xe9e3ec=YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ,MK_UZUNLUK);return _0xe9e3ec['position'][_0x42c982(0xd2)](YATAYHOLGENİŞLİĞİ/0x2,_0x346f12,0x0),_0xe9e3ec[_0x42c982(0xdb)]['z']=THREE[_0x42c982(0x102)][_0x42c982(0xf6)](0x5a),_0xe9e3ec;}export function MakasÜstSol(){const _0x165444=_0x2b11;MK_UZUNLUK=YATAYHOLGENİŞLİĞİ/0x2;const _0x458dc0=YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ,MK_UZUNLUK);return _0x458dc0[_0x165444(0xd7)][_0x165444(0xd2)](YATAYHOLGENİŞLİĞİ/0x4,ALTMAKASYÜKS2+MYÜKS,0x0),_0x458dc0[_0x165444(0xdb)]['z']=THREE[_0x165444(0x102)][_0x165444(0xf6)](0x5a+MKAÇI),_0x458dc0;}export function MakasÜstSağ(){const _0x2f516e=_0x2b11,_0x8ec186=new THREE['Group'](),_0xcb238b=MakasÜstSol(H);_0x8ec186[_0x2f516e(0xd6)](_0xcb238b);const _0x4f97d0=_0xcb238b[_0x2f516e(0xff)]();return _0x4f97d0[_0x2f516e(0xd7)]['x']=YATAYHOLGENİŞLİĞİ*0.75,_0x4f97d0[_0x2f516e(0xd7)]['z']=0x0,_0x4f97d0[_0x2f516e(0xdb)]['y']=-Math['PI'],_0x8ec186['add'](_0x4f97d0),_0x8ec186;}export function DİKME1(){const _0x48a112=_0x2b11,_0x269be9=new THREE[(_0x48a112(0x112))](MDDİYGÇAP,MDDİYGÇAP,MYÜKS,0x20),_0x226a54=new THREE['Mesh'](_0x269be9,DİKMEMALZEME);return _0x226a54['position'][_0x48a112(0xd2)](0x0,H+MYÜKS/0x2,0x0),_0x226a54[_0x48a112(0xdb)]['z']=0x0,_0x226a54;}export function DİKME1_GRUP_SOL(_0x4f21ba){const _0x1ae74c=_0x2b11,_0x1a7dbf=new THREE[(_0x1ae74c(0xd0))]();for(let _0x55267b=0x0;_0x55267b<DİKMESAYISI;_0x55267b++){const _0x23640b=MYÜKS+_0x55267b*DİKME_Y_ARTIŞ,_0x20d640=new THREE[(_0x1ae74c(0x112))](MDDİYGÇAP,MDDİYGÇAP,_0x23640b,0x20),_0x5e8132=new THREE[(_0x1ae74c(0x10c))](_0x20d640,DİKMEMALZEME),_0x2e3e75=_0x55267b*İKİDİKMEARASI,_0xb46418=_0x4f21ba+MYÜKS/0x2+_0x55267b*(DİKME_Y_ARTIŞ/0x2);_0x5e8132[_0x1ae74c(0xd7)][_0x1ae74c(0xd2)](_0x2e3e75,_0xb46418,0x0),_0x1a7dbf[_0x1ae74c(0xd6)](_0x5e8132);}return _0x1a7dbf;}export function DİKME1_GRUP_SAĞ(_0x3573c7){const _0x2dec6f=_0x2b11,_0x3b374a=new THREE[(_0x2dec6f(0xd0))](),_0x138109=DİKME1_GRUP_SOL(_0x3573c7);_0x3b374a[_0x2dec6f(0xd6)](_0x138109);const _0x36c4bf=_0x138109['clone']();return _0x36c4bf['position']['x']=YATAYHOLGENİŞLİĞİ,_0x36c4bf[_0x2dec6f(0xdb)]['y']=-Math['PI'],_0x3b374a['add'](_0x36c4bf),_0x3b374a;}export function DİKME1_orta(_0x298837){const _0x247a17=_0x2b11,_0x1ee874=new THREE[(_0x247a17(0xd0))](),_0x7dab43=MYÜKS+DİKME_Y_ARTIŞ*DİKMESAYISI,_0x492ee5=new THREE[(_0x247a17(0x112))](MDDİYGÇAP,MDDİYGÇAP,_0x7dab43,0x20),_0x300e2c=new THREE['Mesh'](_0x492ee5,DİKMEMALZEME);return _0x300e2c[_0x247a17(0xd7)]['x']=YATAYHOLGENİŞLİĞİ/0x2,_0x300e2c[_0x247a17(0xd7)]['z']=0x0,_0x300e2c['position']['y']=_0x298837+_0x7dab43/0x2,_0x1ee874[_0x247a17(0xd6)](_0x300e2c),_0x1ee874;}function _0x49c9(){const _0x2171b3=['attributes','CylinderGeometry','setIndex','addVectors','Quaternion','copy','LineBasicMaterial','Shape','log','atan2','9732ppiocC','MeshBasicMaterial','1377FABlaG','black','Group','CanvasTexture','set','setFromUnitVectors','Float32BufferAttribute','70PZnqQe','add','position','5944xeFyFI','moveTo','ShapeGeometry','rotation','scale','multiplyScalar','distanceTo','canvas','702515TlUAkz','atan','78YwsSYr','repeat','LineSegments','PlaneGeometry','MeshStandardMaterial','lineTo','setFromPoints','setAttribute','80px\x20Arial','5804yOGOmJ','subVectors','mesh','array','sqrt','textures/logo.png','12qVnFRP','fillText','makeScale','ceil','normalize','degToRad','width','1286480jCUsBg','esaszeminA','DoubleSide','1876LnYPKW','setPosition','WireframeGeometry','textures/zemin9.png','clone','pow','TextureLoader','MathUtils','Vector3','RepeatWrapping','load','Matrix4','font','3pHNZjW','53928fZbAay','C\x20\x20\x20R\x20\x20\x20A\x20\x20\x20N\x20\x20\x20E','floor','Mesh','height','4320017MvShfl','TorusGeometry','applyQuaternion'];_0x49c9=function(){return _0x2171b3;};return _0x49c9();}export function DİYAGONELSOL1(_0x3d13e0,_0x397ec7,_0x2d05ad,_0x38b77a){const _0x318d8e=_0x2b11,_0x14438b=Math[_0x318d8e(0xef)](Math[_0x318d8e(0x100)](_0x38b77a-_0x397ec7,0x2)+Math['pow'](_0x2d05ad-_0x3d13e0,0x2)),_0x4b2996=new THREE['CylinderGeometry'](MDDİYGÇAP,MDDİYGÇAP,_0x14438b,0x20),_0x560c6f=new THREE[(_0x318d8e(0x10c))](_0x4b2996,DİYAGONELMALZEME),_0x3f1dab=Math[_0x318d8e(0xe1)]((_0x38b77a-_0x397ec7)/(_0x2d05ad-_0x3d13e0));return _0x560c6f[_0x318d8e(0xdb)]['z']=Math['PI']/0x2+Math[_0x318d8e(0xcb)](_0x38b77a-_0x397ec7,_0x2d05ad-_0x3d13e0),_0x560c6f['position']['set']((_0x3d13e0+_0x2d05ad)/0x2,(_0x397ec7+_0x38b77a)/0x2,0x0),_0x560c6f;}export function SOLDİYAGONELGRUBU(_0x1900bd){const _0x3f35f5=new THREE['Group']();for(let _0x3928dd=0x0;_0x3928dd<DİKMESAYISI;_0x3928dd++){const _0x3f49f6=(_0x3928dd+0x1)*İKİDİKMEARASI,_0x322eff=_0x1900bd,_0x1b96fe=_0x3928dd*İKİDİKMEARASI,_0x475b66=_0x1900bd+MYÜKS+_0x3928dd*DİKME_Y_ARTIŞ,_0x407edf=DİYAGONELSOL1(_0x1b96fe,_0x475b66,_0x3f49f6,_0x322eff);_0x3f35f5['add'](_0x407edf);}return _0x3f35f5;}export function SAĞDİYAGONELGRUBU(_0x1edab9){const _0x2350ef=_0x2b11,_0x143da0=new THREE[(_0x2350ef(0xd0))](),_0x171a96=SOLDİYAGONELGRUBU(_0x1edab9),_0x45bd63=_0x171a96['clone']();return _0x45bd63[_0x2350ef(0xd7)]['x']=YATAYHOLGENİŞLİĞİ,_0x45bd63['rotation']['y']=Math['PI'],_0x143da0[_0x2350ef(0xd6)](_0x45bd63),_0x143da0;}function _0x2b11(_0x23d7ba,_0xf6825){const _0x49c91e=_0x49c9();return _0x2b11=function(_0x2b11ca,_0x246361){_0x2b11ca=_0x2b11ca-0xca;let _0x5233c6=_0x49c91e[_0x2b11ca];return _0x5233c6;},_0x2b11(_0x23d7ba,_0xf6825);}export function MakasTamGrup(_0x4849c9){const _0x1222be=_0x2b11,_0x1b40da=new THREE[(_0x1222be(0xd0))](),_0x3ad28a=DİKME1_GRUP_SOL(_0x4849c9),_0x3ba1f4=DİKME1_GRUP_SAĞ(_0x4849c9),_0x14b1f2=DİKME1_orta(_0x4849c9),_0x62a1dd=MakasAlt(_0x4849c9),_0xc26ab8=MakasÜstSol(),_0x2afafe=MakasÜstSağ(),_0x1591e2=SOLDİYAGONELGRUBU(_0x4849c9),_0x8003e3=SAĞDİYAGONELGRUBU(_0x4849c9);return _0x1b40da[_0x1222be(0xd6)](_0x3ad28a),_0x1b40da['add'](_0x3ba1f4),_0x1b40da[_0x1222be(0xd6)](_0x62a1dd),_0x1b40da['add'](_0xc26ab8),_0x1b40da[_0x1222be(0xd6)](_0x2afafe),_0x1b40da['add'](_0x1591e2),_0x1b40da['add'](_0x8003e3),_0x1b40da[_0x1222be(0xd6)](_0x14b1f2),_0x1b40da;}export function MakasGrupÇoğalt(_0x1b2acf){const _0x19adf9=_0x2b11,_0x244d88=new THREE[(_0x19adf9(0xd0))]();for(let _0x249e56=0x0;_0x249e56<YATAYHOLSAYISI;_0x249e56++){for(let _0x647016=0x0;_0x647016<DÜŞEYAKSSAYISI;_0x647016++){const _0x24b5d0=MakasTamGrup(_0x1b2acf);_0x24b5d0['position'][_0x19adf9(0xd2)](_0x249e56*YATAYHOLGENİŞLİĞİ,0x0,-_0x647016*DÜŞEYHOLGENİŞLİĞİ),_0x244d88[_0x19adf9(0xd6)](_0x24b5d0);}}return _0x244d88;}export function YanKiriş_1(_0x34d770){const _0x1a4109=_0x2b11,_0x451e8f=new THREE['Group'](),_0x22bd9d=DÜŞEYHOLGENİŞLİĞİ-0.2;if(_0x34d770<0x6){}else for(let _0x4f39c8=0x0;_0x4f39c8<YanBağKirişAdet;_0x4f39c8++){for(let _0x4cda3a=0x0;_0x4cda3a<DÜŞEYHOLSAYISI;_0x4cda3a++){for(let _0x468e58=0x0;_0x468e58<YATAYHOLSAYISI+0x1;_0x468e58++){const _0x3128d9=Yatay_Kiriş_Profil_1(_0x22bd9d,BağKirişiMalzeme,_0x34d770);_0x3128d9[_0x1a4109(0xd7)][_0x1a4109(0xd2)](_0x468e58*YATAYHOLGENİŞLİĞİ,YanKirişArası+_0x4f39c8*YanKirişArası,-DÜŞEYHOLGENİŞLİĞİ/0x2+-_0x4cda3a*DÜŞEYHOLGENİŞLİĞİ),_0x3128d9[_0x1a4109(0xdb)]['x']=Math['PI']/0x2,_0x451e8f[_0x1a4109(0xd6)](_0x3128d9);}}}for(let _0x10b4d3=0x0;_0x10b4d3<YATAYHOLSAYISI+0x1;_0x10b4d3++){for(let _0x757253=0x0;_0x757253<DÜŞEYHOLSAYISI;_0x757253++){for(let _0x228cc7=0x0;_0x228cc7<0x2;_0x228cc7++){const _0x556f79=Yatay_Kiriş_Profil_1(_0x22bd9d,BağKirişiMalzeme,_0x34d770);_0x556f79[_0x1a4109(0xd7)][_0x1a4109(0xd2)](_0x10b4d3*YATAYHOLGENİŞLİĞİ,_0x34d770+_0x228cc7*MYÜKS,-DÜŞEYHOLGENİŞLİĞİ/0x2+-_0x757253*DÜŞEYHOLGENİŞLİĞİ),_0x556f79[_0x1a4109(0xdb)]['x']=Math['PI']/0x2,_0x451e8f[_0x1a4109(0xd6)](_0x556f79);}}}return _0x451e8f;}export function Bracing_MakasİçiTam(_0x546d87){const _0xa0133d=_0x2b11,_0x23f6bf=new THREE[(_0xa0133d(0xd0))]();for(let _0x3fb3fa=0x0;_0x3fb3fa<YATAYHOLSAYISI;_0x3fb3fa++){for(let _0xab9167=0x0;_0xab9167<DÜŞEYHOLSAYISI;_0xab9167++){const _0x879d91=Bracing1HolTam(_0x546d87);_0x879d91[_0xa0133d(0xd7)]['set'](_0x3fb3fa*YATAYHOLGENİŞLİĞİ,0x0,-_0xab9167*DÜŞEYHOLGENİŞLİĞİ),_0x23f6bf['add'](_0x879d91);}}return _0x23f6bf;}export function Bracing1HolTam(_0x200fae){const _0x33f2fa=_0x2b11,_0xb4f3ca=new THREE[(_0x33f2fa(0xd0))](),_0x3fbd16=MakasİçiÜstTamBracing1(_0x200fae);return _0xb4f3ca['add'](_0x3fbd16),_0xb4f3ca;}export function MakasİçiAltTamBracing(_0x118f94){const _0x4715c7=_0x2b11,_0x3d216c=new THREE[(_0x4715c7(0xd0))](),_0x18fe05=makas_içi_bağ_kirişi_alt(_0x118f94,ÇatıBağKirişAra_Yatay,ÇatıBağKirişSayısı);return _0x3d216c[_0x4715c7(0xd6)](_0x18fe05),_0x3d216c;}export function MakasİçiÜstTamBracing1(_0x134679){const _0x2a466f=_0x2b11,_0x4f8f0d=new THREE[(_0x2a466f(0xd0))](),_0x4c0569=makas_içi_bağ_kirişi_üstSol(_0x134679,ÇatıBağKirişAra_Yatay,ÇatıBağKirişSayısı),_0x5d74ce=makas_içi_bağ_kirişi_üstSağ(_0x134679,ÇatıBağKirişAra_Yatay,ÇatıBağKirişSayısı);return _0x4f8f0d[_0x2a466f(0xd6)](_0x4c0569),_0x4f8f0d['add'](_0x5d74ce),_0x4f8f0d;}export function makas_içi_bağ_kirişi_üstSol(_0x3b17dc,_0x518d09,_0x23f1b4){const _0x20f3a0=_0x2b11,_0x175fc2=new THREE[(_0x20f3a0(0xd0))](),_0x48caa3=DÜŞEYHOLGENİŞLİĞİ-0.2,_0x32538e=Math[_0x20f3a0(0xf4)](_0x23f1b4/0x2);for(let _0x325b41=0x1;_0x325b41<_0x23f1b4+0x1;_0x325b41++){const _0x5789f2=Yatay_Kiriş_Profil_2(_0x48caa3,BağKirişiMalzeme2,_0x3b17dc);_0x5789f2['position'][_0x20f3a0(0xd2)](_0x325b41*_0x518d09,_0x3b17dc+MYÜKS+_0x325b41*ÇatıBağKirişAra_Yekseni,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x5789f2[_0x20f3a0(0xdb)]['x']=Math['PI']/0x2,_0x175fc2[_0x20f3a0(0xd6)](_0x5789f2);}return _0x175fc2;}export function makas_içi_bağ_kirişi_üstSağ(_0x1e3768,_0x349f71,_0x530f74){const _0x433701=_0x2b11,_0x4a14bc=new THREE[(_0x433701(0xd0))](),_0x3b7574=DÜŞEYHOLGENİŞLİĞİ-0.2,_0x361cb8=Math[_0x433701(0xf4)](_0x530f74/0x2);for(let _0x3561c8=0x1;_0x3561c8<_0x530f74;_0x3561c8++){const _0x327331=Yatay_Kiriş_Profil_2(_0x3b7574,BağKirişiMalzeme2,_0x1e3768);_0x327331[_0x433701(0xd7)]['set'](_0x349f71*_0x530f74+_0x3561c8*_0x349f71,_0x1e3768+MYÜKS+_0x530f74*ÇatıBağKirişAra_Yekseni-_0x3561c8*ÇatıBağKirişAra_Yekseni,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x327331[_0x433701(0xdb)]['x']=Math['PI']/0x2,_0x4a14bc[_0x433701(0xd6)](_0x327331);}return _0x4a14bc;}export function makas_içi_bağ_kirişi_alt(_0x3bb0ad,_0x47b72c,_0x1a44a5){const _0x5e0cb1=_0x2b11,_0x29e5cc=new THREE['Group'](),_0x6bcd2d=DÜŞEYHOLGENİŞLİĞİ-0.2,_0x2b0c28=Math['ceil'](_0x1a44a5/0x2);for(let _0x486206=0x1;_0x486206<_0x1a44a5*0x2;_0x486206++){const _0x31a290=Yatay_Kiriş_Profil_2(_0x6bcd2d,BağKirişiMalzeme2,_0x3bb0ad);_0x31a290[_0x5e0cb1(0xd7)][_0x5e0cb1(0xd2)](_0x486206*_0x47b72c,_0x3bb0ad,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x31a290[_0x5e0cb1(0xdb)]['x']=Math['PI']/0x2,_0x29e5cc[_0x5e0cb1(0xd6)](_0x31a290);}return _0x29e5cc;}export function ÇaprazYan1Aks(_0x2990a4){const _0x5a8d23=_0x2b11,_0x34153c=new THREE[(_0x5a8d23(0xd0))]();let _0x44110e;_0x2990a4<0x6?_0x44110e=_0x2990a4:_0x44110e=ÇaprazYükseklik;const _0x16a2db=new THREE[(_0x5a8d23(0xd0))](),_0x41e82d=new THREE[(_0x5a8d23(0x103))](0x0,0x0,0x0),_0x219942=new THREE['Vector3'](0x0,_0x44110e,-DÜŞEYHOLGENİŞLİĞİ),_0x2ebb57=new THREE[(_0x5a8d23(0x103))](0x0,0x0,-DÜŞEYHOLGENİŞLİĞİ),_0x1c9e92=new THREE[(_0x5a8d23(0x103))](0x0,_0x44110e,0x0),_0x48ce1c=_0x41e82d[_0x5a8d23(0xde)](_0x219942),_0x281d25=YatayÇaprazProfil(_0x2990a4,_0x48ce1c)[_0x5a8d23(0xed)];_0x281d25[_0x5a8d23(0xd7)][_0x5a8d23(0x116)](_0x41e82d);const _0x2e085=Math[_0x5a8d23(0xcb)](_0x219942['y']-_0x41e82d['y'],_0x219942['z']-_0x41e82d['z']);_0x281d25[_0x5a8d23(0xdb)]['x']=_0x2e085,_0x281d25[_0x5a8d23(0xdb)]['y']=0x5a*(Math['PI']/0xb4),_0x281d25[_0x5a8d23(0xd7)][_0x5a8d23(0xd2)](0x0,_0x44110e/0x2,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x16a2db[_0x5a8d23(0xd6)](_0x281d25);const _0x4d412f=_0x2ebb57[_0x5a8d23(0xde)](_0x1c9e92),_0x425396=YatayÇaprazProfil(_0x2990a4,_0x4d412f)[_0x5a8d23(0xed)];_0x425396['position'][_0x5a8d23(0x116)](_0x2ebb57);const _0x8b28d1=Math[_0x5a8d23(0xcb)](_0x1c9e92['y']-_0x2ebb57['y'],_0x1c9e92['z']-_0x2ebb57['z']);_0x425396[_0x5a8d23(0xdb)]['x']=_0x8b28d1,_0x425396[_0x5a8d23(0xdb)]['y']=0x5a*(Math['PI']/0xb4),_0x425396[_0x5a8d23(0xd7)]['set'](0x0,_0x44110e/0x2,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x16a2db[_0x5a8d23(0xd6)](_0x425396);if(_0x2990a4>=0x6)for(let _0x327db0=0x0;_0x327db0<YanÇaprazDüşeyAdet-0x1;_0x327db0++){const _0x4540ae=_0x16a2db['clone']();_0x4540ae[_0x5a8d23(0xd7)][_0x5a8d23(0xd2)](0x0,_0x327db0*ÇaprazYükseklik,0x0),_0x34153c['add'](_0x4540ae);}else{if(_0x2990a4<0x6)for(let _0x26c98e=0x0;_0x26c98e<0x1;_0x26c98e++){const _0x2edd27=_0x16a2db[_0x5a8d23(0xff)]();_0x2edd27[_0x5a8d23(0xd7)][_0x5a8d23(0xd2)](0x0,_0x26c98e*ÇaprazYükseklik,0x0),_0x34153c[_0x5a8d23(0xd6)](_0x2edd27);}}return _0x34153c;}export function ÇaprazYan1AksBütün(_0x5a0382){const _0x1b9586=_0x2b11,_0xd55fdd=new THREE[(_0x1b9586(0xd0))]();for(let _0x170d77=0x0;_0x170d77<YanÇaprazAksadet;_0x170d77++){const _0x571cce=ÇaprazYan1Aks(_0x5a0382);_0x571cce[_0x1b9586(0xd7)][_0x1b9586(0xd2)](0x0,0x0,-_0x170d77*0x2*DÜŞEYHOLGENİŞLİĞİ),_0xd55fdd[_0x1b9586(0xd6)](_0x571cce);}return _0xd55fdd;}export function ÇaprazYanKomple(_0x39a836){const _0x1c8de8=_0x2b11,_0x275147=new THREE[(_0x1c8de8(0xd0))]();for(let _0x9f57c0=0x0;_0x9f57c0<YATAYHOLSAYISI+0x1;_0x9f57c0++){const _0x5babb4=ÇaprazYan1AksBütün(_0x39a836);_0x5babb4[_0x1c8de8(0xd7)][_0x1c8de8(0xd2)](_0x9f57c0*YATAYHOLGENİŞLİĞİ,0x0,0x0),_0x275147[_0x1c8de8(0xd6)](_0x5babb4);}return _0x275147;}export function ÇatıÇaprazTekSol(_0x5258ca){const _0x5c7d94=_0x2b11,_0x127194=new THREE['Group'](),_0x44e90a=new THREE[(_0x5c7d94(0x103))](0x0,_0x5258ca+MYÜKS,0x0),_0x3542c9=new THREE[(_0x5c7d94(0x103))](ÇatıBağKirişAra_Yatay,_0x5258ca+MYÜKS+ÇatıBağKirişAra_Yekseni,-DÜŞEYHOLGENİŞLİĞİ),_0x4ed32a=_0x44e90a[_0x5c7d94(0xde)](_0x3542c9),_0x204cd5=ÇatıÇaprazProfil(_0x5258ca,_0x4ed32a)[_0x5c7d94(0xed)],_0x479d12=new THREE[(_0x5c7d94(0x103))]()[_0x5c7d94(0x114)](_0x44e90a,_0x3542c9)[_0x5c7d94(0xdd)](0.5);_0x204cd5[_0x5c7d94(0xd7)][_0x5c7d94(0x116)](_0x479d12);const _0x1116e2=new THREE[(_0x5c7d94(0x103))]()[_0x5c7d94(0xec)](_0x3542c9,_0x44e90a)[_0x5c7d94(0xf5)](),_0x609c50=new THREE[(_0x5c7d94(0x115))]();return _0x609c50['setFromUnitVectors'](new THREE[(_0x5c7d94(0x103))](0x0,0x1,0x0),_0x1116e2),_0x204cd5[_0x5c7d94(0x110)](_0x609c50),_0x127194['add'](_0x204cd5),_0x127194;}export function ÇatıÇaprazTek2Sol(_0x36f812){const _0x15ffb2=_0x2b11,_0x17d4f9=new THREE[(_0x15ffb2(0xd0))](),_0x46887e=new THREE[(_0x15ffb2(0x103))](0x0,_0x36f812+MYÜKS,-DÜŞEYHOLGENİŞLİĞİ),_0x19e943=new THREE[(_0x15ffb2(0x103))](ÇatıBağKirişAra_Yatay,_0x36f812+MYÜKS+ÇatıBağKirişAra_Yekseni,0x0),_0x33ae5b=_0x46887e[_0x15ffb2(0xde)](_0x19e943),_0x49b876=ÇatıÇaprazProfil(_0x36f812,_0x33ae5b)[_0x15ffb2(0xed)],_0x391b1e=new THREE['Vector3']()[_0x15ffb2(0x114)](_0x46887e,_0x19e943)[_0x15ffb2(0xdd)](0.5);_0x49b876[_0x15ffb2(0xd7)][_0x15ffb2(0x116)](_0x391b1e);const _0x5dba4d=new THREE[(_0x15ffb2(0x103))]()['subVectors'](_0x19e943,_0x46887e)[_0x15ffb2(0xf5)](),_0x5c4520=new THREE[(_0x15ffb2(0x115))]();return _0x5c4520[_0x15ffb2(0xd3)](new THREE[(_0x15ffb2(0x103))](0x0,0x1,0x0),_0x5dba4d),_0x49b876[_0x15ffb2(0x110)](_0x5c4520),_0x17d4f9['add'](_0x49b876),_0x17d4f9;}export function ÇatıÇapraz1AraSol(_0x441ad8){const _0x422ec4=_0x2b11,_0x394501=new THREE['Group'](),_0x3033e2=ÇatıÇaprazTekSol(_0x441ad8),_0x2a5df9=ÇatıÇaprazTek2Sol(_0x441ad8);return _0x394501[_0x422ec4(0xd6)](_0x3033e2),_0x394501[_0x422ec4(0xd6)](_0x2a5df9),_0x394501;}export function ÇatıÇapraz1SolMakas(_0x48761b){const _0x54c140=_0x2b11,_0x5b71a5=new THREE[(_0x54c140(0xd0))](),_0x5f2391=Math[_0x54c140(0x10b)](ÇatıBağKirişSayısı/0x2);let _0x1bcc25;ÇatıBağKirişSayısı/0x2<0x1?_0x1bcc25=0x1:_0x1bcc25=ÇatıBağKirişSayısı/0x2+0x1;console['log']('ÇatıBağKirişSayısı\x20/\x202',ÇatıBağKirişSayısı/0x2);for(let _0x34967c=0x0;_0x34967c<_0x1bcc25;_0x34967c++){const _0x2affbe=ÇatıÇapraz1AraSol(_0x48761b);_0x2affbe[_0x54c140(0xd7)]['x']=_0x34967c*ÇatıBağKirişAra_Yatay,_0x2affbe[_0x54c140(0xd7)]['y']=_0x34967c*ÇatıBağKirişAra_Yekseni,_0x5b71a5[_0x54c140(0xd6)](_0x2affbe);}return _0x5b71a5;}export function ÇatıÇapraz1Ayna(_0x9a99e1){const _0xb69248=_0x2b11,_0x2c043a=new THREE['Group'](),_0x5063dd=ÇatıÇapraz1SolMakas(_0x9a99e1);_0x2c043a[_0xb69248(0xd6)](_0x5063dd);const _0x4d7bc2=_0x5063dd[_0xb69248(0xff)]();return _0x4d7bc2[_0xb69248(0xd7)]['x']=YATAYHOLGENİŞLİĞİ,_0x4d7bc2['position']['z']=-DÜŞEYHOLGENİŞLİĞİ,_0x4d7bc2[_0xb69248(0xdb)]['y']=-Math['PI'],_0x2c043a[_0xb69248(0xd6)](_0x4d7bc2),_0x2c043a;}export function ÇatıÇapraz1MakasGrup(_0x3e40ad){const _0x27da82=_0x2b11,_0x2e3911=new THREE[(_0x27da82(0xd0))](),_0x3011aa=ÇatıÇapraz1SolMakas(_0x3e40ad);_0x2e3911[_0x27da82(0xd6)](_0x3011aa);const _0x422be3=ÇatıÇapraz1Ayna(_0x3e40ad,YATAYHOLGENİŞLİĞİ,DÜŞEYHOLGENİŞLİĞİ);return _0x2e3911[_0x27da82(0xd6)](_0x422be3),_0x2e3911;}export function ÇatıÇaprazTam(_0x2c9bd5){const _0x2871e2=_0x2b11,_0x2a36de=new THREE[(_0x2871e2(0xd0))]();for(let _0x21d56f=0x0;_0x21d56f<ÇatıÇaprazZekseniAdet;_0x21d56f++){for(let _0x378892=0x0;_0x378892<YATAYHOLSAYISI;_0x378892++){const _0x4acd39=ÇatıÇapraz1MakasGrup(_0x2c9bd5,YATAYHOLGENİŞLİĞİ,DÜŞEYHOLGENİŞLİĞİ);_0x4acd39[_0x2871e2(0xd7)]['x']=_0x378892*YATAYHOLGENİŞLİĞİ,_0x4acd39[_0x2871e2(0xd7)]['z']=_0x21d56f*-ÇatıÇaprazZekseniAra,_0x2a36de['add'](_0x4acd39);}}return _0x2a36de;}export function Totem1(_0x46db0a,_0x4e28f0=null){const _0x56f120=_0x2b11,_0x5764b1=_0x46db0a+0x2,_0x4396c0=new THREE[(_0x56f120(0x112))](0.3,0.3,_0x5764b1,0x20),_0x1e8ce7=new THREE['MeshStandardMaterial']({'color':0x761453}),_0x3b9999=new THREE[(_0x56f120(0x10c))](_0x4396c0,_0x1e8ce7);_0x3b9999['position']['set'](-0x6,_0x5764b1/0x2,0x0);const _0x475672=_0x4e28f0||new THREE[(_0x56f120(0x101))]()[_0x56f120(0x105)](_0x56f120(0xf0)),_0x40ed84=new THREE['BoxGeometry'](0x5,0x3,0.8),_0x54338e=new THREE[(_0x56f120(0xcd))]({'map':_0x475672}),_0x12d4d6=new THREE[(_0x56f120(0xcd))]({'color':0x5f6070}),_0x30fc43=[_0x12d4d6,_0x12d4d6,_0x12d4d6,_0x12d4d6,_0x54338e,_0x54338e],_0x4f767a=new THREE[(_0x56f120(0x10c))](_0x40ed84,_0x30fc43);_0x4f767a[_0x56f120(0xd7)][_0x56f120(0xd2)](-0x6,_0x5764b1,0x0);const _0x3aa1b5=new THREE['Group']();return _0x3aa1b5['add'](_0x3b9999),_0x3aa1b5[_0x56f120(0xd6)](_0x4f767a),_0x3aa1b5;}export function CepheKaplamaSağSol(_0x2a2c81,_0x49da93,_0x4a57fe){const _0x2bbf4c=_0x2b11,_0x8868f1=_0x49da93+MYÜKS,_0x11a5d1=createKaplamaTexture(),_0x1ca88d=createKaplamaTexture(_0x4a57fe*0x2,0x1),_0x1dd0b3=createKaplamaTexture(),_0x3ef932=createKaplamaTexture(_0x4a57fe*0x2,0x1),_0x4d86a1=new THREE['PlaneGeometry'](_0x2a2c81+ArkaKaplamaSınır+0.1,_0x8868f1+MK_EN+0.15),_0x5709b4=new THREE['MeshBasicMaterial']({'map':_0x11a5d1,'side':THREE['DoubleSide'],'transparent':!![],'opacity':0.5}),_0x18cf44=new THREE[(_0x2bbf4c(0x10c))](_0x4d86a1,_0x5709b4);_0x18cf44[_0x2bbf4c(0xd7)][_0x2bbf4c(0xd2)](-KOLONEBAT/0x2-0.05,_0x8868f1/0x2,-_0x2a2c81/0x2),_0x18cf44[_0x2bbf4c(0xdb)]['y']=Math['PI']/0x2,_0x11a5d1['repeat'][_0x2bbf4c(0xd2)](_0x2a2c81,0x1);const _0x1789cf=_0x18cf44[_0x2bbf4c(0xff)](),_0x1f7a59=new THREE[(_0x2bbf4c(0x106))]()[_0x2bbf4c(0xf3)](-0x1,0x1,0x1);_0x1f7a59[_0x2bbf4c(0xfc)](new THREE[(_0x2bbf4c(0x103))](_0x4a57fe,0x0,0x0)),_0x1789cf['applyMatrix4'](_0x1f7a59);const _0x2631a3=new THREE[(_0x2bbf4c(0xe5))](_0x4a57fe+KOLONEBAT+0.1,_0x8868f1+MK_EN),_0x4e6ccd=new THREE['MeshBasicMaterial']({'map':_0x1ca88d,'side':THREE[_0x2bbf4c(0xfa)],'transparent':!![],'opacity':0.5});_0x1ca88d[_0x2bbf4c(0xe3)][_0x2bbf4c(0xd2)](YATAYHOLGENİŞLİĞİ*0x2,0x1);const _0x43c347=new THREE[(_0x2bbf4c(0x10c))](_0x2631a3,_0x4e6ccd);_0x43c347[_0x2bbf4c(0xd7)]['set'](_0x4a57fe/0x2,_0x8868f1/0x2,-_0x2a2c81-ArkaKaplamaSınır/0x2-0.05),console[_0x2bbf4c(0xca)]('ArkaKaplamaSınır\x20',ArkaKaplamaSınır);const _0x324e0b=new THREE[(_0x2bbf4c(0xcd))]({'map':_0x1dd0b3,'side':THREE[_0x2bbf4c(0xfa)],'transparent':!![],'opacity':0.5}),_0x12ce60=new THREE[(_0x2bbf4c(0x118))]();_0x12ce60[_0x2bbf4c(0xd9)](0x0,0x0),_0x12ce60[_0x2bbf4c(0xe7)](YATAYHOLGENİŞLİĞİ/0x2,BinaYükseklik-_0x49da93-MYÜKS),_0x12ce60[_0x2bbf4c(0xe7)](YATAYHOLGENİŞLİĞİ,0x0),_0x12ce60[_0x2bbf4c(0xe7)](0x0,0x0);const _0x3e5154=new THREE[(_0x2bbf4c(0xda))](_0x12ce60);_0x1dd0b3[_0x2bbf4c(0xe3)]['set'](YATAYHOLGENİŞLİĞİ,0x1),_0x3e5154[_0x2bbf4c(0x111)]['uv']['array'][0x0]=0x0,_0x3e5154[_0x2bbf4c(0x111)]['uv'][_0x2bbf4c(0xee)][0x1]=0x0,_0x3e5154[_0x2bbf4c(0x111)]['uv'][_0x2bbf4c(0xee)][0x2]=0.5,_0x3e5154['attributes']['uv'][_0x2bbf4c(0xee)][0x3]=0x1,_0x3e5154[_0x2bbf4c(0x111)]['uv'][_0x2bbf4c(0xee)][0x4]=0x1,_0x3e5154[_0x2bbf4c(0x111)]['uv'][_0x2bbf4c(0xee)][0x5]=0x0;const _0x45f8c3=new THREE[(_0x2bbf4c(0x10c))](_0x3e5154,_0x324e0b);_0x45f8c3['position'][_0x2bbf4c(0xd2)](0x0,_0x49da93+MYÜKS+MK_EN/0x2,-_0x2a2c81-KOLONEBAT-0.1);const _0x5565e8=_0x45f8c3[_0x2bbf4c(0xff)](),_0x38e875=new THREE[(_0x2bbf4c(0x106))]()['makeScale'](-0x1,0x1,0x1);_0x38e875[_0x2bbf4c(0xfc)](new THREE[(_0x2bbf4c(0x103))](YATAYHOLGENİŞLİĞİ,0x0,0x0)),_0x5565e8['applyMatrix4'](_0x1f7a59);const _0x3a11ae=new THREE[(_0x2bbf4c(0xd0))]();return _0x3a11ae[_0x2bbf4c(0xd6)](_0x18cf44,_0x1789cf,_0x43c347,_0x45f8c3,_0x5565e8),_0x3a11ae;}export function SolÇatıKaplama(_0x3d65cc,_0x2a20d0){const _0x251595=_0x2b11,_0x3a69e9=[new THREE[(_0x251595(0x103))](-KOLONEBAT,_0x3d65cc+MYÜKS+MK_EN,0x0),new THREE[(_0x251595(0x103))](YATAYHOLGENİŞLİĞİ/0x2,BinaYükseklik+MK_EN,0x0),new THREE[(_0x251595(0x103))](YATAYHOLGENİŞLİĞİ/0x2,BinaYükseklik+MK_EN,-_0x2a20d0-KOLONEBAT/0x2),new THREE[(_0x251595(0x103))](-KOLONEBAT,_0x3d65cc+MYÜKS+MK_EN,-_0x2a20d0-KOLONEBAT/0x2)],_0x36faa1=new THREE['BufferGeometry']()[_0x251595(0xe8)](_0x3a69e9);_0x36faa1[_0x251595(0x113)]([0x0,0x1,0x2,0x2,0x3,0x0]),_0x36faa1['computeVertexNormals']();const _0x472d29=[0x1,0x1,0x1,0x0,0x0,0x0,0x0,0x1];_0x36faa1[_0x251595(0xe9)]('uv',new THREE[(_0x251595(0xd4))](_0x472d29,0x2));const _0x1eca92=createKaplamaTexture2(_0x2a20d0,0x1),_0x446dea=new THREE[(_0x251595(0xcd))]({'map':_0x1eca92,'side':THREE[_0x251595(0xfa)],'transparent':!![],'opacity':0.5}),_0x68097a=new THREE[(_0x251595(0x10c))](_0x36faa1,_0x446dea);_0x1eca92['repeat']['set'](_0x2a20d0,0x1);const _0x2f4760=new THREE[(_0x251595(0xd0))]();_0x2f4760[_0x251595(0xd6)](_0x68097a);return _0x2f4760;return solCatiKaplama;}export function VinçKirişi(_0x2579f7){const _0x4f52ae=_0x2b11,_0x5d0568=YATAYHOLGENİŞLİĞİ-KOLONEBAT,_0xff3cec=0.7,_0x4dace2=0.3,_0x3f0602=0xffff00,_0x435f64=1.5,_0x229563=-0x2,_0x1ea411=new THREE[(_0x4f52ae(0xd0))](),_0x549e9a=new THREE['BoxGeometry'](_0x5d0568,_0xff3cec,_0x4dace2),_0x3210c9=new THREE[(_0x4f52ae(0xe6))]({'color':_0x3f0602}),_0x14ebc4=new THREE[(_0x4f52ae(0x117))]({'color':0x0});for(let _0x84e716=0x0;_0x84e716<YATAYHOLSAYISI;_0x84e716++){for(let _0x563962=0x0;_0x563962<0x2;_0x563962++){const _0x1217f8=new THREE[(_0x4f52ae(0x10c))](_0x549e9a,_0x3210c9);_0x1217f8[_0x4f52ae(0xd7)]['set'](YATAYHOLGENİŞLİĞİ/0x2+_0x84e716*YATAYHOLGENİŞLİĞİ,_0x2579f7-_0x435f64/0x2,_0x229563+_0x563962*0x1);const _0x4ee763=new THREE[(_0x4f52ae(0xe4))](new THREE[(_0x4f52ae(0xfd))](_0x549e9a),_0x14ebc4);_0x1217f8['add'](_0x4ee763),_0x1ea411[_0x4f52ae(0xd6)](_0x1217f8);}}for(let _0x7145b9=0x0;_0x7145b9<YATAYHOLSAYISI;_0x7145b9++){const _0x3b0532=VincKancasi();_0x3b0532[_0x4f52ae(0xdc)][_0x4f52ae(0xd2)](0.3,0.5,0.5),_0x3b0532[_0x4f52ae(0xd7)][_0x4f52ae(0xd2)](YATAYHOLGENİŞLİĞİ/0x2+_0x7145b9*YATAYHOLGENİŞLİĞİ,_0x2579f7-_0x435f64,_0x229563),_0x1ea411['add'](_0x3b0532);}const _0x1fdeda=document['createElement'](_0x4f52ae(0xdf));_0x1fdeda[_0x4f52ae(0xf7)]=0x2bc,_0x1fdeda[_0x4f52ae(0x10d)]=0x100;const _0x4453c3=_0x1fdeda['getContext']('2d');_0x4453c3['fillStyle']=_0x4f52ae(0xcf),_0x4453c3[_0x4f52ae(0x107)]=_0x4f52ae(0xea),_0x4453c3[_0x4f52ae(0xf2)](_0x4f52ae(0x10a),0x0,0x82);const _0x16aca9=new THREE[(_0x4f52ae(0xd1))](_0x1fdeda),_0x539dda=new THREE[(_0x4f52ae(0xcd))]({'map':_0x16aca9,'transparent':!![]});for(let _0x271fff=0x0;_0x271fff<YATAYHOLSAYISI;_0x271fff++){const _0x1f56c3=new THREE['Mesh'](new THREE['PlaneGeometry'](0x5,2.5),_0x539dda);_0x1f56c3['position'][_0x4f52ae(0xd2)](YATAYHOLGENİŞLİĞİ/0x2+_0x271fff*YATAYHOLGENİŞLİĞİ,_0x2579f7-_0x435f64/0x2,_0x229563+1.5),_0x1ea411[_0x4f52ae(0xd6)](_0x1f56c3);}return _0x1ea411;}export function VincKancasi(){const _0x423fb5=_0x2b11,_0xa9fa74=new THREE[(_0x423fb5(0xd0))](),_0x5555e6=new THREE[(_0x423fb5(0x10f))](0x1,0.15,0x10,0x64,Math['PI']*1.5),_0x249142=new THREE[(_0x423fb5(0xe6))]({'color':0x808080,'metalness':0.6,'roughness':0.4}),_0x6ea280=new THREE[(_0x423fb5(0x10c))](_0x5555e6,_0x249142);_0x6ea280[_0x423fb5(0xdb)]['z']=Math['PI']/0x2,_0xa9fa74['add'](_0x6ea280);const _0x26031c=new THREE[(_0x423fb5(0x112))](0.2,0.2,0x1,0x20),_0x5a65eb=new THREE[(_0x423fb5(0xe6))]({'color':0x808080,'metalness':0.6,'roughness':0.4}),_0x3e75ba=new THREE[(_0x423fb5(0x10c))](_0x26031c,_0x5a65eb);_0x3e75ba[_0x423fb5(0xd7)]['y']=0x1,_0xa9fa74[_0x423fb5(0xd6)](_0x3e75ba);const _0x565902=new THREE['TorusGeometry'](0.3,0.1,0x10,0x64),_0x47d5ad=new THREE['Mesh'](_0x565902,_0x5a65eb);return _0x47d5ad['position']['y']=1.6,_0x47d5ad[_0x423fb5(0xdb)]['x']=Math['PI']/0x2,_0xa9fa74[_0x423fb5(0xd6)](_0x47d5ad),_0xa9fa74;}