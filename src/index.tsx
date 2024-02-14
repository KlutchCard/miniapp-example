import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Main } from './Main';
import { TransactionPanel } from './TransactionPanel';
import { CardPanel } from './CardPanel';

const container = document.getElementById('app')!;
const root = createRoot(container);

const router = createBrowserRouter([  
  { path: "/transactionPanel", element: (<TransactionPanel />) },
  { path: "/cardPanel", element: (<CardPanel />) },
  { path: "/main", element: (<Main />) },
]);




root.render(
<StrictMode>
    <RouterProvider router={router} />
</StrictMode>);




