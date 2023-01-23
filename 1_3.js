let firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>";

let count = 0
for(let i = 0; i < firstDiv.length; i++) {
    if(firstDiv[i] === '<' && firstDiv[i + 1] === 'p' && firstDiv[i + 2] === '>'){
        count++
    }
}
if (count > 1) {
    console.log(true)
    } else {
    console.log(false)
    }
