// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext, Request } from "@adonisjs/core/build/standalone";
import Ticket from "App/Models/Ticket";

export default class TicketsController {

    public async index ({}: HttpContext){
        const tickets = await Ticket.all()
        return tickets

    }

    public async create ({request}: HttpContext){

        const tickets = new Ticket()

        
        tickets.issuing_date = request.input('issuing_date') 
        tickets.itinerary = request.input('itinerary')
        tickets.currency = request.input('currency')
        tickets.amount = request.input('amount')
        tickets.passenger_name = request.input('passenger_name')
        tickets.airline = request.input('airline')
        tickets.ticket_number = request.input('ticket_number')
        tickets.created_by = request.input('created_by','null')
        tickets.updated_by = request.input('updated_by','null')
        

        await tickets.save()
        return tickets

        
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
