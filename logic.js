function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }

function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre cero");
  return a / b;
}

function calcularOperacion(a, b, operacion) {
  const operaciones = { sumar, restar, multiplicar, dividir };
  if (!operaciones[operacion]) throw new Error("Operación no válida");
  return operaciones[operacion](a, b);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { sumar, restar, multiplicar, dividir, calcularOperacion };
}
