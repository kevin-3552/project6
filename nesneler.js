(function(_0x1cf350,_0x1d1c91){const _0x29dc2f=_0xd9ec,_0x5e9edf=_0x1cf350();while(!![]){try{const _0x4013d1=parseInt(_0x29dc2f(0x164))/0x1*(parseInt(_0x29dc2f(0x15a))/0x2)+parseInt(_0x29dc2f(0x166))/0x3*(-parseInt(_0x29dc2f(0x17d))/0x4)+-parseInt(_0x29dc2f(0x16d))/0x5+-parseInt(_0x29dc2f(0x172))/0x6*(-parseInt(_0x29dc2f(0x13c))/0x7)+parseInt(_0x29dc2f(0x137))/0x8*(parseInt(_0x29dc2f(0x17a))/0x9)+parseInt(_0x29dc2f(0x148))/0xa*(parseInt(_0x29dc2f(0x14f))/0xb)+parseInt(_0x29dc2f(0x147))/0xc;if(_0x4013d1===_0x1d1c91)break;else _0x5e9edf['push'](_0x5e9edf['shift']());}catch(_0x3a7bd7){_0x5e9edf['push'](_0x5e9edf['shift']());}}}(_0x40a3,0x63bff));export let KOLONUZUNLUK;export let MK_UZUNLUK;export let loadedFont=null;export let kancatoplamyükseklik;import{MALTBÇAP,DÜŞEYAKSSAYISI,YATAYAKSSAYISI,YATAYHOLGENİŞLİĞİ,MAKASBOYU,DÜŞEYHOLGENİŞLİĞİ,YATAYHOLSAYISI,ALTMAKASYÜKS2,MYÜKS,MKAÇI,İKİDİKMEARASI,DİKME_Y_ARTIŞ,MDDİYGÇAP,DİKMESAYISI,MAKAS_YÜKSEKL_HESAPLA,YanKirişArası,YanBağKirişAdet,DÜŞEYHOLSAYISI,ÇatıBağKirişSayısı,ÇatıBağKirişAra_Yatay,ÇatıBağKirişAra_Yekseni,ÇaprazYükseklik,YanÇaprazAksadet,YanÇaprazDüşeyAdet,ÇatıÇaprazZekseniAra,ÇatıÇaprazZekseniAdet,BinaYükseklik,ArkaKaplamaSınır,KaplamaSınırHesap,esaszeminA,esaszeminB}from'./hesapla.js';import{KOLON1,HEA300,KOLON_BOX1,YATAY_MK_GEO_1,Yatay_Kiriş_Profil_1,Yatay_Kiriş_Profil_2,YatayÇaprazProfil,YatayÇaprazÇap,ÇatıÇaprazProfil,KOLONEBAT,MK_EN}from'./geometriler.js';import{kolonMaterial2,DİKMEMALZEME,MAKASMALZEME,DİYAGONELMALZEME,BağKirişiMalzeme,BağKirişiMalzeme2,kolonMaterial3,createKaplamaTexture,createKaplamaTexture2}from'./malzemeler.js';export function ZEMİNESAS(_0x3d1190,_0x222ac3){const _0x21c660=_0xd9ec,_0x2527d1=new THREE[(_0x21c660(0x13e))]()['load']('textures/zemin9.png');_0x2527d1[_0x21c660(0x129)]=THREE[_0x21c660(0x145)],_0x2527d1[_0x21c660(0x14d)]=THREE[_0x21c660(0x145)],_0x2527d1[_0x21c660(0x13d)][_0x21c660(0x17e)](0x1,0x1);const _0x59c019=new THREE[(_0x21c660(0x149))](esaszeminA,esaszeminB),_0x29bb66=new THREE[(_0x21c660(0x158))]({'map':_0x2527d1,'side':THREE['DoubleSide']});console['log'](_0x21c660(0x140),esaszeminA);const _0x3bab68=new THREE['Mesh'](_0x59c019,_0x29bb66);return _0x3bab68['rotation']['x']=-Math['PI']/0x2,_0x3bab68[_0x21c660(0x157)][_0x21c660(0x17e)](_0x3d1190/0x2,-0.1,-_0x222ac3/0x2),_0x3bab68;}export function YATAYKOLONGRUBU(_0x2782e0){const _0x22b3d1=_0xd9ec,_0x43dfca=new THREE[(_0x22b3d1(0x160))]();for(let _0x358e78=0x0;_0x358e78<YATAYAKSSAYISI;_0x358e78++){const _0x16bb75=DKG(_0x2782e0);_0x16bb75[_0x22b3d1(0x157)][_0x22b3d1(0x17e)](_0x358e78*YATAYHOLGENİŞLİĞİ,0x0,0x0),_0x43dfca[_0x22b3d1(0x152)](_0x16bb75);}return _0x43dfca;}export function DKG(_0x1f400b){const _0x24bc91=_0xd9ec,_0x280ded=new THREE[(_0x24bc91(0x160))]();KOLONUZUNLUK=_0x1f400b;for(let _0x194d56=0x0;_0x194d56<DÜŞEYAKSSAYISI;_0x194d56++){const _0x36e533=KOLON_BOX1(_0x1f400b,kolonMaterial3);_0x36e533[_0x24bc91(0x157)]['set'](0x0,0x0,_0x194d56*-DÜŞEYHOLGENİŞLİĞİ),_0x280ded['add'](_0x36e533);}return _0x280ded;}export function MakasAlt(_0x525305){const _0x3e9352=_0xd9ec;MK_UZUNLUK=YATAYHOLGENİŞLİĞİ;const _0x13d283=YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ,MK_UZUNLUK);return _0x13d283[_0x3e9352(0x157)][_0x3e9352(0x17e)](YATAYHOLGENİŞLİĞİ/0x2,_0x525305,0x0),_0x13d283[_0x3e9352(0x16e)]['z']=THREE[_0x3e9352(0x17c)]['degToRad'](0x5a),_0x13d283;}export function MakasÜstSol(){const _0x7a32c6=_0xd9ec;MK_UZUNLUK=YATAYHOLGENİŞLİĞİ/0x2;const _0x51aa7f=YATAY_MK_GEO_1(YATAYHOLGENİŞLİĞİ,MK_UZUNLUK);return _0x51aa7f['position'][_0x7a32c6(0x17e)](YATAYHOLGENİŞLİĞİ/0x4,ALTMAKASYÜKS2+MYÜKS,0x0),_0x51aa7f[_0x7a32c6(0x16e)]['z']=THREE[_0x7a32c6(0x17c)][_0x7a32c6(0x12e)](0x5a+MKAÇI),_0x51aa7f;}export function MakasÜstSağ(){const _0x27e28d=_0xd9ec,_0x29535e=new THREE['Group'](),_0x38007e=MakasÜstSol(H);_0x29535e[_0x27e28d(0x152)](_0x38007e);const _0x3b3782=_0x38007e[_0x27e28d(0x134)]();return _0x3b3782[_0x27e28d(0x157)]['x']=YATAYHOLGENİŞLİĞİ*0.75,_0x3b3782[_0x27e28d(0x157)]['z']=0x0,_0x3b3782[_0x27e28d(0x16e)]['y']=-Math['PI'],_0x29535e[_0x27e28d(0x152)](_0x3b3782),_0x29535e;}export function DİKME1(){const _0x18457b=_0xd9ec,_0x1bdad5=new THREE['CylinderGeometry'](MDDİYGÇAP,MDDİYGÇAP,MYÜKS,0x20),_0x46aa84=new THREE[(_0x18457b(0x12a))](_0x1bdad5,DİKMEMALZEME);return _0x46aa84[_0x18457b(0x157)][_0x18457b(0x17e)](0x0,H+MYÜKS/0x2,0x0),_0x46aa84[_0x18457b(0x16e)]['z']=0x0,_0x46aa84;}export function DİKME1_GRUP_SOL(_0x3d1cd1){const _0x29b0e9=_0xd9ec,_0x1c1634=new THREE[(_0x29b0e9(0x160))]();for(let _0x32d349=0x0;_0x32d349<DİKMESAYISI;_0x32d349++){const _0x45f890=MYÜKS+_0x32d349*DİKME_Y_ARTIŞ,_0x3a363f=new THREE[(_0x29b0e9(0x16a))](MDDİYGÇAP,MDDİYGÇAP,_0x45f890,0x20),_0x54e89c=new THREE[(_0x29b0e9(0x12a))](_0x3a363f,DİKMEMALZEME),_0x186bf0=_0x32d349*İKİDİKMEARASI,_0x42731c=_0x3d1cd1+MYÜKS/0x2+_0x32d349*(DİKME_Y_ARTIŞ/0x2);_0x54e89c['position']['set'](_0x186bf0,_0x42731c,0x0),_0x1c1634['add'](_0x54e89c);}return _0x1c1634;}export function DİKME1_GRUP_SAĞ(_0x32c631){const _0xdda905=_0xd9ec,_0x3e6cd3=new THREE[(_0xdda905(0x160))](),_0x1b64c5=DİKME1_GRUP_SOL(_0x32c631);_0x3e6cd3[_0xdda905(0x152)](_0x1b64c5);const _0x3383ce=_0x1b64c5[_0xdda905(0x134)]();return _0x3383ce[_0xdda905(0x157)]['x']=YATAYHOLGENİŞLİĞİ,_0x3383ce[_0xdda905(0x16e)]['y']=-Math['PI'],_0x3e6cd3[_0xdda905(0x152)](_0x3383ce),_0x3e6cd3;}export function DİKME1_orta(_0xa3ea5b){const _0x1e3bb7=_0xd9ec,_0x886780=new THREE['Group'](),_0x4af759=MYÜKS+DİKME_Y_ARTIŞ*DİKMESAYISI,_0x31a308=new THREE['CylinderGeometry'](MDDİYGÇAP,MDDİYGÇAP,_0x4af759,0x20),_0x2faf11=new THREE[(_0x1e3bb7(0x12a))](_0x31a308,DİKMEMALZEME);return _0x2faf11[_0x1e3bb7(0x157)]['x']=YATAYHOLGENİŞLİĞİ/0x2,_0x2faf11[_0x1e3bb7(0x157)]['z']=0x0,_0x2faf11[_0x1e3bb7(0x157)]['y']=_0xa3ea5b+_0x4af759/0x2,_0x886780[_0x1e3bb7(0x152)](_0x2faf11),_0x886780;}export function DİYAGONELSOL1(_0x5c6797,_0x4b12f2,_0x3f674d,_0x59deff){const _0x551339=_0xd9ec,_0x1c0bd7=Math[_0x551339(0x161)](Math['pow'](_0x59deff-_0x4b12f2,0x2)+Math[_0x551339(0x12c)](_0x3f674d-_0x5c6797,0x2)),_0x2b1a79=new THREE[(_0x551339(0x16a))](MDDİYGÇAP,MDDİYGÇAP,_0x1c0bd7,0x20),_0x5c5ff7=new THREE['Mesh'](_0x2b1a79,DİYAGONELMALZEME),_0x4a6f90=Math[_0x551339(0x174)]((_0x59deff-_0x4b12f2)/(_0x3f674d-_0x5c6797));return _0x5c5ff7[_0x551339(0x16e)]['z']=Math['PI']/0x2+Math[_0x551339(0x15d)](_0x59deff-_0x4b12f2,_0x3f674d-_0x5c6797),_0x5c5ff7[_0x551339(0x157)][_0x551339(0x17e)]((_0x5c6797+_0x3f674d)/0x2,(_0x4b12f2+_0x59deff)/0x2,0x0),_0x5c5ff7;}export function SOLDİYAGONELGRUBU(_0x45360e){const _0x56913c=_0xd9ec,_0x1c871b=new THREE[(_0x56913c(0x160))]();for(let _0x2f1426=0x0;_0x2f1426<DİKMESAYISI;_0x2f1426++){const _0x3237f2=(_0x2f1426+0x1)*İKİDİKMEARASI,_0x4cafc1=_0x45360e,_0xfd33d2=_0x2f1426*İKİDİKMEARASI,_0x3b4c51=_0x45360e+MYÜKS+_0x2f1426*DİKME_Y_ARTIŞ,_0xe474fc=DİYAGONELSOL1(_0xfd33d2,_0x3b4c51,_0x3237f2,_0x4cafc1);_0x1c871b[_0x56913c(0x152)](_0xe474fc);}return _0x1c871b;}export function SAĞDİYAGONELGRUBU(_0x2db605){const _0x3b65cc=_0xd9ec,_0x38ae61=new THREE['Group'](),_0x10e76d=SOLDİYAGONELGRUBU(_0x2db605),_0x4f2a39=_0x10e76d[_0x3b65cc(0x134)]();return _0x4f2a39[_0x3b65cc(0x157)]['x']=YATAYHOLGENİŞLİĞİ,_0x4f2a39[_0x3b65cc(0x16e)]['y']=Math['PI'],_0x38ae61[_0x3b65cc(0x152)](_0x4f2a39),_0x38ae61;}export function MakasTamGrup(_0x4d0aac){const _0xddbba4=_0xd9ec,_0x5396fe=new THREE[(_0xddbba4(0x160))](),_0x4363df=DİKME1_GRUP_SOL(_0x4d0aac),_0x17c103=DİKME1_GRUP_SAĞ(_0x4d0aac),_0x13479f=DİKME1_orta(_0x4d0aac),_0x283995=MakasAlt(_0x4d0aac),_0x20aacd=MakasÜstSol(),_0x460e81=MakasÜstSağ(),_0x5c7f3e=SOLDİYAGONELGRUBU(_0x4d0aac),_0x4cfb0b=SAĞDİYAGONELGRUBU(_0x4d0aac);return _0x5396fe['add'](_0x4363df),_0x5396fe['add'](_0x17c103),_0x5396fe['add'](_0x283995),_0x5396fe['add'](_0x20aacd),_0x5396fe['add'](_0x460e81),_0x5396fe[_0xddbba4(0x152)](_0x5c7f3e),_0x5396fe[_0xddbba4(0x152)](_0x4cfb0b),_0x5396fe[_0xddbba4(0x152)](_0x13479f),_0x5396fe;}export function MakasGrupÇoğalt(_0xec01d1){const _0x29c79d=_0xd9ec,_0x4fc50b=new THREE[(_0x29c79d(0x160))]();for(let _0x261a0f=0x0;_0x261a0f<YATAYHOLSAYISI;_0x261a0f++){for(let _0x1e04cb=0x0;_0x1e04cb<DÜŞEYAKSSAYISI;_0x1e04cb++){const _0x346123=MakasTamGrup(_0xec01d1);_0x346123[_0x29c79d(0x157)]['set'](_0x261a0f*YATAYHOLGENİŞLİĞİ,0x0,-_0x1e04cb*DÜŞEYHOLGENİŞLİĞİ),_0x4fc50b[_0x29c79d(0x152)](_0x346123);}}return _0x4fc50b;}export function YanKiriş_1(_0x1a393d){const _0x5d7322=_0xd9ec,_0x36b383=new THREE[(_0x5d7322(0x160))](),_0x4acaef=DÜŞEYHOLGENİŞLİĞİ-0.2;if(_0x1a393d<0x6){}else for(let _0xa05a68=0x0;_0xa05a68<YanBağKirişAdet;_0xa05a68++){for(let _0x253173=0x0;_0x253173<DÜŞEYHOLSAYISI;_0x253173++){for(let _0x52a323=0x0;_0x52a323<YATAYHOLSAYISI+0x1;_0x52a323++){const _0x4cf8eb=Yatay_Kiriş_Profil_1(_0x4acaef,BağKirişiMalzeme,_0x1a393d);_0x4cf8eb[_0x5d7322(0x157)][_0x5d7322(0x17e)](_0x52a323*YATAYHOLGENİŞLİĞİ,YanKirişArası+_0xa05a68*YanKirişArası,-DÜŞEYHOLGENİŞLİĞİ/0x2+-_0x253173*DÜŞEYHOLGENİŞLİĞİ),_0x4cf8eb[_0x5d7322(0x16e)]['x']=Math['PI']/0x2,_0x36b383['add'](_0x4cf8eb);}}}for(let _0x488d89=0x0;_0x488d89<YATAYHOLSAYISI+0x1;_0x488d89++){for(let _0x41501f=0x0;_0x41501f<DÜŞEYHOLSAYISI;_0x41501f++){for(let _0x346276=0x0;_0x346276<0x2;_0x346276++){const _0xdcb2e4=Yatay_Kiriş_Profil_1(_0x4acaef,BağKirişiMalzeme,_0x1a393d);_0xdcb2e4['position'][_0x5d7322(0x17e)](_0x488d89*YATAYHOLGENİŞLİĞİ,_0x1a393d+_0x346276*MYÜKS,-DÜŞEYHOLGENİŞLİĞİ/0x2+-_0x41501f*DÜŞEYHOLGENİŞLİĞİ),_0xdcb2e4['rotation']['x']=Math['PI']/0x2,_0x36b383[_0x5d7322(0x152)](_0xdcb2e4);}}}return _0x36b383;}export function Bracing_MakasİçiTam(_0x50d941){const _0x40689b=_0xd9ec,_0x43da61=new THREE['Group']();for(let _0x595d3b=0x0;_0x595d3b<YATAYHOLSAYISI;_0x595d3b++){for(let _0x59dc66=0x0;_0x59dc66<DÜŞEYHOLSAYISI;_0x59dc66++){const _0x322171=Bracing1HolTam(_0x50d941);_0x322171['position'][_0x40689b(0x17e)](_0x595d3b*YATAYHOLGENİŞLİĞİ,0x0,-_0x59dc66*DÜŞEYHOLGENİŞLİĞİ),_0x43da61['add'](_0x322171);}}return _0x43da61;}export function Bracing1HolTam(_0xa3b39f){const _0x10ff2d=_0xd9ec,_0x22afb7=new THREE[(_0x10ff2d(0x160))](),_0x56d83c=MakasİçiÜstTamBracing1(_0xa3b39f);return _0x22afb7[_0x10ff2d(0x152)](_0x56d83c),_0x22afb7;}export function MakasİçiAltTamBracing(_0x3c83c1){const _0x86602d=new THREE['Group'](),_0x469281=makas_içi_bağ_kirişi_alt(_0x3c83c1,ÇatıBağKirişAra_Yatay,ÇatıBağKirişSayısı);return _0x86602d['add'](_0x469281),_0x86602d;}export function MakasİçiÜstTamBracing1(_0x14cc24){const _0x1221db=_0xd9ec,_0x54864a=new THREE[(_0x1221db(0x160))](),_0x3d12bd=makas_içi_bağ_kirişi_üstSol(_0x14cc24,ÇatıBağKirişAra_Yatay,ÇatıBağKirişSayısı),_0x41b334=makas_içi_bağ_kirişi_üstSağ(_0x14cc24,ÇatıBağKirişAra_Yatay,ÇatıBağKirişSayısı);return _0x54864a['add'](_0x3d12bd),_0x54864a[_0x1221db(0x152)](_0x41b334),_0x54864a;}export function makas_içi_bağ_kirişi_üstSol(_0x31cf72,_0x2ae596,_0x36f650){const _0x31d737=_0xd9ec,_0x4e392a=new THREE[(_0x31d737(0x160))](),_0x23003e=DÜŞEYHOLGENİŞLİĞİ-0.2,_0xf258ff=Math['ceil'](_0x36f650/0x2);for(let _0x426573=0x1;_0x426573<_0x36f650+0x1;_0x426573++){const _0x39bb95=Yatay_Kiriş_Profil_2(_0x23003e,BağKirişiMalzeme2,_0x31cf72);_0x39bb95[_0x31d737(0x157)][_0x31d737(0x17e)](_0x426573*_0x2ae596,_0x31cf72+MYÜKS+_0x426573*ÇatıBağKirişAra_Yekseni,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x39bb95[_0x31d737(0x16e)]['x']=Math['PI']/0x2,_0x4e392a[_0x31d737(0x152)](_0x39bb95);}return _0x4e392a;}export function makas_içi_bağ_kirişi_üstSağ(_0x299a78,_0x4407fa,_0x7aa863){const _0x34d570=_0xd9ec,_0x911de4=new THREE['Group'](),_0x498d51=DÜŞEYHOLGENİŞLİĞİ-0.2,_0x1f9403=Math[_0x34d570(0x12b)](_0x7aa863/0x2);for(let _0x5366d7=0x1;_0x5366d7<_0x7aa863;_0x5366d7++){const _0x5ea7d4=Yatay_Kiriş_Profil_2(_0x498d51,BağKirişiMalzeme2,_0x299a78);_0x5ea7d4[_0x34d570(0x157)][_0x34d570(0x17e)](_0x4407fa*_0x7aa863+_0x5366d7*_0x4407fa,_0x299a78+MYÜKS+_0x7aa863*ÇatıBağKirişAra_Yekseni-_0x5366d7*ÇatıBağKirişAra_Yekseni,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x5ea7d4[_0x34d570(0x16e)]['x']=Math['PI']/0x2,_0x911de4[_0x34d570(0x152)](_0x5ea7d4);}return _0x911de4;}function _0x40a3(){const _0x31cb11=['4501016TPoTLA','normalize','applyQuaternion','setAttribute','middle','1953259jAEArh','repeat','TextureLoader','load','esaszeminA','width','TorusGeometry','computeVertexNormals','measureText','RepeatWrapping','getContext','518064KXtxvN','3025630ZRwRMG','PlaneGeometry','MeshStandardMaterial','BoxGeometry','px\x20Arial','wrapT','floor','11OJbQRI','fillText','attributes','add','ShapeGeometry','Float32BufferAttribute','lineTo','applyMatrix4','position','MeshBasicMaterial','setFromUnitVectors','154OsEwbp','VinçKirişYüksektenİniş','ArkaKaplamaSınır\x20','atan2','BufferGeometry','DoubleSide','Group','sqrt','array','textBaseline','199MsleKI','CanvasTexture','6Kfwmkk','multiplyScalar','LineBasicMaterial','Matrix4','CylinderGeometry','canvas','font','836145jtzQqS','rotation','setIndex','distanceTo','Vector3','6zIslfs','YATAYHOLGENİŞLİĞİ:','atan','KOLONEBAT:','mesh','ÇatıBağKirişSayısı\x20/\x202','makeScale','log','9MnMVLo','WireframeGeometry','MathUtils','1253836VMHPws','set','C\x20\x20\x20R\x20\x20\x20A\x20\x20\x20N\x20\x20\x20E','wrapS','Mesh','ceil','pow','LineSegments','degToRad','copy','Quaternion','createElement','setFromPoints','moveTo','clone','YATAYHOLSAYISI:','setPosition'];_0x40a3=function(){return _0x31cb11;};return _0x40a3();}export function makas_içi_bağ_kirişi_alt(_0x2457a9,_0x3f1f0a,_0x9f195c){const _0x1a1512=_0xd9ec,_0x38941e=new THREE[(_0x1a1512(0x160))](),_0x77651c=DÜŞEYHOLGENİŞLİĞİ-0.2,_0x1c2f60=Math[_0x1a1512(0x12b)](_0x9f195c/0x2);for(let _0x288670=0x1;_0x288670<_0x9f195c*0x2;_0x288670++){const _0xffbd0c=Yatay_Kiriş_Profil_2(_0x77651c,BağKirişiMalzeme2,_0x2457a9);_0xffbd0c[_0x1a1512(0x157)][_0x1a1512(0x17e)](_0x288670*_0x3f1f0a,_0x2457a9,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0xffbd0c[_0x1a1512(0x16e)]['x']=Math['PI']/0x2,_0x38941e[_0x1a1512(0x152)](_0xffbd0c);}return _0x38941e;}export function ÇaprazYan1Aks(_0x36efa3){const _0x56e7b2=_0xd9ec,_0x287160=new THREE[(_0x56e7b2(0x160))]();let _0x1b2fe8;_0x36efa3<0x6?_0x1b2fe8=_0x36efa3:_0x1b2fe8=ÇaprazYükseklik;const _0x148e36=new THREE[(_0x56e7b2(0x160))](),_0x25e6ad=new THREE[(_0x56e7b2(0x171))](0x0,0x0,0x0),_0x1c647f=new THREE[(_0x56e7b2(0x171))](0x0,_0x1b2fe8,-DÜŞEYHOLGENİŞLİĞİ),_0x111525=new THREE[(_0x56e7b2(0x171))](0x0,0x0,-DÜŞEYHOLGENİŞLİĞİ),_0x492cd0=new THREE[(_0x56e7b2(0x171))](0x0,_0x1b2fe8,0x0),_0x2cb8b2=_0x25e6ad[_0x56e7b2(0x170)](_0x1c647f),_0x2b2f04=YatayÇaprazProfil(_0x36efa3,_0x2cb8b2)[_0x56e7b2(0x176)];_0x2b2f04[_0x56e7b2(0x157)][_0x56e7b2(0x12f)](_0x25e6ad);const _0x4cd17b=Math[_0x56e7b2(0x15d)](_0x1c647f['y']-_0x25e6ad['y'],_0x1c647f['z']-_0x25e6ad['z']);_0x2b2f04['rotation']['x']=_0x4cd17b,_0x2b2f04[_0x56e7b2(0x16e)]['y']=0x5a*(Math['PI']/0xb4),_0x2b2f04[_0x56e7b2(0x157)][_0x56e7b2(0x17e)](0x0,_0x1b2fe8/0x2,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x148e36[_0x56e7b2(0x152)](_0x2b2f04);const _0x45795b=_0x111525['distanceTo'](_0x492cd0),_0x4d77db=YatayÇaprazProfil(_0x36efa3,_0x45795b)[_0x56e7b2(0x176)];_0x4d77db[_0x56e7b2(0x157)]['copy'](_0x111525);const _0x2d6cbe=Math['atan2'](_0x492cd0['y']-_0x111525['y'],_0x492cd0['z']-_0x111525['z']);_0x4d77db[_0x56e7b2(0x16e)]['x']=_0x2d6cbe,_0x4d77db[_0x56e7b2(0x16e)]['y']=0x5a*(Math['PI']/0xb4),_0x4d77db['position'][_0x56e7b2(0x17e)](0x0,_0x1b2fe8/0x2,-DÜŞEYHOLGENİŞLİĞİ/0x2),_0x148e36[_0x56e7b2(0x152)](_0x4d77db);if(_0x36efa3>=0x6)for(let _0x35bcc6=0x0;_0x35bcc6<YanÇaprazDüşeyAdet-0x1;_0x35bcc6++){const _0x3c5229=_0x148e36[_0x56e7b2(0x134)]();_0x3c5229[_0x56e7b2(0x157)][_0x56e7b2(0x17e)](0x0,_0x35bcc6*ÇaprazYükseklik,0x0),_0x287160['add'](_0x3c5229);}else{if(_0x36efa3<0x6)for(let _0x182837=0x0;_0x182837<0x1;_0x182837++){const _0x19a2b8=_0x148e36[_0x56e7b2(0x134)]();_0x19a2b8[_0x56e7b2(0x157)]['set'](0x0,_0x182837*ÇaprazYükseklik,0x0),_0x287160[_0x56e7b2(0x152)](_0x19a2b8);}}return _0x287160;}export function ÇaprazYan1AksBütün(_0x2fd713){const _0x1633ed=_0xd9ec,_0x42bb06=new THREE[(_0x1633ed(0x160))]();for(let _0x45cda7=0x0;_0x45cda7<YanÇaprazAksadet;_0x45cda7++){const _0x5ac9e8=ÇaprazYan1Aks(_0x2fd713);_0x5ac9e8[_0x1633ed(0x157)][_0x1633ed(0x17e)](0x0,0x0,-_0x45cda7*0x2*DÜŞEYHOLGENİŞLİĞİ),_0x42bb06[_0x1633ed(0x152)](_0x5ac9e8);}return _0x42bb06;}export function ÇaprazYanKomple(_0x5d0d0f){const _0x3724b2=_0xd9ec,_0x122f01=new THREE['Group']();for(let _0x3afd9f=0x0;_0x3afd9f<YATAYHOLSAYISI+0x1;_0x3afd9f++){const _0xaa4564=ÇaprazYan1AksBütün(_0x5d0d0f);_0xaa4564[_0x3724b2(0x157)][_0x3724b2(0x17e)](_0x3afd9f*YATAYHOLGENİŞLİĞİ,0x0,0x0),_0x122f01[_0x3724b2(0x152)](_0xaa4564);}return _0x122f01;}export function ÇatıÇaprazTekSol(_0x13e4aa){const _0x1419c9=_0xd9ec,_0x399e21=new THREE[(_0x1419c9(0x160))](),_0x1d655b=new THREE[(_0x1419c9(0x171))](0x0,_0x13e4aa+MYÜKS,0x0),_0x50c72e=new THREE['Vector3'](ÇatıBağKirişAra_Yatay,_0x13e4aa+MYÜKS+ÇatıBağKirişAra_Yekseni,-DÜŞEYHOLGENİŞLİĞİ),_0x921854=_0x1d655b[_0x1419c9(0x170)](_0x50c72e),_0x4be57c=ÇatıÇaprazProfil(_0x13e4aa,_0x921854)[_0x1419c9(0x176)],_0x2ac053=new THREE['Vector3']()['addVectors'](_0x1d655b,_0x50c72e)[_0x1419c9(0x167)](0.5);_0x4be57c[_0x1419c9(0x157)][_0x1419c9(0x12f)](_0x2ac053);const _0x3ca929=new THREE[(_0x1419c9(0x171))]()['subVectors'](_0x50c72e,_0x1d655b)['normalize'](),_0x3af215=new THREE[(_0x1419c9(0x130))]();return _0x3af215[_0x1419c9(0x159)](new THREE['Vector3'](0x0,0x1,0x0),_0x3ca929),_0x4be57c[_0x1419c9(0x139)](_0x3af215),_0x399e21[_0x1419c9(0x152)](_0x4be57c),_0x399e21;}export function ÇatıÇaprazTek2Sol(_0x27f7b3){const _0x2551cb=_0xd9ec,_0x725b90=new THREE['Group'](),_0x2328a8=new THREE['Vector3'](0x0,_0x27f7b3+MYÜKS,-DÜŞEYHOLGENİŞLİĞİ),_0x2ac3f2=new THREE['Vector3'](ÇatıBağKirişAra_Yatay,_0x27f7b3+MYÜKS+ÇatıBağKirişAra_Yekseni,0x0),_0x121746=_0x2328a8['distanceTo'](_0x2ac3f2),_0xbc5015=ÇatıÇaprazProfil(_0x27f7b3,_0x121746)['mesh'],_0x55f2a9=new THREE[(_0x2551cb(0x171))]()['addVectors'](_0x2328a8,_0x2ac3f2)[_0x2551cb(0x167)](0.5);_0xbc5015['position'][_0x2551cb(0x12f)](_0x55f2a9);const _0x509d05=new THREE[(_0x2551cb(0x171))]()['subVectors'](_0x2ac3f2,_0x2328a8)[_0x2551cb(0x138)](),_0x5edc03=new THREE['Quaternion']();return _0x5edc03[_0x2551cb(0x159)](new THREE[(_0x2551cb(0x171))](0x0,0x1,0x0),_0x509d05),_0xbc5015['applyQuaternion'](_0x5edc03),_0x725b90[_0x2551cb(0x152)](_0xbc5015),_0x725b90;}export function ÇatıÇapraz1AraSol(_0x1a875a){const _0xac0aa4=_0xd9ec,_0x1bdf7c=new THREE[(_0xac0aa4(0x160))](),_0x4ca9c4=ÇatıÇaprazTekSol(_0x1a875a),_0x566fb6=ÇatıÇaprazTek2Sol(_0x1a875a);return _0x1bdf7c[_0xac0aa4(0x152)](_0x4ca9c4),_0x1bdf7c[_0xac0aa4(0x152)](_0x566fb6),_0x1bdf7c;}function _0xd9ec(_0x1cf9e4,_0x5264cb){const _0x40a330=_0x40a3();return _0xd9ec=function(_0xd9ecdf,_0x38b2d9){_0xd9ecdf=_0xd9ecdf-0x128;let _0x502ce6=_0x40a330[_0xd9ecdf];return _0x502ce6;},_0xd9ec(_0x1cf9e4,_0x5264cb);}export function ÇatıÇapraz1SolMakas(_0x3b23fa){const _0x586857=_0xd9ec,_0x2738af=new THREE[(_0x586857(0x160))](),_0x3c1940=Math[_0x586857(0x14e)](ÇatıBağKirişSayısı/0x2);let _0x2f67aa;ÇatıBağKirişSayısı/0x2<0x1?_0x2f67aa=0x1:_0x2f67aa=ÇatıBağKirişSayısı/0x2+0x1;console[_0x586857(0x179)](_0x586857(0x177),ÇatıBağKirişSayısı/0x2);for(let _0x111f0a=0x0;_0x111f0a<_0x2f67aa;_0x111f0a++){const _0x56acc5=ÇatıÇapraz1AraSol(_0x3b23fa);_0x56acc5[_0x586857(0x157)]['x']=_0x111f0a*ÇatıBağKirişAra_Yatay,_0x56acc5['position']['y']=_0x111f0a*ÇatıBağKirişAra_Yekseni,_0x2738af[_0x586857(0x152)](_0x56acc5);}return _0x2738af;}export function ÇatıÇapraz1Ayna(_0x2a0941){const _0x9a0a8e=_0xd9ec,_0x407101=new THREE['Group'](),_0xf7e79f=ÇatıÇapraz1SolMakas(_0x2a0941);_0x407101[_0x9a0a8e(0x152)](_0xf7e79f);const _0x3cc09c=_0xf7e79f[_0x9a0a8e(0x134)]();return _0x3cc09c[_0x9a0a8e(0x157)]['x']=YATAYHOLGENİŞLİĞİ,_0x3cc09c[_0x9a0a8e(0x157)]['z']=-DÜŞEYHOLGENİŞLİĞİ,_0x3cc09c[_0x9a0a8e(0x16e)]['y']=-Math['PI'],_0x407101['add'](_0x3cc09c),_0x407101;}export function ÇatıÇapraz1MakasGrup(_0x3e86e9){const _0x2ed53b=_0xd9ec,_0x5da074=new THREE[(_0x2ed53b(0x160))](),_0x15a2c3=ÇatıÇapraz1SolMakas(_0x3e86e9);_0x5da074['add'](_0x15a2c3);const _0x506d4f=ÇatıÇapraz1Ayna(_0x3e86e9,YATAYHOLGENİŞLİĞİ,DÜŞEYHOLGENİŞLİĞİ);return _0x5da074[_0x2ed53b(0x152)](_0x506d4f),_0x5da074;}export function ÇatıÇaprazTam(_0x31983f){const _0x5d4051=_0xd9ec,_0x4db56b=new THREE[(_0x5d4051(0x160))]();for(let _0x227c3c=0x0;_0x227c3c<ÇatıÇaprazZekseniAdet;_0x227c3c++){for(let _0x4acfef=0x0;_0x4acfef<YATAYHOLSAYISI;_0x4acfef++){const _0xbbe5e4=ÇatıÇapraz1MakasGrup(_0x31983f,YATAYHOLGENİŞLİĞİ,DÜŞEYHOLGENİŞLİĞİ);_0xbbe5e4[_0x5d4051(0x157)]['x']=_0x4acfef*YATAYHOLGENİŞLİĞİ,_0xbbe5e4[_0x5d4051(0x157)]['z']=_0x227c3c*-ÇatıÇaprazZekseniAra,_0x4db56b[_0x5d4051(0x152)](_0xbbe5e4);}}return _0x4db56b;}export function Totem1(_0x1ce767,_0x4cc851=null){const _0x10243a=_0xd9ec,_0x1db66a=_0x1ce767+0x2,_0x2ad5e1=new THREE[(_0x10243a(0x16a))](0.3,0.3,_0x1db66a,0x20),_0x5f0f11=new THREE[(_0x10243a(0x14a))]({'color':0x761453}),_0x2ce455=new THREE['Mesh'](_0x2ad5e1,_0x5f0f11);_0x2ce455[_0x10243a(0x157)][_0x10243a(0x17e)](-0x6,_0x1db66a/0x2,0x0);const _0x302038=_0x4cc851||new THREE[(_0x10243a(0x13e))]()[_0x10243a(0x13f)]('textures/logo.png'),_0x3c4f95=new THREE[(_0x10243a(0x14b))](0x5,0x3,0.8),_0x261f7a=new THREE['MeshBasicMaterial']({'map':_0x302038}),_0x3d01ad=new THREE[(_0x10243a(0x158))]({'color':0x5f6070}),_0x4a7f36=[_0x3d01ad,_0x3d01ad,_0x3d01ad,_0x3d01ad,_0x261f7a,_0x261f7a],_0x1256ad=new THREE['Mesh'](_0x3c4f95,_0x4a7f36);_0x1256ad[_0x10243a(0x157)]['set'](-0x6,_0x1db66a,0x0);const _0x1509be=new THREE['Group']();return _0x1509be[_0x10243a(0x152)](_0x2ce455),_0x1509be['add'](_0x1256ad),_0x1509be;}export function CepheKaplamaSağSol(_0x247f6a,_0x4a96e2,_0x1b0b07){const _0x2b5077=_0xd9ec,_0x4ecc25=_0x4a96e2+MYÜKS,_0x2ef698=createKaplamaTexture(),_0x37c30c=createKaplamaTexture(_0x1b0b07*0x2,0x1),_0x2f912d=createKaplamaTexture(),_0x2a4e60=createKaplamaTexture(_0x1b0b07*0x2,0x1),_0x18c5f9=new THREE[(_0x2b5077(0x149))](_0x247f6a+ArkaKaplamaSınır+0.1,_0x4ecc25+MK_EN+0.15),_0xb22750=new THREE[(_0x2b5077(0x158))]({'map':_0x2ef698,'side':THREE[_0x2b5077(0x15f)],'transparent':!![],'opacity':0.5}),_0x30f3f6=new THREE[(_0x2b5077(0x12a))](_0x18c5f9,_0xb22750);_0x30f3f6[_0x2b5077(0x157)][_0x2b5077(0x17e)](-KOLONEBAT/0x2-0.05,_0x4ecc25/0x2,-_0x247f6a/0x2),_0x30f3f6[_0x2b5077(0x16e)]['y']=Math['PI']/0x2,_0x2ef698[_0x2b5077(0x13d)][_0x2b5077(0x17e)](_0x247f6a,0x1);const _0x31fdd7=_0x30f3f6['clone'](),_0x2cd099=new THREE[(_0x2b5077(0x169))]()['makeScale'](-0x1,0x1,0x1);_0x2cd099['setPosition'](new THREE[(_0x2b5077(0x171))](_0x1b0b07,0x0,0x0)),_0x31fdd7[_0x2b5077(0x156)](_0x2cd099);const _0x520756=new THREE[(_0x2b5077(0x149))](_0x1b0b07+KOLONEBAT+0.1,_0x4ecc25+MK_EN),_0x5dde56=new THREE[(_0x2b5077(0x158))]({'map':_0x37c30c,'side':THREE['DoubleSide'],'transparent':!![],'opacity':0.5});_0x37c30c[_0x2b5077(0x13d)][_0x2b5077(0x17e)](YATAYHOLGENİŞLİĞİ*0x2,0x1);const _0xda85af=new THREE[(_0x2b5077(0x12a))](_0x520756,_0x5dde56);_0xda85af['position']['set'](_0x1b0b07/0x2,_0x4ecc25/0x2,-_0x247f6a-ArkaKaplamaSınır/0x2-0.05),console[_0x2b5077(0x179)](_0x2b5077(0x15c),ArkaKaplamaSınır);const _0x4a6591=new THREE[(_0x2b5077(0x158))]({'map':_0x2f912d,'side':THREE[_0x2b5077(0x15f)],'transparent':!![],'opacity':0.5}),_0xb06252=new THREE['Shape']();_0xb06252[_0x2b5077(0x133)](0x0,0x0),_0xb06252[_0x2b5077(0x155)](YATAYHOLGENİŞLİĞİ/0x2,BinaYükseklik-_0x4a96e2-MYÜKS),_0xb06252[_0x2b5077(0x155)](YATAYHOLGENİŞLİĞİ,0x0),_0xb06252[_0x2b5077(0x155)](0x0,0x0);const _0x53c428=new THREE[(_0x2b5077(0x153))](_0xb06252);_0x2f912d[_0x2b5077(0x13d)][_0x2b5077(0x17e)](YATAYHOLGENİŞLİĞİ,0x1),_0x53c428['attributes']['uv'][_0x2b5077(0x162)][0x0]=0x0,_0x53c428[_0x2b5077(0x151)]['uv']['array'][0x1]=0x0,_0x53c428[_0x2b5077(0x151)]['uv'][_0x2b5077(0x162)][0x2]=0.5,_0x53c428['attributes']['uv'][_0x2b5077(0x162)][0x3]=0x1,_0x53c428[_0x2b5077(0x151)]['uv'][_0x2b5077(0x162)][0x4]=0x1,_0x53c428[_0x2b5077(0x151)]['uv'][_0x2b5077(0x162)][0x5]=0x0;const _0x4a2ee1=new THREE[(_0x2b5077(0x12a))](_0x53c428,_0x4a6591);_0x4a2ee1['position']['set'](0x0,_0x4a96e2+MYÜKS+MK_EN/0x2,-_0x247f6a-KOLONEBAT-0.1);const _0x53bd6b=_0x4a2ee1[_0x2b5077(0x134)](),_0x38d079=new THREE[(_0x2b5077(0x169))]()[_0x2b5077(0x178)](-0x1,0x1,0x1);_0x38d079[_0x2b5077(0x136)](new THREE[(_0x2b5077(0x171))](YATAYHOLGENİŞLİĞİ,0x0,0x0)),_0x53bd6b[_0x2b5077(0x156)](_0x2cd099);const _0x593627=new THREE[(_0x2b5077(0x160))]();return _0x593627['add'](_0x30f3f6,_0x31fdd7,_0xda85af,_0x4a2ee1,_0x53bd6b),_0x593627;}export function SolÇatıKaplama(_0x5e18d5,_0x2dad96){const _0x1ac88b=_0xd9ec,_0xa00251=[new THREE[(_0x1ac88b(0x171))](-KOLONEBAT,_0x5e18d5+MYÜKS+MK_EN,0x0),new THREE['Vector3'](YATAYHOLGENİŞLİĞİ/0x2,BinaYükseklik+MK_EN,0x0),new THREE[(_0x1ac88b(0x171))](YATAYHOLGENİŞLİĞİ/0x2,BinaYükseklik+MK_EN,-_0x2dad96-KOLONEBAT/0x2),new THREE[(_0x1ac88b(0x171))](-KOLONEBAT,_0x5e18d5+MYÜKS+MK_EN,-_0x2dad96-KOLONEBAT/0x2)],_0x1fbb6c=new THREE[(_0x1ac88b(0x15e))]()[_0x1ac88b(0x132)](_0xa00251);_0x1fbb6c[_0x1ac88b(0x16f)]([0x0,0x1,0x2,0x2,0x3,0x0]),_0x1fbb6c[_0x1ac88b(0x143)]();const _0x3942cd=[0x1,0x1,0x1,0x0,0x0,0x0,0x0,0x1];_0x1fbb6c[_0x1ac88b(0x13a)]('uv',new THREE[(_0x1ac88b(0x154))](_0x3942cd,0x2));const _0x23dce2=createKaplamaTexture2(_0x2dad96,0x1),_0x5a05b9=new THREE['MeshBasicMaterial']({'map':_0x23dce2,'side':THREE[_0x1ac88b(0x15f)],'transparent':!![],'opacity':0.5}),_0x4edd5b=new THREE[(_0x1ac88b(0x12a))](_0x1fbb6c,_0x5a05b9);_0x23dce2[_0x1ac88b(0x13d)][_0x1ac88b(0x17e)](_0x2dad96,0x1);const _0x4815e3=new THREE[(_0x1ac88b(0x160))]();_0x4815e3['add'](_0x4edd5b);return _0x4815e3;return solCatiKaplama;}export function VinçKirişi(_0x5b4734,_0x13dc6d){const _0x4d5f9c=_0xd9ec,_0x77534=YATAYHOLGENİŞLİĞİ-KOLONEBAT,_0x2d555b=0.7,_0x1d878e=0.3,_0x2f8b04=0xffff00,_0x4338f2=0.75,_0x46a17c=-0x2,_0x47c2a8=0x1,_0x5a72e6=new THREE[(_0x4d5f9c(0x160))](),_0x3e253d=new THREE[(_0x4d5f9c(0x14b))](_0x77534,_0x2d555b,_0x1d878e),_0x3d822e=new THREE[(_0x4d5f9c(0x14a))]({'color':_0x2f8b04}),_0x496524=new THREE[(_0x4d5f9c(0x168))]({'color':0x0});for(let _0x29b02a=0x0;_0x29b02a<YATAYHOLSAYISI;_0x29b02a++){for(let _0x1dcdcf=0x0;_0x1dcdcf<0x2;_0x1dcdcf++){const _0x5edab9=new THREE[(_0x4d5f9c(0x12a))](_0x3e253d,_0x3d822e);_0x5edab9[_0x4d5f9c(0x157)]['set'](YATAYHOLGENİŞLİĞİ/0x2+_0x29b02a*YATAYHOLGENİŞLİĞİ,_0x5b4734-_0x4338f2,_0x46a17c+_0x1dcdcf*_0x47c2a8);const _0x43987=new THREE[(_0x4d5f9c(0x12d))](new THREE[(_0x4d5f9c(0x17b))](_0x3e253d),_0x496524);_0x5edab9[_0x4d5f9c(0x152)](_0x43987),_0x5a72e6[_0x4d5f9c(0x152)](_0x5edab9);}}for(let _0x5253b4=0x0;_0x5253b4<YATAYHOLSAYISI;_0x5253b4++){const _0x38aebc=VincKancasi();_0x38aebc['scale'][_0x4d5f9c(0x17e)](0.3,0.3,0.7),_0x38aebc[_0x4d5f9c(0x157)][_0x4d5f9c(0x17e)](YATAYHOLGENİŞLİĞİ/0x2+_0x5253b4*YATAYHOLGENİŞLİĞİ,_0x5b4734-_0x4338f2-kancatoplamyükseklik/0x2,_0x46a17c+_0x47c2a8/0x2),_0x5a72e6['add'](_0x38aebc);}const _0x1cc56f=document[_0x4d5f9c(0x131)](_0x4d5f9c(0x16b));_0x1cc56f[_0x4d5f9c(0x141)]=0x2bc,_0x1cc56f['height']=0x12c;const _0x1df13b=_0x1cc56f[_0x4d5f9c(0x146)]('2d');_0x1df13b['fillStyle']='black';const _0x42f22c=0x96,_0x3f2a8a=_0x2d555b*_0x42f22c;_0x1df13b[_0x4d5f9c(0x16c)]=_0x3f2a8a+_0x4d5f9c(0x14c);const _0x28dd16=_0x4d5f9c(0x128),_0x31636c=_0x1df13b[_0x4d5f9c(0x144)](_0x28dd16)[_0x4d5f9c(0x141)],_0x36fde5=(_0x1cc56f[_0x4d5f9c(0x141)]-_0x31636c)/0x2;_0x1df13b[_0x4d5f9c(0x163)]=_0x4d5f9c(0x13b);const _0x5e8b6c=_0x1cc56f['height']/0x2;_0x1df13b[_0x4d5f9c(0x150)](_0x28dd16,_0x36fde5,_0x5e8b6c);const _0x31930e=new THREE[(_0x4d5f9c(0x165))](_0x1cc56f),_0x233b70=new THREE[(_0x4d5f9c(0x158))]({'map':_0x31930e,'transparent':!![]});for(let _0x28fd46=0x0;_0x28fd46<YATAYHOLSAYISI;_0x28fd46++){const _0x36d112=new THREE[(_0x4d5f9c(0x12a))](new THREE[(_0x4d5f9c(0x149))](0x5,2.5),_0x233b70);_0x36d112[_0x4d5f9c(0x157)][_0x4d5f9c(0x17e)](YATAYHOLGENİŞLİĞİ/0x2+_0x28fd46*YATAYHOLGENİŞLİĞİ,_0x5b4734-_0x4338f2,_0x46a17c+1.5),_0x5a72e6[_0x4d5f9c(0x152)](_0x36d112);}const _0x3c71d4=0.3,_0x2628dc=0.4,_0x5dbc37=new THREE[(_0x4d5f9c(0x160))](),_0x3d0d4f=new THREE[(_0x4d5f9c(0x14b))](_0x3c71d4,_0x2628dc,_0x13dc6d),_0x3205d4=new THREE['MeshStandardMaterial']({'color':0x575758}),_0x30920=new THREE['Mesh'](_0x3d0d4f,_0x3205d4),_0x1eea56=new THREE['LineSegments'](new THREE['WireframeGeometry'](_0x3d0d4f),_0x496524);_0x30920['add'](_0x1eea56),_0x30920[_0x4d5f9c(0x157)][_0x4d5f9c(0x17e)](KOLONEBAT/0x2+0.05+_0x3c71d4/0x2,_0x5b4734-_0x4338f2-_0x2d555b/0x2-_0x2628dc/0x2,-_0x13dc6d/0x2),_0x5dbc37['add'](_0x30920);const _0x3bec1c=_0x30920[_0x4d5f9c(0x134)]();_0x3bec1c['position']['x']=YATAYHOLGENİŞLİĞİ-KOLONEBAT/0x2-0.05-_0x3c71d4/0x2,_0x5dbc37['add'](_0x3bec1c);const _0x5b06cd=new THREE[(_0x4d5f9c(0x160))]();for(let _0x40c721=0x0;_0x40c721<YATAYHOLSAYISI;_0x40c721++){const _0x4766bc=_0x5dbc37[_0x4d5f9c(0x134)]();_0x4766bc[_0x4d5f9c(0x157)]['x']=_0x40c721*YATAYHOLGENİŞLİĞİ,_0x5b06cd[_0x4d5f9c(0x152)](_0x4766bc);}return _0x5a72e6[_0x4d5f9c(0x152)](_0x5b06cd),console[_0x4d5f9c(0x179)]('Vinç\x20Kiriş\x20Genişliği:',_0x77534),console[_0x4d5f9c(0x179)](_0x4d5f9c(0x15b),_0x4338f2),console[_0x4d5f9c(0x179)]('B:',_0x13dc6d),console[_0x4d5f9c(0x179)](_0x4d5f9c(0x135),YATAYHOLSAYISI),console[_0x4d5f9c(0x179)](_0x4d5f9c(0x173),YATAYHOLGENİŞLİĞİ),console[_0x4d5f9c(0x179)](_0x4d5f9c(0x175),KOLONEBAT),_0x5a72e6;}export function VincKancasi(){const _0x201583=_0xd9ec,_0x331947=new THREE['Group'](),_0x34a804=new THREE[(_0x201583(0x142))](0x1,0.15,0x10,0x64,Math['PI']*1.5),_0x20d71c=new THREE[(_0x201583(0x14a))]({'color':0x808080,'metalness':0.6,'roughness':0.4}),_0x394b88=new THREE[(_0x201583(0x12a))](_0x34a804,_0x20d71c);_0x394b88['rotation']['z']=Math['PI']/0x2,_0x331947[_0x201583(0x152)](_0x394b88);const _0x1afc16=new THREE[(_0x201583(0x16a))](0.2,0.2,0x1,0x20),_0x4b8cf4=new THREE[(_0x201583(0x14a))]({'color':0x808080,'metalness':0.6,'roughness':0.4}),_0x21713d=new THREE[(_0x201583(0x12a))](_0x1afc16,_0x4b8cf4);_0x21713d['position']['y']=0x1,_0x331947[_0x201583(0x152)](_0x21713d);const _0x1d91eb=new THREE[(_0x201583(0x142))](0.3,0.1,0x10,0x64),_0x39b382=new THREE[(_0x201583(0x12a))](_0x1d91eb,_0x4b8cf4);return _0x39b382['position']['y']=1.6,_0x39b382[_0x201583(0x16e)]['x']=Math['PI']/0x2,_0x331947[_0x201583(0x152)](_0x39b382),kancatoplamyükseklik=0x1,_0x331947;}