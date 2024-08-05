import { StyledRec } from './Services.styled';

const Rec = () => {
  return (
    <StyledRec>
      <svg width="none" height="none" viewBox="0 0 570 680" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5417_119)">
          <g filter="url(#filter0_f_5417_119)">
            <path d="M550 30H30V660H550V30Z" fill="transporent" />
          </g>
        </g>
        <defs>
          <filter id="filter0_f_5417_119" x="0" y="0" width="580" height="690" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_5417_119" />
          </filter>
          <clipPath id="clip0_5417_119">
            <rect width="580" height="690" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </StyledRec>
  );
};

export default Rec;
