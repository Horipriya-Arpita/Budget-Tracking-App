import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './Hooks/ThemeProvider';

import Navbar from './Pages/Navbar';
import HomePage from './Pages/HomePage';
import ListViewEdit from './Pages/CategoryPage';
import AnalysisPage from './Pages/AnalysisPage';
import BudgetPage from './Pages/BudgetPage';
import RecordPage from './Pages/RecordPage';
import AccountPage from './Pages/AccountPage';
import AddPage from './Pages/AddPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/categories' element={<ListViewEdit/>}/>
          <Route path='/analysis' element={<AnalysisPage/>}/>
          <Route path='/budgets' element={<BudgetPage/>}/>
          <Route path='/records' element={<RecordPage/>}/>
          <Route path='/accounts' element={<AccountPage/>}/>
          <Route path='/add' element={<AddPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
