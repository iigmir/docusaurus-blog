import React from "react";
import Feature from "./Feature.js";

function FeatureSection( features = [], styles = {} )
{
    if(features && features.length > 0)
    {
        return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                {features.map((props, idx) => (
                    <Feature key={idx} {...props} styles={ styles } />
                ))}
                </div>
            </div>
        </section>);
    }
    return (<div></div>);
}

export default FeatureSection;
