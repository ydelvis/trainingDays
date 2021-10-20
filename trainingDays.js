/* This Project randomly selects an event and logs the corresponding number of days a trainee
    needs to train to make it at the event. 

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


const getRandEvent = () => {                         // random event selection
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {                // required training days per event
  let days 

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

const name = 'Nala';                                         // Trainee Nala's assigned event is logged
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {                            //  Corresponding training days for Nala is logged
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();                // Get Random Event
const days = getTrainingDays(event);         // Get corresponding days


logEvent(name,event);        // call function to log trainee event with name of trainee
logTime(name,days);           // call function to log trainee days with name of trainee


// Another Competitor Warrent used
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);

// End of Code.
