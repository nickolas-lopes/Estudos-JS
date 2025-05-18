const names = ['Alfredo', 'Beto', 'Cláudio', true, 2]
names.unshift('Zeca')
const name = names[0]
names[3] = 'Daniel'
console.log(name)
names.pop()
names.pop()
names.push('Erica')
console.log(names)
console.log(names.indexOf('Erica'))
const sorted_names = names.sort()
console.log(sorted_names) 