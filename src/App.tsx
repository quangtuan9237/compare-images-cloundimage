import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { ImageCompare } from './components/image-compare';
import { fetcher } from './utils/fetcher';
import { Select, Wrapper } from './styles';

type ImageData = {
  title: string;
  src: string;
};

function App() {
  const [images, setImages] = React.useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = React.useState('');

  React.useEffect(() => {
    fetcher('https://scaleflex.cloudimg.io/v7/01_test/sara_sample.json?vh=631222&func=proxy').then(
      (data: ImageData[]) => {
        setImages(data);
        setSelectedImage(data[4].src);
      }
    );
  }, []);

  const base = 'https://doc.cloudimg.io/' + selectedImage;

  return (
    <Wrapper>
      <Select
        value={selectedImage}
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.keys(images).map((key) => {
          return (
            <option key={key} value={images[key].src}>
              {images[key].title || ''}
            </option>
          );
        })}
      </Select>
      <ImageCompare src={base} />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
