//npm 'inquirer' package allows for use of prompts
const { prompt } = require('inquirer')
//npm 'axios' package
const axios = require('axios')

//creating variables to call specific data in api key
// let userEmail = email () => {
//   axios.get(`https://api.github.com/users/${userProfile[data.email]}`)
//     .then(data => {
//       console.log
//     })
//     .catch(err => console.log(err))
// }

//create a varaible to set equal to API data
// const api = {
// getUser(username){
//prompt user for username
prompt([
  {
    type: 'input',
    name: 'userProfile',
    message: 'GitHub Username:'
  }
])
  .then(userProfile => {
    console.log(userProfile)
    //loop over different properties of an object to get to userProfile (key)
    for (const name in userProfile) {
      //return the value of data at the userProfile (key)
      console.log(name[userProfile])
      //using key data, write axios request for user profile from GitHub
      axios.get(`https://api.github.com/users/${userProfile[name]}`)
        .then(data => {
          //make it into a variable
          console.log(data)
          //need to pull in their github image
          // axios.get(`https://api.github.com/users/${userProfile[data.email]}`)
          //   .then(data => {
          //     console.log
          //   })
          // .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  })
  .catch(err => console.log(err))
    // }

// module.exports = api