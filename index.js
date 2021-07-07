// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const lowerDrivers = drivers.map(function(driver) {
        return driver.toLowerCase();
    });
    return lowerDrivers;
}

function nameToAttributes(drivers){
    const splitDrivers = drivers.map(function (driver) {
        let name = driver.split(' ')
        return {firstName: name[0],
                lastName: name[1]
            };
    });
    return splitDrivers;
}

function attributesToPhrase(drivers){
    const driverPhrase = drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    });
    return driverPhrase;
}