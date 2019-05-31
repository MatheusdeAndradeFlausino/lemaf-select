# Lemaf Vue Select

Componente Vue para seleção de intervalos de datas.

## Como usar

- Importar o componente `import LemafSelect from 'lemaf-vue-select'`
- Importar o css `import 'lemaf-vue-select/dist/lemaf-vue-select.css'`

- Incluir o componente: `<lemaf-range-picker @selected="onRangeSelected" v-bind="config"></lemaf-range-picker>`

## Evento

O evento `select` retorna um objeto com os atributos `inicio` e `fim`, cada um deles com uma instância `Date` equivalente ao intervalo selecionado. Exemplo:

```
range{
	inicio: Wed Jan 01 2014 00:00:00 GMT-0200 (-02),
	fim: Mon Dec 31 2018 00:00:00 GMT-0200 (-02)
}
```
## Configurações do componente

É possível modificar alguns parâmetros do componente, como cores e ano inicial dos intervalos através do parâmetro `config`. Exemplo:

```
config: {
	anoInicial: 1992,
	styles: {
		baseColor: '#FFA726',
		overColor: 'white'
	}
}
```
