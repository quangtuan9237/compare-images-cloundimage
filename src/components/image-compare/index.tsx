import React from 'react';
import { ImageCompareViewer } from '../image-compare-viewer';
import { ImageConfigValue, IMAGE_FORMATS, ImageQualityInput } from '../image-quality-input';
import { ConfigWrapper } from './styles';

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

export type ImageCompareProps = {
  src: string;
};

export function ImageCompare({ src: url }: ImageCompareProps) {
  const [leftConfig, setLeftConfig] = React.useState<ImageConfigValue>(defaultConfig);
  const [rightConfig, setRightConfig] = React.useState<ImageConfigValue>(defaultConfig);
  const leftSrc = getSrc(url, leftConfig);
  const rightSrc = getSrc(url, rightConfig);

  return (
    <section>
      <ConfigWrapper>
        <ImageQualityInput value={leftConfig} onChange={(data) => setLeftConfig(data)} />
        <ImageQualityInput value={rightConfig} onChange={(data) => setRightConfig(data)} />
      </ConfigWrapper>
      <ImageCompareViewer
        leftSrc={leftSrc}
        rightSrc={rightSrc}
        width="50vw"
        separatorColor="white"
      />
    </section>
  );
}
