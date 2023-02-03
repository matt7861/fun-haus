const TextBlocks = () => {
  return (
    <section className="text_blocks padding-sides">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 text_blocks__left-col relative">
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur adipisc.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="large-text">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
              ultrices, augue quis ege stas pretium, diam tellus consectetur
              ligula, nec aliquet mauris.
            </p>
          </div>
          <div className="text_blocks__bottom-col col-span-12 lg:col-start-7 lg:col-span-6">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices, augue quis egestas pretium, diam tellus consectetur
              ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
              massa. Sed venenatis quam non felis rhoncus tempor.
            </p>
            <p>
              Nullacondimentum ac urna quis tempus. In vel justo in urna
              ullamcorper blandit. Curabitur vitae iaculis eros, ac dictum
              sapien. Nulla sit amet lectus sit amet nunc consequat molestie eu
              vel orci. Donec vitae fringilla eros, egestas cursus dolor.
              Suspendisse potenti. Etiam pretium arcu vitae placerat commodo.
              Pellentesque non leo vitae nunc dictum interdum id ac sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBlocks;
