import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Form } from '../pages/Form';
import '../App.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Form />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
