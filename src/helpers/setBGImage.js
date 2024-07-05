export const setBGImage = (props) => {
  switch (props.type) {
    case '1':
      return 'url(portfolio/badroom_ds.jpg)';
    case '2':
      return 'url(portfolio/badroom_ds_s.jpg)';
    case '3':
      return 'url(portfolio/badroom_ds_m.jpg)';
    case '4':
      return 'url(portfolio/childrens_ds.jpg)';
    case '5':
        return 'url(portfolio/childrens_ds_s.jpg)';
    case '6':
        return 'url(portfolio/childrens_ds_m.jpg)';
    case '7':
        return 'url(portfolio/kitchen_ds.jpg)';
    case '8':
        return 'url(portfolio/kitchen_ds_s.jpg)';
    default:
      return 'url(portfolio/kitchen_ds_m.jpg)';
  }
}