import BigLogo from "../img/biglogo.svg";
import x from "../img/x.svg";
import tg from "../img/tg.svg";
import girl from "../img/girl.png";

const Intro = () => {
    
    return (
        <>
            <a id="intro" className="anchor" href=""></a>
        <div className="intro">
            <div className="banner">
                <img src={BigLogo} className="banner__logo" />
                <div className="banner__text">
                    Split Casino is a gambling platform that operates on a revenue-share model, creating an ecosystem in which holders become partial owners of the casino and benefit from the generated revenue. The casino is powered by <span className='banner__text_span'>$SPLIT</span>.
                </div>
                <div className="links">
                    <a target="_blank" href="https://twitter.com/" style={{marginRight: "8px"}}>
                        <img src={x} alt="x"/>
                    </a>
                    <a target="_blank" href="https://t.me/">
                        <img src={tg} alt="tg"/>
                    </a>
                </div>
            </div>
            <div className="girl">
                <img  src={girl} className="girl__pic" />
                <div className="girl__trybuy">
                    <div className="girl__predict">
                        — Predict the winning range of numbers, earn <span className='girl__predict_span'>$SPLIT</span> and enjoy instant withdrawals.
                    </div>
                    <div className="girl__metamask">
                        — With <span className='girl__metamask_span'>Metamask</span> integration, our platform ensures seamless and secure gameplay.
                    </div>
                    <a href='#' className="girl__try">
                        try testnet
                    </a>
                    <a href='#' className="girl__buy">
                        buy tokens
                    </a>
                </div>
            </div>
        </div>
        </>
    );
  };
  
export default Intro;