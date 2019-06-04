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

# Configurações do componente

É possível modificar alguns parâmetros do componente. A seguir tabela das propiedades disponíveis do componente.

|Propriedade          | Tipo    | Default   | Valores Aceitos           | Descrição |
---------------------|---------|-----------|---------------------------|------------|
|erro                 | Boolean | false     | -                         | Se **true** será renderizada uma borda vermelha, indicando campo com erro |
|label                | String  | nome      | -                         | Indica o nome da variável do objeto `opcoes` que possui os nomes que serão renderizados no select para cada uma das opções |
|chave                | String  | valor     | -                         | Indica o nome da variável do objeto `opcoes` que contém o valor de cada uma das opções |
|filtravel            | Boolean | false     | -                         | Se **true** será renderizado um campo de pesquisa para filtrar as opções |
|selecionarTodos      | Boolean | false     | -                         | Se **true** será renderizado uma opção para selecionar todas as opções de uma vez. Só é permitido caso a opção `multiplos` seja **true** |
|pesquisarPlaceholder | String  | Pesquisar | -                         | Placeholder para o campo de pesquisa. Só será visível caso o campo `filtravel` esteja habilitado.|
|bordaArredondada     | Boolean | false     | -                         | Se **true** adicionará uma borda de `20px` no select e no campo de pesquisa, caso esteja habilitado. |
|multiplos            | Boolean | false     | -                         | Se **true** permitirá selecionar mais de uma opção. |
|permitirNovosItens   | Boolean | false     | -                         | Se **true** exibirá um botão |
|placeholder          | String  | Selecione | -                         | Placeholder para o campo de select. |
|altura               | String  | media     | pequena / media / grande  | Define a altura do input do select. (20 /30 / 40)px respectivamente. |
|opcoes               | Array   | []        | -                         | Array com as opções que populará o select. |

# Funcionamento

Se o atributo da variavel for setado como *undefined* ou *null* o componente

