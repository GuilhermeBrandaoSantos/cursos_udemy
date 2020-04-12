new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('Botão clicado!!!')
        },
        texto(){
            this.valor =  event.target.value
        }
    }
})