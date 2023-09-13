import ProductInfo from "./components/ProductInfo"
import ImageSwitcher from "./components/ImageSwitcher"

export default function Home() {
  return (
    
    <div className=" mainContainer mx-4 my-10 rounded-xl bg-white w-full h-full  justify-start flex flex-col md:rounded-2xl md:grid md:grid-cols-2 md:mx-5 md:w-[800px] md:h-[600px]">
    <ImageSwitcher />
    <ProductInfo />
    
  </div>
  )
}
