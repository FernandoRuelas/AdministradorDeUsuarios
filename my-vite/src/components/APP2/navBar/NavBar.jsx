import React, { useContext } from 'react';
import './navBar.css'
import ActualizacionContext from '../hooks/contextUsers';

function NavBar({setVisibilityUserConfig, visibilityUserConfig, setVisibilityMenu, visibilityMenu}) {

	const{tema}=useContext(ActualizacionContext);

	return (
		<>
			<nav className={`bg-dark shadow`+(tema=="light" ? " light" : "")}>
				<ul>
					<li>
						<span className="material-symbols-outlined" onClick={()=>setVisibilityMenu(!visibilityMenu)}>menu</span>
					</li>
					<li>
						<span className="material-symbols-outlined" onClick={()=>setVisibilityUserConfig(!visibilityUserConfig)}>manage_accounts</span>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
