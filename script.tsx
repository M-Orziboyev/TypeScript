import React, { JSXElementConstructor } from 'react';

interface AppProps{
    title:string
}

const App = (props: AppProps): JSX.Element => {
    props.title = "sdfsf"
    return <h1>hello </h1>
}
export default App;