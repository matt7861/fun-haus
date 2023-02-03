const GridItem = ({ image, text, hoverText }) => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div
        className="image_grid__img relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2>{hoverText}</h2>
      </div>
      <p className="image_grid__text relative">{text}</p>
    </div>
  );
};

export default GridItem;
