import { useState } from 'react';
import styled from 'styled-components';
import Bubble from '../components/blocks/Bubble';

const PageWrapper = styled.div`
	height: 100lvh;
	height: 100vh;
	width: 100%;
	background: #D9CCB4;
	overflow: hidden;
`;

const Page = () => {
	const [bubbles, setBubbles] = useState([]);
	const hasBubbles = bubbles.length > 0;

	const handleClick = (e) => {
		const cords = {
			x: e.clientX,
			y: e.clientY
		};

		setBubbles([...bubbles, cords]);
	}

	return (
	<PageWrapper onClick={(e) => handleClick(e)}>
		{hasBubbles && bubbles.map((bubble, index) => (
			<Bubble data={bubble} index={index} key={index} />
		))}
	</PageWrapper>
	);
};

export default Page;
