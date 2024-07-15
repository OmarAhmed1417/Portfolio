import React ,{lazy, Suspense} from 'react';
import '../Style/main.css'
import Nav from './Nav';
import Header from './Header';
import Know from './Know';
import Projects from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Loader from './Loader';


const Component1 = lazy(() => import('./Header'));
const Component2 = lazy(() => import('./Know'));
const Component3 = lazy(() => import('./Project'));
const Component4 = lazy(() => import('./Skills'));
const Component5 = lazy(() => import('./Contact'));


const Total = () => {
    return ( 
        <>
        {/* <Loader/> */}
        <Suspense fallback={<div>Loading...</div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Component2/>
      </Suspense>
        
      <Suspense fallback={<div>Loading...</div>}>
        <Component3/>
      </Suspense>
        
      <Suspense fallback={<div>Loading...</div>}>
        <Component4/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Component5/>
      </Suspense>
        
        
     
        </>
     );
}
 
export default Total;