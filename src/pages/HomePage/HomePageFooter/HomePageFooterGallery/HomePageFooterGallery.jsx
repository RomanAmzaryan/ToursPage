import "./HomePageFooterGallery.css"


const HomePageFooterGallery = () => {
   
 
    return(
        <div className="footer-gallery">
            <div className="footer-gallery-header">
                <h1>Gallery</h1>
            </div>
            <div className="footer-gallery-first">
                <img src="/jpg/footer-gallery-1.jpg" alt="" />
                <img src="/jpg/footer-gallery-2.jpg" alt="" />
                <img src="/jpg/footer-gallery-3.jpg" alt="" />
            </div>
            <div className="footer-gallery-second">
                <img src="/jpg/footer-gallery-4.jpg" alt="" />
                <img src="/jpg/footer-gallery-5.jpg" alt="" />
                <img src="/jpg/footer-gallery-6.jpg" alt="" />
            </div>
        </div>
    )
}

export default HomePageFooterGallery;