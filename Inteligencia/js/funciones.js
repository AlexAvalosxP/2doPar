function display(opt)
{
	midArea = document.getElementById("midArea");
	switch (opt) 
	{
		case 1:
			midArea.innerHTML = '<div class="infoArea">' +
				'<h1>Inteligencia Social</h1>' +
				'<p>La inteligencia social es la capacidad que tiene una persona de entender, tratar y llevarse bien con la gente que le rodea. La inteligencia social es lo que hace que una persona sea capaz de tener mil amigos dispuestos a dar la cara por él, o lo que hace que una persona no tenga nadie con quien contar.</p>' +
				'<p>Alguien con una inteligencia social muy desarrollada es una persona capaz de entender e intuir qué siente la gente en cada momento, qué necesita, cómo se comporta y qué espera de nosotros. </p>' +
			'</div>' +
			'<div class="interactArea2" id="interactArea">' +
				'<div class="imgInteract"><img src="sources/is5.jpg"></div>' +
				'<div class="imgInteract"><img src="sources/is2.jpg"></div>' +
				'<div class="imgInteract"><img src="sources/is3.jpg"></div>' +
				'<div class="imgInteract"><img src="sources/is4.jpg"></div>' +
			'</div>' +
			'<div class="infoArea2">' +
				'<h2>Herramientas de una buena inteligencia social:</h2>' +
				'<ol>' +
					'<li>La empatía.</li>' +
					'<li>El liderazgo.</li>' +
					'<li>La inteligencia verbal.</li>' +
					'<li>La inteligencia emocional.</li>' +
					'<li>La asertividad.</li>' +
					'<li>Saber escuchar y prestar atención.</li>' +
					'<li>Ser bueno analizando el lenguaje no verbal de la gente.</li>' +
					'<li>Ser bueno psicoanalizando a la gente y leer entre líneas cuando nos hablan.</li>' +
					'<li>Gestionar bien el contacto físico.</li>' +
					'<li>Interpretar correctamente las situaciones sociales que ocurren a nuestro alrededor en conjunto.</li>' +
					'<li>Vestir bien y correctamente para cada situación, proyectando lo mejor de nosotros y lo que deseamos en cada momento.</li>' +
				'</ol>' +
			'</div>';
		break;
		case 2:
			midArea.innerHTML = '<div class="infoArea">' +
				'<h1>Inteligencia Emocional</h1>' +
				'<p>La inteligencia emocional es la capacidad para identificar, entender y manejar las emociones correctamente, de un modo que facilite las relaciones con los demás, la consecución de metas y objetivos, el manejo del estrés o la superación de obstáculos.</p>' +
				'<p>Las personas con una alta inteligencia emocional no necesariamente tienen menos emociones negativas, sino que, cuando aparecen, saben manejarlas mejor. Tienen también una mayor capacidad para identificarlas y saber qué es lo que están sintiendo exactamente y también una alta capacidad para identificar qué sienten los demás.</p>' +
			'</div>' +
			'<div class="interactArea2" id="interactArea">' +
				'<div class="imgInteract"><img src="sources/ie3.jpg"></div>' +
				'<div class="imgInteract"><img src="sources/ie2.jpg"></div>' +
				'<div class="imgInteract"><img src="sources/ie1.jpg"></div>' +
				'<div class="imgInteract"><img src="sources/ie4.jpg"></div>' +
			'</div>' +
			'<div class="infoArea2">' +
				'<h2>Características de las personas con una inteligencia emocional alta:</h2>' +
				'<ol>' +
					'<li>Identificar las propias emociones. </li>' +
					'<li>Manejo de las emociones. </li>' +
					'<li>Identificar las emociones de los demás. </li>' +
				'</ol>' +
				'<h2>La importancia de la inteligencia emocional</h2>' +
				'<ol>' +
					'<li>Ayuda a triunfar en todas aquellas áreas de la vida que implican relacionarse con los demás</li>' +
					'<li>Ayuda a mantener una mejor salud al ser capaces de manejar mejor el estrés y las emociones negativas</li>' +
					'<li>Ayuda a relacionarse mejor con los demás.</li>' +
				'</ol>' +
			'</div>';
		break;
		case 3:
			midArea.innerHTML = '<div class="infoArea">' +
				'<h1>Análisis FODA</h1>' +
				'<p>El análisis FODA son siglas que representan el estudio de las Fortalezas, Oportunidades, Debilidades y Amenazas, de una empresa un mercado, o sencillamente a una persona, este acróstico es aplicado a cualquier situación, en el cual, se necesite un análisis o estudio.</p>' +
				'<p>Se recurre a ella para desarrollar una estrategia de negocio que sea solida a futuro, a demás, el análisis FODA es una herramienta útil que todo gerente de empresa o industria debe ejecutar y tomarla en consideración.</p>' +
			'</div>' +
			'<div class="interactArea2" id="interactArea">' +
				'<img src="sources/foda.png">' +
			'</div>' +
			'<div class="infoArea2">' +
				'<h2>Partes del Anális FODA</h2>' +
				'<ol>' +
					'<li>Fortalezas: los atributos o destrezas que una industria o empresa contiene para alcanzar los objetivos.</li>' +
					'<li>Debilidades: lo que es perjudicial o factores desfavorables para la ejecución del objetivo.</li>' +
					'<li>Oportunidades: las condiciones externas, lo que está a la vista por todos o la popularidad y competitividad que tenga la industria u organización útiles para alcanzar el objetivo.</li>' +
					'<li>Amenazas: lo perjudicial, lo que amenaza la supervivencia de la industria o empresa que se encuentran externamente, las cuales, pudieran convertirse en oportunidades, para alcanzar el objetivo.</li>' +
				'</ol>' +
			'</div>';
		break;
		case 4:
			midArea.innerHTML = '<div class="squareArea">' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p1.jpg"></div><h2>Alejandro Ávalos</h2><h3>alexavalosxp@gmial.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p2.jpg"></div><h2>Humberto Ávila</h2><h3>humberto.avila07@gmail.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p3.jpg"></div><h2>Jorge Maya</h2><h3>jorgemaya08@hotmail.com</h3></div>' +
				'</div>';
		break;
		default:
			midArea.innerHTML = 'ERROR';
			flagPareto = false;
		break;
	}
}