import React from 'react';
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

type ImageCompareViewerProps = React.HTMLAttributes<HTMLDivElement> & {
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
  const [mouseXPos, setMouseXPos] = React.useState(0);
  const figureRef = React.useRef<HTMLDivElement>(null);

  const slideValue = figureRef.current ? mouseXPos / figureRef.current.offsetWidth : 0;
  const slidePercentage = Math.round(slideValue * 10000) / 100;

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
        <Img src={rightSrc} />
        <ClipPathImg
          src={leftSrc}
          style={{
            [SLIDE_VALUE_CSSKEY]: slidePercentage + '%',
          }}
        />
        <VerticalLine
          color={separatorColor}
          style={{
            [X_VALUE_CSSKEY]: mouseXPos + 'px',
          }}
        />
      </Figure>
    </Wrapper>
  );
}
