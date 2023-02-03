const TextBlocks = () => {
  return (
    // <section className="text_blocks padding-sides">
    //   <div className="container mx-auto">
    //     <div className="flex flex-wrap row">
    //       <div className="w-full lg:w-4/12 col-padding">test</div>
    //       <div className="w-full lg:w-8/12 col-padding">asdkl;jaslkdja</div>
    //     </div>
    //   </div>
    // </section>
    <section className="text_blocks padding-sides">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="box col-span-12 lg:col-span-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisc.</p>
          </div>
          <div className="box-two col-span-12 lg:col-span-8">
            <p className="large-text">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
              ultrices, augue quis ege stas pretium, diam tellus consectetur
              ligula, nec aliquet mauris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBlocks;
