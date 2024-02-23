const printDay = day => {
    switch(day.toLowerCase()) {
        case 'monday':
            console.log("Monday's Menu: Chicken Tikka");
            break;
        case 'tuesday':
            console.log("Tuesday's Menu: Tacos");
            break;
        case 'wednesday':
            console.log("Wednesday's Menu: Egg fry");
            break;
        case 'thursday':
            console.log("Thursday's Menu: Bhindi Masala");
            break;
        case 'friday':
            console.log("Friday's Menu: Fish Curry");
            break;
        case 'saturday':
            console.log("Saturday's Menu: Pizza");
            break;
        case 'sunday':
            console.log("Sunday's Menu: Burger");
            break;
        default:
            console.log("Invalid day provided.");
    }
};


printDay('Monday');
printDay('Wednesday');
printDay('Friday');