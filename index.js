import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
    placeholder: 'Select element',
    selectedId: '1',
    data: [
        {id: '1', value: 'Element one'},
        {id: '2', value: 'Element two'},
        {id: '3', value: 'Element three'},
        {id: '4', value: 'Element four'},
        {id: '5', value: 'Element five'},
        {id: '6', value: 'Element six'}
    ]
})


window.s = select
