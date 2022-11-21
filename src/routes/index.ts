import {Router} from 'express'
import { Request, Response } from 'express'
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send("Teste123")
})

router.get('/usuarios', usuarioController.index)
    

router.get('/cadastrar', usuarioController.cadastrar)

router.post('/cadastrar',usuarioController.cadastroUsuario)

router.get('/editar/:id',usuarioController.editarUsuario)

router.post('/editar/:id',usuarioController.atualizaUsuario)

router.get('/excluir/:id',usuarioController.deletaUsuario)

export default router