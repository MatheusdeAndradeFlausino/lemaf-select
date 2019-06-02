<template>
	<div id='componente' :style="componenteStyle" v-fechar="{exclude: [], handler: 'onClose'}">
		<div class='select'>
			<i :class="{'fa-angle-down': !open, 'fa-angle-up': open}" class='fa icon' :style='iconStyle' @click='toggleDropDown()'></i>
			<div :style="inputStyle" @click='toggleDropDown()' class='select-input'>
				<div v-if='selecionados.length === 0' class='placeholder'>
					<span>{{placeholder}}</span>
				</div>
				<div v-if='!multiplos && selecionados.length > 0' class='bloco-selecionado-unico'>
					<span>{{selecionados[0].nome}}</span>
				</div>
				<div class='linha-chips' v-if='multiplos'>
					<span class='selecionado-chips' :key='selecionado.valor' v-for="(selecionado, index) in selecionados" :style='selecionadoChipsStyle'>
						{{selecionado.nome}}
						<i class='fa fa-times' @click='removerItem($event, index)'></i>
					</span>
				</div>
			</div>
		</div>
		<div v-if='open'>
			<div :style="dropdownStyle" class='dropdown-itens'>
				<div v-if="filtravel" class='campo-filtro' :style="campoFiltroStyle">
					<i class="fa fa-search icon" ></i>
					<input type='text' :placeholder='pesquisarPlaceholder' v-model="palavraChavePesquisa" :style="campoPesquisarStyle" @keyup="pesquisar()">
				</div>
				<div v-if="selecionarTodos && this.multiplos" class='campo-selecionar-todos' :style="campoSelecionarTodosStyle" @click="adicionarTodos()">
					<span>Selecionar todos ({{opcoesExibidas.length}})</span>
				</div>
				<div class='itens' v-if='opcoesExibidas.length > 0'>
					<div class='item' :class='{selecionado: itemJaSelecionado(item)}' :key='item.value' v-for="item in opcoesExibidas"s @click="selecionar(item)">{{item.nome}}</div>
				</div>
				<div class='bloco-adicionar' :class='{"separa-blocos": opcoesExibidas.length > 0}' v-if='permitirNovosItens && palavraChavePesquisa.length > 0'>
					<span>Gostaria de adicionar o filtro informado?</span><br>
					<button class='adicionar' @click='adicionarNovoItem()'>Adicionar <i class='fa fa-check'></i></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./js/select.js"></script>

<style lang="sass" scoped>

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

#componente

	.select
		position: relative;
		width: 100%;

		.select-input
			width: 100%;
			box-shadow: none;
			text-align: left;
			border: 1px solid #ccc;
			padding: 3px 0;
			height: auto !important;

			.placeholder
				opacity: 0.5;
				padding-left: 10px;

			.bloco-selecionado-unico
				padding-left: 10px;

			.linha-chips
				width: calc(100% - 20px);

				.selecionado-chips
					border: 1px solid rgba(211,211,211,0.5);
					background-color: rgba(211,211,211,0.5);
					border-radius: 20px;
					font-size: 13px;
					display: inline-block;
					margin-left: 4px;
					white-space: text-wrap;
					width: auto;
					padding: 0 10px;

					i
						color: rgba(0,0,0,0.4);

						&:hover
							cursor: pointer;

					&:hover
						cursor: default;

			&:focus
				outline: none;

			&:hover
				cursor: pointer

		.icon
			position: absolute
			right: 5px;
			top: 12px;
			color: green;
			width: 15px;
			height: 15px;
			border: 1px solid #ccc;
			border-radius: 50%;
			text-align: center;

			&:hover
				cursor: pointer

	.dropdown-itens
		border: 1px solid #ccc
		text-align: left;
		color: #35495e
		border-radius: 5px;
		margin-top: 2px;
		overflow: hidden;
		box-shadow: 3px 3px #f5f5f7;

		.bloco-adicionar
			text-align: center;
			padding: 10px 0;

			.adicionar
				background-color: #41b883;
				border-radius: 10px;
				border: none;
				padding: 10px;
				color: white;
				margin-top: 5px;

				&:hover
					cursor: pointer

				i
					color: inherit

		.separa-blocos
			border-top: 1px solid #ccc;

		.itens
			height: auto;
			max-height: 300px;
			overflow-y: auto;
			overflow-x: auto;

			&::-webkit-scrollbar
				width: 4px;
				height: 6px;

			&::-webkit-scrollbar-track
				background-color: #f5f5f5;
				border-radius: 10px;

			&::-webkit-scrollbar-thumb
				border-radius: 10px;
				background-color: #708090;

		.item

			margin: 1px 0
			line-height: 50px;
			text-align: left;
			white-space: nowrap;
			padding: 0 20px;

			&:hover
				background-color: #41b883;
				color: white;
				cursor: pointer;

		.selecionado:hover
			background-color: #FF0040 !important

		.campo-filtro
			border-bottom: 1px solid #ccc;
			height: 50px;
			position: relative;

			.icon
				position: absolute
				right: 10px;
				width: 15px;
				height: 15px;
				top: 10px;
				text-align: center;

			input
				width: calc(100% - 20px);
				margin: 5px 0 5px 5px;
				height: calc(100% - 15px);
				box-shadow: none;
				text-align: left;
				border: 1px solid #ccc;
				padding-left: 10px;
				min-height: 20px;
				max-height: 40px;

				&:focus
					outline: none;

		.campo-selecionar-todos
			border-bottom: 1px solid #ccc;

			span
				margin: 5px 0;
				padding: 0 20px;

			&:hover
				background-color: #41b883;
				color: white;
				cursor: pointer;

</style>
