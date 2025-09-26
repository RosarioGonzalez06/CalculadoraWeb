const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");

let numeroActual = "";
let numeroAnterior = "";
let tipoOperacion = "";
display.value="0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    const value = button.getAttribute("data-value");

    if (action === "numero") {
      numeroActual += value;
      display.value = numeroActual;
    } else if (action === "operacion") {
      if (value != null) {
        tipoOperacion = value;
      }
      if (!numeroActual) return;
      console.log("Ha entrado 4");

      numeroAnterior = numeroActual;
      numeroActual = "";
    } else if (action === "igual") {
      if (!numeroAnterior || !numeroActual) return;
      console.log("Ha entrado 6");

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
        default:
          return;
      }
    } else if (action === "limpiar") {
      display.value="0";

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
