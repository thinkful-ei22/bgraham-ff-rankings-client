import { Switch, Route } from 'react-router-dom'
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
    <main>
    <Route path='/' component={HeaderBar}/>
      <Switch>
      <Route path='/qb' component={QbList}/>
     
      <Route path='/k' component={KList}/>
     
      <Route path='/dst' component={DstList}/>

      <Route path='/std/rb' component={StdRbList}/>
      <Route path='/ppr/rb' component={PprRbList}/>

      <Route path='/std/wr' component={StdWrList}/>
      <Route path='/ppr/wr' component={PprWrList}/>

      <Route path='/std/te' component={StdTeList}/>
      <Route path='/ppr/te' component={PprTeList}/>

        <Route path='/ppr/overall' component={PprOvrList}/>

        <Route path='*'component={StdOvrList}>
       
        </Route>

      </Switch>
    </main>
  )

  export default Main