const pegaArquivo = require('../index');

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function'); 
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto0.md')
        expect(resultado).toBe("não há links");
    })
    it('deve lançar um erro na falta de arquivo', () => {
        async function capturaErro() {
          await pegaArquivo('./test/arquivos')
          expect(capturaErro).toThrowError(/não há arquivo no caminho/)
        }
      })
})