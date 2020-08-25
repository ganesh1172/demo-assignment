import React from 'react';
import '../style/cleanAwakening.css';
import Box_I from '../images/box_1.png';
import Box_II from '../images/box_21.png';
import Box_II_I from '../images/box_22.png';
import Box_III from '../images/box_3.png';
import Box_IV from '../images/box_4.png';
import FadeInSection from '../util/FadeInSection';

function CleanAwakening() {
    return (
        <div className="clean_container">
            <FadeInSection>
                <div className="box box_I">
                    <div className="box_I_content">
                        <h1>What is clean awakening?</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </div>
                    <div className="box_I_image">
                        <img src={Box_I} alt="Box_I" className="box_I_img" />
                        <span className="box_I_backimg"></span>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="box box_II">
                    <div className="box_II_image">
                        <img src={Box_II} alt="Box_II" className="box_II_img" />
                        <img src={Box_II_I} alt="Box_II_I" className="box_II_backimg" />
                    </div>
                    <div className="box_II_content">
                        <h1 className="box_II_header">This is when you decide to <br /><span className="box_II_span_text">unlearn, undo, undress</span> <br />years of artifice and adopt a clean <br /> way of being, doing and seeing.</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="box box_III">
                    <div className="box_III_image">
                        <img src={Box_III} alt="Box_III" className="box_III_img" />
                    </div>
                    <div className="box_III_content">
                        <h1 className="box_III_header">Clean Awakening</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="box box_IV">
                    <div className="box_IV_image">
                        <img src={Box_IV} alt="Box_IV" className="box_IV_img" />
                    </div>
                    <div className="box_IV_content">
                        <h1 className="box_IV_header">It is your inner voice telling you <br /> to stop &#38; smell the roses</h1>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    </div>
                </div>
            </FadeInSection>
        </div>
    )
}

export default CleanAwakening;
