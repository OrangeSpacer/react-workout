import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './styles/index.scss';

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='*' element={
            <QueryClientProvider client={queryClient}>
              <App/>
            </QueryClientProvider>
          }/>
        </Routes>
      </Router>
  </React.StrictMode>
);


{/* <QueryClientProvider client={queryClient}>
<App/>
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider> */}