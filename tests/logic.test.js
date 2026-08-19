const { sumar, restar, multiplicar, dividir, calcularOperacion } = require("../logic");

test("2 + 3 = 5", () => expect(sumar(2, 3)).toBe(5));
test("10 - 4 = 6", () => expect(restar(10, 4)).toBe(6));
test("3 * 4 = 12", () => expect(multiplicar(3, 4)).toBe(12));
test("10 / 2 = 5", () => expect(dividir(10, 2)).toBe(5));
test("dividir entre cero genera error", () => expect(() => dividir(10, 0)).toThrow());
test("calcularOperacion ejecuta suma", () => expect(calcularOperacion(7, 8, "sumar")).toBe(15));
