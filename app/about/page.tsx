import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import Promise from '@/components/about/Promise';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Reviews from '@/components/home/Reviews';
import Book from '@/components/home/Book';

export default function AboutPage() {
  return(
    <>
      <AboutHero />
      <OurStory/>
      <Promise/>
      <WhyChooseUs/>
      <Reviews/>
      <Book/>
    </>
  )
}
