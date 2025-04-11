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
            var f = "Ulike.txt";
            writeTextFile(f, text+1)

            function writeTextFile(afilename, output)
            {
                var txtfile = new File(afilename, null);
                txtfile.writeln(output);
                txtfile.close();
            }
        })

}