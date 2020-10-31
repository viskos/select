import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
    //custom placeholder
    placeholder: 'Select element',
    //your url
    url: 'https://jsonplaceholder.typicode.com/users',
    //callback
    onSelect(item) {
        console.log('selected item: ', item)
    }
})


window.s = select
