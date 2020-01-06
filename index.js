function lowerCaseDrivers(drivers) {
    return drivers.map(function(name) {
        return name.toLowerCase();
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function(name) {
        const names = name.split(" ");
        return {firstName: names[0], lastName: names[1]};
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driverData) {
        return `${driverData.name} is from ${driverData.hometown}`
    });
}