// importando os itens para utilizar nos testes
import Item from "../carrinho/item";

// descrevendo a suit de testes
describe("Testes dis itens", () => {
    it("Deve conter as informações do item", () => {
        const item = new Item("cajarana", 1.8, 8)
        // toBe --> tem que ser igual
        expect(item.nome).toBe("cajarana")
        expect(item.valor).toBe(1.8)
        expect(item.quantidade).toBe(8)
    })
    it("Pegando o valor total da quantidade de itens", () => {
        const item = new Item("ciriguela", 1.2, 9)
        // toBeCloseTo --> pra lidar com ponto flutuante ou seja vai se aproximar ao valor esperado
        expect(item.pegaValorTotalItem()).toBeCloseTo(10.8)
    })
})