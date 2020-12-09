var slider= new Vue({
  el: "#slider",
  data: {
    indexImg : 0,
    images : [
      "https://tourscanner.com/blog/wp-content/uploads/2019/02/visite-guidate-Colosseo.png",
      "https://www.filodiritto.com/sites/default/files/styles/lg/public/2019-12/paesaggio_rurale.jpg?itok=XIq6z79g",
      "https://www.architetturaecosostenibile.it/images/stories/2016/promuoviamo-paesaggio-italiano.jpg",
      "https://comune-info.net/wp-content/uploads/2016/09/paesaggio-borghetto-poggio-bianco.jpg"
    ]
  },
  created : function() {
    setInterval(
      () => {
        this.nextImage();
      },2000
    );
  }
  ,
  methods: {
    nextImage : function () {
      this.indexImg++;
      if(this.indexImg == this.images.length){
        this.indexImg = 0;
      }
    },
    prevImage : function () {
      this.indexImg--;
       if(this.indexImg < 0){
        this.indexImg = this.images.length - 1;
    }
  },
  stop: function () {
    this.indexImg = 0;
    clearInterval(nextImage);

  }
  }
})
