<!DOCTYPE html>
<html lang="pt_br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Curso de VueJS (UDEMY)</title>
    </head>
    <body>
        <div id="app">
            <h1>{{ titulo }}</h1>
        </div>

        
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            new Vue({
                el: '#app',
                data: {
                    titulo: 'Hello world!!!'
                }
            });

        </script>
    </body>
</html>