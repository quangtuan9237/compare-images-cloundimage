import React from 'react';
import { simpleUniqueId } from '../../utils/simpleUniqueId';
import { ImageCompareViewer } from '../image-compare-viewer';
import { ImageConfigValue, IMAGE_FORMATS, ImageQualityInput } from '../image-quality-input';
import { ConfigWrapper, SizeSelectWrapper } from './styles';

function getSearchParams(config: ImageConfigValue | null) {
  if (!config) {
    return '';
  }

  const searchParams = new URLSearchParams({
    force_format: config.format,
    ...(config.format != IMAGE_FORMATS.original && {
      q: config.quality,
      ci_info: config.showInfo ? '1' : '0',
    }),
  });

  return searchParams.toString();
}

function getSrc(base: string, config: ImageConfigValue | null) {
  if (!config) {
    return '';
  }

  return base + '?' + getSearchParams(config);
}

const defaultConfig = {
  format: IMAGE_FORMATS.jpeg,
  quality: '50',
  showInfo: false,
};

const viewSize: { [key: string]: { title: string; value: string } } = {
  x0_3: { title: '1/3', value: '20vw' },
  x0_5: { title: '1/2', value: '35vw' },
  x1: { title: 'Normal', value: '50vw' },
  x2: { title: '2x', value: '75vw' },
  x3: { title: '3x', value: '100vw' },
};

export type ImageCompareProps = {
  src: string;
};

export function ImageCompare({ src: url }: ImageCompareProps) {
  const [idSelect] = React.useState(() => simpleUniqueId('select'));
  const [size, setSize] = React.useState(viewSize.x1.value);
  const [leftConfig, setLeftConfig] = React.useState<ImageConfigValue>(defaultConfig);
  const [rightConfig, setRightConfig] = React.useState<ImageConfigValue>(defaultConfig);
  const leftSrc = getSrc(url, leftConfig);
  const rightSrc = getSrc(url, rightConfig);

  return (
    <section>
      <ConfigWrapper>
        <ImageQualityInput
          title="Left Image"
          value={leftConfig}
          onChange={(data) => setLeftConfig(data)}
        />
        <ImageQualityInput
          title="Right Image"
          value={rightConfig}
          onChange={(data) => setRightConfig(data)}
        />
      </ConfigWrapper>
      <ImageCompareViewer
        leftSrc={leftSrc}
        rightSrc={rightSrc}
        width={size}
        separatorColor="white"
      />
      <SizeSelectWrapper>
        <label htmlFor={idSelect}>Image Size:</label>
        <select
          id={idSelect}
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          {Object.keys(viewSize).map((key) => {
            return (
              <option key={key} value={viewSize[key].value}>
                {viewSize[key].title || ''}
              </option>
            );
          })}
        </select>
      </SizeSelectWrapper>
    </section>
  );
}
