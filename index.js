import {define} from 'doz'
import cmp from './src'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define('doz-formfield', cmp)
    }
}

register();

export default cmp

if (module.hot) {
    module.hot.dispose(function () {
        register();
    })
}