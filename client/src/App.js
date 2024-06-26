import {ChakraProvider} from '@chakra-ui/react'
import ProductsScreen from './screens/ProductsScreen';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header';
import LandingScreen from './screens/LandingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import Footer from './components/Footer';
import PasswordResetScreen from './screens/PasswordResetScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
 
function App() {
  return (
    <ChakraProvider>
       <Router>
          <Header/>
            <main>
               <Routes>
                  <Route path='/products' element={<ProductsScreen/>}/>
                  <Route path='/' element={<LandingScreen/>}/>
                  <Route path='/product/:id' element={<ProductScreen/>}/>
                  <Route path='/cart' element={<CartScreen/>}/>
                  <Route path='/login' element={<LoginScreen/>}/>
                  <Route path='/email-verify/:token' element={<EmailVerificationScreen />} />
						<Route path='/password-reset/:token' element={<PasswordResetScreen />} />
               </Routes>
            </main>
            <Footer/>
       </Router>
    </ChakraProvider>
  );
}

export default App;
