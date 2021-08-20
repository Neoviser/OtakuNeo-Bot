function log(data, size = 68, options = { start: true, end: true, justValue: false }) {

    const { start = true, end = true, justValue = false } = options

    if (justValue) {
        data[0].value.forEach(val => {
            console.log(`║${(" > " + resume(val, size)).padEnd(size)}║`) 
        })

        if (end) console.log(`╚${"═".repeat(size)}╝`)
        return;
    }
    if (start) {
    helper(data[0].name, size, true)
    data[0].value.forEach(val => {
        console.log(`║${(" > " + resume(val, size)).padEnd(size)}║`) 
    })
    data.shift()
}

    for (const text of data) {
        helper(text.name, size)
        text.value.forEach(val => {
            console.log(`║${(" > " + resume(val, size)).padEnd(size)}║`) 
        })
    } 
    if (end) console.log(`╚${"═".repeat(size)}╝`)
}

/**
 * 
 * @param {string} text The text
 * @param {number} size Size of the text
 * @param {boolean} start If it starts or not
 * @returns {void}
 */

function helper(text, size = 68, start = false) {

    text = ` ( ${text} ) `;
    if (start) console.log(`╔${text.padStart(size / 2 + text.length / 2, "═").padEnd(size, "═")}╗`)
    else console.log(`╠${text.padStart(size / 2 + text.length / 2, "═").padEnd(size, "═")}╣`)
}

/**
 * 
 * @param {string} text the text to resume
 * @param {number} number the max size
 * @returns {string} text resumed
 */

function resume(text, number) {
    let str = '';
    if(text.length > number) {
        str += text.substring(0, number)
        str = str.slice(0, number - 6) + '...'
        return str
    } else {
    str += text
    return str
    }
  }

  module.exports = log;