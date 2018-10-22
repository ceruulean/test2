"use strict"

//var ScheduleBaseWeek = new Week(0);

// Provide sunday start date if desired
class Week {
    constructor(dateOf) {
        this.sundayStart = dateOf;
        this.days = new [6];

        this.days[0] = new Day('Sunday');
        this.days[1] = new Day('Monday');
        this.days[2] = new Day('Tuesday');
        this.days[3] = new Day('Wednesday');
        this.days[4] = new Day('Thursday');
        this.days[5] = new Day('Friday');
        this.days[6] = new Day('Saturday');
    }

    setStartDate(date){
        this.sundayStart = date;
    }
}




class Day { // a day with 24 slots for a fill object
    constructor(name) {
        this.name = name;
        this.hours = new [23];
        this.hours.fill(0);
    }

    setFill(hour, color, percent) { //sets fill with the specificed string hex or whatever and percent in decinamsl
        this.hours[hour] = new fill(color, percent);
    }

    clear(hour) {
        this.hours[hour] = null;
    }

    clearAll() {
        this.hours.fill(null);
    }
}

class fill { // a perent has a valu of 0.5 means the fill takes up the 30 minutes of the hour
    constructor(color, percent) {
        this.color = color;
        this.percent = percent;
    }
}