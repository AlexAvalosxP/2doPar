flagPareto = false;

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
			'<input type="text" id="causa1" placeholder="Causa 1" style="position: absolute; top:calc(105px + 10%) ; left: 30%">' +
			'<input type="text" id="subacusa11" placeholder="Subcausa 1" style="position: absolute; top: 180px; left: 150px">' +
			'<input type="text" id="subacusa12" placeholder="Subcausa 2" style="position: absolute; top: 230px; left: 165px">' +
			'<input type="text" id="causa1" placeholder="Causa 2" style="position: absolute; top: 90px; left: 270px">' +
			'<input type="text" id="subacusa21" placeholder="Subcausa 1" style="position: absolute; top: 180px; left: 365px">' +
			'<input type="text" id="subacusa22" placeholder="Subcausa 2" style="position: absolute; top: 230px; left: 380px">' +
			'<input type="text" id="causa1" placeholder="Causa 3" style="position: absolute; top: 90px; left: 490px">' +
			'<input type="text" id="subacusa31" placeholder="Subcausa 1" style="position: absolute; top: 180px; left: 585px">' +
			'<input type="text" id="subacusa32" placeholder="Subcausa 2" style="position: absolute; top: 230px; left: 600px">' +
			'<input type="text" id="causa1" placeholder="Causa 4" style="position: absolute; top: 590px; left: 50px">' +
			'<input type="text" id="subacusa41" placeholder="Subcausa 1" style="position: absolute; top: 470px; left: 150px">' +
			'<input type="text" id="subacusa42" placeholder="Subcausa 2" style="position: absolute; top: 420px; left: 165px">' +
			'<input type="text" id="causa1" placeholder="Causa 5" style="position: absolute; top: 590px; left: 270px">' +
			'<input type="text" id="subacusa51" placeholder="Subcausa 1" style="position: absolute; top: 470px; left: 365px">' +
			'<input type="text" id="subacusa52" placeholder="Subcausa 2" style="position: absolute; top: 420px; left: 380px">' +
			'<input type="text" id="causa1" placeholder="Causa 6" style="position: absolute; top: 590px; left: 490px">' +
			'<input type="text" id="subacusa61" placeholder="Subcausa 1" style="position: absolute; top: 470px; left: 585px">' +
			'<input type="text" id="subacusa62" placeholder="Subcausa 2" style="position: absolute; top: 420px; left: 600px">' +
			'</div>';
			flagPareto = false;
		break;
		case 2:
			midArea.innerHTML = '<div class="infoArea">' +
			'<h1>Diagrama de Pareto</h1>' +
			'<p>Es una gráfica para organizar datos de forma que estos queden en orden descendente, de izquierda a derecha y separados por barras.</p>' +
			'<p>Con el Diagrama de Pareto se pueden detectar los problemas que tienen más relevancia mediante la aplicación del principio de Pareto (pocos vitales, muchos triviales) que dice que hay muchos problemas sin importancia frente a solo unos graves. Ya que por lo general, el 80% de los resultados totales se originan en el 20% de los elementos.</p>' +
			'</div>' +
			'<div class="interactArea" id="interactArea"><div id="chart_div" style="width: 900px; height: 500px;"></div>' +		
			'</div>';
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
			'</div>' +
			'<div class="interactArea" id="interactArea">' +		
			'</div>';
			flagPareto = false;
		break;
		default:
			midArea.innerHTML = 'ERROR';
			flagPareto = false;
		break;
	}
}

function applySettings()
{
	setArea = document.getElementById("settingsArea");
	setArea.hidden = true;
	casesName = document.getElementsByName("caseName");
	casesValue = document.getElementsByName("caseVal");
	drawVisualization();
	/*
	for (i = 0; i < casesName.length; i++) {
		console.log(casesName[i].value);
		console.log(casesValue[i].value);
	}
	*/
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
        }
    },
    legend: {
        textStyle: {
            color: 'white'
        }
    }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function getValues()
{
	valueArray = [];

	valueArray.push(["x", "Frec. Rel", "Frec. Acum"]);

	total = 0;

	for (i = 0; i < casesName.length; i++) {
		total += parseInt(casesValue[i].value);
	}

	sum = 0;
	for (i = 0; i < casesName.length; i++) {
		act = parseInt(casesValue[i].value)/total
		sum += act;
		valueArray.push([String(casesName[i].value), act, sum]);
	}

	console.log(valueArray);
	return valueArray;
}
}

function setSombreros()
{
	sombrero = document.getElementsByName("inputSombrero");
	document.getElementById("sobrero1").innerHTML = sombrero[0].value;
	document.getElementById("sobrero2").innerHTML = sombrero[1].value;
	document.getElementById("sobrero3").innerHTML = sombrero[2].value;
	document.getElementById("sobrero4").innerHTML = sombrero[3].value;
	document.getElementById("sobrero5").innerHTML = sombrero[4].value;
	document.getElementById("sobrero6").innerHTML = sombrero[5].value;

}