const btn = document.getElementById('btnEnviar') as HTMLInputElement;       


btn.addEventListener("click", () => {
    const nome = document.getElementById('name') as HTMLInputElement;
    const contrato = document.getElementById('contrato') as HTMLInputElement;

    if (contrato.value.toUpperCase() !== "EFETIVO" && contrato.value.toUpperCase() !== "TERCEIRIZADO") {
        alert("Tipo de contrato inválido! Use 'Efetivo' ou 'Terceirizado'.");
    }   
    else{
    alert(`Funcionário ${nome.value} cadastrado com sucesso!`)
    }
});
