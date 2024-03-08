$(document).ready(function(){  // JQUERRY vai funcionar so quando acompanhado de $() dentro dos parenteses informamos o seletor
    $('header button').click(function () { //estamos dando o evento de click que para quando dermos o click no botao seja iniciada a function
        $('form').slideDown()  //efeito de abrir para baixo
    })

    $('#botao-cancelar').click(function(){    //forma de selecionar elementos no jquerry , para resgatar um id fazemos atraves do # ex.: #cancelar
        $('form').slideUp() //efeito de subir
    })

        //outra forma de adicionar eventos :

    $('form').on('submit', function(e){
    e.preventDefault()
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val() //recuperando o valor do input ou seja o que digitarmos nesse input vai estar sendo resgatado por conta desse comando, no JS puro teriamos que colocar .value aqui chamamos de val() e ele é uma função // uma paralelo com JS é como se tiversimos um const endereçoDaNovaImagem= document.getelementbyid('endereço-imagem-nova').value
    const novoItem = $('<li></li>') //fazendo a const de abrir e fechar li para as imagens que vão ser coladas no input aparecer nessas li
    $(`<img src= "${enderecoDaNovaImagem}" />`).appendTo(novoItem) // dentro do li temos um img esse img vai receber o que foi escrito no input de const enderecoDaNovaImagem e usamos o appendTo para colocarmos dentro o que foi feito dentro do li
    $(`
        <div class="overley-image-link"> 
            <a href= "${enderecoDaNovaImagem}" target="_blank" title= "Ver a imagem em tamanho real">
                Ver imagem em tamanho real
            </a> 
        </div>
    `).appenTo(novoItem)   //dentro de li tbm temos uma div nessa div temos um link(a) que vai receber o link da imagem que foi digitado no input e dps o append novamnete para entrar no li    
    $(novoItem).appenTo('ul')      
    $('#endereco-imagem-nova').val('')                                    
    })                                                         
})



