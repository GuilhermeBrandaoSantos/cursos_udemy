<!DOCTYPE html>
<html lang="pt_br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <title>Curso de VueJS (UDEMY)</title>
    </head>
    <style>
        #app{margin-top: 150px; display:flex; align-items: center;}        
    </style>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div id="app">
                        <input type="text" v-on:input="alterarTitulo">
                        <h1>{{ titulo }}</h1>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            new Vue({
                el: '#app',
                data: {
                    titulo: 'Hello world!!!'
                },
                methods:{
                    alterarTitulo(event){
                        this.titulo = event.target.value
                    }
                }
            });

        </script>
    </body>
</html>