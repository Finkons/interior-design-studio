import styled from 'styled-components';
import mediaBp from '../../styles/breakpoints';

export const Wrapper = styled.div`
  padding-bottom: 60px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    display: flex;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
export const SectionConteiner = styled.section`
  position: relative;
  padding: 0 16px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding: 0 40px;
  }
`;
export const TextBlock = styled.div`
  color: var(--Color-Neutral-black, #808080);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 32px */
  letter-spacing: -1.6px;
  text-transform: uppercase;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    width: 1160px;
    font-size: 60px;
    letter-spacing: -3px;
  }
`;
export const NumberBlock = styled.div`
  padding-top: 110px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding-top: 0;
    display: flex;
    flex-direction: row-reverse;
  }
`;
export const CenterBlock = styled.div`
  margin-bottom: 40px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    margin-bottom: 0;
    padding-left: 260px;
  }
`;
export const NumberTitle = styled.div`
  color: var(--1, #292929);
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%; /* 72px */
  letter-spacing: -4.2px;
  margin-left: 220px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    font-size: 128px;
    letter-spacing: -8.96px;
    margin-left: 0;
  }
`;
export const Title = styled.p`
  color: #292929;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  text-transform: uppercase;
  text-align: start;
  margin-top: -14px;
  padding-left: 4px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    font-size: 18px;
    text-align: start;
    margin-top: -28px;
    padding-left: 14px;
  }
`;
export const GrayTitle = styled.p`
  color: #b2b2b2;
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%; /* 72px */
  letter-spacing: -4.2px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    font-size: 128px;
    letter-spacing: -8.96px;
  }
`;

export const Text = styled.p`
  padding-left: 130px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding-left: 0;
  }
`;
export const TextIndent = styled.p`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    text-indent: 210px;
  }
`;
export const ColoredText = styled.span`
  color: #e50185;
`;
export const BlurText = styled.span`
  color: #b2b2b2;
`;
export const AncorLink = styled.div`
  color: #b4b4b4;
  text-align: justify;
  font-family: Roboto;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 9.6px */
  text-transform: uppercase;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    text-align: justify;
    font-size: 16px;
    padding-top: 10px;
    margin-right: 122px;
  }
`;
export const ImageBox = styled.div`
  position: absolute;
  background-image: url('aboutUs/sketch_mob.svg');
  width: 320px;
  height: 522px;
  right: 0;
  overflow: hidden;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    position: absolute;
    background-image: url('aboutUs/sketch.svg');
    width: 950px;
    height: 1059px;
    top: -138px;
    right: 0;
  }
`;
export const FlexList = styled.ul`
  display: flex;
  justify-content: space-between;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    justify-content: flex-end;
  }
`;
export const Li = styled.li`
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    margin-right: 100px;
    &:last-child {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`;
export const Content = styled.p`
  color: #292929;
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  width: 230px;
  margin-bottom: 40px;
  text-indent: 62px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    text-indent: 45px;
    font-size: 18px;
    margin-left: 440px;
    width: 360px;
    margin-bottom: 50px;
  }
`;
export const BlurContent = styled.span`
  color: rgba(41, 41, 41, 0.5);
`;
export const MainBtn = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  color: #e50185;
  font-family: 'PhontPhreaksHandwriting';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 40px */
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: transparent;
  margin-top: 60px;
  margin-left: 120px;
  &::after {
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='230' height='21' fill='none'><path fill='%23292929' d='M226.865 10.89c.046-.913-1.651-.848-2.201-1.075-2.941-.518-5.902-.811-8.859-1.216-7.065-.757-14.14-1.303-21.224-1.806-28.942-1.969-57.891-4.05-86.858-4.267 25.66-.863 51.339-1.447 77.027-.828 9.283.304 18.582.663 27.859 1.248 5.449.228 11.144 1.04 16.487.785-.012 0-.011.015-.023.016-10.452-1.93-21.064-1.943-31.607-2.55-17.676-.756-35.369-.88-53.045-.573-34.37.574-68.718 2.015-102.987 4.416-1.849.16-3.697.32-5.537.604-.4.015-.546.725-.156.921.867.415 1.837.024 2.73-.082 42.515-4.095 85.327-3.506 127.983-.583 18.178 1.337 36.396 2.012 54.508 4.347-71.496.308-143.13 1.089-214.266 8.61-9.72 1.463-7.267 1.738 1.15.828 72.645-7.853 146.39-7.622 219.019-8.795Z'/></svg>");
    display: inline-block;
    width: 220px;
    height: 20px;
    margin-top: -12px;
  }
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    margin-top: 110px;
    margin-left: 0;
    margin-right: 320px;
    font-size: 64px;
    letter-spacing: 3.2px;
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='366' height='28' fill='none'><path fill='%23292929' d='M361.63 19.012c.101-1.451-2.602-1.398-3.471-1.774-4.665-.911-9.369-1.464-14.064-2.196-11.221-1.41-22.464-2.486-33.724-3.494-46-3.982-92.01-8.141-138.102-9.337 40.861-.62 81.743-.795 122.607.943 14.763.757 29.551 1.601 44.298 2.804 8.665.522 17.705 1.98 26.215 1.732-.02.001-.018.024-.038.025-16.576-3.376-33.464-3.709-50.225-4.983-28.108-1.722-56.262-2.44-84.4-2.469C176.012.167 121.309 1.449 66.703 4.262c-2.946.2-5.893.4-8.83.8-.637.01-.89 1.136-.274 1.46 1.368.684 2.923.09 4.346-.052C129.722 1.206 197.838 3.4 265.637 9.301c28.889 2.66 57.861 4.269 86.618 8.515-113.789-1.609-227.811-2.471-341.235 7.402C-4.492 27.26-.595 27.77 12.827 26.57c115.834-10.357 233.187-7.823 348.803-7.557Z'/></svg>");
      display: inline-block;
      width: 366px;
      height: 28px;
      margin-top: 0;
    }
  }
`;
export const TitleCenter = styled.p`
  color: #292929;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  text-transform: uppercase;
  text-align: start;
  margin-top: -18px;
  padding-left: 222px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    font-size: 18px;
    margin-top: -28px;
    padding-left: 224px;
  }
`;
export const Plus = styled.span`
  padding-left: 6px;
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    padding-left: 15px;
  }
`;
