import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        {/* PLACEHOLDER: ícone ou logo da aplicação */}
        <img
         src="src\assets\logo.png" 
         alt="logotipo"
         className="logotipo"
        />
        <h1 className="logo-nome">Cota Bot</h1>
      </div>

      <nav className="sidebar__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
          }
        >
          <span className="sidebar__icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 17.5V10.8333C12.5 10.6123 12.4122 10.4004 12.2559 10.2441C12.0996 10.0878 11.8877 9.99999 11.6667 9.99999H8.33333C8.11232 9.99999 7.90036 10.0878 7.74408 10.2441C7.5878 10.4004 7.5 10.6123 7.5 10.8333V17.5M2.5 8.33333C2.49994 8.09088 2.55278 7.85135 2.65482 7.63142C2.75687 7.4115 2.90566 7.21649 3.09083 7.05999L8.92417 2.05999C9.22499 1.80575 9.60613 1.66626 10 1.66626C10.3939 1.66626 10.775 1.80575 11.0758 2.05999L16.9092 7.05999C17.0943 7.21649 17.2431 7.4115 17.3452 7.63142C17.4472 7.85135 17.5001 8.09088 17.5 8.33333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V8.33333Z" stroke="#3C3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>

          <span className="sidebar__label">Home</span>
        </NavLink>

        <NavLink
          to="/notificacoes"
          className={({ isActive }) =>
            `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
          }
        >
          <span className="sidebar__icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M8.55667 17.5C8.70295 17.7533 8.91335 17.9637 9.1667 18.11C9.42006 18.2562 9.70745 18.3332 10 18.3332C10.2925 18.3332 10.5799 18.2562 10.8333 18.11C11.0867 17.9637 11.297 17.7533 11.4433 17.5M2.71833 12.7716C2.60947 12.8909 2.53763 13.0393 2.51155 13.1987C2.48547 13.3581 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.9429 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1666H16.6667C16.8282 14.1667 16.9862 14.1198 17.1216 14.0317C17.2569 13.9436 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.8919 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52679 4.06877 5 5.34054 5 6.66663C5 10.4158 3.82417 11.63 2.71833 12.7716Z" 
                  stroke="#3C3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
            </svg>
          </span>

          <span className="sidebar__label">Notificações</span>
        </NavLink>
      </nav>
    </aside>
  );
}