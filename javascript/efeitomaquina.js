function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');/*Pegando o HTML dentro do Elemento o split vai dividir o texto*/
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i)        
    });
}

const titulo = document.querySelector('h1');
typeWriter(titulo);


typeWriter(document.querySelector('p')) 