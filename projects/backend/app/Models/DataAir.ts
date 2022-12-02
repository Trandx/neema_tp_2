
import { HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket.js'

export default class DataAir {

  
  @hasMany(() => Ticket, {
    serializeAs: 'airData'
  })

  public airData: HasMany<typeof Ticket>


}
