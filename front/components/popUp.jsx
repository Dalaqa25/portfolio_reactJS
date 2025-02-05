import { useState } from "react";
import attentionSVG from "../assets/attention.svg";

export  default function  PopUp() {
    const [show, setShow] = useState(true);


    return (
        show && (
            <div style={styles.overlay}>
                <div style={styles.messageBox}>
                    <img style={styles.img} src={attentionSVG}/>
                    <p style={styles.attention}>Attention!</p>
                    <p style={styles.p}>This webSite is in development</p>
                    <button onClick={() => setShow(false)} style={styles.closeButton}>
                        Close
                    </button>
                </div>
            </div>
        )
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    messageBox: {
        background: "#fff",
        padding: "50px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "15px",
    },
    closeButton: {
        marginTop: "10px",
        padding: "5px 10px",
        border: "none",
        backgroundColor: "#ff5c5c",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
    },

    img: {
        width: "100px",
    },

    p: {
      fontWeight: "bold",
    },

    attention: {
        color: "#e0e0e0",
        fontSize: "14px",
    }
};