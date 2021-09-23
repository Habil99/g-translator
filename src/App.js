import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from "./components/Layout"
import {routes} from './routes'

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({path, id, exact, component}) => (
          <Route key={id} path={path} exact={exact || false} children={component}/>
        ))}
      </Switch>
    </Layout>
  )
}

export default App
