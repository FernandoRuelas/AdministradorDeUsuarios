import React from 'react';
import './navBarUsers.css'

function NavBarUsers() {
	return (
		<>
			<div className='navBarUsers rounded '>
				<ul className="">

					<li>
						<span className='material-symbols-outlined icono'>
							person_add
						</span>
					</li>

					<li>
						<span className='material-symbols-outlined icono'>
							person_remove
						</span>
					</li>

					<li>
						<span className='material-symbols-outlined icono'>
							person_remove
						</span>
					</li>

				</ul>
			</div>
		</>
	);
}

export default NavBarUsers;
