const ItemTimeContainer = ({ itemTime }) => (
    <span>{itemTime < 10 ? `0${itemTime}` : itemTime}</span>
  );

  export default ItemTimeContainer;