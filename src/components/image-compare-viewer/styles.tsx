import styled from 'styled-components';

// Work around: force this variable to type 'any' in order to avoid type error with React.CSSProperties.
export const SLIDE_VALUE_CSSKEY: any = '--slide-value';
export const X_VALUE_CSSKEY: any = '--x-value';

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: 2px solid black;
`;

// should not define border or padding here because it will make x pos incorrect
// => define border and padding in wrapper instead
export const Figure = styled.figure`
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImgSizer = styled.img`
  visibility: 'hidden';
  max-width: '100%';
  max-height: '100%';
`;

export const ClipPathImg = styled(Img)`
  clip-path: polygon(0 0, var(${SLIDE_VALUE_CSSKEY}) 0, var(${SLIDE_VALUE_CSSKEY}) 100%, 0 100%);
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 2px dashed ${(props) => props.color || 'white'};
  transform: translate(var(${X_VALUE_CSSKEY}), 0px);
`;
