import 'vue-material-design-icons/styles.css'

let handleOutsideClick

const defaultStyles = {
	width: 300
}

const referenciaAltura = [];
referenciaAltura['pequena'] = 15;
referenciaAltura['media'] = 25;
referenciaAltura['grande'] = 35;

const referenciaAlturaIcone = [];
referenciaAlturaIcone['pequena'] = 3;
referenciaAlturaIcone['media'] = 6;
referenciaAlturaIcone['grande'] = 11;

const referenciaAlturaIconePesquisar = [];
referenciaAlturaIconePesquisar['pequena'] = 8;
referenciaAlturaIconePesquisar['media'] = 13;
referenciaAlturaIconePesquisar['grande'] = 18;

export default {

	name: 'vue-select',

	props: {

		styles: {
			type: Object,
			default: () => defaultStyles
		},
		value: {
			type: [Object, Array, Number, String],
			default: undefined
		},
		erro: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: 'nome'
		},
		chave: {
			type: String,
			default: 'valor'
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
			default: 'Selecione'
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
		},
		podeRemoverItem: {
			type: Boolean,
			default: true
		},
		fontFamily: {
			type: String,
			default: ''
		}

	},

	watch: {

		opcoes: {

			deep: true,
			immediate: true,

			handler: function(novasOpcoes){

				this.opcoesExibidas = [];
				this.opcoesTransformadas = [];

				novasOpcoes.forEach(opcao => {

					let itemTransformado = {
						nome: opcao[this.label],
						valor: opcao[this.chave]
					}

					this.opcoesTransformadas.push(itemTransformado);

				});

				this.opcoesExibidas = this.opcoesTransformadas

			}

		},

		value: {

			deep: true,
			immediate: true,
			handler: function(novosValores) {

				if(novosValores) {

					let valoresQueDevemSerSelecionados = [];

					typeof novosValores === 'object' ? valoresQueDevemSerSelecionados = [...novosValores] : valoresQueDevemSerSelecionados.push(novosValores);

					valoresQueDevemSerSelecionados.forEach(novoValor => {

						let itemNasOpcoes = this.opcoesTransformadas.filter(opcaoTransformada => opcaoTransformada.valor === novoValor);
						this.selecionar(itemNasOpcoes.pop());

					});

				} else {

					this.selecionados = [];

				}

			}

		}

	},

	data() {

		return {
			inputStyle: {
				borderRadius: this.bordaArredondada ?  '20px' : '0',
				minHeight: referenciaAltura[this.altura] + 'px',
				lineHeight: referenciaAltura[this.altura] + 'px'
			},
			iconStyle: {
				top: referenciaAlturaIcone[this.altura] + 'px'
			},
			iconPesquisarStyle: {
				top: referenciaAlturaIconePesquisar[this.altura] + 'px'
			},
			selecionadoChipsStyle: {
				minHeight: referenciaAltura[this.altura] + 'px',
				lineHeight: referenciaAltura[this.altura] + 'px'
			},
			campoFiltroStyle: {
				height: (referenciaAltura[this.altura] + 18) + 'px'
			},
			campoPesquisarStyle: {
				borderRadius: this.bordaArredondada ?  '20px' : '0',
				height: referenciaAltura[this.altura] + 'px',
				lineHeight: referenciaAltura[this.altura] + 'px'
			},
			componenteStyle: {
				fontFamily: this.fontFamily
			},
			opcoesExibidas: [],
			open: false,
			palavraChavePesquisa: '',
			selecionados: [],
			opcoesTransformadas: [],
			ativarClasseHoverComMouseNasOpcoes: true,
			opcaoEscolhidaComSetasTeclado: -1
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
			let grausGiro = this.open ? 180 : 0.

			let transform = `rotate(${grausGiro}deg)`;

			this.iconStyle.transform = transform;

		},

		pesquisar() {

			this.opcoesExibidas = this.opcoesTransformadas.filter(opcao => opcao.nome.toString().toLowerCase().includes(this.palavraChavePesquisa.toLowerCase()));

		},

		selecionar(item) {

			if(!this.multiplos) {

				this.selecionados = [];
				this.open = false;

			}

			if(!this.itemJaSelecionado(item)) {

				this.selecionados.push(item);

			}

		},

		emitirResultado() {

			if(!this.multiplos) {

				let valorEmit = this.selecionados[0] ? this.selecionados[0].valor : undefined;

				this.$emit('input', valorEmit)

			} else {

				this.$emit('input', this.selecionados.map(selecionado => selecionado.valor));

			}

		},

		adicionar(item) {

			this.selecionar(item);
			this.emitirResultado();

		},

		adicionarTodos() {

			this.opcoesExibidas.forEach(opcao => this.selecionar(opcao));
			this.emitirResultado();

		},

		itemJaSelecionado(item) {

			return this.selecionados.filter(selecionado => selecionado.valor && selecionado.valor === item.valor).length > 0;

		},

		resolverItem(event, item) {

			if(this.itemJaSelecionado(item) && this.podeRemoverItem){

				this.removerItem(event, item)

			} else if(!this.itemJaSelecionado(item)) {

				this.adicionar(item);

			}

		},

		removerItem(event = null, item) {

			if(!event) {

				event = window.event;

			}

			event.cancelBubble = true;

			if(event.stopPropagation) {

				event.stopPropagation();

			}

			for(let index = 0; index < this.selecionados.length; index++) {

				if(this.selecionados[index].valor === item.valor) {

					this.selecionados.splice(index, 1);
					break;

				}

			}

			this.emitirResultado();

		},

		adicionarNovoItem() {

			let novoItem = {

				nome: this.palavraChavePesquisa,
				valor: this.palavraChavePesquisa

			}

			this.selecionar(novoItem);

		},

		emitirClick($event) {

			this.$emit('clicked', $event)

		},

		onClose() {

			this.open = false;

		},

		navegarOuEscolherOpcoes(event) {

			switch(event.keyCode) {

				case 40:
					this.opcaoEscolhidaComSetasTeclado < this.opcoesExibidas.length - 1 ? this.opcaoEscolhidaComSetasTeclado++ :  this.opcaoEscolhidaComSetasTeclado;
					this.focusItem(this.opcaoEscolhidaComSetasTeclado);
					break;
				case 38:
					this.opcaoEscolhidaComSetasTeclado > -1 ? this.opcaoEscolhidaComSetasTeclado-- :  this.opcaoEscolhidaComSetasTeclado;
					this.focusItem(this.opcaoEscolhidaComSetasTeclado);
					break;
				case 13:
					this.escolherOpcaoComBotaoEnter(event);
					break;

			}

		},

		focusItem(index) {

			let itemName = 'item-' + index;
			let offsetTop = this.$refs[itemName][0].offsetTop;
			this.$refs.itens.scrollTop = offsetTop;

		},

		escolherOpcaoComBotaoEnter(event) {

			if(this.opcaoEscolhidaComSetasTeclado > -1) {

				this.resolverItem(event, this.opcoesExibidas[this.opcaoEscolhidaComSetasTeclado], this.opcaoEscolhidaComSetasTeclado);

			}

		}

	}

}
