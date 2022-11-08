const codificar = document.querySelector('#codificarB64');
const decodificar = document.querySelector('#decodificarB64');
const areaTexto = document.querySelector('textarea');

// codificar e decodificar na base 64
codificar.addEventListener('click' ,() => {        // transformar o conteudo em base64
        areaTexto.value = btoa(areaTexto.value);
    });
    
    decodificar.addEventListener('click' ,() => {        // transformar o conteudo em string "legivel"
        areaTexto.value = atob(areaTexto.value);
    });

        // mudança dos botões e esconder/mostrar incremento Cesar
    function check(){
        document.getElementById('b64_radio').checked = true;
        document.getElementById('codificarCesar').style.display = "none"
        document.getElementById('decodificarCesar').style.display = "none"

        document.getElementById('codificarB64').style.display = 'inline'
        document.getElementById('decodificarB64').style.display = 'inline'

        document.getElementById('increment').style.display = 'none'
    
    } 

    function checkC(){
        document.getElementById('cesar_radio').checked = true;
        document.getElementById('codificarB64').style.display = 'none'
        document.getElementById('decodificarB64').style.display = 'none'

        document.getElementById('codificarCesar').style.display = "inline"
        document.getElementById('decodificarCesar').style.display = "inline"

        document.getElementById('increment').style.display = 'flex'
    }

    // Codificar/Decodificar Cesar

const btnEncrypt = document.querySelector("#codificarCesar");
const btnDecrypt = document.querySelector('#decodificarCesar');
const key = document.querySelector('#key');

const listLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let newText = '';


//codificar

btnEncrypt.addEventListener('click', () =>{
    const textarea = document.querySelector('#texto');
    const keyValue = Number(key.value);

    for (const letter of textarea.value) {
        if(!listLetters.includes(letter)){
            continue
        }

        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = indexLetter + keyValue

        if(indexNewLetter > 25){
            indexNewLetter -= 26;
        }
        newText += listLetters[indexNewLetter]
        textarea.value = newText;
    }
    newText = '';
});

//Decodificar

btnDecrypt.addEventListener('click', () =>{
    const textarea = document.querySelector('#texto');
    const keyValue = Number(key.value);

    for (const letter of textarea.value) {
        if(!listLetters.includes(letter)){
            continue
        }

        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewLetter = indexLetter - keyValue;

        if(indexNewLetter < 0){
            indexNewLetter += 26;
        }
        newText += listLetters[indexNewLetter]
        textarea.value = newText;
    }
    newText = '';
});