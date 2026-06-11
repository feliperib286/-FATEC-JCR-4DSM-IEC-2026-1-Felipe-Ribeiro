const { processarAlerta } = require('../src/processamento');

test('Deve retornar Crítico para nível >= 80', () => {
  expect(processarAlerta(80)).toBe("Notificação enviada: Crítico");
});

test('Deve retornar Normal para nível < 80', () => {
  expect(processarAlerta(50)).toBe("Notificação enviada: Normal");
});