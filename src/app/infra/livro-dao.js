class LivroDao{

    constructor(db){
        this._db = db
    }

    lista(callback){
        this._db.all('select * from livros',
        (error, resultado) => {
            if(error){
                console.log(error);
            }
            callback(error, resultado);
        })
    }

}

module.exports = LivroDao