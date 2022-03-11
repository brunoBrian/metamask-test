import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import React, {MouseEvent} from 'react';

import {UserSnippet} from 'src/components/Profile/UserSnippet';
import {MainNavigation} from 'src/components/Sidebar/Navigation/MainNavigation';
import {SecondaryNavigation} from 'src/components/Sidebar/Navigation/SecondaryNavigation';
import {Aside, BrandLink, BrandName, ToggleMenu} from 'src/components/Sidebar/styles/sidebar.style';
import {ConnectButton} from 'src/styles/theme/buttons';

import metamask_icon from './../../assets/images/metamask.png';

export const Sidebar = () => {
	const connectMetamask = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
	};

	return (
		<Aside>
			<div>
				<ToggleMenu icon={faChevronCircleLeft} />
				<BrandLink to="/">
					<BrandName>FABDASH</BrandName>
				</BrandLink>
				<UserSnippet />
				<ConnectButton onClick={(e) => connectMetamask(e)} className="metamask-button">
					<img
						src={metamask_icon}
						alt="Metamask wallet id"
						className="top-links__mmicon"
						width={20}
					/>
					&nbsp;&nbsp;&nbsp;Connect
				</ConnectButton>
				<MainNavigation />
			</div>
			<div>
				<SecondaryNavigation />
			</div>
		</Aside>
	);
};
