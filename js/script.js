var app = new Vue({
  el: '#slider',
  data: {
    contatore: 0,
    immagini: ['img/delfino.jpg', 'img/gabbiani.jpg', 'img/cavalli.jpg', 'img/leone.jpg']
  },
  stopIntervallo: '',
  created(){
    this.stopIntervallo = setInterval(this.nextImage,2000)
  },
  methods: {
    nextImage(){
      // Metodo ternario
      // Qui stiamo dicendo che quando il contatore è minore della lunghezza dell'array immagini (4-1=3), cioè contatore < 3, allora incrementa di uno. Altrimenti il contatore = 0.
      (this.contatore < (this.immagini.length - 1)) ? this.contatore++ : this.contatore = 0;
      // console.log(this.contatore);
    },
    prevImage(){
      // Metodo ternario
      // Qui invece quando il contatore < 1, cioè posizione 0, allora si ritorna all'ultima immagine => contatore = 3. Altrimenti il contatore decrementa di uno.
      (this.contatore < 1) ? this.contatore = (this.immagini.length -1) : this.contatore--;
      // console.log(this.contatore);
      clearInterval(this.stopIntervallo);
      return this.stopIntervallo = setInterval(this.nextImage,2000)
    },
    cliccaPallino(indice){
      // Quando il contatore è uguale all'indice, stessa posizione.
      this.contatore = indice
      // Con clear faccio terminare lo scorrimento delle immagini quanto tocco i pallini.
      clearInterval(this.stopIntervallo);
    }
  }
});
