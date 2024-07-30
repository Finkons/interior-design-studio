import { Li, TextBlock, LiRevers, BtnBlockRevers, BackDrop, TextBlockRevers, SquareBox, Filter, ContentContainer } from './Portfolio.styled';
import ContentBtnBlock from './SvgHoverLine';

const imageVariants = {
  offscreen: {
    y: 0,
  },
  onscreen: {
    y: -1000,
    transition: {
      type: 'linear',
      duration: 2,
    },
  },
};
const ImgContainer = ({ type, size, top, left, padding, paddingBottom }) => {
  return (
    <>
      <SquareBox type={type} size={size} top={top} left={left} paddingBottom={paddingBottom} padding={padding}>
        <BackDrop variants={imageVariants} initial="offscreen" whileInView="onscreen" delay={2} viewport={{ once: true }}></BackDrop>
        <Filter />
      </SquareBox>
    </>
  );
};

const PhotoItems = () => {
  return (
    <ul>
      <Li>
        <ContentContainer>
          <ImgContainer type="1" />
        </ContentContainer>
        <ContentContainer>
          <TextBlock>badroom</TextBlock>
          <ImgContainer type="2" size="1" top="1" left="1" />
          <ImgContainer type="3" size="2" top="1" left="2" padding="1" />
          <ContentBtnBlock num={0} />
        </ContentContainer>
      </Li>
      <LiRevers>
        <ContentContainer>
          <ImgContainer type="4" />
        </ContentContainer>
        <ContentContainer>
          <TextBlockRevers>children's</TextBlockRevers>
          <ImgContainer type="5" size="1" left="2" />
          <ImgContainer type="6" size="2" paddingBottom="1" />
          <BtnBlockRevers>
            <ContentBtnBlock num={1} />
          </BtnBlockRevers>
        </ContentContainer>
      </LiRevers>
      <Li>
        <ContentContainer>
          <ImgContainer type="7" />
        </ContentContainer>
        <ContentContainer>
          <TextBlock>kitchen</TextBlock>
          <ImgContainer type="9" size="3" top="1" left="1" padding="1" />
          <ImgContainer type="8" size="1" top="2" left="2" />
          <ContentBtnBlock num={2} />
        </ContentContainer>
      </Li>
    </ul>
  );
};
export default PhotoItems;
