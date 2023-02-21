function obliczciag(){
    let liczba=parseInt(document.getElementById("liczba").value);
    let liczba2=parseInt(document.getElementById("liczba2").value);
    let liczba3=parseInt(document.getElementById("liczba3").value);
    
   
     let wynikciagu = (liczba2-liczba)/(liczba3-1)
    document.getElementById("wynikciagu").value=wynikciagu;
}
