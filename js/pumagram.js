const btnLike = document.querySelector('.like-btn');
const imagen = document.querySelector('.post-image')
const comentario = document.querySelector('.add-comment')
const contenedorComentarios = document.querySelector('.comments-container');

let like = document.querySelector('.like-count');
let comentarios = []; 

let sumarlike = 1;


cargarEventos();

function cargarEventos() {
    btnLike.addEventListener('click', incrementarMegusta);
    imagen.addEventListener('dblclick', likeImagen)
    comentario.children[1].addEventListener('click', agregarComentario);
}


function incrementarMegusta() {
    sumarlike =  parseInt(like.textContent);
    
    if(sumarlike == 0){
        // Si quiero aumentar mas el boton de me gusta solo con
        sumarlike = 1;
        like.textContent = sumarlike;
        btnLike.textContent = 'No me gusta'
    }else{
        sumarlike = 0;
        like.textContent = sumarlike;
        btnLike.textContent = 'Me gusta'
    }
    
}

function likeImagen() {
    sumarlike =  parseInt(like.textContent);
    
    if(sumarlike == 0){
        // Si quiero aumentar mas el boton de me gusta solo con
        sumarlike = 1;
        like.textContent = sumarlike;
        btnLike.textContent = 'No me gusta'
    }else{
        sumarlike = 0;
        like.textContent = sumarlike;
        btnLike.textContent = 'Me gusta'
    }
}

function agregarComentario() {
    const agregarComentario = comentario.children[0].value;
    console.log(agregarComentario);
    comentarios = [...comentarios, agregarComentario]

    agregarComentarioHtml();

}

function agregarComentarioHtml() {
    limpiarHtml();
    comentarios.forEach((e) => {
        const row = document.createElement('DIV');
        row.innerHTML = `
        <div class="comment">
            <span class="comment-username">usuario:</span>
            <span class="comment-text">${e}</span>
        </div>
        `;
        contenedorComentarios.appendChild(row);
    });
}

function limpiarHtml() {
  contenedorComentarios.innerHTML = '';
  comentario.children[0].value = '';
}



