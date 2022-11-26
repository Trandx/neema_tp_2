import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ticket extends BaseModel {
  @column({ isPrimary: true })
  public id: number

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
