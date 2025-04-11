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
            writeTextFile("Ulike", text+1)

            function writeTextFile(afilename, output)
            {
                var txtfile = new File([txt], afilename);
                txtfile.writeln(output);
                txtfile.close();
            }
        })

}