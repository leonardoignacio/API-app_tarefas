const model = new require('../../models/tipo')
module.exports = (app)=>{
    let rota = 'tipos'
    app.get(`/consultar/${rota}/:id?`, async (req, res)=>{
        let dados = req.params.id? await model.findOne({where:{id:req.params.id}}) : 
        await model.findAll()
        res.json(dados)
    })
    app.post(`/cadastrar/${rota}`, async (req, res)=>{
        let dados = req.body
        let respBd = await model.create(dados)
        res.json(respBd)
    })
    app.put(`/atualizar/${rota}/:id`, async (req, res)=>{
        let id = req.params.id
        let dados = req.body
        let respBd = await model.update(dados, {where:{id:id}})
        res.json(respBd)
    })
    app.delete(`/excluir/${rota}/:id`, async (req, res)=>{
        let id = req.params.id
        let respBd = await model.destroy({where:{id:id}})
        res.json(respBd)
    })
}