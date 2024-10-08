import { BsAndroid2, BsApple} from "react-icons/bs";
import ExpandableContainer from "./ExpandableContainer";
import SocialIcons from "../ui/SocialIcons/SocialIcons";
import OtherCategoriesFooter from "./OtherCategoriesFooter";
import CopyrightFooter from "./CopyrightFooter";
import { footerLinks } from "./FooterLinks";


function Footer() {
  return (
    <footer
      id="footer"
      className="pb-1 flex flex-col items-center justify-center border-t-[2px] pt-12 h-full w-full"
    >
      <OtherCategoriesFooter />
      <ExpandableContainer />
      <section className="m-14 hidden w-full flex-row items-start justify-evenly lg:flex">
        {footerLinks.map((el) => (
          <article className="ml-5 w-[200px] p-5 text-sm" key={el?.title}>
            <h3 className="pb-5">{el?.title}</h3>
            <a
              href="#footer"
              className=" block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline 
            hover:underline-offset-1"
            >
              {el?.line1}
            </a>
            <a
              href="#footer"
              className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1 "
            >
              {el?.line2}
            </a>
            <a
              href={el?.url}
              target="_blank"
              className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
            >
              {el?.line3}
            </a>
            <a
              href="#footer"
              className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
            >
              {el?.line4}
            </a>
          </article>
        ))}
      </section>
      <section className="flex w-dvw flex-wrap justify-evenly border-b-[2px] border-t-[2px] p-8 sm:h-[67px] sm:flex-nowrap sm:p-0">
        <article className="container mx-auto flex h-full items-center justify-center">
          <SocialIcons />
        </article>
        <article className="container mx-auto hidden h-full items-center justify-center border-l-[2px] lg:flex">
          <BsApple size={24} className="mr-1" />
          <p className=" font-medium">app iOS</p>
        </article>
        <article className="container mx-auto hidden h-full items-center justify-center border-x-[2px] lg:flex">
          <BsAndroid2 size={24} className="mr-1 hover:fill-green-600" />
          <p className=" font-medium">app Android</p>
        </article>
        <article className="container mx-auto flex h-full items-center justify-center pt-10 sm:border-l-[2px] sm:pt-0 lg:border-l-0">
          <p className="font-sans italic">
            <span className=" font-[Oswald]">Online_shop</span> | English
          </p>
        </article>
      </section>
      <CopyrightFooter />
    </footer>
  );
}

export default Footer;
