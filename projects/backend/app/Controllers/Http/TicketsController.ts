// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Ticket from "App/Models/Ticket";

import {rules, schema} from '@ioc:Adonis/Core/Validator'

export default class TicketsController {

    public async index ({}: HttpContext){
        const tickets = await Ticket.all()
        return tickets

    }

    public async create ({request, response}: HttpContext){

      const validationSchema = schema.create({
        issuing_date: schema.date(),
        itinerary: schema.string(
          { trim: true}, 
          [
            rules.maxLength(255),
          ]
        ),
        amount: schema.number(),
        airline: schema.number(),
        ticket_number: schema.number(),
        passenger_name: schema.string({trim: true},
          [
            rules.maxLength(255)
          ]
        ),
        currency: schema.string({trim: true},
          [
            rules.maxLength(255)
          ]
        ),
      })

      //const datas = request.all();

      const validateData = await request.validate({
        schema: validationSchema,
        messages: {
          'itinerary.required': 'itinerary is required \n',
          'itinerary.maxLength': 'itinerary  can\'t eceed 255 character',
        }
      })

      return response.json(validateData)

        const tickets = new Ticket()

        try {

         

          tickets.issuing_date = request.input('issuing_date') 
          tickets.itinerary = request.input('itinerary')
          tickets.currency = request.input('currency')
          tickets.amount = request.input('amount')
          tickets.passenger_name = request.input('passenger_name')
          tickets.airline = request.input('airline')
          tickets.ticket_number = request.input('ticket_number')
        
          await tickets.save()
          return  response.status(201).json(tickets) 
          
        } catch (error) {
          return  response.json(error)
        }
        

        
    }

    public async store ({}: HttpContext){
        
    }

    public async show ({}: HttpContext){
        
        
    }

    public async edit ({response, params}: HttpContext){
        const ticket = await Ticket.query().where('id', params.id)
        return ticket
        
    }

    public async update ({response,request,params}: HttpContext){
        const tickets = await Ticket.query().where('id', params.id).first()
        if(tickets == null){

        }
        else{
            tickets.issuing_date = request.input('issuing_date')
            tickets.itinerary = request.input('itinerary')
            tickets.currency = request.input('currency')
            tickets.amount = request.input('amount')
            tickets.passenger_name = request.input('passenger_name')
            tickets.airline = request.input('airline')
            tickets.ticket_number = request.input('ticket_number')

            await tickets.save()
        }
        return tickets
        
    }

    public async destroy ({response, params}: HttpContext){
        await Ticket.query().where('id', params.id).delete()
        return response.redirect('/')
        
    }
}