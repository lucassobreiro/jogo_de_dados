/*
Autor: Lucas Carvalho Sobreiro
RA: 2220103982
*/
var dado = 0;
var dado2 = 0;
var dadoS = 0;
var dadoP = 0;
var dadoR = 0;
var J1 = 10;
var J2 = 10;
var jogador = 1;
var J1nome = "";
var J2nome = "";
var Jnome = true;

function roll () {
		document.getElementById("J1_id").innerHTML = J1nome + ": " + J1;
		document.getElementById("J2_id").innerHTML = J2nome + ": " + J2;
		document.getElementById("p").innerHTML = "<br>";
		dado=Math.floor(Math.random() * 6) + 1;
	if(dado==1)
		document.getElementById("dado_id").src = "imagens/dice-1.png";
	if(dado==2)
		document.getElementById("dado_id").src = "imagens/dice-2.png";
	if(dado==3)
		document.getElementById("dado_id").src = "imagens/dice-3.png";
	if(dado==4)
		document.getElementById("dado_id").src = "imagens/dice-4.png";
	if(dado==5)
		document.getElementById("dado_id").src = "imagens/dice-5.png";
	if(dado==6)
		document.getElementById("dado_id").src = "imagens/dice-6.png";
	
		dado2=Math.floor(Math.random() * 6) + 1;
	if(dado2==1)
		document.getElementById("dado2_id").src = "imagens/dice-1.png";
	if(dado2==2)
		document.getElementById("dado2_id").src = "imagens/dice-2.png";
	if(dado2==3)
		document.getElementById("dado2_id").src = "imagens/dice-3.png";
	if(dado2==4)
		document.getElementById("dado2_id").src = "imagens/dice-4.png";
	if(dado2==5)
		document.getElementById("dado2_id").src = "imagens/dice-5.png";
	if(dado2==6)
		document.getElementById("dado2_id").src = "imagens/dice-6.png";
	
		dadoS = dado + dado2;
		document.getElementById("dadoS_id").innerHTML = "Soma: " + dadoS;
		dadoR ++;
		
	if(dadoP==0) {
		dadoP = dadoS;
		document.getElementById("dadoP_id").innerHTML = "Ponto: " + dadoP;
	}
	if(dadoS==7) {
		if(dadoR<=1) {
			win();
		}
	}
	if(dadoS==11) {
		if(dadoR<=1) {
			win();
		}
	}
	if(dadoS==dadoP) {
		if(dadoR>=2) {
			win();
		}
	}
	if(dadoS==2) {
		if(dadoR<=1) {
			lose();
		}
	}
	if(dadoS==3) {
		if(dadoR<=1) {
			lose();
		}
	}
	if(dadoS==12) {
		if(dadoR<=1) {
			lose();
		}
	}
	if(dadoS==7) {
		if(dadoR>=2) {
			lose();
		}
	}
	if(jogador==1)
		document.getElementById("jogador_id").innerHTML = J1nome;
	if(jogador==2)
		document.getElementById("jogador_id").innerHTML = J2nome;
}
function win () {
	document.getElementById("p").innerHTML = "Você ganhou!";
	dado = 0;
	dado2 = 0;
	dadoS = 0;
	dadoP = 0;
	dadoR = 0;
	jogador ++;
	if(jogador > 2) {
		jogador = 1;
	}
}
function lose () {
	document.getElementById("p").innerHTML = "Você perdeu!";
	dado = 0;
	dado2 = 0;
	dadoS = 0;
	dadoP = 0;
	dadoR = 0;
	jogador ++;
	if(jogador > 2) {
		J2 --;
		document.getElementById("J2_id").innerHTML = J2nome + ": " + J2;
		jogador = 1;
	}
	else
		J1 --;
		document.getElementById("J1_id").innerHTML = J1nome + ": " + J1;
	if(J1<=0) {
		document.getElementById("p").innerHTML = J2nome + " Venceu! Fim de Jogo!";
		document.getElementById("button").style.visibility = "hidden";
		document.getElementById("jogador_id").style.visibility = "hidden";
	}
	if(J2<=0) {
		document.getElementById("p").innerHTML = J1nome + " Venceu! Fim de Jogo!";
		document.getElementById("button").style.visibility = "hidden";
		document.getElementById("jogador_id").style.visibility = "hidden";
	}
}
function cadastrar () {
	J1nome = String(document.getElementById("J1nome_id").value);
	J2nome = String(document.getElementById("J2nome_id").value);
	if(J1nome=="")
		Jnome = false;
	if(J2nome=="")
		Jnome = false;
	if(Jnome==true) {
		document.getElementById("jogador_id").innerHTML = J1nome;
		document.getElementById("J1nome_id").style.visibility = "hidden";
		document.getElementById("J2nome_id").style.visibility = "hidden";
		document.getElementById("button2").style.visibility = "hidden";
		document.getElementById("button").style.visibility = "visible";
	}
	Jnome = true;
}