new Vue({
   el: '#desafio',
   data: {
      nome: 'Guilherme',
      idade: 25,
      linkImg: 'https://jpimg.com.br/uploads/2019/12/hayley-williams.jpg'
   },
   methods:{
      multiplicaIdade(){
         return this.idade * 3
      },
      numRandom(){
         return Math.random(0, 1)
      }
   }
});