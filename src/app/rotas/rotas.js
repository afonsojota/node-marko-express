const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');
const livroDao = new LivroDao(db);

module.exports = (app) => {
    app.get('/',function(req, resp){
        resp.send(`<html>
                            <head>
                                <meta charset="utf-8">
                            </head>
                            <body>
                                <h1> Casa do Afonso </h1>
                            </body> 
                        </html>`);
    });
    
    app.get('/livros',function(req, resp){
       
       livroDao.lista()
            .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                )
           )
           .catch(error => console.log(error));
    });

    app.get('/livros/form', function(req,resp){
        resp.marko(
            require('../views/livros/form/form.marko'),
            {

            }
        )
    });

    app.post('/livros', function(req,resp){
        console.log(req.body);

        livroDao.adiciona(req.body)
        .then(
            resp.redirect('/livros')
        )
       .catch(error => console.log(error));

    });

    app.delete('/livros/:id', function(req,resp){

        livroDao.remove(req.params.id)
        .then(
            resp.status(200).end()
            //resp.redirect('/livros')
        )
       .catch(error => console.log(error));

    });

}

