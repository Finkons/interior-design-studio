export const setSizeImage = props => {
  switch (props.size) {
    case '1':
      return '25%';
    case '2':
      return '50%';
    case '3':
      return '75%';
    default:
      return '100%';
  }
};
export const setPositionTop = props => {
  switch (props.top) {
    case '1':
      return '25';
    case '2':
      return '12.5';
    default:
      return '0';
  }
};

export const setPositionLeft = props => {
  switch (props.left) {
    case '1':
      return '25';
    case '2':
      return '50';
    default:
      return '0';
  }
};
export const setPadding = props => {
  switch (props.padding) {
    case '1':
      return '50';
    default:
      return '100';
  }
};
export const setPaddingBottom = props => {
  switch (props.paddingBottom) {
    case '1':
      return '50';
    default:
      return '0';
  }
};
