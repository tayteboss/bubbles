import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.innerWrapper};
	padding-left: 16px;
	padding-right: 16px;
`;

const LayoutWrapper = (props: Props) => (
	<Wrapper className="inner-wrapper">{props.children}</Wrapper>
);

export default LayoutWrapper;
