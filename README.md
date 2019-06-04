# Lemaf Vue Select

Componente Vue para seleção de intervalos de datas.

## Como usar

- Importar o componente `import LemafSelect from 'lemaf-vue-select'`
- Importar o css `import 'lemaf-vue-select/dist/lemaf-vue-select.css'`

- Incluir o componente: `<lemaf-vue-select v-model='selectProperty'></lemaf-vue-select>`

# Evento

Caso você tenha necessidade de escutar algum evento de mudança do componente, basta escutar o evento input do v-model;

**Exemplo:**
`<lemaf-vue-select @input='doSomething'></lemaf-vue-select>`

## Configurações do componente

É possível modificar alguns parâmetros do componente. A seguir tabela das propiedades disponíveis do componente.

|Propriedade          | Tipo    | Default   | Valores Aceitos           | Descrição |
---------------------|---------|-----------|---------------------------|------------|
|erro                 | Boolean | false     | -                         | Serve para indicar se deve renderizar um borda vermelha para indicar campo com erro. |
|label                | String  | nome      | -                         | Indica o nome da variável do objeto `opcoes` que possui os nomes que serão renderizados no select para cada uma das opções |
|chave                | String  | valor     | -                         | Indica o nome da variável do objeto `opcoes` que contém o valor de cada uma das opções |
|filtravel            | Boolean | false     | -                         | |
|selecionarTodos      | Boolean | false     | -                         | |
|pesquisarPlaceholder | String  | Pesquisar | -                         | |
|bordaArredondada     | Boolean | false     | -                         | |
|multiplos            | Boolean | false     | -                         | |
|permitirNovosItens   | Boolean | false     | -                         | |
|placeholder          | String  | Selecione | -                         | |
|altura               | String  | media     | pequena / media / grande  | |
|opcoes               | Array   | []        | -                         | |

##Funcionamento

Se o atributo da variavel for setado como *undefined* ou *null* o componente

