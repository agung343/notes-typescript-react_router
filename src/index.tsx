import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import RootLayout from './routes/RootLayout';
import Home, {loader as loadNotes} from './routes/Home';
import NewNotePage, {action as actionNotePost} from './routes/NewNote';
import NoteDetailPage, {loader as loadSingleNote} from './routes/NoteDetail';

const routes = createBrowserRouter([
  {path:"/", element: <RootLayout />, children: [
    {path:"/", element: <Home />, loader: loadNotes, children: [
      {path:"/add-note", element: <NewNotePage />, action: actionNotePost},
      {path:"/:noteId", element: <NoteDetailPage />, loader: loadSingleNote}
    ]}
  ]}
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
