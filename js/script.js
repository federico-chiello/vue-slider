var app = new Vue({
  el: '#slider',
  data: {
    contatore: 0,
    immagini: ['img/delfino.jpg', 'img/gabbiani.jpg', 'img/cavalli.jpg', 'img/leone.jpg']
  },
  methods: {
    nextImage(){
      // if (this.contatore < (this.immagini.length -1)) {
      //   this.contatore++;
      // } else {
      //   this.contatore = 0;
      // }
      // console.log(this.contatore);

      // Metodo ternario
      (this.contatore < (this.immagini.length -1)) ? this.contatore++ : this.contatore = 0;
      console.log(this.contatore);
    }


  }
});
