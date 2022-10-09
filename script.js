
        function oblicz(){
            let jeden = document.getElementById("jeden").value
            let dwa = document.getElementById ("dwa").value
            let trzy = document.getElementById("trzy").value
            jeden = parseFloat(jeden)
            dwa = parseFloat(dwa)
            trzy = parseFloat(trzy)
            let wynik = ((dwa * jeden)/100*trzy);
            document.getElementById("wynik").innerHTML = wynik
            
            wynik = document.getElementById("wynik").innerHTML = "$= " + wynik
            
        }
