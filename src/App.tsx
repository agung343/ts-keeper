import React from 'react';
import { MemoContextProvider } from './store/memo-context';
import Header from './components/Header';
import Memos from './components/Memos';
import Footer from './components/Footer';
import CreateMemo from './components/CreateMemo-js';

function App() {
  return <MemoContextProvider>
    <Header />
    <CreateMemo />
    <Memos />
    <Footer />
  </MemoContextProvider>
}

export default App;
