import * as React from 'react';
import Button from '@mui/material/Button';
import Footer from './footer';

const PreFooter = () => {
    const marqueeRef = React.useRef(null);

    const handleMarqueeHover = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop();
        }
    };

    const handleMarqueeLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start();
        }
    };

    return (
        <div
            className="pre-footer"
            style={{
                backgroundColor: "#F26849",
                borderTop: "2px solid black",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // padding: "10px",
            }}
        >
            <marquee
                ref={marqueeRef}
                className="marquee"
                behavior="scroll"
                direction="left"
                scrollamount="5"
                onMouseEnter={handleMarqueeHover}
                onMouseLeave={handleMarqueeLeave}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <button
                        style={{
                            backgroundColor: "black",
                            borderRadius: "20px",
                            color: "white",
                            marginRight: "20px",
                            p: 2,
                            letterSpacing:"1px"
                        }}
                    >
                        No Extra Cost
                    </button>
                    <p
                        style={{
                            marginRight: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            marginTop: "20px",
                            letterSpacing:"1px"
                        }}
                    >
                        LIKE NEVER BEFORE
                    </p>

                    <button
                        style={{
                            backgroundColor: "black",
                            borderRadius: "20px",
                            color: "white",
                            marginRight: "20px",
                            p: 2,
                            letterSpacing:"1px"
                        }}
                    >
                        Exclusive offers & deals
                    </button>

                    <p
                        style={{
                            marginRight: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            marginTop: "20px",
                            letterSpacing:"1px"
                        }}
                    >
                        Feature Packed
                    </p>

                    <button
                         style={{
                            backgroundColor: "black",
                            borderRadius: "20px",
                            color: "white",
                            marginRight: "20px",
                            p: 2,
                            letterSpacing:"1px"
                        }}
                    >
                        Easy Booking
                    </button>
                    
                    
                    <p
                        style={{
                            marginRight: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            marginTop: "20px",
                            letterSpacing:"1px"
                        }}
                    >
                        Enhanced Features
                    </p>
                    
                    <button
                        style={{
                            backgroundColor: "black",
                            borderRadius: "20px",
                            color: "white",
                            marginRight: "20px",
                            p: 2,
                            letterSpacing:"1px"
                        }}
                    >
                        More Options
                    </button>
                    
                </div>
            </marquee>

            <Footer/>
        </div>
    );
};

export default PreFooter;
