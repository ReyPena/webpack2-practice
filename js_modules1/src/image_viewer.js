import small  from '../assets/small.jpg';

export default () => {
  const smallImage = document.createElement('img');
  smallImage.src = small;

  document.body.appendChild(smallImage);
}
