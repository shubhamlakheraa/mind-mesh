const { Command } = require('commander')

const program = new Command()


program
    .option('--no-sauce', 'Remove sauce')
    .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
    .option('--no-cheese', 'plain with no cheese')
    .parse()


const options = program.opts()
const sauceStr = options.sauce ? 'sauce' : 'no sauce'
const cheeseStr = (options.cheese === false) ? 'no cheese' : `${options.cheese} cheese`
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`)