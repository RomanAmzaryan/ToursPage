
import "./HomePageFooterSocial.css"



const HomePageFooterSocial = () => {
    
      function MouseOver(event) {
        event.target.style.backgroundColor = '#FF7C5B';
        event.target.style.transition= 'all 1s';
      }
      function MouseOut(event){
        event.target.style.backgroundColor="";
      }
    
    return (
        <div className="footer-social">
            <div className="footer-logo">
                <img src="/png/footer-logo.png" alt="" />
            </div>
            <div className="footer-text">
                <p>Discover seamless travel experiences with our agency. Tailored itineraries, expert guidance, and unforgettable moments await. Your journey, our expertise.</p>
            </div>
            <div className="footer-icons">
                <img src="/png/icons8-facebook-50.png" alt="" onMouseOver={MouseOver} onMouseOut={MouseOut}/>
                <img src="/png/icons8-twitterx-50.png" alt="" onMouseOver={MouseOver} onMouseOut={MouseOut}/>
                <img src="/png/icons8-instagram-50.png" alt="" onMouseOver={MouseOver} onMouseOut={MouseOut} />
                <img src="/png/icons8-linkedin-50.png" alt="" onMouseOver={MouseOver} onMouseOut={MouseOut} />
                <img src="/png/icons8-youtube-50.png" alt="" onMouseOver={MouseOver} onMouseOut={MouseOut}/>
            </div>
        </div>
    )
}

export default HomePageFooterSocial;