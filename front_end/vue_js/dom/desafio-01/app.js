new Vue({
    el: '#desafio',
    data:{
        nome: 'Guilherme Brandão dos Santos',
        idade: 23,
        linkImage: 'https://avatarfiles.alphacoders.com/182/182818.jpg',
        numeroRangdon: Math.random(0 , 1)
    },
    methods: {
        idadeMultiplica: function(){
            return this.idade * 3
        }     
    }
})