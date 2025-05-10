# Aprendendo sobre lista
Basicamente a representação da lista é dessa forma "[]"

Para acessar um elemento dentro de uma lista deve-se fazer da seguinte forma:

## Pegando valores dentro da lista
```js
let lista = [1, 2, 3]
console.log(lista[0])
```
Retorna o valor: 1

## Adicionando item no final da lista
Usa-se push()
```js
const names = ['Alfredo', 'Beto', 'Cláudio']
names.push('Daniel')
```
## Adicionando items no começo da lista
Usa-se unshift()
```js
const names = ['Alfredo', 'Beto', 'Cláudio']
names.unshift('Zeca')
```
## Remover último elemento
```js
const names = ['Alfredo', 'Beto', 'Cláudio']
names.pop()
```