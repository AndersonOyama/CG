var c = document.getElementById("canvas");
var figure = c.getContext("2d");
var pos = 0, itemSelected = 0;
var elements = new Array();

function clearCanvas(){
   figure.clearRect(0, 0, c.width, c.height);
}

function setSquare(){
  var pontoRefX = prompt("Coordenada X do ponto de referencia: ");
  var pontoRefY = prompt("Coordenada Y do ponto de referencia: ");
  var tamanho = prompt("Tamanho do lado do quadrado: ");
  //drawSquare(pontoRefX, pontoRefY,tamanho);
  elements.push(drawSquare(pontoRefX, pontoRefY,tamanho));

}

function drawSquare(x, y, lenght) {
  if (canvas.getContext) {
    figure.strokeRect(x, y, lenght, lenght);
  }
}

function setRectangle(){
  var pontoRefX = prompt("Coordenada X do ponto de referencia: ");
  var pontoRefY = prompt("Coordenada Y do ponto de referencia: ");
  var largura = prompt("Tamanho do largura do retângulo: ");
  var altura = prompt("Tamanho da algura do retângulo: ");
  elements.push(drawRectangle(pontoRefX, pontoRefY, largura, altura));
}

function drawRectangle(x, y, width, height) {
  if (canvas.getContext) {
    figure.strokeRect(x, y, width, height);
  }
}

function setCircle(){
  var pontoRefX = prompt("Coordenada X do ponto de referencia: ");
  var pontoRefY = prompt("Coordenada Y do ponto de referencia: ");
  var raio = prompt("Tamanho do raio da circunferencia: ");
  elements.push(drawCircle(pontoRefX, pontoRefY, raio));
}

function drawCircle(x, y, raio){
figure.beginPath();
figure.arc(x, y, raio, 0, 2*Math.PI);
figure.stroke();
}

function setLine(){
    var pontoRefX = prompt("Coordenada X do ponto de referencia: ");
    var pontoRefY = prompt("Coordenada X do ponto de referencia: ");
    var pontoX = prompt("Coordenada X do ponto final: ");
    var pontoY = prompt("Coordenada Y do ponto final: ");
    elements.push(drawLine(pontoRefX, pontoRefY, pontoX, pontoY));
}

function drawLine(x, y, finalX, finalY){
  if (canvas.getContext){
    figure.beginPath();
    figure.moveTo(x, y);
    figure.lineTo(finalX, finalY);
    figure.stroke();
  }
}

function setTriangle(){
  var pontoRefX = prompt("Coordenada X do ponto de referencia: ");
  var pontoRefY = prompt("Coordenada X do ponto de referencia: ");
  //var pontoX = prompt("Coordenada X do ponto final: ");
  //var pontoY = prompt("Coordenada Y do ponto final: ");
  var tamanho = prompt("Tamanho dos lados do triangulo: ");
  elements.push(drawTriangle(pontoRefX, pontoRefY, tamanho));
}

function drawTriangle(refX, refY, lengh){
  figure.beginPath();
  figure.moveTo(refX, refY);
  figure.lineTo(refX, refY-lengh);
  figure.lineTo(refX+lengh, refY);
  figure.closePath();
}


function nextFigure(){
	if(pos > elements.length){
		pos = 0;
		//elements[pos].strokeStyle '#ff0000';
	} else {
		pos++;
		//elements[pos].strokeStyle '#ff0000';
	}
}

function previusFigure(){
	if(pos < 0){
		pos = elements.length;
		//elements[pos].strokeStyle '#ff0000';
	} else {
		pos--;
		//elements[pos].strokeStyle '#ff0000';
	}
}



function changeScale(pos){
  var scaleX = prompt("Escala em relação a X: ");
  var scaleY = prompt("Escala em relação a Y: ");
	
  setScale(scaleX, scaleY, pos);
}

function setScale(x, y, pos){
  figure.scale(x, y);
  elements[pos];
}

function changeRotation(pos){
  var angle = prompt("Digite o angulo a ser rotacionado: ");
  setAngle(angle, pos);
}

function setAngle(angle, pos){
  var temp = ctx.getImageData();
	elements[pos].rotate(angle*Math.PI/180);
  	figure.putImageData(temp, 0, 0);
}