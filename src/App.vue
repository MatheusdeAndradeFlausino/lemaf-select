<template>
	<div id="app">
		<div class="container"></div>
		<label><b>Teste:</b></label>
		<lemaf-select v-model='selecionados' v-bind="config" @clicked="clicks++"></lemaf-select>
		<div>clicks: {{clicks}} </div>
		<hr>
		<span > {{selecionados}} </span>
	</div>
</template>

<script>

import LemafSelect from './components/LemafSelect.vue'

export default {

	name: 'app',

	components: {

		LemafSelect

	},

	data() {

		return {

			selecionados: undefined,
			clicks: 0,
			config: {
				placeholder: 'Escolha uma opção',
				pesquisarPlaceholder: 'Pesquisar',
				filtravel: true,
				erro: false,
				selecionarTodos: true,
				bordaArredondada: true,
				permitirNovosItens: true,
				multiplos: true,
				altura: 'media',
				label: 'teste',
				fontFamily: 'Titilium Web Regular',
				opcoes: [
					{
						teste: 'Override teste 1',
						valor: 1
					},
					{
						teste: 'Override a 2',
						valor: 2
					},
					{
						teste: 'Override 3',
						valor: 3
					},
					{
						teste: 'Override so aqui pra aumentar o tamanho do chips4',
						valor: 4
					},
					{
						teste: 'Override 5',
						valor: 5
					},
					{
						teste: 'Override 6',
						valor: 6
					},
					{
						teste: 'Override 7',
						valor: 7
					},
					{
						teste: 'Override 8',
						valor: 8
					}
				],
				styles: {
					width: 400
				}
			}
		}

	},

	methods: {

	}

}

</script>
<style>

	html, body {
		height: 100%;
	}

	#app{
		color: red;
		height: 100%;
	}

	.container{
		position: relative;
		height: 400px;;
	}

</style>