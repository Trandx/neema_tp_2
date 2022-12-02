
export default function extractData(content) {

    const regex = /^D-([\d]{6})|^H-[\d]*;[\w\d]{4}([\w\d]{3});[\w\s]+;([\w]{3})|^K[\w]+;\w([a-zA-Z]+)([\d.]+)|^I[-\d]+;[\d]+([\w\s\/]+)|^T-([\w\d]+)-([\d]+)\s/gm;

    const  data = {
        issuing_date: "", 
        currency: "", 
        amount: "", 
        passenger_name: "", 
        airline: "", 
        ticket_number: "",
        itinerary:""
    };
    

            //var lines = content.split('\n');

            //console.log(lines);

           // console.log(regex.exec(this.ticketInfos))
            let m;
            while (m = regex.exec(content)) {

                //console.log(m);
                // This is necessary to avoid infinite loops with zero-width matches
                // if (m.index === regex.lastIndex) {
                //     regex.lastIndex++;
                // }
                
                //The result can be accessed through the `m`-variable.
                m.forEach((match, groupIndex) => {
                    if(match !== undefined && groupIndex != 0 ){

                        //console.log(`Found match, group ${groupIndex}: ${match}`);
                        switch (groupIndex) {
                            case 1:
                                const date = match.split(/^([0-9]{2})([0-9]{2})([0-9]{2})/g);
                                data.issuing_date = new Date('20'+date[1].toString(), date[2]-1, date[3]);
                               // console.log("Issuing Date: ",d);
                                break;
                            case 2:
                                    data.itinerary = data.itinerary.concat(" "+match);

                                    data.itinerary.trim()
                                
                                break;
                            case 3:
                                    data.itinerary = data.itinerary.concat(" "+match);
                                    data.itinerary.trim()
                               
                                break;
                            case 4:
                                data.currency = match;                            
                                //console.log("Currency : ", match);
                                break;
                            case 5:
                                data.amount = parseInt(match) ;
                                //console.log("Amount : ", match);
                                break;
                            case 6:
                                data.passenger_name = match;
                                //console.log("Passenger Name: ", passenger_name);
                                break;
                            case 7:
                                data.airline = match;
                                //console.log("Airline: ", airline);
                                break;
                            case 8:
                                data.ticket_number = match;
                                //console.log("Ticket Number: ", ticket_number);
                                break;
                        
                            default:
                                break;
                        }
                    }
                    
                });

            }

            console.log(data);

            return data;

}

