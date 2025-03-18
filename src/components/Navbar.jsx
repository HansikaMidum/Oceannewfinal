import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">OceanMedic</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-gray-700 dark:text-gray-300">Home</Link></li>
        <li><Link to="/first-aid" className="text-gray-700 dark:text-gray-300">First Aid</Link></li>
        <li><Link to="/hospitals" className="text-gray-700 dark:text-gray-300">Hospitals</Link></li>
        <li><Link to="/contacts" className="text-gray-700 dark:text-gray-300">Emergency</Link></li>
        <li><Link to="/tourism" className="text-gray-700 dark:text-gray-300">Tourism</Link></li>
        <li><Link to="/about" className="text-gray-700 dark:text-gray-300">About</Link></li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
      </button>
    </nav>
  );
};

export default Navbar;
