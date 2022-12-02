/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'TicketsController.index')

Route.post('add', 'TicketsController.create')
Route.post('update/:id', 'TicketsController.update')

Route.post('airData', 'TicketsController.airData')

Route.put('edit/:id', 'TicketsController.edit')

Route.delete('delete', 'TicketsController.destroy')


Route.post('/login', 'AuthController.login').as('auth-login');
Route.post('/logout', 'AuthController.logout').as('auth-logout');
Route.post('/refresh', 'AuthController.refresh').as('auth-refresh');
