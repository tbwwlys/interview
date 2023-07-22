const { effect, reactive } = require('@vue/reactivity')
let dumy;
const counter = reactive({num1: 1, num2: 2})
//console.log(counter)
// template {{}} onMounted counter.num   

effect(() => {
    dumy = counter.num1 + counter.num2;
    console.log(dumy)
})

setInterval(() => {
    counter.num1++;
},1000) 


