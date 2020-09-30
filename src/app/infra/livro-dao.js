class LivroDao{

    constructor(db){
        this._db = db
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all('select * from livros',
            (error, resultado) => {
                if(error){
                    return reject("Não foi possível buscar livros");
                }
                return resolve(resultado);
            })
        });
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(` INSERT INTO LIVROS (
                titulo,
                preco,
                descricao
            ) values (?, ?, ?)`,
            [
                livro.titulo,
                livro.preco,
                livro.descricao],
            (error, resultado) => {
                if(error){
                    return reject("Não foi possível buscar livros");
                }
                return resolve(resultado);
            })
        });
    }

    atualiza(livro){
        return new Promise((resolve, reject) => {
            this._db.run(` UPDATE LIVROS
                SET titulo = ?,
                preco = ?,
                descricao = ?
             WHERE ID = ?`,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            (error, resultado) => {
                if(error){
                    return reject("Não foi possível atualizar livro");
                }
                return resolve(resultado);
            })
        });
    }

    remove(id){
        return new Promise((resolve, reject) => {
            this._db.run(` DELETE FROM LIVROS 
                WHERE ID = ?`,
            [id],
            (error, resultado) => {
                if(error){
                    return reject("Não foi possível deletar livro");
                }
                return resolve(resultado);
            })
        });
    }

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get(` SELECT * FROM LIVROS 
                WHERE ID = ?`,
            [id],
            (error, resultado) => {
                if(error){
                    return reject("Não foi possível buscar livro");
                }
                return resolve(resultado);
            })
        });
    }

}

module.exports = LivroDao