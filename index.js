import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
    //custom placeholder
    placeholder: 'Select element',
    //selected element
    selectedId: '1',
    //options
    data: [
        {id: '1', value: 'Element one'},
        {id: '2', value: 'Element two'},
        {id: '3', value: 'Element three'},
        {id: '4', value: 'Element four'},
        {id: '5', value: 'Element five'},
        {id: '6', value: 'Element six'}
    ],
    //callback
    onSelect(item) {
        console.log('selected item: ', item)
    }
})


window.s = select
