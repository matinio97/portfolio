import styled from "styled-components";

const Icon = styled.div`
	& svg {
		width: 2.5rem;
		height: 2.5rem;
		transition: all 0.3s;
	}

	@media (min-width: 425px) {
		width: 2.5rem;
		height: 2.5rem;
	}
	@media (min-width: 768px) {
		width: 3rem;
		height: 3rem;
	}
`;

export default Icon;
