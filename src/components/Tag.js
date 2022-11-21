
import FicheLocation from "pages/FicheLocation/FicheLocation";
import "styles/index.scss";
import React from "react";


const Tag = ({ tags }) => {  
    return (
        <>
        <div className="tags">
            {tags.map((ref, i) => (
                <span key={`${ref}${i}`}>{ref}</span>
            ))}
     </div>
       </>
    );
};

export default Tag;