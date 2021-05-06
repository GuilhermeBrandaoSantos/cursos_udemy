new Vue({
	el: '#desafio',
	data: {
		classeCSS: true,
		espaco: true,
		classe1: 'destaque',
		classe3: '',
		classe4: '',
		cor5:'',
		estilo5:{
			width: '100px',
			height: '100px',
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher': 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if (valor == 100) clearInterval(temporizador)
			}, 500);

		},
		setEspaco(event){
			if (event.target.value == "true") {
				this.espaco = true
			}else if (event.target.value == "false") {
				this.espaco = false
			}
		}

	}
})
