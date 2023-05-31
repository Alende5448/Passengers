import { error } from "console";


const taskOne = (passengers:number, shuffle:number)=>{
    interface   Passengers{
        name:string;
        location: string;
      }
      let reservation:Passengers[]=[],
       boarded:Passengers[]=[],
       input1:Passengers[]=[],
       count:number = 0, 
       location=["Abuja","Katsina","Lagos", "Benue","Sambisa"]

    for(let indexOfPass=0, indexOfLocation = 0; indexOfPass < passengers; indexOfLocation++, indexOfPass++){
      let obj={
        name :`passenger${indexOfPass +1}`,
        location : location[indexOfLocation]
      }
      // push the obj to input1
      input1.push(obj)
     console.log(input1)
     
      // this make the loction go back to the first element when reach last length
     if(indexOfLocation > 3){
        indexOfLocation = -1
      }

    }
    // this remove any remainder after divisible by 5 and store in reservation
    if(input1.length % 5 !==0){
      reservation = input1.splice(-(input1.length % 5))

    }
    // checking for the conditions
    while(input1.length > 0){
      if(input1.length > 50){
        boarded = input1.splice(0,50)
      }
      else{
        boarded = input1.splice(0)
      }
      // checking the shuffle and count
      if(shuffle ===0 && input1.length){
     reservation = input1.splice(0)
      }
      count++
      shuffle --

    }
    return{
      boarded,
      reservation,
      count
    }
    }
export default taskOne;

console.log(taskOne(57, 0))



