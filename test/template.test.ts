import { it, describe, expect, jest } from "@jest/globals";
import Produto from "../src/index";

describe("#Produto", () => {
  describe("#validarProduto", () => {
    it("deve lançar um erro se o nome do produto não for informado", () => {
      const mockProdutoInvalido = { nome: "", preco: 10 };
      expect(() => Produto.validarProduto(mockProdutoInvalido)).toThrow(
        "Nome do produto não informado"
      );
    });

    it("deve lançar um erro se o preço do produto não for informado", () => {
      const mockProdutoInvalido = { nome: "Produto", preco: 0 };

      expect(() => Produto.validarProduto(mockProdutoInvalido)).toThrow(
        "Preço do produto não informado"
      );
    });

    it("deve lançar um erro se o preço do produto não for informado", () => {
      const mockProdutoInvalido = { nome: "Produto", preco: 0 };
      jest.spyOn(Produto, "validarProduto").mockReturnValue("zimermann");

      Produto.teste2(mockProdutoInvalido);
    });
  });
});
