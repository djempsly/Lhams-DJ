import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const context = useContext(Context);
  const ActiveStyle = 'underline underline-offset-4 bg-blue-100';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navigate = useNavigate();

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
    navigate("/");
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate("/");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate("/");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <nav className="flex justify-between items-center fixed z-20 top-0 w-full py-4 px-6 bg-blue-950 text-white shadow-md">
        <button className="md:hidden" onClick={toggleMenu}>
          <SlMenu className="w-6 h-6" />
        </button>

        {/* Menú izquierdo */}
        <ul className="nav-izquierdo hidden md:flex gap-4 items-center">
          <li><NavLink to="/" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Inicio</NavLink></li>
          <li><NavLink to="/laptopaccesory" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Laptop e Impresora</NavLink></li>
          <li><NavLink to="/otros" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Sublimación</NavLink></li>
          <li className="relative group">
            <span className="cursor-pointer">Servicios</span>
            <ul className="absolute hidden group-hover:block bg-blue-900 mt-2 rounded shadow-lg px-4 py-2 z-50">
              <li><NavLink to="/migratorio" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Asesoría Migratoria</NavLink></li>
              <li><NavLink to="/contabilidad" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Servicios Contables</NavLink></li>
              <li><NavLink to="/laptop" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Mantenimiento de Laptop</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/sobreNosotros" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Sobre Nosotros</NavLink></li>
          <li><NavLink to="/contactos" className={({ isActive }) => isActive ? ActiveStyle : undefined}>Contactos</NavLink></li>
        </ul>

        {/* Input de búsqueda */}
        <div className="hidden md:block flex items-center space-x-2 border rounded px-4 py-2 bg-white">
          <input
            type="text"
            className="outline-none w-64"
            placeholder="Busca artículos..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => {
              // Aquí puedes agregar la lógica de búsqueda
              alert(`Buscando: ${searchQuery}`);
            }}
          >
            Buscar
          </button>
        </div>

        {/* Menú derecho */}
        <ul className="nav-derecho hidden md:flex gap-4 items-center">
          {isLoggedIn ? (
            <>
              <li><NavLink to="/my-account">My Account</NavLink></li>
              <li><NavLink to="/my-orders">My Orders</NavLink></li>
              <li><NavLink to="/my-order">My Order</NavLink></li>
              <li>
                <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li><button onClick={handleLogin} className="text-white hover:underline">SignIn</button></li>
              <li><NavLink to="/signup">SignUp</NavLink></li>
            </>
          )}
          <li className="relative flex items-center gap-1">
            <ShoppingCartIcon className='h-6 w-6 text-white cursor-pointer' />
            <div className='bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              {context.count}
            </div>
          </li>
        </ul>
      </nav>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-blue-950 text-white z-50 p-6 transition-all duration-300 overflow-auto">
          <div className="flex justify-end mb-4">
            <button onClick={toggleMenu}>
              <IoMdClose className="w-7 h-7" />
            </button>
          </div>
          <ul className="flex flex-col gap-3">
            <li><NavLink to="/" onClick={toggleMenu}>Inicio</NavLink></li>
            <li><NavLink to="/laptopaccesory" onClick={toggleMenu}>Laptop e Impresora</NavLink></li>
            <li><NavLink to="/otros" onClick={toggleMenu}>Sublimación</NavLink></li>
            <li>
              <span className="font-semibold">Servicios</span>
              <ul className="pl-4 mt-1 flex flex-col gap-1">
                <li><NavLink to="/migratorio" onClick={toggleMenu}>Asesoría Migratoria</NavLink></li>
                <li><NavLink to="/contabilidad" onClick={toggleMenu}>Servicios Contables</NavLink></li>
                <li><NavLink to="/laptop" onClick={toggleMenu}>Mantenimiento de Laptop</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/sobreNosotros" onClick={toggleMenu}>Sobre Nosotros</NavLink></li>
            <li><NavLink to="/contactos" onClick={toggleMenu}>Contactos</NavLink></li>

            {isLoggedIn ? (
              <>
                <li><NavLink to="/my-account" onClick={toggleMenu}>My Account</NavLink></li>
                <li><NavLink to="/my-orders" onClick={toggleMenu}>My Orders</NavLink></li>
                <li><NavLink to="/my-order" onClick={toggleMenu}>My Order</NavLink></li>
                <li><button onClick={() => { handleLogout(); toggleMenu(); }}>Logout</button></li>
              </>
            ) : (
              <>
                <li><button onClick={() => { handleLogin(); toggleMenu(); }}>SignIn</button></li>
                <li><NavLink to="/signup" onClick={toggleMenu}>SignUp</NavLink></li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
