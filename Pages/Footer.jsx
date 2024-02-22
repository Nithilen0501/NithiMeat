import React from 'react'
import footer from "../Pages/footer.module.css"
const Footer = () => {
  return (
    <>
    <div className={footer.logo}>
        <img src="1.jpg" alt="err"/>
        <img src="2.jpg" alt="err"/>
    </div>
        {/* footre left div */}
     <div className={footer.leftDiv}>
        <div  >
            <h4>USEFUL LINKS</h4>
             <spen><a href="https://www.licious.in/about-us">Why NithiMeats?</a></spen>
             <spen><a href="https://www.licious.in/refer-earn-tnc">Refer & Earn</a></spen>
             <spen><a href="https://www.licious.in/licious-cash">NithiMeatsCash & Cash+</a></spen>
             <spen><a href="https://www.linkedin.Components/jobs/search?f_C=9471845&location=India&originalSubdomain=in">Careers</a></spen>
             <spen><a href="https://www.licious.in/blog/">BLOG</a></spen>
             <spen><a href="https://www.licious.in/campaign">Campaign</a></spen>
             <spen><a href="https://www.licious.in/bug-bounty-guidelines">Bug Bounty Guidelines</a></spen>
             <spen><a href="https://www.licious.in/about-us-new">About Us</a></spen>
             <spen><a href="https://www.licious.in/certification">FSSC 22000 Certification</a></spen>
             <spen><a href="https://www.licious.in/fssai-licenses">FSSAI Licenses</a></spen>
             <spen><a href="https://www.licious.in/sitemap">Sitemap</a></spen>
        </div>
        <div className={footer.storeDiv}>
            <h4>EXPERIENCE NITHIMEATS APP ON MOBILE</h4>
            <div>
           <a href="https://apps.apple.Components/in/app/buy-meat-online-licious/id1052440342"><img src="https://www.licious.in/img/rebranding/app-store-new.svg" alt="" /></a> 
           <a href="https://play.google.Components/store/apps/details?id=Components.licious"> <img src="https://www.licious.in/img/rebranding/play-store-new.png" alt="" /></a>
           </div>
        </div>
     </div>
     {/* footer right div */}
     <div className={footer.rightDiv}>
        <div>
            <spen>CONTACT US</spen>
            <spen>Call: 1800-4190-786</spen>
            <spen>  <a href="Talktous@licious.Components">Talktous@NithiMeats</a></spen>
            <spen>REGISTERED OFFICE ADDRESS:</spen>
            <spen>House of NithiMeats, Zed Pearl, No 12,</spen>
            <spen>Domlur Layout</spen>
            <spen>Coimbatore, Tamilnadu - 641032</spen>
        </div>
        <div>
            <span><a href="https://www.licious.in/terms">T&C</a></span>/n
            <span><a href="https://www.licious.in/faq">FAQ</a></span>
            <span><a href="https://www.licious.in/privacy-policy">Privacy Policy</a></span>
             <span>HAVE SECURITY CONCERN?</span>
            <span>Mail us to:</span>
            <span>security@nithimeats05</span>
        </div>
        <div>
            <img src="https://www.licious.in/img/rebranding/3-dsecure.png" alt="" />
        </div>
     </div>
 {/* insta section */}
    </>
  )
}
export default Footer
