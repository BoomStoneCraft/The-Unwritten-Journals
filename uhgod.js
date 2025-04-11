function getlikes () {
    fetch("./Ulike.txt")
        .then((res) => res.text())
        .then((text) => {
            console.log(text)
        })
        
    
}



function Ulike () {
    fetch("./Ulike.txt")
        .then((res) => res.text())
        .then((text) => {
            writeTextFile("Ulike.txt", text+1)

            function writeTextFile(afilename, output)
            {
                var txtfile = new File(afilename, {type: "application/octet-stream"});
                txtfile.writeln(output);
                txtfile.close();
            }
        })

}