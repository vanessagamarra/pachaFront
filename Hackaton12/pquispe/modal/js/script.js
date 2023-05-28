
class Modals {
  constructor() {
    this.boton = null
    this.modalTitulo = null
    this.modalContenido = null
    this.contenedor = null
  }
}

Modals.prototype.setBoton = function (botonId) {
  this.boton = document.getElementById(botonId)
  return this
}

Modals.prototype.addTitulo = function (titulo) {
  this.modalTitulo = titulo
  return this
}

Modals.prototype.addContenido = function (contenido) {
  this.modalContenido = contenido
  return this
}

Modals.prototype.setContenedor = function (contenedorId) {
  this.contenedor = document.getElementById(contenedorId)
  return this
}

Modals.prototype.build = function () {
  return {
    boton: this.boton,
    modalTitulo: this.modalTitulo,
    modalContenido: this.modalContenido,
    contenedor: this.contenedor
  }
}

Modals.prototype.mostrarMensaje = function (palabra) {
  const mensaje = document.querySelector('#' + this.contenedor.id + ' span')
  mensaje.textContent = `El modal ha sido ${palabra}`
}

Modals.prototype.mostrarModal = function () {
  const container = document.getElementById('container')
  const section = document.createElement('section')
  const article = document.createElement('article')
  const titleContainer = document.createElement('div')
  const contentContainer = document.createElement('div')
  const btnContainer = document.createElement('div')
  const h2 = document.createElement('h2')
  const btnCerrar = document.createElement('button')
  const p = document.createElement('p')
  const btnCancelar = document.createElement('button')
  const btnAceptar = document.createElement('button')

  section.setAttribute('id', 'modal')

  h2.textContent = this.modalTitulo

  p.textContent = this.modalContenido

  btnCerrar.textContent = 'X'
  btnCerrar.addEventListener('click', () => {
    this.callbackModal(this.ocultarModal)
    this.mostrarMensaje('cerrado')
  })

  btnCancelar.textContent = 'Cancelar'
  btnCancelar.addEventListener('click', () => {
    this.callbackModal(this.ocultarModal)
    this.mostrarMensaje('cancelado')
  })

  btnAceptar.textContent = 'Aceptar'
  btnAceptar.addEventListener('click', () => {
    this.callbackModal(this.ocultarModal)
    this.mostrarMensaje('aceptado')
  })

  titleContainer.appendChild(h2)
  titleContainer.appendChild(btnCerrar)
  contentContainer.appendChild(p)
  btnContainer.appendChild(btnCancelar)
  btnContainer.appendChild(btnAceptar)
  article.appendChild(titleContainer)
  article.appendChild(contentContainer)
  article.appendChild(btnContainer)
  section.appendChild(article)
  container.appendChild(section)
  return this
}

Modals.prototype.ocultarModal = function () {
  const container = document.getElementById('container')
  const modal = document.getElementById('modal')
  container.removeChild(modal);
  return this
}

Modals.prototype.callbackModal = function (callback) {
  callback.call(this);
}

Modals.prototype.activarModal = function () {
  this.boton.addEventListener('click', () => {
    this.callbackModal(this.mostrarModal)
  })
  return this
}

const modal01 = new Modals()
  .setBoton('modal01-btn')
  .addTitulo('Eliminar elemento')
  .addContenido('¿Estás seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer')
  .setContenedor('modalContainer01')
  .activarModal()
  .build()

const modal02 = new Modals()
  .setBoton('modal02-btn')
  .addTitulo('Suscribirse al boletín')
  .addContenido('Ingresa tu dirección de correo electrónico para recibir nuestras últimas noticias y actualizaciones')
  .setContenedor('modalContainer02')
  .activarModal()
  .build()

const modal03 = new Modals()
  .setBoton('modal03-btn')
  .addTitulo('Confirmar compra')
  .addContenido('Estás a punto de realizar una compra por un total de $X. ¿Deseas continuar con la transacción?')
  .setContenedor('modalContainer03')
  .activarModal()
  .build()
