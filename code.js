var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ac5af33d-07d6-4f72-a159-b1fd2c4f98ea","c12517a7-ec34-436e-b5c7-6041f56de271","c7f229f9-3153-40fc-8037-48350a50afa2","5225275d-afe5-41a9-9307-f80cfecd20e4","263cdc57-4fd2-41cf-a9a4-ef467ebe13b0","00b3dbf2-52b5-456d-927c-1f726dfee9de","4f8c5f23-a63e-471a-b52c-c8b3b6a86cd3","e56bd7fb-bb41-4a88-ae22-e8715c27fd58","f7ce7377-4966-4f6f-9079-787809a728c4","e7c3d0e7-bf84-4648-8fc2-cf8e907bfb0b","97600b83-c2d3-4e9f-8224-d6860f64af4b","60f4521f-5439-40cc-9722-6203274936cb","522c0df3-296f-4bd6-bf6f-1be554c5b196","ce5973f2-c4f3-4261-b0e9-133b74d021ad","2080d5e4-7844-47c9-a1c7-f408960e70c9","ad34cbdd-4e08-4090-9bf1-413fb897040d"],"propsByKey":{"ac5af33d-07d6-4f72-a159-b1fd2c4f98ea":{"name":"wall1","sourceUrl":null,"frameSize":{"x":5,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"2PTS1V_Z_1GL8fPw1tZD9CkrWMW3oDc0","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":210},"rootRelativePath":"assets/ac5af33d-07d6-4f72-a159-b1fd2c4f98ea.png"},"c12517a7-ec34-436e-b5c7-6041f56de271":{"name":"wall","sourceUrl":"assets/v3/animations/alo8QaYm7wwtBVEPugiICa4OpN8y7xCDYxlVGKL42BM/c12517a7-ec34-436e-b5c7-6041f56de271.png","frameSize":{"x":270,"y":9},"frameCount":1,"looping":true,"frameDelay":4,"version":"rVLeWc.uNDz5ShQ.OhOORjbR5LvKa7VJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":9},"rootRelativePath":"assets/v3/animations/alo8QaYm7wwtBVEPugiICa4OpN8y7xCDYxlVGKL42BM/c12517a7-ec34-436e-b5c7-6041f56de271.png"},"c7f229f9-3153-40fc-8037-48350a50afa2":{"name":"wall2","sourceUrl":null,"frameSize":{"x":38,"y":175},"frameCount":1,"looping":true,"frameDelay":12,"version":"PBuRXLdBDX0vmCpXcQcB7pJDMZrHtaEW","loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":175},"rootRelativePath":"assets/c7f229f9-3153-40fc-8037-48350a50afa2.png"},"5225275d-afe5-41a9-9307-f80cfecd20e4":{"name":"wall3","sourceUrl":"assets/v3/animations/alo8QaYm7wwtBVEPugiICa4OpN8y7xCDYxlVGKL42BM/5225275d-afe5-41a9-9307-f80cfecd20e4.png","frameSize":{"x":182,"y":17},"frameCount":1,"looping":true,"frameDelay":4,"version":"FahmOivqpk6B9Sfzsbr5BOqU8pvIQG3a","loadedFromSource":true,"saved":true,"sourceSize":{"x":182,"y":17},"rootRelativePath":"assets/v3/animations/alo8QaYm7wwtBVEPugiICa4OpN8y7xCDYxlVGKL42BM/5225275d-afe5-41a9-9307-f80cfecd20e4.png"},"263cdc57-4fd2-41cf-a9a4-ef467ebe13b0":{"name":"orange","sourceUrl":"assets/api/v1/animation-library/gamelab/71H3FJ50TzGCKBT.x8vB6h.4R80V4hZu/category_food/face_orange.png","frameSize":{"x":377,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"71H3FJ50TzGCKBT.x8vB6h.4R80V4hZu","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":377,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/71H3FJ50TzGCKBT.x8vB6h.4R80V4hZu/category_food/face_orange.png"},"00b3dbf2-52b5-456d-927c-1f726dfee9de":{"name":"ghost1","sourceUrl":null,"frameSize":{"x":79,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"VZgat1jKbgQLm60CI8cWX9DDcolezxAy","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":93},"rootRelativePath":"assets/00b3dbf2-52b5-456d-927c-1f726dfee9de.png"},"4f8c5f23-a63e-471a-b52c-c8b3b6a86cd3":{"name":"ghost2","sourceUrl":null,"frameSize":{"x":79,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"5pmCrOAQqAgmK4CbegPWyqpdAUIQ.Ygt","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":93},"rootRelativePath":"assets/4f8c5f23-a63e-471a-b52c-c8b3b6a86cd3.png"},"e56bd7fb-bb41-4a88-ae22-e8715c27fd58":{"name":"pacman2","sourceUrl":null,"frameSize":{"x":143,"y":156},"frameCount":1,"looping":true,"frameDelay":12,"version":"iUzMj5APpfIwAWYjRqYwI6sX4IqFopxI","loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":156},"rootRelativePath":"assets/e56bd7fb-bb41-4a88-ae22-e8715c27fd58.png"},"f7ce7377-4966-4f6f-9079-787809a728c4":{"name":"pacman1","sourceUrl":null,"frameSize":{"x":146,"y":155},"frameCount":1,"looping":true,"frameDelay":12,"version":"l2iKGUYTb0X_qCSAp20jr9TR45BVeqYB","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":155},"rootRelativePath":"assets/f7ce7377-4966-4f6f-9079-787809a728c4.png"},"e7c3d0e7-bf84-4648-8fc2-cf8e907bfb0b":{"name":"pacman3","sourceUrl":null,"frameSize":{"x":155,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"Kc2GrhdIowqm329uMGnMKZwGnMpeysl6","loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":146},"rootRelativePath":"assets/e7c3d0e7-bf84-4648-8fc2-cf8e907bfb0b.png"},"97600b83-c2d3-4e9f-8224-d6860f64af4b":{"name":"pacman4","sourceUrl":null,"frameSize":{"x":156,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"vqMw5jB.V6p2EmMxT8GLjb141pJ3hL_s","loadedFromSource":true,"saved":true,"sourceSize":{"x":156,"y":143},"rootRelativePath":"assets/97600b83-c2d3-4e9f-8224-d6860f64af4b.png"},"60f4521f-5439-40cc-9722-6203274936cb":{"name":"pacman","sourceUrl":null,"frameSize":{"x":114,"y":115},"frameCount":1,"looping":true,"frameDelay":12,"version":"bjOyT2bFP8pYQFysns3EoTL6h5ivCc7T","loadedFromSource":true,"saved":true,"sourceSize":{"x":114,"y":115},"rootRelativePath":"assets/60f4521f-5439-40cc-9722-6203274936cb.png"},"522c0df3-296f-4bd6-bf6f-1be554c5b196":{"name":"heart","sourceUrl":null,"frameSize":{"x":157,"y":123},"frameCount":1,"looping":true,"frameDelay":12,"version":"gF9iZX3I5UPxJPxs9lnNZZPst8t_1ZwF","loadedFromSource":true,"saved":true,"sourceSize":{"x":157,"y":123},"rootRelativePath":"assets/522c0df3-296f-4bd6-bf6f-1be554c5b196.png"},"ce5973f2-c4f3-4261-b0e9-133b74d021ad":{"name":"heart1","sourceUrl":null,"frameSize":{"x":157,"y":123},"frameCount":1,"looping":true,"frameDelay":12,"version":"vbVHM3GYONCEs4My4cGXTZQpTVxQDtSy","loadedFromSource":true,"saved":true,"sourceSize":{"x":157,"y":123},"rootRelativePath":"assets/ce5973f2-c4f3-4261-b0e9-133b74d021ad.png"},"2080d5e4-7844-47c9-a1c7-f408960e70c9":{"name":"winner","sourceUrl":null,"frameSize":{"x":135,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZtlRSTpF1aRtzN_aDH4F61BVCtpw.foC","loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":390},"rootRelativePath":"assets/2080d5e4-7844-47c9-a1c7-f408960e70c9.png"},"ad34cbdd-4e08-4090-9bf1-413fb897040d":{"name":"game over","sourceUrl":"assets/v3/animations/4_GMGChuZiTTO25z62hgsRRYUFaruKiZQU9hEDUj57M/ad34cbdd-4e08-4090-9bf1-413fb897040d.png","frameSize":{"x":227,"y":138},"frameCount":1,"looping":true,"frameDelay":4,"version":"BdRSbQ4JBUfyS8lFh..WCxelHjkWbXD0","loadedFromSource":true,"saved":true,"sourceSize":{"x":227,"y":138},"rootRelativePath":"assets/v3/animations/4_GMGChuZiTTO25z62hgsRRYUFaruKiZQU9hEDUj57M/ad34cbdd-4e08-4090-9bf1-413fb897040d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var SCORE=0;
var lives=2;

var life1 = createSprite(260,380);
life1.setAnimation("heart");
life1.scale=0.3;
var life2 = createSprite(315,380);
life2.setAnimation("heart1");
life2.scale=0.3;

var pacman1 = createSprite(200,210);
pacman1.setAnimation("pacman1");
pacman1.scale="0.1";
var ghost1 = createSprite(180,100);
ghost1.setAnimation("ghost1");
ghost1.scale="0.2";
var ghost2 = createSprite(220,100);
ghost2.setAnimation("ghost2");
ghost2.scale="0.2";
var pacman = createSprite(310,340);
pacman.setAnimation("pacman");
pacman.scale="0.3";

var wall1 = createSprite(100,10,2,60);
wall1.shapeColor="red";
var wall2 = createSprite(300,10,2,60);
wall2.shapeColor="red";
var wall3 = createSprite(195,35,120,2);
wall3.shapeColor="red";
var wall4 = createSprite(50,35,30,2);
wall4.shapeColor="red";
var wall5 = createSprite(35,60,2,50);
wall5.shapeColor="red";
var wall6 = createSprite(365,60,2,50);
wall6.shapeColor="red";
var wall7 = createSprite(350,35,30,2);
wall7.shapeColor="red";
var wall8 = createSprite(90,90,30,2);
wall8.shapeColor="red";
var wall9 = createSprite(310,90,30,2);
wall9.shapeColor="red";
var wall10 = createSprite(160,90,20,2);
wall10.shapeColor="red";
var wall10 = createSprite(240,90,20,2);
wall10.shapeColor="red";
var wall11 = createSprite(250,105,2,30);
wall11.shapeColor="red";
var wall12 = createSprite(150,105,2,30);
wall12.shapeColor="red";
var wall13 = createSprite(200,120,100,2);
wall13.shapeColor="red";
var wall14 = createSprite(90,120,30,2);
wall14.shapeColor="red";
var wall15 = createSprite(310,120,30,2);
wall15.shapeColor="red";
var wall16 = createSprite(35,150,2,50);
wall16.shapeColor="red";
var wall17 = createSprite(50,175,30,2);
wall17.shapeColor="red";
var wall18 = createSprite(365,150,2,50);
wall18.shapeColor="red";
var wall19 = createSprite(350,175,30,2);
wall19.shapeColor="red";
var wall20 = createSprite(100,200,2,50);
wall20.shapeColor="red";
var wall21 = createSprite(300,200,2,50);
wall21.shapeColor="red";
var wall22 = createSprite(195,175,120,2);
wall22.shapeColor="red";
var boundary1 = createSprite(5,1,800,2);
boundary1.shapeColor="blue";
var boundary2 = createSprite(5,1,2,450);
boundary2.shapeColor="blue";
var boundary3 = createSprite(5,225,800,2);
boundary3.shapeColor="blue";
var boundary4 = createSprite(395,1,2,450);
boundary4.shapeColor="blue";
var orange = createSprite(20,20);
orange.setAnimation("orange");
orange.scale=0.02;
var orange1 = createSprite(20,30);
orange1.setAnimation("orange");
orange1.scale=0.02;
var orange2 = createSprite(20,40);
orange2.setAnimation("orange");
orange2.scale=0.02;
var orange3 = createSprite(20,50);
orange3.setAnimation("orange");
orange3.scale=0.02;
var orange4 = createSprite(20,60);
orange4.setAnimation("orange");
orange4.scale=0.02;
var orange5 = createSprite(20,70);
orange5.setAnimation("orange");
orange5.scale=0.02;
var orange6 = createSprite(20,80);
orange6.setAnimation("orange");
orange6.scale=0.02;
var orange7 = createSprite(20,90);
orange7.setAnimation("orange");
orange7.scale=0.02;
var orange8 = createSprite(20,100);
orange8.setAnimation("orange");
orange8.scale=0.02;
var orange9 = createSprite(20,110);
orange9.setAnimation("orange");
orange9.scale=0.02;
var orange10 = createSprite(20,120);
orange10.setAnimation("orange");
orange10.scale=0.02;
var orange11 = createSprite(20,130);
orange11.setAnimation("orange");
orange11.scale=0.02;
var orange12 = createSprite(20,140);
orange12.setAnimation("orange");
orange12.scale=0.02;
var orange13 = createSprite(20,150);
orange13.setAnimation("orange");
orange13.scale=0.02;
var orange14 = createSprite(20,160);
orange14.setAnimation("orange");
orange14.scale=0.02;
var orange15 = createSprite(20,170);
orange15.setAnimation("orange");
orange15.scale=0.02;
var orange16 = createSprite(20,180);
orange16.setAnimation("orange");
orange16.scale=0.02;
var orange17 = createSprite(20,190);
orange17.setAnimation("orange");
orange17.scale=0.02;
var orange18 = createSprite(20,200);
orange18.setAnimation("orange");
orange18.scale=0.02;
var orange19 = createSprite(30,200);
orange19.setAnimation("orange");
orange19.scale=0.02;
var orange20 = createSprite(40,200);
orange20.setAnimation("orange");
orange20.scale=0.02;
var orange21 = createSprite(50,200);
orange21.setAnimation("orange");
orange21.scale=0.02;
var orange22 = createSprite(60,200);
orange22.setAnimation("orange");
orange22.scale=0.02;
var orange23 = createSprite(70,200);
orange23.setAnimation("orange");
orange23.scale=0.02;
var orange24 = createSprite(80,200);
orange24.setAnimation("orange");
orange24.scale=0.02;
var orange24 = createSprite(80,190);
orange24.setAnimation("orange");
orange24.scale=0.02;
var orange25 = createSprite(80,180);
orange25.setAnimation("orange");
orange25.scale=0.02;
var orange26 = createSprite(80,170);
orange26.setAnimation("orange");
orange26.scale=0.02;
var orange27 = createSprite(80,160);
orange27.setAnimation("orange");
orange27.scale=0.02;
var orange28 = createSprite(80,150);
orange28.setAnimation("orange");
orange28.scale=0.02;
var orange29 = createSprite(70,150);
orange29.setAnimation("orange");
orange29.scale=0.02;
var orange30 = createSprite(60,150);
orange30.setAnimation("orange");
orange30.scale=0.02;
var orange31 = createSprite(60,140);
orange31.setAnimation("orange");
orange31.scale=0.02;
var orange32 = createSprite(60,130);
orange32.setAnimation("orange");
orange32.scale=0.02;
var orange33 = createSprite(60,120);
orange33.setAnimation("orange");
orange33.scale=0.02;
var orange34 = createSprite(60,110);
orange34.setAnimation("orange");
orange34.scale=0.02;
var orange35 = createSprite(60,100);
orange35.setAnimation("orange");
orange35.scale=0.02;
var orange36 = createSprite(60,90);
orange36.setAnimation("orange");
orange36.scale=0.02;
var orange37 = createSprite(60,80);
orange37.setAnimation("orange");
orange37.scale=0.02;
var orange38 = createSprite(60,70);
orange38.setAnimation("orange");
orange38.scale=0.02;
var orange39 = createSprite(60,60);
orange39.setAnimation("orange");
orange39.scale=0.02;
var orange40 = createSprite(70,60);
orange40.setAnimation("orange");
orange40.scale=0.02;
var orange41 = createSprite(30,105);
orange41.setAnimation("orange");
orange41.scale=0.02;
var orange42 = createSprite(40,105);
orange42.setAnimation("orange");
orange42.scale=0.02;
var orange43 = createSprite(50,105);
orange43.setAnimation("orange");
orange43.scale=0.02;
var orange44 = createSprite(70,105);
orange44.setAnimation("orange");
orange44.scale=0.02;
var orange45 = createSprite(80,105);
orange45.setAnimation("orange");
orange45.scale=0.02;
var orange46 = createSprite(90,105);
orange46.setAnimation("orange");
orange46.scale=0.02;
var orange47 = createSprite(100,105);
orange47.setAnimation("orange");
orange47.scale=0.02;
var orange48 = createSprite(110,105);
orange48.setAnimation("orange");
orange48.scale=0.02;
var orange49 = createSprite(120,105);
orange49.setAnimation("orange");
orange49.scale=0.02;
var orange50 = createSprite(130,105);
orange50.setAnimation("orange");
orange50.scale=0.02;
var orange51 = createSprite(130,115);
orange51.setAnimation("orange");
orange51.scale=0.02;
var orange52 = createSprite(130,125);
orange52.setAnimation("orange");
orange52.scale=0.02;
var orange53 = createSprite(130,135);
orange53.setAnimation("orange");
orange53.scale=0.02;
var orange54 = createSprite(130,145);
orange54.setAnimation("orange");
orange54.scale=0.02;
var orange55 = createSprite(130,155);
orange55.setAnimation("orange");
orange55.scale=0.02;
var orange56 = createSprite(140,145);
orange56.setAnimation("orange");
orange56.scale=0.02;
var orange57 = createSprite(150,145);
orange57.setAnimation("orange");
orange57.scale=0.02;
var orange58 = createSprite(160,145);
orange58.setAnimation("orange");
orange58.scale=0.02;
var orange59 = createSprite(170,145);
orange59.setAnimation("orange");
orange59.scale=0.02;
var orange60 = createSprite(180,145);
orange60.setAnimation("orange");
orange60.scale=0.02;
var orange61 = createSprite(190,145);
orange61.setAnimation("orange");
orange61.scale=0.02;
var orange62 = createSprite(200,145);
orange62.setAnimation("orange");
orange62.scale=0.02;
var orange63 = createSprite(210,145);
orange63.setAnimation("orange");
orange63.scale=0.02;
var orange64= createSprite(220,145);
orange64.setAnimation("orange");
orange64.scale=0.02;
var orange65 = createSprite(230,145);
orange65.setAnimation("orange");
orange65.scale=0.02;
var orange66 = createSprite(240,145);
orange66.setAnimation("orange");
orange66.scale=0.02;
var orange67 = createSprite(250,145);
orange67.setAnimation("orange");
orange67.scale=0.02;
var orange68 = createSprite(260,145);
orange68.setAnimation("orange");
orange68.scale=0.02;
var orange69 = createSprite(270,145);
orange69.setAnimation("orange");
orange69.scale=0.02;
var orange70 = createSprite(280,145);
orange70.setAnimation("orange");
orange70.scale=0.02;
var orange71 = createSprite(290,145);
orange71.setAnimation("orange");
orange71.scale=0.02;
var orange72 = createSprite(300,145);
orange72.setAnimation("orange");
orange72.scale=0.02;
var orange73= createSprite(310,145);
orange73.setAnimation("orange");
orange73.scale=0.02;
var orange74 = createSprite(320,145);
orange74.setAnimation("orange");
orange74.scale=0.02;
var orange75 = createSprite(330,145);
orange75.setAnimation("orange");
orange75.scale=0.02;
var orange76 = createSprite(340,145);
orange76.setAnimation("orange");
orange76.scale=0.02;
var orange77 = createSprite(350,145);
orange77.setAnimation("orange");
orange77.scale=0.02;
var orange78 = createSprite(350,135);
orange78.setAnimation("orange");
orange78.scale=0.02;
var orange79 = createSprite(350,125);
orange79.setAnimation("orange");
orange79.scale=0.02;
var orange80 = createSprite(350,115);
orange80.setAnimation("orange");
orange80.scale=0.02;
var orange81 = createSprite(350,105);
orange81.setAnimation("orange");
orange81.scale=0.02;
var orange82 = createSprite(350,95);
orange82.setAnimation("orange");
orange82.scale=0.02;
var orange83 = createSprite(350,85);
orange83.setAnimation("orange");
orange83.scale=0.02;
var orange84 = createSprite(350,75);
orange84.setAnimation("orange");
orange84.scale=0.02;
var orange85 = createSprite(350,65);
orange85.setAnimation("orange");
orange85.scale=0.02;
var orange86 = createSprite(350,55);
orange86.setAnimation("orange");
orange86.scale=0.02;
var orange87 = createSprite(340,55);
orange87.setAnimation("orange");
orange87.scale=0.02;
var orange88 = createSprite(330,55);
orange88.setAnimation("orange");
orange88.scale=0.02;
var orange89 = createSprite(320,55);
orange89.setAnimation("orange");
orange89.scale=0.02;
var orange90 = createSprite(310,55);
orange90.setAnimation("orange");
orange90.scale=0.02;
var orange91 = createSprite(300,55);
orange91.setAnimation("orange");
orange91.scale=0.02;
var orange92 = createSprite(290,55);
orange92.setAnimation("orange");
orange92.scale=0.02;
var orange93 = createSprite(280,55);
orange93.setAnimation("orange");
orange93.scale=0.02;
var orange94 = createSprite(270,55);
orange94.setAnimation("orange");
orange94.scale=0.02;
var orange95 = createSprite(260,55);
orange95.setAnimation("orange");
orange95.scale=0.02;
var orange96 = createSprite(250,55);
orange96.setAnimation("orange");
orange96.scale=0.02;
var orange97 = createSprite(240,55);
orange97.setAnimation("orange");
orange97.scale=0.02;
var orange98 = createSprite(230,55);
orange98.setAnimation("orange");
orange98.scale=0.02;
var orange99 = createSprite(220,55);
orange99.setAnimation("orange");
orange99.scale=0.02;
var orange100 = createSprite(210,55);
orange100.setAnimation("orange");
orange100.scale=0.02;
var orange101 = createSprite(200,55);
orange101.setAnimation("orange");
orange101.scale=0.02;
var orange102 = createSprite(190,55);
orange102.setAnimation("orange");
orange102.scale=0.02;
var orange103 = createSprite(180,55);
orange103.setAnimation("orange");
orange103.scale=0.02;
var orange104 = createSprite(170,55);
orange104.setAnimation("orange");
orange104.scale=0.02;
var orange105 = createSprite(160,55);
orange105.setAnimation("orange");
orange105.scale=0.02;
var orange106 = createSprite(150,55);
orange106.setAnimation("orange");
orange106.scale=0.02;
var orange107 = createSprite(140,55);
orange107.setAnimation("orange");
orange107.scale=0.02;
var orange108 = createSprite(130,55);
orange108.setAnimation("orange");
orange108.scale=0.02;
var orange109 = createSprite(120,55);
orange109.setAnimation("orange");
orange109.scale=0.02;
var orange110 = createSprite(110,55);
orange110.setAnimation("orange");
orange110.scale=0.02;
var orange111 = createSprite(100,55);
orange111.setAnimation("orange");
orange111.scale=0.02;
var orange112 = createSprite(90,55);
orange112.setAnimation("orange");
orange112.scale=0.02;
var orange113 = createSprite(80,55);
orange113.setAnimation("orange");
orange113.scale=0.02;
var orange114 = createSprite(80,45);
orange114.setAnimation("orange");
orange114.scale=0.02;
var orange115= createSprite(80,35);
orange115.setAnimation("orange");
orange115.scale=0.02;
var orange116 = createSprite(80,25);
orange116.setAnimation("orange");
orange116.scale=0.02;
var orange117 = createSprite(70,15);
orange117.setAnimation("orange");
orange117.scale=0.02;
var orange118 = createSprite(60,15);
orange118.setAnimation("orange");
orange118.scale=0.02;
var orange119 = createSprite(50,15);
orange119.setAnimation("orange");
orange119.scale=0.02;
var orange120 = createSprite(40,15);
orange120.setAnimation("orange");
orange120.scale=0.02;
var orange121 = createSprite(30,15);
orange121.setAnimation("orange");
orange121.scale=0.02;
var orange122 = createSprite(350,155);
orange122.setAnimation("orange");
orange122.scale=0.02;
var orange123 = createSprite(340,105);
orange123.setAnimation("orange");
orange123.scale=0.02;
var orange124 = createSprite(330,105);
orange124.setAnimation("orange");
orange124.scale=0.02;
var orange125 = createSprite(320,105);
orange125.setAnimation("orange");
orange125.scale=0.02;
var orange126 = createSprite(310,105);
orange126.setAnimation("orange");
orange126.scale=0.02;
var orange127 = createSprite(300,105);
orange127.setAnimation("orange");
orange127.scale=0.02;
var orange128 = createSprite(290,105);
orange128.setAnimation("orange");
orange128.scale=0.02;
var orange129 = createSprite(280,105);
orange129.setAnimation("orange");
orange129.scale=0.02;
var orange130 = createSprite(280,115);
orange130.setAnimation("orange");
orange130.scale=0.02;
var orange131 = createSprite(280,125);
orange131.setAnimation("orange");
orange131.scale=0.02;
var orange132 = createSprite(280,130);
orange132.setAnimation("orange");
orange132.scale=0.02;
var orange133 = createSprite(280,105);
orange133.setAnimation("orange");
orange133.scale=0.02;
var orange134 = createSprite(280,95);
orange134.setAnimation("orange");
orange134.scale=0.02;
var orange135 = createSprite(280,85);
orange135.setAnimation("orange");
orange135.scale=0.02;
var orange136 = createSprite(280,75);
orange136.setAnimation("orange");
orange136.scale=0.02;
var orange137 = createSprite(280,65);
orange137.setAnimation("orange");
orange137.scale=0.02;
var orange138 = createSprite(280,55);
orange138.setAnimation("orange");
orange138.scale=0.02;
var orange139 = createSprite(280,45);
orange139.setAnimation("orange");
orange139.scale=0.02;
var orange140 = createSprite(280,125);
orange140.setAnimation("orange");
orange140.scale=0.02;
var orange141 = createSprite(280,135);
orange141.setAnimation("orange");
orange141.scale=0.02;
var orange142 = createSprite(280,195);
orange142.setAnimation("orange");
orange142.scale=0.02;
var orange143 = createSprite(280,185);
orange143.setAnimation("orange");
orange143.scale=0.02;
var orange144 = createSprite(280,175);
orange144.setAnimation("orange");
orange144.scale=0.02;
var orange145 = createSprite(280,165);
orange145.setAnimation("orange");
orange145.scale=0.02;
var orange146 = createSprite(280,155);
orange146.setAnimation("orange");
orange146.scale=0.02;
var orange147 = createSprite(280,145);
orange147.setAnimation("orange");
orange147.scale=0.02;
var orange148 = createSprite(280,155);
orange148.setAnimation("orange");
orange148.scale=0.02;
var orange149 = createSprite(280,165);
orange149.setAnimation("orange");
orange149.scale=0.02;
var orange150 = createSprite(270,195);
orange150.setAnimation("orange");
orange150.scale=0.02;
var orange151 = createSprite(260,195);
orange151.setAnimation("orange");
orange151.scale=0.02;
var orange152 = createSprite(250,195);
orange152.setAnimation("orange");
orange152.scale=0.02;
var orange153 = createSprite(240,195);
orange153.setAnimation("orange");
orange153.scale=0.02;
var orange154 = createSprite(230,195);
orange154.setAnimation("orange");
orange154.scale=0.02;
var orange155 = createSprite(220,195);
orange155.setAnimation("orange");
orange155.scale=0.02;
var orange156 = createSprite(210,195);
orange156.setAnimation("orange");
orange156.scale=0.02;
var orange157 = createSprite(200,195);
orange157.setAnimation("orange");
orange157.scale=0.02;
var orange158 = createSprite(190,195);
orange158.setAnimation("orange");
orange158.scale=0.02;
var orange159 = createSprite(180,195);
orange159.setAnimation("orange");
orange159.scale=0.02;
var orange160 = createSprite(170,195);
orange160.setAnimation("orange");
orange160.scale=0.02;
var orange161 = createSprite(160,195);
orange161.setAnimation("orange");
orange161.scale=0.02;
var orange162 = createSprite(150,195);
orange162.setAnimation("orange");
orange162.scale=0.02;
var orange163 = createSprite(140,195);
orange163.setAnimation("orange");
orange163.scale=0.02;
var orange164 = createSprite(130,195);
orange164.setAnimation("orange");
orange164.scale=0.02;
var orange165 = createSprite(120,195);
orange165.setAnimation("orange");
orange165.scale=0.02;
var orange166 = createSprite(110,195);
orange166.setAnimation("orange");
orange166.scale=0.02;
var orange167 = createSprite(110,185);
orange167.setAnimation("orange");
orange167.scale=0.02;
var orange168 = createSprite(110,175);
orange168.setAnimation("orange");
orange168.scale=0.02;
var orange169 = createSprite(110,165);
orange169.setAnimation("orange");
orange169.scale=0.02;
var orange170 = createSprite(110,155);
orange170.setAnimation("orange");
orange170.scale=0.02;
var orange171 = createSprite(110,145);
orange171.setAnimation("orange");
orange171.scale=0.02;
var orange172 = createSprite(100,145);
orange172.setAnimation("orange");
orange172.scale=0.02;
var orange173 = createSprite(90,145);
orange173.setAnimation("orange");
orange173.scale=0.02;
var orange174 = createSprite(120,145);
orange174.setAnimation("orange");
orange174.scale=0.02;
var orange175 = createSprite(280,35);
orange175.setAnimation("orange");
orange175.scale=0.02;
var orange176 = createSprite(280,25);
orange176.setAnimation("orange");
orange176.scale=0.02;
var orange177 = createSprite(270,15);
orange177.setAnimation("orange");
orange177.scale=0.02;
var orange178 = createSprite(260,15);
orange178.setAnimation("orange");
orange178.scale=0.02;
var orange179 = createSprite(250,15);
orange179.setAnimation("orange");
orange179.scale=0.02;
var orange180 = createSprite(240,15);
orange180.setAnimation("orange");
orange180.scale=0.02;
var orange181 = createSprite(230,15);
orange181.setAnimation("orange");
orange181.scale=0.02;
var orange182 = createSprite(220,15);
orange182.setAnimation("orange");
orange182.scale=0.02;
var orange183 = createSprite(210,15);
orange183.setAnimation("orange");
orange183.scale=0.02;
var orange184 = createSprite(200,15);
orange184.setAnimation("orange");
orange184.scale=0.02;
var orange185 = createSprite(190,15);
orange185.setAnimation("orange");
orange185.scale=0.02;
var orange186 = createSprite(180,15);
orange186.setAnimation("orange");
orange186.scale=0.02;
var orange187 = createSprite(170,15);
orange187.setAnimation("orange");
orange187.scale=0.02;
var orange188 = createSprite(160,15);
orange188.setAnimation("orange");
orange188.scale=0.02;
var orange189 = createSprite(150,15);
orange189.setAnimation("orange");
orange189.scale=0.02;
var orange190 = createSprite(140,15);
orange190.setAnimation("orange");
orange190.scale=0.02;
var orange191 = createSprite(130,15);
orange191.setAnimation("orange");
orange191.scale=0.02;
var orange192 = createSprite(120,15);
orange192.setAnimation("orange");
orange192.scale=0.02;
var orange193 = createSprite(110,15);
orange193.setAnimation("orange");
orange193.scale=0.02;
var orange194 = createSprite(110,25);
orange194.setAnimation("orange");
orange194.scale=0.02;
var orange194 = createSprite(110,35);
orange194.setAnimation("orange");
orange194.scale=0.02;
var orange195 = createSprite(110,45);
orange195.setAnimation("orange");
orange195.scale=0.02;
var orange196 = createSprite(110,55);
orange196.setAnimation("orange");
orange196.scale=0.02;
var orange197 = createSprite(340,155);
orange197.setAnimation("orange");
orange197.scale=0.02;
var orange198 = createSprite(330,155);
orange198.setAnimation("orange");
orange198.scale=0.02;
var orange199 = createSprite(320,155);
orange199.setAnimation("orange");
orange199.scale=0.02;
var orange200 = createSprite(320,165);
orange200.setAnimation("orange");
orange200.scale=0.02;
var orange201 = createSprite(320,175);
orange201.setAnimation("orange");
orange201.scale=0.02;
var orange202 = createSprite(320,185);
orange202.setAnimation("orange");
orange202.scale=0.02;
var orange203 = createSprite(320,195);
orange203.setAnimation("orange");
orange203.scale=0.02;
var orange204 = createSprite(320,205);
orange204.setAnimation("orange");
orange204.scale=0.02;
var orange205 = createSprite(330,205);
orange205.setAnimation("orange");
orange205.scale=0.02;
var orange206 = createSprite(340,205);
orange206.setAnimation("orange");
orange206.scale=0.02;
var orange207 = createSprite(350,205);
orange207.setAnimation("orange");
orange207.scale=0.02;
var orange208 = createSprite(360,205);
orange208.setAnimation("orange");
orange208.scale=0.02;
var orange209 = createSprite(370,205);
orange209.setAnimation("orange");
orange209.scale=0.02;
var orange210 = createSprite(380,205);
orange210.setAnimation("orange");
orange210.scale=0.02;
var orange211 = createSprite(380,195);
orange211.setAnimation("orange");
orange211.scale=0.02;
var orange212 = createSprite(380,185);
orange212.setAnimation("orange");
orange212.scale=0.02;
var orange213 = createSprite(380,175);
orange213.setAnimation("orange");
orange213.scale=0.02;
var orange214 = createSprite(380,165);
orange214.setAnimation("orange");
orange214.scale=0.02;
var orange215= createSprite(380,155);
orange215.setAnimation("orange");
orange215.scale=0.02;
var orange216 = createSprite(380,145);
orange216.setAnimation("orange");
orange216.scale=0.02;
var orange217 = createSprite(380,135);
orange217.setAnimation("orange");
orange217.scale=0.02;
var orange218 = createSprite(380,125);
orange218.setAnimation("orange");
orange218.scale=0.02;
var orange219 = createSprite(380,115);
orange219.setAnimation("orange");
orange219.scale=0.02;
var orange220 = createSprite(380,105);
orange220.setAnimation("orange");
orange220.scale=0.02;
var orange221 = createSprite(380,95);
orange221.setAnimation("orange");
orange221.scale=0.02;
var orange222 = createSprite(380,85);
orange222.setAnimation("orange");
orange222.scale=0.02;
var orange223 = createSprite(380,75);
orange223.setAnimation("orange");
orange223.scale=0.02;
var orange224 = createSprite(380,65);
orange224.setAnimation("orange");
orange224.scale=0.02;
var orange225 = createSprite(380,55);
orange225.setAnimation("orange");
orange225.scale=0.02;
var orange226 = createSprite(370,105);
orange226.setAnimation("orange");
orange226.scale=0.02;
var orange227 = createSprite(360,105);
orange227.setAnimation("orange");
orange227.scale=0.02;
var orange228 = createSprite(380,45);
orange228.setAnimation("orange");
orange228.scale=0.02;
var orange229 = createSprite(380,35);
orange229.setAnimation("orange");
orange229.scale=0.02;
var orange230 = createSprite(380,25);
orange230.setAnimation("orange");
orange230.scale=0.02;
var orange231 = createSprite(380,15);
orange231.setAnimation("orange");
orange231.scale=0.02;
var orange232 = createSprite(370,15);
orange232.setAnimation("orange");
orange232.scale=0.02;
var orange233 = createSprite(360,15);
orange233.setAnimation("orange");
orange233.scale=0.02;
var orange234 = createSprite(350,15);
orange234.setAnimation("orange");
orange234.scale=0.02;
var orange235 = createSprite(340,15);
orange235.setAnimation("orange");
orange235.scale=0.02;
var orange236 = createSprite(330,15);
orange236.setAnimation("orange");
orange236.scale=0.02;
var orange237 = createSprite(320,15);
orange237.setAnimation("orange");
orange237.scale=0.02;
var orange238 = createSprite(320,25);
orange238.setAnimation("orange");
orange238.scale=0.02;
var orange239 = createSprite(320,35);
orange239.setAnimation("orange");
orange239.scale=0.02;
var orange240 = createSprite(320,45);
orange240.setAnimation("orange");
orange240.scale=0.02;



function draw() {
background("green");

if(keyDown("up")){
  pacman1.y=pacman1.y-4
   pacman1.setAnimation("pacman3");
} 
if(keyDown("down")){
  pacman1.y=pacman1.y+4
   pacman1.setAnimation("pacman4");
}
if(keyDown("left")){
  pacman1.x=pacman1.x-4
  pacman1.setAnimation("pacman2");
} 
if(keyDown("right")){
  pacman1.x=pacman1.x+4
   pacman1.setAnimation("pacman1");
} 

pacman1.bounceOff(wall1);
pacman1.bounceOff(wall2);
pacman1.bounceOff(wall3);
pacman1.bounceOff(wall4);
pacman1.bounceOff(wall5);
pacman1.bounceOff(wall6);
pacman1.bounceOff(wall7);
pacman1.bounceOff(wall8);
pacman1.bounceOff(wall9);
pacman1.bounceOff(wall10);
pacman1.bounceOff(wall11);
pacman1.bounceOff(wall12);
pacman1.bounceOff(wall13);
pacman1.bounceOff(wall14);
pacman1.bounceOff(wall15);
pacman1.bounceOff(wall16);
pacman1.bounceOff(wall17);
pacman1.bounceOff(wall18);
pacman1.bounceOff(wall19);
pacman1.bounceOff(wall20);
pacman1.bounceOff(wall21);
pacman1.bounceOff(wall22);
pacman1.bounceOff(boundary1);
pacman1.bounceOff(boundary2);
pacman1.bounceOff(boundary3);
pacman1.bounceOff(boundary4);


ghost1.bounceOff(wall2);
ghost1.bounceOff(wall4);
ghost1.bounceOff(wall5);
ghost1.bounceOff(wall6);
ghost1.bounceOff(wall7);
ghost1.bounceOff(wall8);
ghost1.bounceOff(wall9);
ghost1.bounceOff(wall10);
ghost1.bounceOff(wall11);
ghost1.bounceOff(wall12);
ghost1.bounceOff(wall13);
ghost1.bounceOff(wall14);
ghost1.bounceOff(wall15);
ghost1.bounceOff(wall16);
ghost1.bounceOff(wall17);
ghost1.bounceOff(wall18);
ghost1.bounceOff(wall19);
ghost1.bounceOff(wall20);
ghost1.bounceOff(wall21);
ghost1.bounceOff(wall22);
ghost1.bounceOff(boundary1);
ghost1.bounceOff(boundary2);
ghost1.bounceOff(boundary3);
ghost1.bounceOff(boundary4);

ghost2.bounceOff(wall1);
ghost2.bounceOff(wall2);
ghost2.bounceOff(wall3);
ghost2.bounceOff(wall4);
ghost2.bounceOff(wall5);
ghost2.bounceOff(wall6);
ghost2.bounceOff(wall7);
ghost2.bounceOff(wall8);
ghost2.bounceOff(wall9);
ghost2.bounceOff(wall10);
ghost2.bounceOff(wall11);
ghost2.bounceOff(wall12);
ghost2.bounceOff(wall14);
ghost2.bounceOff(wall15);
ghost2.bounceOff(wall16);
ghost2.bounceOff(wall17);
ghost2.bounceOff(wall18);
ghost2.bounceOff(wall19);
ghost2.bounceOff(wall21);
ghost2.bounceOff(boundary1);
ghost2.bounceOff(boundary2);
ghost2.bounceOff(boundary3);
ghost2.bounceOff(boundary4);



if (ghost1.isTouching(pacman1)) {
    lives=lives-1
    pacman1.x = 200;
    pacman1.y = 210;
    life1.destroy();
}
if (ghost2.isTouching(pacman1)) {
    pacman1.x = 200;
    pacman1.y = 210;
    life2.visible=false;
    }
if (ghost1.isTouching(pacman1)) {
    pacman1.x = 200;
    pacman1.y = 210;
    life2.visible=false;
    }

  if(pacman1.isTouching(ghost1)){
    var game = createSprite(200,200);
    game.setAnimation("game over");
    game.scale=2;
    life1.visible=false;
    life2.visible=false;
    ghost1.visible=false;
    ghost2.visible=false;
  }

   if(pacman1.isTouching(ghost2)){
    var game = createSprite(200,200);
    game.setAnimation("game over");
    game.scale=2;
    life1.visible=false;
    life2.visible=false;
    ghost1.visible=false;
    ghost2.visible=false;
   playSound("assets/category_female_voiceover/game_over_female.mp3", false)
  }

  if (SCORE >= 240) {
    var winner = createSprite(200, 200);
    winner.setAnimation("winner");
    winner.scale = 1;
    ghost1.visible = false;
    ghost2.visible = false;
    pacman1.visible = false;
    life1.visible = false;
    life2.visible = false;
    pacman1.y = 400;
    pacman1.x = 400;
    playSound("assets/category_female_voiceover/you_win_female.mp3",false)
  }

ghost1.velocityY=-5;
if(ghost1.isTouching(wall3)){
  ghost1.velocityX=5;
  ghost1.velocityY=0;
}
if(ghost1.isTouching(boundary2)){
  ghost1.velocityX=0;
  ghost1.velocityY=5;
}

ghost2.velocityY=5;
if(ghost2.isTouching(wall22)){
  ghost2.velocityX=5;
  ghost2.velocityY=0;
}
if(ghost2.isTouching(boundary4)){
  ghost2.velocityX=0;
  ghost2.velocityY=5;
}

  fill("black");
textSize(10);
text("use left arrow to move left.",10,250);
textSize(10);
text("use right arrow to move right.",10,270);
textSize(10);
text("use up arrow to move up.",10,290);
textSize(10);
text("use down arrow to move down.",10,310);
 textSize(30);
text("PACMAN GAME",50,350)

if(pacman1.isTouching(orange1)){
  orange1.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange2)){
  orange2.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange3)){
  orange3.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange4)){
  orange4.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange5)){
  orange5.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange6)){
  orange6.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange7)){
  orange7.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange8)){
  orange8.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange9)){
  orange9.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange10)){
  orange10.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange11)){
  orange11.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange12)){
  orange12.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange13)){
  orange13.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange14)){
  orange14.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange15)){
  orange15.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange16)){
  orange16.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange17)){
  orange17.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange18)){
  orange18.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange19)){
  orange19.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange20)){
  orange20.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange21)){
  orange21.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange22)){
  orange22.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange23)){
  orange23.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange24)){
  orange24.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange25)){
  orange25.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange26)){
  orange26.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange27)){
  orange27.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange28)){
  orange28.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange29)){
  orange29.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange30)){
  orange30.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange31)){
  orange31.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange32)){
  orange32.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange33)){
  orange33.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange34)){
  orange34.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange35)){
  orange35.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange36)){
  orange36.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange37)){
  orange37.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange38)){
  orange38.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange39)){
  orange39.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange40)){
  orange40.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange41)){
  orange41.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange42)){
  orange42.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange43)){
  orange43.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange44)){
  orange44.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange45)){
  orange45.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange46)){
  orange46.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange47)){
  orange47.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange48)){
  orange48.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange49)){
  orange49.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange50)){
  orange50.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange51)){
  orange51.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange52)){
  orange52.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange53)){
  orange53.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange54)){
  orange54.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange55)){
  orange55.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange56)){
  orange56.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange57)){
  orange57.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange58)){
  orange58.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange59)){
  orange59.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange60)){
  orange60.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange61)){
  orange61.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange62)){
  orange62.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange63)){
  orange63.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange64)){
  orange64.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange65)){
  orange65.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange66)){
  orange66.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange67)){
  orange67.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange68)){
  orange68.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange69)){
  orange69.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange70)){
  orange70.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange71)){
  orange71.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange72)){
  orange72.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange73)){
  orange73.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange74)){
  orange74.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange75)){
  orange75.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange76)){
  orange76.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange77)){
  orange77.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange78)){
  orange78.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange79)){
  orange79.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange80)){
  orange80.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange81)){
  orange81.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange82)){
  orange82.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange83)){
  orange83.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange84)){
  orange84.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange85)){
  orange85.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange86)){
  orange86.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange87)){
  orange87.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange88)){
  orange88.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange89)){
  orange89.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange90)){
  orange90.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange91)){
  orange91.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange92)){
  orange92.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange93)){
  orange93.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange94)){
  orange94.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange95)){
  orange95.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange96)){
  orange96.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange97)){
  orange97.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange98)){
  orange98.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange99)){
  orange99.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange100)){
  orange100.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange101)){
  orange101.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange102)){
  orange102.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange103)){
  orange103.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange104)){
  orange104.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange105)){
  orange105.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange106)){
  orange106.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange107)){
  orange107.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange108)){
  orange108.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange109)){
  orange109.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange110)){
  orange110.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange111)){
  orange111.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange112)){
  orange112.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange113)){
  orange113.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange114)){
  orange114.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange115)){
  orange115.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange116)){
  orange116.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange117)){
  orange117.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange118)){
  orange118.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange119)){
  orange119.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange120)){
  orange120.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange121)){
  orange121.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange122)){
  orange122.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange123)){
  orange123.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange124)){
  orange124.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange125)){
  orange125.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange126)){
  orange126.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange127)){
  orange127.destroy();
  SCORE=SCORE+1;
}
if(pacman1.isTouching(orange128)){
  orange128.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange129)){
  orange129.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange130)){
  orange130.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange131)){
  orange131.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange133)){
  orange133.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange134)){
  orange134.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange135)){
  orange135.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange136)){
  orange136.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange137)){
  orange137.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange138)){
  orange138.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange139)){
  orange139.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange140)){
  orange140.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange141)){
  orange141.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange142)){
  orange142.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange143)){
  orange143.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange144)){
  orange144.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange145)){
  orange145.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange146)){
  orange146.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange147)){
  orange147.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange148)){
  orange148.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange149)){
  orange149.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange150)){
  orange150.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange151)){
  orange151.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange152)){
  orange152.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange153)){
  orange153.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange154)){
  orange154.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange155)){
  orange155.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange156)){
  orange156.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange157)){
  orange157.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange158)){
  orange158.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange159)){
  orange159.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange160)){
  orange160.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange161)){
  orange161.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange162)){
  orange162.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange163)){
  orange163.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange164)){
  orange164.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange165)){
  orange165.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange166)){
  orange166.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange167)){
  orange167.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange168)){
  orange168.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange169)){
  orange169.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange170)){
  orange170.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange171)){
  orange171.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange172)){
  orange172.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange173)){
  orange173.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange174)){
  orange174.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange175)){
  orange175.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange176)){
  orange176.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange177)){
  orange177.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange178)){
  orange178.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange179)){
  orange179.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange180)){
  orange180.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange181)){
  orange181.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange182)){
  orange182.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange183)){
  orange183.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange184)){
  orange184.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange185)){
  orange185.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange186)){
  orange186.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange187)){
  orange187.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange188)){
  orange188.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange189)){
  orange189.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange190)){
  orange190.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange191)){
  orange191.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange192)){
  orange192.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange193)){
  orange193.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange194)){
  orange194.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange195)){
  orange195.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange196)){
  orange196.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange197)){
  orange197.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange198)){
  orange198.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange199)){
  orange199.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange200)){
  orange200.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange201)){
  orange201.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange202)){
  orange202.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange203)){
  orange203.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange204)){
  orange204.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange205)){
  orange205.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange206)){
  orange206.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange207)){
  orange207.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange208)){
  orange208.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange209)){
  orange209.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange210)){
  orange210.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange211)){
  orange211.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange212)){
  orange212.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange213)){
  orange213.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange214)){
  orange214.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange215)){
  orange215.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange216)){
  orange216.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange217)){
  orange217.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange218)){
  orange218.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange219)){
  orange219.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange220)){
  orange220.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange221)){
  orange221.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange222)){
  orange222.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange223)){
  orange223.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange224)){
  orange224.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange225)){
  orange225.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange226)){
  orange226.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange227)){
  orange227.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange228)){
  orange228.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange229)){
  orange229.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange230)){
  orange230.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange231)){
  orange231.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange232)){
  orange232.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange233)){
  orange233.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange234)){
  orange234.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange235)){
  orange235.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange236)){
  orange236.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange237)){
  orange237.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange238)){
  orange238.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange239)){
  orange239.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange240)){
  orange240.destroy();
  SCORE=SCORE+1;
}if(pacman1.isTouching(orange132)){
  orange132.destroy();
  SCORE=SCORE+1;
}





  drawSprites();
  fill("yellow");
  textSize(20);
  text("SCORE:"+SCORE,280,250)

 
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
