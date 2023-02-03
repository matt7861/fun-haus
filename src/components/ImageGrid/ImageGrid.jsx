import gridPhoto from "../../assets/gridPhoto.jpg";
import GridItem from "./GridItem";

const ImageGrid = () => {
  return (
    <section className="image_grid padding-sides">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <GridItem
            text="Lorem ipsum dolor sit amet, consectetur adipisc."
            hoverText="Hover Over Effect"
            image={gridPhoto}
          />
          <GridItem
            text="Lorem ipsum dolor sit amet, consectetur adipisc."
            hoverText="Hover Over Effect"
            image={gridPhoto}
          />
          <GridItem
            text="Lorem ipsum dolor sit amet, consectetur adipisc."
            hoverText="Hover Over Effect"
            image={gridPhoto}
          />
          <GridItem
            text="Lorem ipsum dolor sit amet, consectetur adipisc."
            hoverText="Hover Over Effect"
            image={gridPhoto}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
