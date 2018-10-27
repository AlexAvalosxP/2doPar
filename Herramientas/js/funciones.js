flagPareto = false;
valYaxis = 0;

function display(opt)
{
	midArea = document.getElementById("midArea");
	switch (opt) 
	{
		case 1:
			midArea.innerHTML = '<div class="infoArea">' +
			'<h1>Diagrama de Ishikawa</h1>' +
			'<p>Consiste en una representación gráfica que permite visualizar las causas que explican un determinado problema, lo cual la convierte en una herramienta de la Gestión de la Calidad ampliamente utilizada dado que orienta la toma de decisiones al abordar las bases que determinan un desempeño deficiente.</p>' +
			'<p>Identifica un problema o efecto y luego enumera un conjunto de causas que potencialmente explican dicho comportamiento. Adicionalmente cada causa se puede desagregar con grado mayor de detalle en subcausas.</p>' +
			'</div>' +
			'<div class="interactArea" id="interactArea">' +
			'<img src="sources/fishbone.png" style="">' +
			'<input type="text" class="fishbone causa" id="causa1" placeholder="Causa 1" style="position: absolute; top: calc(105px + 10%) ; left: 31%">' +
			'<input type="text" class="fishbone" id="subacusa11" placeholder="Subcausa 1" style="position: absolute; top: calc(105px + 18%); left: 36.5%">' +
			'<input type="text" class="fishbone" id="subacusa12" placeholder="Subcausa 2" style="position: absolute; top: calc(105px + 24%); left: 38%">' +
			'<input type="text" class="fishbone causa" id="causa2" placeholder="Causa 2" style="position: absolute; top: calc(105px + 10%); left: 47.5%">' +
			'<input type="text" class="fishbone" id="subacusa21" placeholder="Subcausa 1" style="position: absolute; top: calc(105px + 18%); left: 53%">' +
			'<input type="text" class="fishbone" id="subacusa22" placeholder="Subcausa 2" style="position: absolute; top: calc(105px + 24%); left: 54.5%">' +
			'<input type="text" class="fishbone causa" id="causa3" placeholder="Causa 3" style="position: absolute; top: calc(105px + 10%); left: 64.5%">' +
			'<input type="text" class="fishbone" id="subacusa31" placeholder="Subcausa 1" style="position: absolute; top: calc(105px + 18%); left: 70%">' +
			'<input type="text" class="fishbone" id="subacusa32" placeholder="Subcausa 2" style="position: absolute; top: calc(105px + 24%); left: 71.5%">' +
			'<input type="text" class="fishbone causa" id="causa4" placeholder="Causa 4" style="position: absolute; top: calc(105px + 60%); left: 31%">' +
			'<input type="text" class="fishbone" id="subacusa41" placeholder="Subcausa 1" style="position: absolute; top: calc(105px + 48%); left: 37.5%">' +
			'<input type="text" class="fishbone" id="subacusa42" placeholder="Subcausa 2" style="position: absolute; top: calc(105px + 43%); left: 38.5%">' +
			'<input type="text" class="fishbone causa" id="causa5" placeholder="Causa 5" style="position: absolute; top: calc(105px + 60%); left: 47.5%">' +
			'<input type="text" class="fishbone" id="subacusa51" placeholder="Subcausa 1" style="position: absolute; top: calc(105px + 48%); left: 54%">' +
			'<input type="text" class="fishbone" id="subacusa52" placeholder="Subcausa 2" style="position: absolute; top: calc(105px + 43%); left: 55%">' +
			'<input type="text" class="fishbone causa" id="causa6" placeholder="Causa 6" style="position: absolute; top: calc(105px + 60%); left: 64.5%">' +
			'<input type="text" class="fishbone" id="subacusa61" placeholder="Subcausa 1" style="position: absolute; top: calc(105px + 48%); left: 71%">' +
			'<input type="text" class="fishbone" id="subacusa62" placeholder="Subcausa 2" style="position: absolute; top: calc(105px + 43%); left: 72.5%">' +
			'<input type="text" class="fishbone" id="tema" placeholder="Problemática" style="position: absolute; top: 50%; left: 41%; width: 42%">' +
			'</div>';
			flagPareto = false;
			flagSombreros = false;
		break;
		case 2:
			midArea.innerHTML = '<div class="infoArea">' +
			'<h1>Diagrama de Pareto</h1>' +
			'<p>Es una gráfica para organizar datos de forma que estos queden en orden descendente, de izquierda a derecha y separados por barras.</p>' +
			'<p>Con el Diagrama de Pareto se pueden detectar los problemas que tienen más relevancia mediante la aplicación del principio de Pareto (pocos vitales, muchos triviales) que dice que hay muchos problemas sin importancia frente a solo unos graves. Ya que por lo general, el 80% de los resultados totales se originan en el 20% de los elementos.</p>' +
			'</div>' +
			'<div class="interactArea" id="interactArea"><div id="chart_div" style="width: 900px; height: 500px;"></div>' +		
			'</div>';
			flagSombreros = false;
			flagPareto = true;
			drawVisualization();
		break;
		case 3:
			midArea.innerHTML = '<div class="infoArea">' +
			'<h1>6 Sombreros para pensar</h1>' +
			'<p>Sombrero blanco: Este sombrero nos enseñará a ver las cosas desde un punto de vista objetivo, neutro y vacío de sesgos.</p>' +
			'<p>Sombrero negro: Representa lo lógico-negativo y nos enseña a comprender por qué ciertas cosas pueden salir mal, no funcionar o no acontecer de la forma que nosotros pensamos.</p>' +
			'<p>Sombrero rojo: Es pasional, es emotivo y siente la vida desde el corazón y el universo emocional.</p>' +
			'<p>Sombrero amarillo: Nos enseña a aplicar un enfoque de pensamiento lógico-positivo.</p>' +
			'<p>Sombrero verde: Se contiene el pensamiento lateral, ese que nos invita a ser provocativos y no tan conservadores, a usar el movimiento novedoso antes que el juicio restrictivo.</p>' +
			'<p>Sombrero azul: Representa por tanto el pensamiento estructurado, el que se centra y nos guía en cada paso, señalando alternativas, proponiendo nuevas estrategias .</p>' +
			'</div>';
			flagPareto = false;
			flagSombreros = true;
			setSombreros();
		break;
		case 4:
			midArea.innerHTML = '<div class="squareArea">' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p1.jpg"></div><h2>Alejandro Ávalos</h2><h3>alexavalosxp@gmial.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p2.jpg"></div><h2>Humberto Ávila</h2><h3>humberto.avila07@gmail.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p3.jpg"></div><h2>Jorge Maya</h2><h3>jorgemaya08@hotmail.com</h3></div>' +
				'</div>';
		break;
		case 5:
			midArea.innerHTML ='<div class="infoArea">' +
			'<div class="btnBriggs" style="background: #0BB502;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#0BB502\'" onclick="displayBriggs(1)">ISTJ</div>' +
			'<div class="btnBriggs" style="background: #03B460;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#03B460\'" onclick="displayBriggs(2)">ISFJ</div>' +
			'<div class="btnBriggs" style="background: #7DD81B;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#7DD81B\'" onclick="displayBriggs(3)">ISTP</div>' +
			'<div class="btnBriggs" style="background: #044101;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#044101\'" onclick="displayBriggs(4)">ISFP</div>' +
			'<div class="btnBriggs" style="background: #C2E111;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#C2E111\'" onclick="displayBriggs(5)">ESTP</div>' +
			'<div class="btnBriggs" style="background: #F5BC0E;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F5BC0E\'" onclick="displayBriggs(6)">ESFP</div>' +
			'<div class="btnBriggs" style="background: #F3F847;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F3F847\'" onclick="displayBriggs(7)">ESTJ</div>' +
			'<div class="btnBriggs" style="background: #EEA817;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#EEA817\'" onclick="displayBriggs(8)">ESFJ</div>' +
		'</div>' +
		'<div class="interactArea2 divBriggs" id="interactArea2">' +
			'<div class="gameArea" id="gameArea">' +
				'<div class="instructions">Contesta las siguientes preguntas para descubrir tu perfil en el indicador Mayer Briggs (O si así lo deseas, puedes hacer seleccionar las opciones de los extremos para desplegar información al respecto).</div>' +
				'<button class="btnShowTest" onclick="showTest()">Comenzar</button>' +
			'</div>' +
		'</div>' +
		'<div class="infoArea2">' +
			'<div class="btnBriggs" style="background: #06A894;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#06A894\'" onclick="displayBriggs(9)">INFJ</div>' +
			'<div class="btnBriggs" style="background: #0547A9;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#0547A9\'" onclick="displayBriggs(10)">INTJ</div>' +
			'<div class="btnBriggs" style="background: #013641;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#013641\'" onclick="displayBriggs(11)">INFP</div>' +
			'<div class="btnBriggs" style="background: #5615AE;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#5615AE\'" onclick="displayBriggs(12)">INTP</div>' +
			'<div class="btnBriggs" style="background: #D12810;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#D12810\'" onclick="displayBriggs(13)">ENFP</div>' +
			'<div class="btnBriggs" style="background: #F2578D;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F2578D\'" onclick="displayBriggs(14)">ENTP</div>' +
			'<div class="btnBriggs" style="background: #EC6B2D;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#EC6B2D\'" onclick="displayBriggs(15)">ENFJ</div>' +
			'<div class="btnBriggs" style="background: #F26A57;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F26A57\'" onclick="displayBriggs(16)">ENTJ</div>' +
		'</div>';
		
		break
		default:
			midArea.innerHTML = 'ERROR';
			flagPareto = false;
			flagSombreros = false;
		break;
	}
}

function showTest()
{
	document.getElementById('gameArea').innerHTML = '<div class="instructions">Contesta las siguientes preguntas para descubrir tu perfil en el indicador Mayer Briggs (O si así lo deseas, puedes hacer seleccionar las opciones de los extremos para desplegar información al respecto).</div>' +
	'<div class="question" id="quest"></div>' +
				'<div class="options">' +
					'<div class="opt" id="opt1" onclick="checkAns(0)"></div>' +
					'<div class="opt" id="opt2" onclick="checkAns(1)"></div>' +
				'</div>'; 
				firstGame();
}

function displayBriggs(opt)
{
	area = document.getElementById("interactArea2");
	switch (opt) 
	{
		case 1:
			area.innerHTML = '<h1>Inspector</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Se trata de personas disciplinadas y responsables en el trabajo. No se distraen cuando están llevando a cabo alguna tarea. Son realistas, serios y callados. Les gusta tenerlo todo organizado; ya sea en el trabajo, en casa o en su vida entera. Valoran mucho las tradiciones y la lealtad.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 2:
			area.innerHTML = '<h1>Protector</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Callados pero sociables, concienzudos. Son responsables y estables en sus obligaciones que cumplen de manera precisa. Leales, considerados y propensos a recordar detalles de personas que consideran importantes, ya que suelen preocuparse por cómo se sienten los demás.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 3:
			area.innerHTML = '<h1>Artesano</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<p>Tolerantes y flexibles, son observadores callados hasta que un problema aparece, entonces actúan rápido para encontrar soluciones que funcionen. Interesados en la relación causa-efecto, suelen organizar los hechos utilizando los principios lógicos y valoran la eficiencia.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 4:
			area.innerHTML = '<h1>Compositor</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<p>Amables y amigos de sus amigos. Disfrutan del “ahora”,de lo que les rodea. Les gusta tener su propio espacio para trabajar. Son leales y defienden sus valores y a las personas que son importantes para ellos. Prefieren evitar los conflictos y las discusiones, por lo que no fuerzan a los demás a creer sus opiniones.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 5:
			area.innerHTML = '<h1>Promotor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<p>Flexibles y tolerantes, toman una posición pragmática centrada en resultados inmediatos. Les aburren las teorías y las explicaciones conceptuales; por el contrario prefieren actuar con toda su energía para solucionar los problemas. Se centran en el “aquí y ahora”, son espontáneos y disfrutan de cada momento en el que pueden estar con otras personas. Aprenden mejor haciendo que escuchando.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 6:
			area.innerHTML = '<h1>Actor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<p>Extrovertidos, amigables, y razonables. Les encanta la vida social, la gente y el confort material. Disfrutan trabajando con otras personas y suelen aportar un enfoque realista en sus actividades; eso sí, intentando hacer el trabajo divertido. Aprenden mejor intentando utilizar la nueva habilidad con otras personas.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 7:
			area.innerHTML = '<h1>Supervisor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Son gente práctica, realista, decisivos y veloces tomando decisiones. Organizan los proyectos y a la gente para que las cosas se hagan de la manera más eficiente posible. Cuidan hasta el más mínimo detalle y tiene establecidos claros valores que siguen sistemáticamente y quieren que los demás también lo hagan.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 8:
			area.innerHTML = '<h1>Proveedor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Les gusta estar en armonía con su alrededor y se esfuerzan con determinación para establecer esa situación de tranquilidad. Prefieren trabajar en compañía para completar el trabajo a tiempo y de manera precisa. Son leales, e intentan satisfacer las necesidades ajenas siempre que pueden. Quieren ser apreciados por lo que son y por su contribución con la sociedad.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 9:
			area.innerHTML = '<h1>Consejero</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Son personas acostumbradas a buscar el significado y la conexión entre ideas, en las relaciones y las posesiones materiales. Quieren entender lo que motiva a los demás a actuar. Además, sin cabezotas y defensores leales de sus valores. Suelen intentar desarrollar una visión clara sobre cómo se puede contribuir al bien común. Son organizados y determinados en imponer su visión.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 10:
			area.innerHTML = '<h1>Mente Maestra</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Son originales y creativos, siempre se las ingenian para salirse con la suya y conseguir lo quen. Rápidos observando lo que sucede a su alrededor y desarrollando explicaciones. Son bastante escépticos e independientes.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 11:
			area.innerHTML = '<h1>Sanador</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<p>Idealistas, quieren que su vida sea congruente con sus valores. Son curiosos y les gusta barajar diferentes opciones antes de tomar una decisión. Intentan entender a la gente y ayudarles a llenar su potencial. Son flexibles y se adaptan bien a las situaciones a menos que uno de sus valores se vea amenazado.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 12:
			area.innerHTML = '<h1>Arquitecto</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<p>Intentan desarrollar explicaciones lógicas para todo lo que les interesa. Prefieren lo abstracto y lo teórico,por tanto, están más interesados en las ideas que en las interacciones sociales. Callados e introvertidos pero flexibles y adaptables. Tienen una habilidad inusual para centrarse en solventar los problemas. Suelen ser escépticos y críticos siempre desde un punto de vista analítico.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 13:
			area.innerHTML = '<h1>Campeón</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<p>Acogedores, entusiastas e imaginativos. Ven la vida como una gran variedad de posibilidades. Hacen conexiones rápidas entre lo que sucede y la información que ya tienen, y actúan según los patrones que pueden observar. Les gusta conseguir la máxima información posible de los demás, a los que aprecian y apoyan con mucha facilidad.Son espontáneos, con mucha “labia” y acostumbran a improvisar.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 14:
			area.innerHTML = '<h1>Inventor</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<p>Rápidos, ingeniosos, siempre a alerta y muy habladores. Cuentan con muchos recursos a la hora de solucionar los problemas más complicados. Suelen generar conceptos que posteriormente analizan estratégicamente. Son buenos “fichando” a la gente, se aburren con la rutina y cambian constantemente de intereses.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 15:
			area.innerHTML = '<h1>Maestro</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Tienen una gran capacidad para empatizar con los demás. Son emotivos y encuentran potencial en todo el mundo. De hecho, ayudan a los demás a desarrollarse. Uno de sus puntos fuertes es la sociabilidad y tienen una gran capacidad de liderazgo.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 16:
			area.innerHTML = '<h1>Mariscal de campo</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Sinceros y decisivos, también suelen asumir el liderazgo porque establecen sistemas comprensivos y procedimientos lógicos en las tomas de decisiones. Disfrutan de los planes a largo plazo que tienen un fin determinado. Normalmente están bien informados, leen mucho e intentan expandir sus conocimientos a los demás. Presentan sus ideas con fuerza.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		default:
			area.innerHTML = 'ERROR';
		break
	}
}

//SHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWW TIIIIIIIIIIIIIIIIIIIPPPPSSS
//SHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWW TIIIIIIIIIIIIIIIIIIIPPPPSSS
function showTips(opt) //SHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWW TIIIIIIIIIIIIIIIIIIIPPPPSSS
{

	tip1=["Es bueno dedicar tiempo en soledar, pero procura tratar un poco más a tus compañeros de la vida diaria.", "Siempre ten en cuenta que no todo el mundo tiene la energía que tú tienes, intenta ser comprensivo con los demás."]; // I - E
	tip2=["Tus sentidos te pueden ayudar a comprender el mundo, pero trata de dedicar un poco más de tiempo a analizar aquello que \"no se ve\".", "Recuerda siempre que tu intuición aunque funcione la mayoría de las veces no es siempre la verdad. Trata de analizar la información desde distintos ángulos."]; // S - I
	tip3=["Las decisiones tomadas a base de emociones pueden ser a veces un poco precipitadas. No significa que sea incorrecto, solo ejerce precaución.", "No siempre la respuesta se encuentra tras un proceso sistemático, siempre ten en cuenta tus emociones y las de los demás."]; // F - T
	tip4=["Procura salir un poco de tu zona de confort y quizá encuentres un lado muy distinto de la moneda.", "Es muy bueno abrise a todo tipo de situaciones, pero siempre ten en cuenta el riesgo que puede implicar y a los demás."]; // J - P

	area = document.getElementById("interactArea2");
	switch (opt) 
	{
		case 1:
			area.innerHTML = '<h1>Inspector</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 2:
			area.innerHTML = '<h1>Protector</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 3:
			area.innerHTML = '<h1>Artesano</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 4:
			area.innerHTML = '<h1>Compositor</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 5:
			area.innerHTML = '<h1>Promotor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 6:
			area.innerHTML = '<h1>Actor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 7:
			area.innerHTML = '<h1>Supervisor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 8:
			area.innerHTML = '<h1>Proveedor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 9:
			area.innerHTML = '<h1>Consejero</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 10:
			area.innerHTML = '<h1>Mente Maestra</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 11:
			area.innerHTML = '<h1>Sanador</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 12:
			area.innerHTML = '<h1>Arquitecto</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 13:
			area.innerHTML = '<h1>Campeón</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 14:
			area.innerHTML = '<h1>Inventor</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 15:
			area.innerHTML = '<h1>Maestro</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 16:
			area.innerHTML = '<h1>Mariscal de campo</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		default:
			area.innerHTML = 'ERROR';
		break
	}
}

function applySettings()
{
	setArea = document.getElementById("settingsArea");
	setArea.hidden = true;
	casesName = document.getElementsByName("caseName");
	casesValue = document.getElementsByName("caseVal");

	newCasesValue = [];
	newCasesName = [];
	casesValueArray = [];
	
	for (i = 0; i < casesValue.length; i++) {
		casesValueArray.push(parseInt(casesValue[i].value));
	}

	newCasesValue = casesValueArray.sort(function(a, b){return b - a});

	casesValueArray = [];
	
	for (i = 0; i < casesValue.length; i++) {
		casesValueArray.push(parseInt(casesValue[i].value));
	}

	for (i = 0; i < casesValue.length; i++) {
		newCasesName.push(casesName[casesValueArray.indexOf(newCasesValue[i])].value);	
	}

	if (flagPareto) 
	{
		display(2);
	}

	if (flagSombreros) 
	{
		display(3);
	}
}

function changeSettings()
{
	setArea = document.getElementById("settingsArea");
	setArea.hidden = false;
}

caseX = 1;

function addSpace()
{
	caseX = caseX + 1;
	cases = document.getElementById("cases");

	newDiv = document.createElement('div');
	newDiv.id = "case" + caseX;

	newName = document.createElement('input');
	newName.setAttribute('type', 'text');
	newName.setAttribute('name', 'caseName');

	newVal = document.createElement('input');
	newVal.setAttribute('type', 'number');
	newVal.setAttribute('name', 'caseVal');

	newBtnPlus = document.createElement('button');
	newBtnPlus.innerHTML = "+";
	newBtnPlus.setAttribute('onclick', 'addSpace()');

	newBtnLess = document.createElement('button');
	newBtnLess.innerHTML = "-";
	newBtnLess.setAttribute('onclick', 'deleteSpace(this.parentNode.id)');

	newDiv.appendChild(newName);
	newDiv.appendChild(newVal);
	newDiv.appendChild(newBtnPlus);
	newDiv.appendChild(newBtnLess);
	cases.appendChild(newDiv);
}

function deleteSpace(id)
{
	caseT = document.getElementById(id);
	caseT.parentElement.removeChild(caseT);
}

function drawVisualization() {
        // Some raw data (not necessarily accurate)

    if (flagPareto)
    {

    var data = google.visualization.arrayToDataTable(getValues());

    var options = {
      title : 'Diagrama de pareto',
      vAxis: {title: 'Valor'},
      hAxis: {title: 'Problemas'},
      seriesType: 'bars',
      series: {1: {type: 'line'}},
      height: document.getElementById('interactArea').clientHeight,
      width: parseInt(document.getElementById('interactArea').clientWidth) - 50,
      titleTextStyle: {
        color: 'white'
    },
    hAxis: {
        textStyle: {
            color: 'white'
        },
        titleTextStyle: {
            color: 'white'
        }
    },
    vAxis: {
        textStyle: {
            color: 'white'
        },
        titleTextStyle: {
            color: 'white'
        },
        viewWindow: {max: 1}
    },
    legend: {
        textStyle: {
            color: 'white'
        }
    }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    midArea.innerHTML += '<div class="lineX" style="position: fixed; margin-top: 11%; left: 37%; height: 2px; width: calc(' + (valYaxis * ((parseInt(document.getElementById('interactArea').offsetWidth))*0.64)/newCasesValue.length) + 'px); background: yellow;"></div>' +
			'<div class="lineY" style="position: fixed; margin-top: 11%; left: calc(37% + ' + (valYaxis * ((parseInt(document.getElementById('interactArea').offsetWidth))*0.64)/newCasesValue.length) + 'px); height: 36%; width: 2px; background: yellow;"></div>';

}

function getValues()
{
	valueArray = [];

	valueArray.push(["x", "Frec. Rel", "Frec. Acum"]);

	total = 0;

	for (i = 0; i < casesName.length; i++) {
		total += newCasesValue[i];
	}

	//flagAxis = true

	valYaxis = 0;

	sum = 0;
	for (i = 0; i < casesName.length; i++) {
		act = newCasesValue[i]/total
		sum += act;
		valueArray.push([String(newCasesName[i]), act, sum]);
		if (sum < 0.8) {
			valYaxis++;
			//flagAxis = false;
		}
	}

	console.log(valueArray);
	return valueArray;
}
}

function setSombreros()
{
	sombrero = document.getElementsByName("inputSombrero");
	if(flagSombreros){
		midArea.innerHTML +='<div class="interactArea" id="interactArea">'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.svg" style="width: 15%;"></div>'
		+'<textarea id="sombrero1" disabled>'+sombrero[0].value+'</textarea></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.1.svg" style="width: 15%;"></div>'
		+'<textarea id="sombrero2" disabled>'+sombrero[1].value+'</textarea></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.2.svg" style="width: 15%;"></div>'
		+'<textarea id="sombrero3" disabled>'+sombrero[2].value+'</textarea></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.3.svg" style="width: 15%;"></div>'
		+'<textarea id="sombrero4" disabled>'+sombrero[3].value+'</textarea></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.4.svg" style="width: 15%;"></div>'
		+'<textarea id="sombrero5" disabled>'+sombrero[4].value+'</textarea></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.5.svg" style="width: 15%; "></div>'
		+'<textarea id="sombrero6" disabled>'+sombrero[5].value+'</textarea></div>'
		+'</div>';
	}

}

function initTest()
{
	display(5);
}

function firstGame()
{
	game = shuffle([1,2,3,4]);
	questions = ['¿Qué imagen representa mejor tu fin de semana perfecto?', '¿Qué te causa mayor satisfacción?', '¿Qué imagen representa mejor la palabra "Pequeño"?', '¿Qué imagen describe mejor la forma en que trabajas?'];
	answers = [0,0,0,0];
	numGame = -1;
	contWon = 0;
	setQuestion();
}

function checkAns(res)
{
	answers[game[numGame] - 1] = res;
	if (numGame < 3) 
	{
		setQuestion();
	} 
	else 
	{
		showResult();
	}
}

function setQuestion()
{
	numGame = numGame + 1;
	quest = document.getElementById('quest');
	opt1 = document.getElementById('opt1');
	opt2 = document.getElementById('opt2');

	quest.innerHTML = questions[game[numGame] - 1];
	opt1.innerHTML = '<img src="sources/r1p' + game[numGame] +'.jpg">';
	opt2.innerHTML = '<img src="sources/r2p' + game[numGame] +'.jpg">';
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function showResult()
{
	//document.getElementById('gameArea').innerHTML = "<h1>Juegos Ganados: " + contWon + "/5</h1>";
	//console.log(answers);
	//INFP
	if (answers[0] == 0)
	{
		if (answers[1] == 0)
		{
			if (answers[2] == 0)
			{
				if (answers[3] == 0)
				{
					// 0000
					displayBriggs(11);
				}
				else
				{
					// 0001
					displayBriggs(9);
				}
			}
			else
			{
				if (answers[3] == 0)
				{
					// 0010
					displayBriggs(12);
				}
				else
				{
					// 0011
					displayBriggs(10);
				}
			}

		}
		else
		{
			if (answers[2] == 0)
			{
				if (answers[3] == 0)
				{
					// 0100
					displayBriggs(4);
				}
				else
				{
					// 0101
					displayBriggs(2);
				}
			}
			else
			{
				if (answers[3] == 0)
				{
					// 0110
					displayBriggs(3);
				}
				else
				{
					// 0111
					displayBriggs(1);
				}
			}
		}
	}
	else
	{
		if (answers[1] == 0)
		{
			if (answers[2] == 0)
			{
				if (answers[3] == 0)
				{
					// 1000
					displayBriggs(13);
				}
				else
				{
					// 1001
					displayBriggs(15);
				}
			}
			else
			{
				if (answers[3] == 0)
				{
					// 1010
					displayBriggs(14);
				}
				else
				{
					// 1011
					displayBriggs(16);
				}
			}

		}
		else
		{
			if (answers[2] == 0)
			{
				if (answers[3] == 0)
				{
					// 1100
					displayBriggs(6);
				}
				else
				{
					// 1101
					displayBriggs(8);
				}
			}
			else
			{
				if (answers[3] == 0)
				{
					// 1110
					displayBriggs(5);
				}
				else
				{
					// 1111
					displayBriggs(7);
				}
			}
		}
	}
}