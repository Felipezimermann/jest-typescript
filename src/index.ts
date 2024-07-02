class Produto {
  static validarProduto(produto: { nome: string; preco: number }) {
    if (!produto.nome) throw new Error("Nome do produto não informado");
    if (!produto.preco) throw new Error("Preço do produto não informado");
    return produto.nome;
  }

  static teste1() {
    console.log("fim");
  }

  static teste2(produto: { nome: string; preco: number }) {
    const testee = this.validarProduto({ ...produto });
    this.teste1();
    console.log(testee);
    return;
  }
}
export default Produto;
