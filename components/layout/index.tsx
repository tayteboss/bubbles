import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	return (
		<>
			<Main>{children}</Main>
		</>
	);
};

export default Layout;
