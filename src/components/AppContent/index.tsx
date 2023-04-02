import { Redirect, Route, Switch } from 'react-router-dom'
import routeToFilmInfo from 'components/FilmsItemPage/routes'
import React, { useState, useEffect } from 'react'

import './styles.css'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'pages/Main'
import Categories from 'pages/Categories'
import About from 'pages/About'
import Search from 'pages/Search'
import FilmsItemPage from 'components/FilmsItemPage'
import ScrollTopBtn from 'components/ScrollTopBtn'
import Wrapper from 'components/Wrapper'

import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// "document.documentElement.scrollTo" is the magic for React Router Dom v6
		document.documentElement.scrollTo({
			top: 0,
			left: 0, // Optional if you want to skip the scrolling animation
		});
	}, [pathname]);

	return null;
}

const AppContent = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
	
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  return (
    <Wrapper>
      <Header />
      <main className='main'>
        <div className='container'>
					<ScrollToTop/>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/about' component={About} />
            <Route exact path='/search' component={Search} />
            <Route exact path={routeToFilmInfo()} component={FilmsItemPage} />
            <Redirect
              to={{
                pathname: '/main',
              }}
            />
          </Switch>
        </div>
      </main>
      {showTopBtn && <ScrollTopBtn />}

      <Footer />
    </Wrapper>
  )
}

export default AppContent
