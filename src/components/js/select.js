import 'vue-material-design-icons/styles.css'

let handleOutsideClick

const defaultStyles = {
	width: 300
}

const referenciaAltura = [];
referenciaAltura['pequena'] = 20;
referenciaAltura['media'] = 30;
referenciaAltura['grande'] = 40;

const referenciaAlturaIcone = [];
referenciaAlturaIcone['pequena'] = 5;
referenciaAlturaIcone['media'] = 10;
referenciaAlturaIcone['grande'] = 15;

export default {

	name: 'vue-select',

	props: {

		styles: {
			type: Object,
			default: () => defaultStyles
		},
		filtravel: {
			type: Boolean,
			default: false
		},
		selecionarTodos: {
			type: Boolean,
			default: false
		},
		pesquisarPlaceholder: {
			type: String,
			default: 'Pesquisar'
		},
		bordaArredondada: {
			type: Boolean,
			default: false
		},
		multiplos: {
			type: Boolean,
			default: false
		},
		desabilitado: {
			type: Boolean,
			default: false
		},
		permitirNovosItens: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: null
		},
		altura: {
			type: String,
			default: 'media',
			validator: function(value) {

				return ['pequena', 'media', 'grande'].indexOf(value) !== -1

			}
		},
		opcoes: {
			type: Array,
			default: () => []
		}

	},

	data() {

		return {
			componenteStyle: {
				width: this.styles.width + 'px'
			},
			inputStyle: {
				borderRadius: this.bordaArredondada ?  '20px' : '0',
				minHeight: referenciaAltura[this.altura] + 'px',
				lineHeight: referenciaAltura[this.altura] + 'px'
			},
			iconStyle: {
				top: referenciaAlturaIcone[this.altura] + 'px'
			},
			selecionadoChipsStyle: {
				minHeight: referenciaAltura[this.altura] + 'px',
				lineHeight: referenciaAltura[this.altura] + 'px'
			},
			dropdownStyle: {
				width: (this.styles.width) + 'px'
			},
			campoFiltroStyle: {
				width: (this.styles.width) + 'px'
			},
			campoPesquisarStyle: {
				borderRadius: this.bordaArredondada ?  '20px' : '0'
			},
			opcoesExibidas: this.opcoes,
			open: false,
			palavraChavePesquisa: '',
			selecionados: []
		}

	},

	directives: {

		fechar: {

			bind: function(el, binding, vnode) {

				handleOutsideClick = (e) => {

					e.stopPropagation();
					const { handler, exclude } = binding.value
					let clickedOnExcludedEl = false

					exclude.forEach(refName => {

						if(!clickedOnExcludedEl) {

							const excludedEl = vnode.context.$refs[refName]
							clickedOnExcludedEl = excludedEl.contains(e.target)

						}

					})

					if(!el.contains(e.target) && !clickedOnExcludedEl) {

						vnode.context[handler]()

					}

				}

				document.addEventListener('click', handleOutsideClick)
				document.addEventListener('touchstart', handleOutsideClick)

			},

			unbind: function() {

				document.removeEventListener('click', handleOutsideClick)
				document.removeEventListener('touchstart', handleOutsideClick)

			}

		}

	},

	methods: {

		toggleDropDown() {

			this.open = !this.open;

		},

		inputHeightValido(inputHeight) {

			return inputHeight ? inputHeight > 40 ? 40 : inputHeight < 20 ? 20 : inputHeight : 30;

		},

		pesquisar() {

			this.opcoesExibidas = this.opcoes.filter(opcao => opcao.nome.toLowerCase().includes(this.palavraChavePesquisa.toLowerCase()));

		},

		selecionar(item) {

			if(!this.multiplos) {

				this.selecionados = [];

			}

			if(!this.itemJaSelecionado(item)) {

				this.selecionados.push(item);

			}

			this.$emit('modificado', this.selecionados)

		},

		adicionarTodos() {

			this.opcoesExibidas.forEach(opcao => this.selecionar(opcao));

		},

		itemJaSelecionado(item) {

			return this.selecionados.filter(selecionado => selecionado.valor && selecionado.valor === item.valor).length > 0;

		},

		removerItem(event, index) {

			if(!event) {

				event = window.event;

			}

			event.cancelBubble = true;

			if(event.stopPropagation) {

				event.stopPropagation();

			}

			this.selecionados.splice(index, 1);

		},

		adicionarNovoItem() {

			let novoItem = {
				nome: this.palavraChavePesquisa,
				valor: undefined
			}

			this.selecionar(novoItem);

		},

		onClose() {

			this.open = false;

		}

	}

}
