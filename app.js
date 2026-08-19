document.getElementById("calcular").addEventListener("click", () => {
  const a = Number(document.getElementById("numero1").value);
  const b = Number(document.getElementById("numero2").value);
  const operacion = document.getElementById("operacion").value;
  const salida = document.getElementById("resultado");

  try {
    const resultado = calcularOperacion(a, b, operacion);
    salida.textContent = `Resultado: ${resultado}`;
  } catch (error) {
    salida.textContent = `Error: ${error.message}`;
  }
});
