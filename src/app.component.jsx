import GlobalStyles from './global.styles'

import { Route, Switch } from 'react-router-dom'

import Header from './components/header.component'
import Footer from './components/footer.component'

import HomePage from './pages/home.component'
import AboutPage from './pages/about.component'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
