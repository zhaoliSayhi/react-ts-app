import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './containers/Hello';

import {createStore} from 'redux'
import {enthusiasm} from './reducers'
import {StoreState} from './types'

import {Provider} from "react-redux"

const store = createStore<StoreState, any, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
})

ReactDOM.render(
    <Provider store={store}>
        <Hello name='1212121'/>
    </Provider>,
    document.getElementById('root') as HTMLElement
)


// https://typescript.bootcss.com/tutorials/react.html
