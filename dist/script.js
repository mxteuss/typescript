const btn = document.getElementById('btnEnviar');
btn.addEventListener("click", () => {
    const nome = document.getElementById('name');
<<<<<<< HEAD
    const contrato = document.getElementById('contrato');
    if (contrato.value.toUpperCase() !== "Efetivo" && contrato.value.toUpperCase() !== "Terceirizado") {
        alert("Tipo de contrato inválido! Use 'Efetivo' ou 'Terceirizado'.");
    }
    else {
        alert(`Funcionário ${nome.value} cadastrado com sucesso!`);
    }
=======
    const salario = document.getElementById('salario');
    const contrato = document.getElementById('contrato');
    alert(`Funcionário ${nome.value} cadastrado com sucesso!`);
>>>>>>> 619bd9a55e71436efbc5d6a2390cdaa0d074066b
});
export {};
