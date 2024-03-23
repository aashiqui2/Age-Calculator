function calculateAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();
    
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = 12 - birthDate.getMonth() + today.getMonth();
    }
    
    if (days < 0) {
        months--;
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days = lastMonth.getDate() - birthDate.getDate() + today.getDate();
    }
    
    return {
        years: years,
        months: months,
        days: days
    };
}

// Example usage:
var birthdate = "1990-05-15";
var age = calculateAge(birthdate);
console.log("You are " + age.years + " years, " + age.months + " months, and " + age.days + " days old.");
