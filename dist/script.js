const btn = document.getElementById('btnEnviar');
btn.addEventListener("click", () => {
    const nome = document.getElementById('name');
    const contrato = document.getElementById('contrato');
    if (contrato.value.toUpperCase() !== "EFETIVO" && contrato.value.toUpperCase() !== "TERCEIRIZADO") {
        alert("Tipo de contrato inválido! Use 'Efetivo' ou 'Terceirizado'.");
    }
    else {
        alert(`Funcionário ${nome.value} cadastrado com sucesso!`);
    }
});
export {};
