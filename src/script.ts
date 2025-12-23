const btn = document.getElementById('btnEnviar') as HTMLInputElement;       


btn.addEventListener("click", () => {
    const nome = document.getElementById('name') as HTMLInputElement;
    const salario = document.getElementById('salario') as HTMLInputElement;
    const contrato = document.getElementById('contrato') as HTMLInputElement;

    alert(`Funcionário ${nome.value} cadastrado com sucesso!`)
    
});
