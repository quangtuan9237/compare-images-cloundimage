import React, { useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { simpleUniqueId } from '../../utils/simpleUniqueId';
import { ToggleButton } from '../toggle-button';
import { InputWrapper, Wrapper } from './styles';

export enum IMAGE_FORMATS {
  jpeg = 'jpeg',
  png = 'png',
  webp = 'webp',
  original = 'original',
}

export const imageFormats: { [key: string]: string } = {
  [IMAGE_FORMATS.jpeg]: 'JPEG',
  [IMAGE_FORMATS.png]: 'PNG',
  [IMAGE_FORMATS.webp]: 'WebP',
  [IMAGE_FORMATS.original]: 'Original',
};

export type ImageConfigValue = {
  format: IMAGE_FORMATS;
  quality: string;
  showInfo: boolean;
};

export type ImageQualityInputProps = {
  onChange?: (data: ImageConfigValue) => void;
  value?: ImageConfigValue;
};

export function ImageQualityInput({ onChange, value }: ImageQualityInputProps) {
  const [idSelect] = React.useState(() => simpleUniqueId('select'));
  const [idInput] = React.useState(() => simpleUniqueId('input'));
  const [format, setFormat] = React.useState(value?.format || IMAGE_FORMATS.jpeg);
  const [quality, setQuality] = React.useState(value?.quality || '50');
  const qualityDebounced = useDebounce(quality, 200);
  const [showInfo, setShowInfo] = React.useState(value?.showInfo || false);

  useEffect(() => {
    onChange && onChange({ format, quality: qualityDebounced, showInfo });
  }, [format, qualityDebounced, showInfo]);

  const disabled = format === IMAGE_FORMATS.original;

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor={idSelect}>Format:</label>
        <select
          id={idSelect}
          value={format}
          onChange={(e) => {
            setFormat(e.target.value as IMAGE_FORMATS);
          }}
        >
          {Object.keys(IMAGE_FORMATS).map((key) => {
            return (
              <option key={key} value={key}>
                {imageFormats[key] || ''}
              </option>
            );
          })}
        </select>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor={idInput}>Quality:</label>
        <input
          id={idInput}
          type="range"
          min="1"
          max="100"
          value={quality}
          onChange={(e) => {
            setQuality(e.target.value);
          }}
          disabled={disabled}
        />
      </InputWrapper>
      <InputWrapper>
        <label>Show Info:</label>
        <ToggleButton
          checked={showInfo}
          onChange={(e) => {
            setShowInfo(e.target.checked);
          }}
          disabled={disabled}
        />
      </InputWrapper>
    </Wrapper>
  );
}
