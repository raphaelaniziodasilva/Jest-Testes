const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
const cacularDesconto = (salario, desconto) => salario - desconto;

// para o teste funcionar precisamos fazer a exportação desse jeito
export {
    somaHorasExtras,
    cacularDesconto
}