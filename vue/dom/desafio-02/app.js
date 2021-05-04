new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("Olá")
        },
        mudaValor(event){
            this.valor = event.target.value
        }
    }
})