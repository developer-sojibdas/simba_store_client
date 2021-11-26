import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <>
           <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a>Web design</a></li>
                            <li><a>Development</a></li>
                            <li><a>Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a >Company</a></li>
                            <li><a >Team</a></li>
                            <li><a >Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Simba Store</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social">
                        <a ><img src="https://i.ibb.co/8bpzYdq/facebook.png" alt="" /></a>
                        <a ><img src="https://i.ibb.co/FmKG5tk/twitter.png" alt="" /></a>
                        <a ><img src="https://i.ibb.co/RcXVVMH/instragram.png" alt="" /></a>
                        <a ><img src="https://i.ibb.co/KNyPdTw/link.png" alt="" /></a>
                        
                        </div>
                </div>
                <p className="copyright">Simba Store © 2021</p>
            </div>
        </footer>
    </div>
        </>
    );
};

export default Footer;