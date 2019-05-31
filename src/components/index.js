
import Vue from 'vue'
import LemafSelect from './LemafSelect.vue'

const Components = {
	LemafSelect
}

Object.keys(Components).forEach(name => {

	Vue.component(name, Components[name])

})

export default Components
