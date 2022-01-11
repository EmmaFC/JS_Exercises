/* My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
 */



export function movie(card, ticket, perc) {



    let i = 0;
    let count_A = 0;
    let system_B = card;
    let system_A = ticket;
    while (0 == 1) {
      let pow_A = Math.pow(perc, i);
      let num_B = ticket * count_A;
       let x =  system_B + (ticket * pow_A); //500 + 15
      let y =  system_A + num_B; // 15
      let result = Math.abs(x, y)
      
      return result
      i++
      count_A ++;
        
    } return result
      
  };