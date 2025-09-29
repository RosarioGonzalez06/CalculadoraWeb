const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");

let numeroAnterior = "";
let numeroActual = "";
let tipoOperacion = "";
display.value = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //Tomamos valor de las taclas pulsadas
    const action = button.getAttribute("data-action");
    const value = button.getAttribute("data-value");

    // Comprobamos si hemos introducido un numero
    if (action === "numero") {
      if(numeroActual==="0"){
        numeroActual = "";
      }
      numeroActual += value;
      display.value = numeroActual;
    } else if (action === "decimal") {
      if (!numeroActual.includes(".")) {
        numeroActual += ".";
        display.value = numeroActual;
      }
      // Comprobamos si hemos introducido una operacion
    } else if (action === "operacion") {
      if (value != null) {
        tipoOperacion = value; //Capturamos tipo de operacion
      }
      if (numeroActual) {
        // Damos valor al numero anterior y reseteamos el actual
        numeroAnterior = numeroActual;
        numeroActual = "";
      }
      // Evaluamos si la operación solo requiere un numero anterior
      if (numeroAnterior && (tipoOperacion === "√" || tipoOperacion === "x!")) {
        switch (tipoOperacion) {
          case "√":
            console.log("ha entrado raiz");
            raiz();
            break;
          case "x!":
            factorial();
            break;
          default:
            return;
        }
      }
    } else if (action === "igual") {
      //Hemos pulsado igual
      console.log("numeroAnterior: " + numeroAnterior);
      if (!numeroAnterior || !numeroActual) return; //Se necesitam dos numeros
      console.log("tipoOperacion: " + tipoOperacion);
      switch (tipoOperacion) {
        case "+":
          suma();
          break;
        case "-":
          resta();
          break;
        case "*":
          multiplicacion();
          break;
        case "/":
          if (numeroActual === "0") {
            alert("Error. No puedes dividir entre 0");
            return;
          }
          division();
          break;
        case "x^y":
          elevar();
          break;
        case "√":
          console.log("ha entrado raiz");
          raiz();
          break;
        case "x!":
          factorial();
          break;
        default:
          return;
      }
    } else if (action === "limpiar") {
      display.value = "0";

      numeroActual = "";
      numeroAnterior = "";
      tipoOperacion = "";
    }
  });
});

function suma(): void {
  const a = Number(numeroAnterior);
  const b = Number(numeroActual);
  const result = a + b;
  display.value = result.toString();
  numeroActual = result.toString();
  numeroAnterior = "";
}
function resta(): void {
  const a = Number(numeroAnterior);
  const b = Number(numeroActual);
  const result = a - b;
  display.value = result.toString();
  numeroActual = result.toString();
  numeroAnterior = "";
}
function multiplicacion(): void {
  const a = Number(numeroAnterior);
  const b = Number(numeroActual);
  const result = a * b;
  display.value = result.toString();
  numeroActual = result.toString();
  numeroAnterior = "";
}
function division(): void {
  const a = Number(numeroAnterior);
  const b = Number(numeroActual);
  const result = a / b;
  display.value = result.toString();
  numeroActual = result.toString();
  numeroAnterior = "";
}
function elevar(): void {
  const a = Number(numeroAnterior);
  const b = Number(numeroActual);
  const result = Math.pow(a, b);
  display.value = result.toString();
  numeroActual = result.toString();
  numeroAnterior = "";
}
function raiz(): void {
  const a = Number(numeroAnterior);
  const result = Math.sqrt(a);
  display.value = result.toString();
  numeroActual = result.toString();
  numeroAnterior = "";
}
function factorial(): void {
  const a = Number(numeroAnterior);
  let result = 1;
  if (a > 0) {
    for (let i = 2; i <= a; i++) {
      result *= i;
    }
    display.value = result.toString();
    numeroActual = result.toString();
  }
  numeroAnterior = "";
}
