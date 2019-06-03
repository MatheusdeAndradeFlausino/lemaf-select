<template>
	<div id="app">
		<label><b>Teste:</b></label>
		<lemaf-select @modificado='recebeSelecionados' v-bind="config"></lemaf-select>
		<hr>
		<span v-for='selecionado in selecionados' :key='selecionado.valor'>{{selecionado.nome}}</span>
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

			selecionados: [],
			config: {
				placeholder: 'Escolha uma opção',
				pesquisarPlaceholder: 'Pesquisar',
				filtravel: true,
				selecionarTodos: false,
				bordaArredondada: true,
				permitirNovosItens: true,
				multiplos: true,
				altura: 'media',
				opcoes: [
					{
						nome: 'Override teste 1',
						valor: 1
					},
					{
						nome: 'Override a 2',
						valor: 2
					},
					{
						nome: 'Override 3',
						valor: 3
					},
					{
						nome: 'Override so aqui pra aumentar o tamanho do chips4',
						valor: 4
					},
					{
						nome: 'Override 5',
						valor: 5
					},
					{
						nome: 'Override 6',
						valor: 6
					},
					{
						nome: 'Override 7',
						valor: 7
					},
					{
						nome: 'Override 8',
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

		recebeSelecionados(selecionados) {

			this.selecionados = selecionados;

		}

	}

}

</script>
