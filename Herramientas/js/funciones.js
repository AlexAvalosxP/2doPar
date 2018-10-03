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
		default:
			midArea.innerHTML = 'ERROR';
			flagPareto = false;
			flagSombreros = false;
		break;
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
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.svg" style="width: 10%; height: 200px;"></div>'
		+'<label id="sombrero1" >'+sombrero[0].value+'</label></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.1.svg" style="width: 10%; height: 200px; filter: saturate(100%)"></div>'
		+'<label id="sombrero2">'+sombrero[1].value+'</label></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.2.svg" style="width: 10%; height: 200px;"></div>'
		+'<label id="sombrero3">'+sombrero[2].value+'</label></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.3.svg" style="width: 10%; height: 200px;"></div>'
		+'<label id="sombrero4">'+sombrero[3].value+'</label></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.4.svg" style="width: 10%; height: 200px;"></div>'
		+'<label id="sombrero5">'+sombrero[4].value+'</label></div>'
		+'<div class="sombreroArea"><div class="imgSombrero" style="margin-left:5%;"><img src="img/hat.5.svg" style="width: 10%; height: 200px;"></div>'
		+'<label id="sombrero6">'+sombrero[5].value+'</label></div>'
		+'</div>';
	}

}