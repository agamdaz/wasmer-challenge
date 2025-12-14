import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Calendar } from '@components/Calendar';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Calendar />
  </StrictMode>,
);
