const numbers = [1, 2, 3, 4]
const numbers_multipied_by_2 = numbers.map(function (number) {
    return number * 2
})

console.log(numbers_multipied_by_2)

const ages = [8, 15, 13, 20, 25, 14]
/*const even_ages = ages.filter(function(age){
    return age % 2 == 0
})
console.log(even_ages)*/
const sum_of_ages = ages.reduce(function(age, accumulator){
    return accumulator + age
}, 0)
console.log(sum_of_ages)