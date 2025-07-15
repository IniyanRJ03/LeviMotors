import ContactHero from "@/components/contact/ContactHero"
import WhyContact from "@/components/contact/WhyContact"
import ContactForm from "@/components/contact/ContactForm"
import FindUs from "@/components/home/FindUs"
import Book from "@/components/home/Book"

export default function ContactPage() {
    return(
    <>
    <ContactHero/>    
        <WhyContact/>    
        <ContactForm/>
        <FindUs/>
        <Book/>
    </>
    )
}