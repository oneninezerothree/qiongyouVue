import axios from 'axios'
const g =(option) =>{
const {
url,
params
} =option
console.log(option)
return axios.get(url,{
params:{
...params
}
})
}
console.log(g)
export default{
g
}