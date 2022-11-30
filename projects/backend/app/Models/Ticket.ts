import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class Ticket extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public issuing_date: Date

  @column()
  public itinerary: string

  @column()
  public currency: string

  @column()
  public amount: number

  @column()
  public passenger_name: string

  @column()
  public airline: string

  @column()
  public ticket_number: string

  @column()
  public created_by: string

  @column()
  public updated_by: string

  @column()
  public travel_type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID (model: Ticket) {
    model.id = uuid()
  }
}
