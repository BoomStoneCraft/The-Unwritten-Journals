function getlikes () {
    fetch("./Ulike.txt")
        .then((res) => res.text())
        .then((text) => {
            console.log(text)
        })
        
    
}

const fs = require('fs');

function Ulike () {
    fetch("./Ulike.txt")
        .then((res) => res.text())
        .then((text) => {
            const newContent = data.replace(text, text+1);

        })

}