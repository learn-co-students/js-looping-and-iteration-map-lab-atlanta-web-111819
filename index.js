// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const smallDrivers = [];
   drivers.map(function(driver) {
      smallDrivers.push(driver.toLowerCase())
  })
  return smallDrivers
}

function nameToAttributes(array) {
  return array.map(function(driver) {
   let name = driver.split(' ')
   return {firstName: name[0], lastName: name[1]}
    })   
} 

function attributesToPhrase(array) {
    return array.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}