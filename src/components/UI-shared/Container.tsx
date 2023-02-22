import styled from 'styled-components';

export const FlexContainer = styled.div<{
  isFlexDirectionColumn?: boolean,
  isBorderBottom?: boolean,
  isFlexWrap?: boolean,
  alignItems?: string,
  justifyContent?: string,
  alignContent?: string,
  padding?: string,
  margin?: string,
  gap?: string,
  width?: string,
  height?: string,
  flex?: number, }>`
  display: flex;
  flex-direction: ${props => (props.isFlexDirectionColumn ? 'column' : 'row')};
  flex-wrap: ${props => (props.isFlexWrap ? 'wrap' : 'nowrap')};
  ${props => props.width && `width: ${props.width}%;`}
  ${props => props.height && `height: ${props.height}vh;`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.alignContent && `align-content: ${props.alignContent};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ flex }) => flex && `flex: ${flex};`}
`;

export const FlexItem = styled.div <{
  alignSelf?: string,
  flexGrow?: number,
  flexShrink?: number,
  order?: number,
  flex?: number,
}>`
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
  ${props => props.flexShrink && `flex-shrink: ${props.flexShrink};`}
  ${props => props.order && `order: ${props.order};`}
  ${props => props.flex && `flex: ${props.flex};`}
`;

export const GridContainer = styled.section`
  color: #ccc;
`