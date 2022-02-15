import { ImageCompareViewer } from './components/image-compare-viewer';
import GlobalStyles from './components/GlobalStyles';
import { ImageQualityInput } from './components/image-quality-input';

function App() {
  const leftSrc = 'https://doc.cloudimg.io/sample.li/paris.jpg?force_format=jpg&ci_info=1';
  const rightSrc = 'https://doc.cloudimg.io/sample.li/paris.jpg?q=10&ci_info=1';

  return (
    <>
      <ImageQualityInput />
      <ImageCompareViewer
        leftSrc={leftSrc}
        rightSrc={rightSrc}
        width="50vw"
        separatorColor="white"
      />
      <GlobalStyles />
    </>
  );
}

export default App;
