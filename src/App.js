import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from "./components/Layout"
import {Main, Translate} from './pages'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/translate" component={Translate}/>
      </Switch>
    </Layout>
  )
}

export default App
