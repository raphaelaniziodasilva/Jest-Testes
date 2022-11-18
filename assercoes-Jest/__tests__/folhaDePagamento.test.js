// importando somaHorasExtras e cacularDesconto para realizar os testes
import {somaHorasExtras, cacularDesconto} from "../folhaDepagamento.js"

describe("Testes de calculo de folha", () => {
    it("Deve retornar a soma das horas extras", () => {
        const esperado = 2500
        // no valor retornado vamos chamar a função somaHorasExtras e passar os valores
        const retornado = somaHorasExtras(2100, 400)
    
        expect(retornado).toBe(esperado)
    })
    it("Deve descontar o valor do salario", () => {
        const esperado = 2100
        const retornado = cacularDesconto(2400, 300)
    
        expect(retornado).toBe(esperado)
    })
})
