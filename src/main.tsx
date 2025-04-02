import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import router from './RouteConfig';

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);