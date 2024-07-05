// type: 1-720x240, 2 - 240x240, 3 - 480x240, 4 - 480x480, default - 960x960
export const setWidthImage=(props) =>{
  switch (props.size) {
    case '1':
      return '720px';
    case '2':
      return '240px';
    case '3':
      return '480px';
    case '4':
      return '480px';
    default:
      return '960px';
  }
}
export const setHeightImage=(props) =>{
  switch (props.size) {
    case '1':
      return '240px';
    case '2':
      return '240px';
    case '3':
      return '240px';
    case '4':
      return '480px';
    default:
      return '960px';
  }
}