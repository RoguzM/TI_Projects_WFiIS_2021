function choice(n) {
    switch (n) {
        case 1:
            document.getElementById("content").innerHTML = 
            `<article class = "main_page">
            <canvas class = "solar_system" id = "solar_system" height = "650" width = "1600" style="border:none"></canvas>
          </article>`;
          window.cancelAnimationFrame(animate);
            window.requestAnimationFrame(animate);
            break;

	case 2:
            document.getElementById("content").innerHTML = 
            `<article class = "big_bang_article">
                 <canvas class = "big_bang" id = "big_bang" height = "585" width = "1600" style="border:none"></canvas>
                 <div class = "caption"><h3>Wielki Wybuch &nbsp;- &nbsp; czyli geneza wszystkiego.<h3></div>
             </article>`;
             window.cancelAnimationFrame(bang);
            window.requestAnimationFrame(bang);
            break;

    case 3:
            document.getElementById("content").innerHTML = 
            `<article class = "gravity_article">
                 <canvas class = "gravity" id = "gravity" height = "500" width = "600" style="border:none"></canvas>
                 <div class = "caption">Merkury  &nbsp; Wenus &nbsp; Ziemia &nbsp; Mars &nbsp; &nbsp; Jowisz &nbsp; &nbsp; Saturn &nbsp; Uran &nbsp; &nbsp; Neptun</div>
                 <div class = "caption"><h3>Spadek swobodny ciała na kolejnych planetach Układu Słonecznego.<h3></div>
             </article>`;
             window.cancelAnimationFrame(gravity);
            window.requestAnimationFrame(gravity);
            break;

    case 4:
            document.getElementById("content").innerHTML = 
            `<article class = "planets_article">

          <div class = "half">
            <div class = "list_planets">
              <div class = "planet_hover">
                <img src="mercury.gif" alt="mercury" style="width:100px;height:100px;">
              </div>
            <div class = "caption">Merkury</div>
            

            <div class = "planet_hover">
              <img src="venus.gif" alt="venus" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Wenus</div>

            <div class = "planet_hover">
            <img src="earth.gif" alt="earth" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Ziemia</div>

            <div class = "planet_hover">
            <img src="mars.gif" alt="mars" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Mars</div>
            </div>

            <div class = "planets_info">
            <div class = "info_title"> Średnica: 4878 [km]</div>
            <div class = "info_title"> Masa: 0,33 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 0,24 roku ziemskiego</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 3,70 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]<br><br><br><br><br><br><br></div>
            <div class = "info_title"> Średnica: 12104 [km]</div>
            <div class = "info_title"> Masa: 4,9 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 0,62 roku ziemskiego</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 8,90 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]<br><br><br><br><br><br></div>
            <div class = "info_title"> Średnica: 12756 [km]</div>
            <div class = "info_title"> Masa: 5,97 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 1 rok</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 9,81 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]<br><br><br><br><br><br></div>
            <div class = "info_title"> Średnica: 6860 [km]</div>
            <div class = "info_title"> Masa: 0,63 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 1,88 roku ziemskiego</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 3,70 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]</div>
            </div>
            
            </div>

            <div class = "half">
            <div class = "list_planets">

            <div class = "planet_hover">
            <img src="jupiter.gif" alt="jupiter" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Jowisz</div>

            <div class = "planet_hover">
            <img src="saturn.gif" alt="saturn" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Saturn</div>

            <div class = "planet_hover">
            <img src="uranus.gif" alt="uranus" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Uran</div>

            <div class = "planet_hover">
            <img src="neptune.gif" alt="neptune" style="width:100px;height:100px;">
            </div>
            <div class = "caption">Neptun</div>
            </div>
            <div class = "planets_info">
            <div class = "info_title"> Średnica: 143640 [km]</div>
            <div class = "info_title"> Masa: 1900 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 11,86 lat ziemskich</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 23,10 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]<br><br><br><br><br><br><br></div>
            <div class = "info_title"> Średnica: 120570 [km]</div>
            <div class = "info_title"> Masa: 590 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 29,46 lat ziemskich</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 9,00 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]<br><br><br><br><br><br></div>
            <div class = "info_title"> Średnica: 57070 [km]</div>
            <div class = "info_title"> Masa: 87 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 84,01 lat ziemskich</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 8,70 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]<br><br><br><br><br><br></div>
            <div class = "info_title"> Średnica: 49670 [km]</div>
            <div class = "info_title"> Masa: 100 * 10 <sup>24</sup></div>
            <div class = "info_title"> Okres orbitalny: 164,8 lat ziemskich</div>
            <div class = "info_title"> Przyspieszenie grawitacyjne: 11,00 [<sup>m</sup>/<sub>s<sup>2</sup></sub>]</div>
            </div>
            </div>
          </article>`;
            break;

    case 5:
          document.getElementById("content").innerHTML = 
          `<article class = "planets_article">

          
          <div class = "half_info">
          <div class = "theory">
          <div class = "head">
          <h2>Geneza w skrócie</h2>
          </div>
          Jak powstał wszechświat? Pytanie to jest nadal przedmiotem dysputy zarówno kosmologów, jak i filozofów. Na przestrzeni wieków powstało wiele teorii prapoczątku, lecz większość z nich została brutalnie zweryfikowana 
          przez czas, oraz ludzi, którzy obalali je na późniejszym etapie wiedzą i nauką. Niemniej jednak, na początku XX wieku wysunięto najbardziej prawdopodobną przyczynę powstania świata. Była to teoria Wielkiego Wybuchu. Głosi, że 
          wyłonił się on z infinitezymalnego punktu o nieskończonej gęstości zwanego osobliwością. Od tego momentu można definiować fizycznie czas i przestrzeń. Po ponad 13,80 mld lat istnienia, wszechświat rozszerza się dalej zgodnie z prawem Hubble'a. <br><br>
          <br>
          Nasz Układ Słoneczny jest jednak trochę młodszy, gdyż liczy sobie "tylko" 4,6 mld lat.
          W jego punkcie centralnym znajduje się Słońce- gwiazda, wokół której orbitują planety (a wokół niektórych z nich księżyce). Najbliższą, a zarazem najmniejszą z nich jest Merkury.
          Drugą, będącą trzecim pod względem jasności ciałem niebieskim widocznym na niebie jest Wenus. Jako jedyna planeta kręci się wokół własnej osi przeciwnie do ruchu wskazówek zegara. Trzecia z kolei jest Ziemia- jedyny znany obiekt, na którym występuje życie. 
          Sprzyjającym egzystencji bytów miejscem mógł być kiedyś Mars- czwarta planeta Układu Słonecznego. Przed kilkoma laty potwierdzono występowanie na nim wody w stanie ciekłym.
          Największą planetą Układu Słonecznego jest gazowy olbrzym- Jowisz. Pełni on swego rodzaju tarczę dla wcześniej wymienionych, gdyż jego siła ciążenia jest na tyle duża, że skutecznie przyciąga pędzące komety, bądź wyrzuca je poza Układ. 
          Drugim gazowym olbrzymem jest Saturn, jego sferę okalają pierścienie składające się z lodu i odłamków skalnych. Posiada aż 82 satelity, co czyni go liderem pod tym względem.
          Siódma z planet to tzw. lodowy olbrzym- Uran. Cechuje go najzimniejsza atmosfera spośród planet Układu Słonecznego. Jego oś obrotu jest silnie nachylona i znajduje się prawie w płaszczyźnie orbity planety.
          Najdalej od Słońca orbituje Neptun. Na jego powierzchni występują najsilniejsze wiatry, których prędkości sięgają ponad 2000[<sup>km</sup>/<sub>h</sub>].
          </div>
          </div>

          <div class = "half_info_right">
          <img src="background.gif" alt="voyager" style="width:200px;height:400px;">
          <div class = "theory">
          <div class = "head">
          <h2>Najistotniejsze prawa w kosmosie</h2>
          </div>
          <h3>Prawo powszechnego ciążenia</h3>
          
          <div class = "formula">
          F = G(<sup>m<sub>1</sub>m<sub>2</sub></sup>/<sub>r<sup>2</sup></sub>)
          </div>
          gdzie G- stała grawitacji, m<sub>1</sub>- masa pierwszego ciała, m<sub>2</sub>- masa drugiego ciała, r- odleglość od środków mas obu ciał.<br><br>

          Każdy obiekt we wszechświecie przyciąga każdy inny obiekt z siłą, która jest wprost proporcjonalna do
           iloczynu ich mas i odwrotnie proporcjonalna do kwadratu odległości między ich środkami.<br>

           ________________________________________________________________

           <h3>Pierwsze prawo Keplera</h3>
           Każda planeta Układu Słonecznego porusza się wokół Słońca po orbicie w kształcie elipsy, w której w jednym z ognisk jest Słońce.

           ________________________________________________________________

           <h3>Drugie prawo Keplera</h3>
           W równych odstępach czasu promień wodzący planety, poprowadzony od Słońca, zakreśla figury o równych polach.

           ________________________________________________________________

           <h3>Trzecie prawo Keplera</h3>

           <div class = "formula">
            <sup>T<sub>1</sub><sup>2</sup></sup>/<sub>R<sub>1</sub><sup>3</sup></sub> = <sup>T<sub>2</sub><sup>2</sup></sup>/<sub>R<sub>2</sub><sup>3</sup></sub> = const
          </div>

           Stosunek kwadratu okresu obiegu planety wokół Słońca do sześcianu wielkiej półosi jej orbity jest stały dla wszystkich planet w Układzie Słonecznym
           ________________________________________________________________
          </div>
          </div>
        
          </article>`;
              break;
	}
}

time = 1;
function animate()
{
  var canvas = document.getElementById("solar_system");
  if(canvas != null)
  {
  ctx = canvas.getContext("2d"),
  w  = canvas.width,
  h  = canvas.height,
    
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(callback){window.setTimeout(callback, 1000/60);}

    
    
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0,0, w, h);
  ctx.closePath();

  ctx.translate(w/2,h/2);
  ctx.beginPath();
  ctx.fillStyle = "#FFC400";
  ctx.arc(0, 0, 25, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();


  ctx.beginPath();
  ctx.arc(0,0,40,0,2*Math.PI,true);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();


  
  ctx.rotate(-time / 30);
  ctx.translate(40,0);

    
  ctx.beginPath();
  ctx.fillStyle = "#b9955b";
  ctx.arc(0, 0, 3.8, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();

  ctx.translate(-40,0);


  ctx.beginPath();
  ctx.arc(0,0,60,0,2*Math.PI,true);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();

  
  ctx.rotate(-(time / 100 - (time / 90)));   
  ctx.translate(60,0);


  
  ctx.beginPath();
  ctx.fillStyle = "#FFE082";
  ctx.arc(0, 0, 7, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();

  ctx.translate(-60,0);


  ctx.beginPath();
  ctx.arc(0,0,90,0,2*Math.PI,true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();
  
  ctx.rotate(-(time / 100 - (time / 80)));
  ctx.translate(90,0);

  
  ctx.beginPath();
  ctx.fillStyle = "#3399FF";
  ctx.arc(0, 0, 9, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();

  
  ctx.translate(-90,0);

  
  ctx.beginPath();
  ctx.arc(0,0,120,0,2*Math.PI,true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();
  
  ctx.rotate(-(time / 120 - (time / 50)));
  ctx.translate(120,0);

   
  ctx.beginPath();
  ctx.fillStyle = "#FF6633";
  ctx.arc(0, 0, 10, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();
  
  ctx.translate(-120,0);
  
  ctx.beginPath();
  ctx.arc(0,0,147,0,2*Math.PI,true);
  ctx.lineWidth = 18;
  ctx.strokeStyle = "#151515";
  ctx.stroke();
  ctx.closePath();
  
  ctx.translate(0,0);
  
  ctx.beginPath();
  ctx.arc(0,0,180,0,2*Math.PI,true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();
  
  ctx.rotate(-(time / 120 - (time / 50)));
  ctx.translate(180,0);
  
  ctx.beginPath();
  ctx.fillStyle = "#FF9966";
  ctx.arc(0, 0, 18, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();
  
  ctx.translate(-180,0);
  
  ctx.beginPath();
  ctx.arc(0,0,220,0,2*Math.PI,true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();
  
  ctx.rotate(-(time / 120 - (time / 90)));
  ctx.translate(220,0);
  
  ctx.beginPath();
  ctx.fillStyle = "#FBC02D";
  ctx.arc(0, 0, 12, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();
  
  ctx.translate(0,0);
  
  ctx.beginPath();
  ctx.arc(0,0,18,0,2*Math.PI,true);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#747474";
  ctx.stroke();
  ctx.closePath();
  
  ctx.translate(-220,0);
  
  ctx.beginPath();
  ctx.arc(0,0,260,0,2*Math.PI,true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();
  
  ctx.rotate(-(time / 120 - (time / 90)));
  ctx.translate(-260,0);
  
  ctx.beginPath();
  ctx.fillStyle = "#00CC99";
  ctx.arc(0, 0, 10, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();
  
  ctx.translate(260,0);
  
  ctx.beginPath();
  ctx.arc(0,0,300,0,2*Math.PI,true);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1c1c1c";
  ctx.stroke();
  ctx.closePath();
  
  ctx.rotate(-(time / 120 - (time / 130)));
  ctx.translate(-300,0);
  
  ctx.beginPath();
  ctx.fillStyle = "#006699";
  ctx.arc(0, 0, 11, 0, 2*Math.PI, true); 
  ctx.fill();
  ctx.closePath();
  
  ctx.restore();
  time++;
  window.requestAnimationFrame(animate);
  }
  else
  {
    window.cancelAnimationFrame(animate);
  }
}
  
  window.requestAnimationFrame(animate);

  

function bang() {
    const canvas = document.getElementById("big_bang");

    if(canvas != null)
    {
        const context = canvas.getContext("2d");
    const particles = [];
    const colors = ["blue", "green",  "orange", "red", "white", "#4488FF", "yellow"];
    const timeToStart = (10);
    let countToStart = 0;

    const random = (min, max) => Math.random() * (max - min) + min;

    const createParticles = function(n) {
        for (let i = 0; i < n; i ++) {
            particles.push({
                x: canvas.width / 2, 
                y: canvas.height / 2, 
                color: colors[parseInt(random(0, colors.length))],
                size: random(2, 7),
                alpha: random(0.5, 1),
                speed: random(10, 100), 
                vel: { 
                    x: random(-.1, .1),
                    y: random(-.1, .1),
                }
            });
        }
    };

    const update = function() {
        countToStart ++;
        if (countToStart > timeToStart) {
            particles.forEach(p => {
                p.x += p.vel.x * p.speed;
                p.y += p.vel.y * p.speed;
            });
        }
    };

    const draw = function() {

        particles.forEach(p => {
        context.beginPath();
	context.arc(p.x, p.y, p.size, 0, 2 * Math.PI, false);
	context.fillStyle = p.color;
	context.fill();
	context.lineWidth = 8;
	context.stroke();
        });
    };

    const tick = function() {
        update();
        draw();
        requestAnimationFrame(tick);
    };

    createParticles(2000); 

    tick();
}
else
{
    window.cancelAnimationFrame(bang);
}
}

function gravity()
{
  const canvas = document.getElementById("gravity");
  if(canvas != null)
  {
  var ctx = canvas.getContext("2d");

  var w = canvas.width;
  var h = canvas.height;
  var jump = 10;
  var time;

function ball(x,y,r,kolor) {
  ctx.beginPath();
  ctx.strokeStyle=kolor;
  ctx.fillStyle=kolor;
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
}

var dt=0.1; 
var x=65;
var y=20;
var vy=0;
var r=15;	
var kolor="#b9955b";
var g=3.70;       

var x2=130;
var y2=20;
var vy2=0;
var kolor2="#FFE082";
var g2=8.9;    

var x3=195;
var y3=20;
var vy3=0;
var kolor3="#3399FF";
var g3=9.61;

var x4=260;
var y4=20;
var vy4=0;
var kolor4="#FF6633";
var g4=3.7;  

var x5=325;
var y5=20;
var vy5=0;
var kolor5="#FF9966";
var g5=23.1; 

var x6=390;
var y6=20;
var vy6=0;
var kolor6="#FBC02D";
var g6=9.0; 

var x7=455;
var y7=20;
var vy7=0;
var kolor7="#00CC99";
var g7=8.7; 

var x8=520;
var y8=20;
var vy8=0;
var kolor8="#006699";
var g8=11.0; 

ctx.clearRect(0, 0, w, h);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);
ctx.strokeStyle="black";
ctx.strokeRect(0, 0, w, h);

function gravity() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle="black";
  ctx.strokeRect(0, 0, w, h);

  ball(x,y,r,kolor);
  y=y+vy*dt;
  vy=vy+g*dt;
  if (y > h-r-vy*dt) vy = 0;

  ball(x2,y2,r,kolor2);
  y2=y2+vy2*dt;
  vy2=vy2+g2*dt;
  if (y2 > h-r-vy2*dt) vy2 = 0;

  ball(x3,y3,r,kolor3);
  y3=y3+vy3*dt;
  vy3=vy3+g3*dt;
  if (y3 > h-r-vy3*dt) vy3 = 0;

  ball(x4,y4,r,kolor4);
  y4=y4+vy4*dt;
  vy4=vy4+g4*dt;
  if (y4 > h-r-vy4*dt) vy4 = 0;

  ball(x5,y5,r,kolor5);
  y5=y5+vy5*dt;
  vy5=vy5+g5*dt;
  if (y5 > h-r-vy5*dt) vy5 = 0;

  ball(x6,y6,r,kolor6);
  y6=y6+vy6*dt;
  vy6=vy6+g6*dt;
  if (y6 > h-r-vy6*dt) vy6 = 0;

  ball(x7,y7,r,kolor7);
  y7=y7+vy7*dt;
  vy7=vy7+g7*dt;
  if (y7 > h-r-vy7*dt) vy7 = 0;

  ball(x8,y8,r,kolor8);
  y8=y8+vy8*dt;
  vy8=vy8+g8*dt;
  if (y8 > h-r-vy8*dt) vy8 = 0;

  clearTimeout(time);
  time = setTimeout(gravity, jump); 
}
window.requestAnimationFrame(gravity);
}
else
{
  window.cancelAnimationFrame(gravity);
}
}