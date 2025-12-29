import type { Errors } from "../model/validate.js";
import type { Employee } from "../model/employee.js";

const btn = document.getElementById("btnEnviar") as HTMLInputElement;
let employee: Employee = {} as Employee;

function getData(): Employee {
  btn.addEventListener("click", () => {
    employee.name = (document.getElementById("name") as HTMLInputElement).value;
    employee.contractType = (document.getElementById("contrato") as HTMLInputElement).value;
    let salary = (document.getElementById("salario") as HTMLInputElement).value;
    employee.salary = parseFloat(salary);});
    return employee;
}

function validateData(employee: Employee): Errors {
    const errors: Errors = {};
    employee = getData(); 

  btn.addEventListener("click", () => {

    if (!employee.name || employee.name.trim() === "") {
        errors.name = "É obrigatório informar o nome do funcionário.";
        alert(errors.name);
    }
    
    else if (!employee.salary || isNaN(employee.salary) || employee.salary <= 0) {
        errors.salary = "O salário deve ser um número positivo.";
        alert(errors.salary);
    }

    else if (!employee.contractType || employee.contractType.trim() === "") {
        errors.contractType = "É obrigatório informar o tipo de contrato.";
        alert(errors.contractType);
    }
    else if (employee.contractType.toUpperCase() !== "EFETIVO" && employee.contractType.toUpperCase() !== "TERCEIRIZADO") {
        errors.contractType = "Tipo de contrato inválido. Use 'Efetivo' ou 'Terceirizado'.";
        alert(errors.contractType);
    } 
  
    else{
        alert("Dados validados com sucesso!");
    }
});
    return errors;
} 


validateData(employee);