const axios = require('axios');

let name = axios.get('https://btvn-web16s.herokuapp.com/api/web16')
            .then((data) => {
                return data.data.students
            })
            .then((data) => {
                return data
            })

console.log(name)