import React from 'react';
import { Spinner } from '../spinner';
import {
  Wrapper,
  Figure,
  Img,
  ImgSizer,
  ClipPathImg,
  VerticalLine,
  SLIDE_VALUE_CSSKEY,
  X_VALUE_CSSKEY,
} from './styles';

export type ImageCompareViewerProps = React.HTMLAttributes<HTMLDivElement> & {
  leftSrc: string;
  rightSrc: string;
  separatorColor?: string;
  width?: string;
  height?: string;
};

export function ImageCompareViewer({
  leftSrc,
  rightSrc,
  separatorColor,
  height,
  width,
  ...props
}: ImageCompareViewerProps) {
  const [leftLoading, setLeftLoading] = React.useState(true);
  const [rightLoading, setRightLoading] = React.useState(true);
  const [mouseXPos, setMouseXPos] = React.useState(0);
  const figureRef = React.useRef<HTMLDivElement>(null);

  const slideValue = figureRef.current ? mouseXPos / figureRef.current.offsetWidth : 0;
  const slidePercentage = Math.round(slideValue * 10000) / 100;
  const loading = leftLoading || rightLoading;

  React.useEffect(() => {
    setLeftLoading(true);
  }, [leftSrc]);

  React.useEffect(() => {
    setRightLoading(true);
  }, [rightSrc]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!figureRef.current) {
      return;
    }

    // Mouse X position
    const x = e.pageX - figureRef.current.offsetLeft;

    setMouseXPos(x);
  }

  return (
    <Wrapper {...props}>
      <Figure ref={figureRef} onMouseMove={handleMouseMove}>
        <ImgSizer src={leftSrc} style={{ height, width }} />
        <Img
          src={rightSrc}
          onLoad={() => setRightLoading(false)}
          style={{
            ...(loading && {
              visibility: 'hidden',
            }),
          }}
        />
        <ClipPathImg
          src={leftSrc}
          onLoad={() => setLeftLoading(false)}
          hidden={!rightLoading && !leftLoading}
          style={{
            [SLIDE_VALUE_CSSKEY]: slidePercentage + '%',
            ...(loading && {
              visibility: 'hidden',
            }),
          }}
        />
        <VerticalLine
          color={separatorColor}
          style={{
            [X_VALUE_CSSKEY]: mouseXPos + 'px',
          }}
        />
        {loading && <Spinner />}
      </Figure>
    </Wrapper>
  );
}
