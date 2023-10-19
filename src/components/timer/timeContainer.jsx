const ItemTimeContainer = ({ itemTime }) => {

  if(isNaN(itemTime)) 
    throw new Error('itemTime must be a number');

  return (
    <span>{itemTime < 10 ? `0${itemTime}` : itemTime}</span>
  );
  }

  export default ItemTimeContainer;