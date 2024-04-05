const btnLike = document.querySelector('.like-btn');
const imagen = document.querySelector('.post-image')
const comentario = document.querySelector('.add-comment')
const contenedorComentarios = document.querySelector('.comments-container');

let like = document.querySelector('.like-count');
let comentarios = [];
comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
let sumarlike = parseInt(localStorage.getItem('like')) || 0;

cargarEventos();
agregarComentarioHtml();

function cargarEventos() {
    cargarLikes();
    btnLike.addEventListener('click', incrementarMegusta);
    imagen.addEventListener('dblclick', likeImagen)
    comentario.children[1].addEventListener('click', agregarComentario);
}

function incrementarMegusta() {
    sumarlike =  parseInt(like.textContent);
    
    if(btnLike.textContent == 'Me gusta'){
        sumarlike += 1;
        like.textContent = sumarlike;
        btnLike.textContent = 'No me gusta';
    }else{
        sumarlike -= 1;
        like.textContent = sumarlike;
        btnLike.textContent = 'Me gusta';
    }
    localStorage.setItem('like', sumarlike);
}

function likeImagen() {
    sumarlike =  parseInt(like.textContent);
    
    if(btnLike.textContent == 'Me gusta'){
        sumarlike += 1;
        like.textContent = sumarlike;
        btnLike.textContent = 'No me gusta'
    }else{
        sumarlike -= 1;
        like.textContent = sumarlike;
        btnLike.textContent = 'Me gusta'
    }
    localStorage.setItem('like', sumarlike);
}

function agregarComentario() {
    const agregarComentario = comentario.children[0].value;
    comentarios = [...comentarios, agregarComentario];
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

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

function cargarLikes() {
    like.textContent = sumarlike;
}