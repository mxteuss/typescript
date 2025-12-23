const btn = document.getElementById('btnEnviar');
btn.addEventListener("click", () => {
    const nome = document.getElementById('name');
    const salario = document.getElementById('salario');
    const contrato = document.getElementById('contrato');
    alert(`Funcionário ${nome.value} cadastrado com sucesso!`);
});
export {};
