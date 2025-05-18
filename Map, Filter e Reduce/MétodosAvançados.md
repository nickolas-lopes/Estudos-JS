# Métodos Avançados em JS

## Map
O método Map executa a função apra cada item do array. 
```js
const numbers = [1, 2, 3, 4]
const numbers_multipied_by_2 = numbers.map(function (number) {
    return number * 2
})

console.log(numbers_multipied_by_2) // [2, 4, 6, 8]
```
## Filter
O método Filter cria um novo array com os elementos que passar por teste da função.

```js
const ages = [8, 15, 13, 20, 25, 14]
const even_ages = ages.filter(function(age){
    return age % 2 == 0
})
console.log(even_ages) // [8, 20, 14]
```
## Reduce
O método Reduce soma todos os valores do array.
```js
const ages = [8, 15, 13, 20, 25, 14]
const sum_of_ages = ages.reduce(function(age, accumulator){
    return accumulator + age
}, 0)
console.log(sum_of_ages)

```