import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({}: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
  
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '7 days'
      })
      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  
  }

  public async logout({}: HttpContextContract) {

  }

  public async refresh({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {}
}
