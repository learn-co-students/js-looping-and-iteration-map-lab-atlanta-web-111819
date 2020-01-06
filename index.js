// Code your solution in this file
function lowerCaseDrivers(array){
    return array.map(function(driver){
        return driver.toLowerCase();
    })
}

function attributesToPhrase(array){
    return array.map(function(driver){
        return `${driver["name"]} is from ${driver["hometown"]}`;
    })
}


function nameToAttributes(array){
    return array.map(function(driver){
        name = driver.split(" ");
        return {firstName: name[0], lastName: name[1] }

    })
}