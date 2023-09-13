const ProductInfo = ( ) => {
    return(
        <div className=" prod-info my-5 mx-4  md:mx-10 ">
           <div className=" md:flex md:flex-col md:justify-center md:gap-6 md:mt-4">
           <p className="  tracking-[.90em] text-base text-dark-blue uppercase md:text-lg" >Perfume</p>
            <h2 className="special-t text-4xl my-4 md:text-6xl" >Gabrielle Essence Eau De Parfum</h2>
            <p className=" text-grayish-blue text-xl mb-4 md:text-2xl md:p-2 md:mb-0" >A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className=" flex flex-row mb-4 ">
              <p className=" text-4xl text-light-green special-t md:text-5xl">$149.99</p>
              <div className=" old-price relative flex items-center ml-4 md:ml-8" >
              <p className="text-grayish-blue text-lg "><span className="strike-line"/>$169.99</p>
              </div>
            </div>
            <button className=" bg-light-green text-white p-4 rounded-xl w-full flex items-center justify-center gap-4 font-bold text-lg hover:bg-[#275443]">
               <div className={"icon-cart"}></div>Add to cart
              </button>
           </div>
        </div>
    )
}
export default ProductInfo