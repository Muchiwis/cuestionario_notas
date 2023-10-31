document.addEventListener('DOMContentLoaded', function() {

    let resFinal = document.getElementById('resFinal');
    let validar = document.getElementById('validar');
    let notaFinal = 0;

    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let countMin = 2;
    let contador = countMin*60;

    let tiempo = setInterval(() => mostrarTemporizador(), 100);

    function mostrarTemporizador(){

        minutos.innerHTML = (parseInt(contador/60) < 10 ? '0' : '') + parseInt(contador/60);
        segundos.innerHTML = ((contador%60) < 10 ? '0' : '') + (contador%60);

                if(contador == 0){
                    contador = 60;
                    countMin--;
                    window.clearInterval(tiempo);
    
                    Swal.fire({
                        title: 'El examen terminó, tu nota es: ' + validarRespuestas(),
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                        allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //window.open('hello.html');
                        location.href = "hello.html";
                        } else{

                        }
                    });
                }   
                contador--;  
    }

    function validarRespuestas() {

        let resUser = document.querySelector('input[name="resUser"]:checked');
        let resUser2 = document.querySelector('input[name="resUser2"]:checked');
        let resUser3 = document.querySelector('input[name="resUser3"]:checked');
        let resUser4 = document.querySelector('input[name="resUser4"]:checked');
        
        let resCorrect = document.getElementById('resCorrect');
        resUser = (resUser) ? resUser.value : "";
        
        let resCorrect2 = document.getElementById('resCorrect2');
        resUser2 = (resUser2) ? resUser2.value : "";

        let resCorrect3 = document.getElementById('resCorrect3');
        resUser3 = (resUser3) ? resUser3.value : "";

        let resCorrect4 = document.getElementById('resCorrect4');
        resUser4 = (resUser4) ? resUser4.value : "";
        

        if(resCorrect.value === resUser){
            notaFinal = notaFinal + 5;
            resFinal.innerText = notaFinal;
        }else{

            resFinal.innerText = notaFinal;
        }

        if(resCorrect2.value === resUser2){
            notaFinal = notaFinal + 5;
            resFinal.innerText = notaFinal;
        }else{

            resFinal.innerText = notaFinal;
        }

        if(resCorrect3.value === resUser3){
            notaFinal = notaFinal + 5;
            resFinal.innerText = notaFinal;
        }else{

            resFinal.innerText = notaFinal;
        }

        if(resCorrect4.value === resUser4){
            notaFinal = notaFinal + 5;
            resFinal.innerText = notaFinal;
        }else{

            resFinal.innerText = notaFinal;
        }

        validar.disabled = true;
        return notaFinal;
    }

    validar.addEventListener('click', () => {
        clearInterval(tiempo);
        Swal.fire("Nota obtenida: " + validarRespuestas());
    });

});