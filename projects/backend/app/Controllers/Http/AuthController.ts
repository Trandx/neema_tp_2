import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({request}: HttpContextContract) {
    
    console.log(request.all());
    

  
  }

  public async logout({}: HttpContextContract) {

  }

  public async refresh({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {}
}
