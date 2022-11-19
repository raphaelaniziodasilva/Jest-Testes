// importando o carrinho para utilizar nos testes
import Carrinho from "../carrinho/carrinho";
// importando os itens para utilizar nos testes
import Item from "../carrinho/item";

describe("Testes do carrinho", () => {
    it("O carrinho deve inicializar vazio", () => {
        // verificando se o carrinho esta vazio
        const carrinho = new Carrinho()
        expect(carrinho.subtotal).toBeNull()
    })
    it("Adicionando itens no carrinho", () => {
        // criando itens
        const item = new Item("Caju", 2.5, 12)
        const item2 = new Item("Graviola", 3.3, 2)
        // criando carrinho 
        const carrinho = new Carrinho()
        // adicionando os itens no carrinho 
        carrinho.adiciona(item)
        carrinho.adiciona(item2)
        // verificando se os itens foram adicionados no carrinho
        expect(carrinho.itens).toContain(item)
        expect(carrinho.itens).toContain(item2)
        // toContain --> quando estiver trabalhando com array
    })
    it("Deve ter a propriedade total na inicialização", () => {
        const carrinho = new Carrinho()
        // verificando a propriedade o objeto instanciado carrinho
        expect(carrinho).toHaveProperty("total")

    })
    
})