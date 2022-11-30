

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tickets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.date('issuing_date')
      table.string('itinerary')
      table.string('currency')
      table.decimal('amount')
      table.string('passenger_name')
      table.string('airline')
      table.string('ticket_number')
      table.string('travel_type').nullable()
      table.string('created_by') 
      table.string('updated_by')
      //table.unique(['airline','ticket_number'])
      this.schema.raw('ALTER TABLE tickets ADD UNIQUE (airline, ticket_number)') // make unique on two column

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
