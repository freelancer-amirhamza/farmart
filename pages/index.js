import FeatureBrands from "@/app/components/Home/FeatureBrands";
import HomeCategory from "@/app/components/Home/HomeCategory";
import HomeHero from "@/app/components/Home/HomeHero";
import HomePosters from "@/app/components/Home/HomePosters";
import TodaysDeles from "@/app/components/Home/TodaysDeles";
import Product from "@/app/components/Products";



export default function Home() {
  return (
    <>
     <HomeHero/>
     <HomeCategory />
     <FeatureBrands/>
     <TodaysDeles/>
     <HomePosters/>
     <Product/>
    </>
  )
}
