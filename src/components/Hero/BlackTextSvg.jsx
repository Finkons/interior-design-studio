import React from 'react';
import { TextBlack } from './Hero.styled';
import { motion } from 'framer-motion';

const pathVariants = {
  start: {
    pathLength: 0,
  },
  finish: i => {
    const delay = 1 + i * 0.9;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 7, bounce: 0 },
        opacity: { delay, duration: 0.2 },
      },
    };
  },
};

const BlackTextSvg = () => {
  return (
    <>
      <TextBlack width="940" height="188" viewBox="0 0 940 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="black-mask">
            <motion.path
              d="M69.15 6.49999L72.3 12.95V15.8C72.3 35.5 68.1 54.35 59.7 72.35V74.45H65.55L67.35 79.55C51.05 82.65 43.35 94.65 44.25 115.55L41.7 133.55L36.75 131.45L36 124.55L47.55 89.6L46.8 85.25L18.75 92.45L7.2 118.1L2.55 119.9L0 116.6L12.3 86L42.9 22.25L50.7 12.2L63.75 4.99999L69.15 6.49999ZM44.25 36.05L23.1 81.05L24.45 82.85L51.9 76.25C59.6 59.85 64.4 42.85 66.3 25.25L65.55 14.75L62.25 12.95L44.25 36.05ZM137.763 14.6L147.963 30.8C148.363 32.7 148.563 34.7 148.563 36.8C148.563 49.6 142.813 59.95 131.313 67.85L119.163 74.3L140.313 120.35L138.513 126.5L132.063 123.2L108.963 72.5C95.7633 85.2 87.0133 99.95 82.7133 116.75L80.1633 119.3L76.2633 117.8L77.7633 111.8C95.5633 87.7 110.063 61.5 121.263 33.2L119.163 24.95L123.813 15.95L128.163 12.8L137.763 14.6ZM125.613 23.6L130.263 26V31.4L112.263 64.25L114.063 67.85C125.463 66.35 133.963 59.75 139.563 48.05L141.813 38.3L138.513 26.75L129.513 20L125.613 23.6ZM241.812 17L245.712 20.3L241.362 29.3L236.712 27.8L235.962 23.45C220.562 23.75 206.312 28.45 193.212 37.55L185.262 63.05L217.662 58.85L220.212 61.25V67.1L201.462 66.35L181.962 72.05L170.562 95.15L175.212 101.3C190.512 96.2 206.112 93.8 222.012 94.1L223.362 98.45C206.362 105.35 188.762 108.8 170.562 108.8L166.962 106.25L155.712 127.55L151.362 125.45L181.662 54.05V50.45L178.362 51.2L175.962 46.55L177.762 39.35C193.962 27.65 212.312 20.2 232.812 17H241.812ZM181.962 61.25H183.462L181.962 60.2V61.25ZM358.918 14.3V18.5C345.418 39.8 335.368 61.95 328.768 84.95C322.168 107.95 318.868 132.05 318.868 157.25C318.868 158.75 318.868 160.2 318.868 161.6C318.868 163.1 318.918 164.6 319.018 166.1L313.618 178.4L298.468 187.4C269.868 185.8 244.918 175.1 223.618 155.3L225.118 151.4H230.068C249.368 169.9 271.818 179.75 297.418 180.95L306.418 175.85L313.918 158.6V153.05C313.918 108.55 324.268 66.35 344.968 26.45L316.468 30.8L302.518 25.1L297.418 17.45L302.518 15.35C309.218 21.75 316.568 24.95 324.568 24.95C330.668 24.95 337.218 23.05 344.218 19.25L353.218 12.8L358.918 14.3ZM399.557 39.5L401.357 43.1C383.857 61.2 373.907 83.25 371.507 109.25L375.107 113.3C394.407 109.8 409.657 99.45 420.857 82.25L429.107 63.5L435.557 57.8L439.907 59.9L436.007 71.45C425.207 82.25 419.657 95.1 419.357 110L424.457 115.7L423.407 120.05H418.307L413.657 115.7L412.607 102.05L393.107 115.1L377.657 120.05L370.007 118.25L364.307 110.75C367.107 83.35 377.557 59.35 395.657 38.75L399.557 39.5ZM507.543 28.4L510.693 31.55V35.9L498.093 32.6L487.743 39.2L486.693 43.85L506.493 64.4L514.743 84.2V87.35C514.743 98.05 510.293 106.8 501.393 113.6L489.093 117.95L472.893 116.9L461.493 111.2L453.093 111.5L447.393 102.5L448.893 97.4H453.093C461.793 106.6 471.193 111.2 481.293 111.2C486.493 111.2 492.093 109.85 498.093 107.15C504.593 100.85 507.843 94.1 507.843 86.9C507.843 82.5 506.543 77.85 503.943 72.95L477.993 44.15L480.843 35.9L496.743 26.6L507.543 28.4ZM624.575 28.25L629.225 32.3L627.725 37.25C621.325 35.95 614.725 35.3 607.925 35.3C597.725 35.3 587.675 36.8 577.775 39.8C564.175 64.1 553.725 89.4 546.425 115.7L542.375 119L538.175 116.9C540.275 99.1 547.325 82.9 559.325 68.3L566.975 43.1L533.375 49.55L520.775 54.5L514.325 62.45L507.875 59.3V56C526.875 41.7 548.975 34 574.175 32.9L611.225 28.25H624.575ZM760.864 28.25L765.514 32.3L764.014 37.25C757.614 35.95 751.014 35.3 744.214 35.3C734.014 35.3 723.964 36.8 714.064 39.8C700.464 64.1 690.014 89.4 682.714 115.7L678.664 119L674.464 116.9C676.564 99.1 683.614 82.9 695.614 68.3L703.264 43.1L669.664 49.55L657.064 54.5L650.614 62.45L644.164 59.3V56C663.164 41.7 685.264 34 710.464 32.9L747.514 28.25H760.864ZM805.383 3.8L803.883 13.1L782.733 54.5L783.483 59.3C787.883 62.4 792.533 63.95 797.433 63.95C803.733 63.95 809.983 61.3 816.183 56C828.783 46.3 837.533 33.8 842.433 18.5H848.883C846.683 26 843.783 33 840.183 39.5C836.583 46 832.183 52.1 826.983 57.8C819.683 71.2 814.183 84.9 810.483 98.9L812.883 106.1L811.533 110.3L805.383 108.5L803.883 97.7L815.433 65L796.383 71.45L777.633 65.75L748.083 119L742.383 116.15L743.133 111.8L751.383 101.3L771.183 64.25V53.45L780.933 46.25C789.633 31.95 795.983 16.85 799.983 0.949991L805.383 3.8ZM935.239 17L939.139 20.3L934.789 29.3L930.139 27.8L929.389 23.45C913.989 23.75 899.739 28.45 886.639 37.55L878.689 63.05L911.089 58.85L913.639 61.25V67.1L894.889 66.35L875.389 72.05L863.989 95.15L868.639 101.3C883.939 96.2 899.539 93.8 915.439 94.1L916.789 98.45C899.789 105.35 882.189 108.8 863.989 108.8L860.389 106.25L849.139 127.55L844.789 125.45L875.089 54.05V50.45L871.789 51.2L869.389 46.55L871.189 39.35C887.389 27.65 905.739 20.2 926.239 17H935.239ZM875.389 61.25H876.889L875.389 60.2V61.25Z"
              stroke="white"
              strokeWidth="10"
              fill="none"
              variants={pathVariants}
              initial="start"
              animate="finish"
              custom={1}
            />
          </mask>
        </defs>
        <motion.path
          d="M69.15 6.49999L72.3 12.95V15.8C72.3 35.5 68.1 54.35 59.7 72.35V74.45H65.55L67.35 79.55C51.05 82.65 43.35 94.65 44.25 115.55L41.7 133.55L36.75 131.45L36 124.55L47.55 89.6L46.8 85.25L18.75 92.45L7.2 118.1L2.55 119.9L0 116.6L12.3 86L42.9 22.25L50.7 12.2L63.75 4.99999L69.15 6.49999ZM44.25 36.05L23.1 81.05L24.45 82.85L51.9 76.25C59.6 59.85 64.4 42.85 66.3 25.25L65.55 14.75L62.25 12.95L44.25 36.05ZM137.763 14.6L147.963 30.8C148.363 32.7 148.563 34.7 148.563 36.8C148.563 49.6 142.813 59.95 131.313 67.85L119.163 74.3L140.313 120.35L138.513 126.5L132.063 123.2L108.963 72.5C95.7633 85.2 87.0133 99.95 82.7133 116.75L80.1633 119.3L76.2633 117.8L77.7633 111.8C95.5633 87.7 110.063 61.5 121.263 33.2L119.163 24.95L123.813 15.95L128.163 12.8L137.763 14.6ZM125.613 23.6L130.263 26V31.4L112.263 64.25L114.063 67.85C125.463 66.35 133.963 59.75 139.563 48.05L141.813 38.3L138.513 26.75L129.513 20L125.613 23.6ZM241.812 17L245.712 20.3L241.362 29.3L236.712 27.8L235.962 23.45C220.562 23.75 206.312 28.45 193.212 37.55L185.262 63.05L217.662 58.85L220.212 61.25V67.1L201.462 66.35L181.962 72.05L170.562 95.15L175.212 101.3C190.512 96.2 206.112 93.8 222.012 94.1L223.362 98.45C206.362 105.35 188.762 108.8 170.562 108.8L166.962 106.25L155.712 127.55L151.362 125.45L181.662 54.05V50.45L178.362 51.2L175.962 46.55L177.762 39.35C193.962 27.65 212.312 20.2 232.812 17H241.812ZM181.962 61.25H183.462L181.962 60.2V61.25ZM358.918 14.3V18.5C345.418 39.8 335.368 61.95 328.768 84.95C322.168 107.95 318.868 132.05 318.868 157.25C318.868 158.75 318.868 160.2 318.868 161.6C318.868 163.1 318.918 164.6 319.018 166.1L313.618 178.4L298.468 187.4C269.868 185.8 244.918 175.1 223.618 155.3L225.118 151.4H230.068C249.368 169.9 271.818 179.75 297.418 180.95L306.418 175.85L313.918 158.6V153.05C313.918 108.55 324.268 66.35 344.968 26.45L316.468 30.8L302.518 25.1L297.418 17.45L302.518 15.35C309.218 21.75 316.568 24.95 324.568 24.95C330.668 24.95 337.218 23.05 344.218 19.25L353.218 12.8L358.918 14.3ZM399.557 39.5L401.357 43.1C383.857 61.2 373.907 83.25 371.507 109.25L375.107 113.3C394.407 109.8 409.657 99.45 420.857 82.25L429.107 63.5L435.557 57.8L439.907 59.9L436.007 71.45C425.207 82.25 419.657 95.1 419.357 110L424.457 115.7L423.407 120.05H418.307L413.657 115.7L412.607 102.05L393.107 115.1L377.657 120.05L370.007 118.25L364.307 110.75C367.107 83.35 377.557 59.35 395.657 38.75L399.557 39.5ZM507.543 28.4L510.693 31.55V35.9L498.093 32.6L487.743 39.2L486.693 43.85L506.493 64.4L514.743 84.2V87.35C514.743 98.05 510.293 106.8 501.393 113.6L489.093 117.95L472.893 116.9L461.493 111.2L453.093 111.5L447.393 102.5L448.893 97.4H453.093C461.793 106.6 471.193 111.2 481.293 111.2C486.493 111.2 492.093 109.85 498.093 107.15C504.593 100.85 507.843 94.1 507.843 86.9C507.843 82.5 506.543 77.85 503.943 72.95L477.993 44.15L480.843 35.9L496.743 26.6L507.543 28.4ZM624.575 28.25L629.225 32.3L627.725 37.25C621.325 35.95 614.725 35.3 607.925 35.3C597.725 35.3 587.675 36.8 577.775 39.8C564.175 64.1 553.725 89.4 546.425 115.7L542.375 119L538.175 116.9C540.275 99.1 547.325 82.9 559.325 68.3L566.975 43.1L533.375 49.55L520.775 54.5L514.325 62.45L507.875 59.3V56C526.875 41.7 548.975 34 574.175 32.9L611.225 28.25H624.575ZM760.864 28.25L765.514 32.3L764.014 37.25C757.614 35.95 751.014 35.3 744.214 35.3C734.014 35.3 723.964 36.8 714.064 39.8C700.464 64.1 690.014 89.4 682.714 115.7L678.664 119L674.464 116.9C676.564 99.1 683.614 82.9 695.614 68.3L703.264 43.1L669.664 49.55L657.064 54.5L650.614 62.45L644.164 59.3V56C663.164 41.7 685.264 34 710.464 32.9L747.514 28.25H760.864ZM805.383 3.8L803.883 13.1L782.733 54.5L783.483 59.3C787.883 62.4 792.533 63.95 797.433 63.95C803.733 63.95 809.983 61.3 816.183 56C828.783 46.3 837.533 33.8 842.433 18.5H848.883C846.683 26 843.783 33 840.183 39.5C836.583 46 832.183 52.1 826.983 57.8C819.683 71.2 814.183 84.9 810.483 98.9L812.883 106.1L811.533 110.3L805.383 108.5L803.883 97.7L815.433 65L796.383 71.45L777.633 65.75L748.083 119L742.383 116.15L743.133 111.8L751.383 101.3L771.183 64.25V53.45L780.933 46.25C789.633 31.95 795.983 16.85 799.983 0.949991L805.383 3.8ZM935.239 17L939.139 20.3L934.789 29.3L930.139 27.8L929.389 23.45C913.989 23.75 899.739 28.45 886.639 37.55L878.689 63.05L911.089 58.85L913.639 61.25V67.1L894.889 66.35L875.389 72.05L863.989 95.15L868.639 101.3C883.939 96.2 899.539 93.8 915.439 94.1L916.789 98.45C899.789 105.35 882.189 108.8 863.989 108.8L860.389 106.25L849.139 127.55L844.789 125.45L875.089 54.05V50.45L871.789 51.2L869.389 46.55L871.189 39.35C887.389 27.65 905.739 20.2 926.239 17H935.239ZM875.389 61.25H876.889L875.389 60.2V61.25Z"
          fill="#292929"
          mask="url(#black-mask)"
        />
      </TextBlack>
    </>
  );
};

export default BlackTextSvg;
