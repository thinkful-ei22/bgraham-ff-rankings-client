import { Route } from 'react-router-dom'
import React from 'react';
import StdOvrList from './std-overall-list';
import PprOvrList from './ppr-overall-list';

import QbList from './std-qb-list';

import StdRbList from './std-rb-list';
import PprRbList from './ppr-rb-list';

import StdWrList from './std-wr-list';
import PprWrList from './ppr-wr-list';

import StdTeList from './std-te-list';
import PprTeList from './ppr-te-list';

import KList from './std-k-list';

import DstList from './std-dst-list';

import HeaderBar from './header-bar';

const Main = () => (
  <div className="container"> 

    
      {/* <Switch> */}
      <Route path='/' component={HeaderBar}/>

      <Route exact path='/qb' component={QbList}/>
     
      <Route  exact path='/k' component={KList}/>
     
      <Route exact path='/dst' component={DstList}/>

      <Route exact path='/std/rb' component={StdRbList}/>
      <Route exact path='/ppr/rb' component={PprRbList}/>

      <Route exact path='/std/wr' component={StdWrList}/>
      <Route exact path='/ppr/wr' component={PprWrList}/>

      <Route exact path='/std/te' component={StdTeList}/>
      <Route exact path='/ppr/te' component={PprTeList}/>

        <Route exact path='/ppr/overall' component={PprOvrList}/>

        <Route exact path='/std/overall'component={StdOvrList}>
       
        </Route>

      {/* </Switch> */}
    </div>
  )

  export default Main