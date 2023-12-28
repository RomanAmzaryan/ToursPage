import "./HomePageFooter.css"
import HomePageFooterCategories from "./HomePageFooterCategories/HomePageFooterCategories";
import HomePageFooterContacts from "./HomePageFooterContacts/HomePageFooterContacts";
import HomePageFooterGallery from "./HomePageFooterGallery/HomePageFooterGallery";
import HomePageFooterSocial from "./HomePageFooterSocial/HomePageFooterSocial";


const HomePageFooter = () => {
    return (
        <div className="footer">
           <HomePageFooterSocial/>
           <HomePageFooterCategories/>
            <HomePageFooterGallery/>
            <HomePageFooterContacts/>
        </div>
    )
}


export default HomePageFooter;