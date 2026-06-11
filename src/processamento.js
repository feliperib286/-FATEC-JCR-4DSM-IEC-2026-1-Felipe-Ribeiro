function processarAlerta(nivel) {
  if (nivel >= 80) return "Notificação enviada: Crítico";
  return "Notificação enviada: Normal";
}
module.exports = { processarAlerta };