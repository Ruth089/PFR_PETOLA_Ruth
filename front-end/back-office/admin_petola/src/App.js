import * as React from 'react';
import { useState, useEffect } from 'react';
import { fetchUtils, Admin, Resource, DataProvider } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';

import authProvider from './authProvider'

import simpleRestProvider from 'ra-data-simple-rest';
import MyLoginPage from './views/loginpage';

function App() {

  return (
    <Admin 
    dataProvider={restProvider('http://localhost:3000')}
    // dataProvider={dataProvider}
    // authProvider={authProvider}
 
    // loginPage={MyLoginPage} 
    // logoutButton={MyLogoutButton} authProvider={authProvider}
    >
      <Resource 
        name='posts' 
        list={PostList} 
        create={PostCreate} 
        edit={PostEdit} 
        // authProvider={authProvider}
      />
      <Resource 
        name='users' 
        list={UserList} 
        create={UserCreate} 
        edit={UserCreate} 
      />
    </Admin>
  );
}

export default App;
