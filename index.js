function inputCaloriesByDay(day) {
   switch(day.toLowerCase()){
    case 'monday':
        return 3500
        break;
    case 'tuesday':
        return 500
        break;
   case 'wednesday':
        return 1300
        break;
    case 'thursday':
        return 2300
        break;
    case 'friday':
        return 1000
        break;
    case 'saturday':
        return 2000
        break;
    case 'sunday':
        return 1600
        break;
    default: 
        return "Invalid Input: Choose a day of the week."
        break;
   }
}


function getTotalCalories() {
    return inputCaloriesByDay('Monday') +
    inputCaloriesByDay('Tuesday') +
    inputCaloriesByDay('Wednesday') +
    inputCaloriesByDay('Thursday') +
    inputCaloriesByDay('Friday') +
    inputCaloriesByDay('Saturday') + 
    inputCaloriesByDay('Sunday');
}

function getIdealCalories(){
     let idealDailyCalories = 2000
    return idealDailyCalories * 7 
}

function calculateHealthPlan(){
    let actualCalories = getTotalCalories()
    let idealCalories = getIdealCalories()
    if (actualCalories === idealCalories){
      return 'You ate just the right amount of food!'
    } 
    
    if ( actualCalories > idealCalories){
        return 'Time to head to the gym!'
    } else {
        return 'Time for seconds!'
    }
} 

calculateHealthPlan()