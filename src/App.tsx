import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { ImageCompare } from './components/image-compare';

const Wrapper = styled.div`
  padding: 30px;
`;

function App() {
  const base = 'https://doc.cloudimg.io/sample.li/paris.jpg';

  return (
    <Wrapper>
      <ImageCompare src={base} />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
