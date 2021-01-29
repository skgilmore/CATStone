import React from "react"


export const CatCard = ({ cat }) => (
    <section className="cat">
        <h3 className="cat__name">{cat.name}</h3>
        <address className="location__address">{cat.zip}</address>
    </section>
)