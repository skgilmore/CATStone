import React from "react"
import { Link } from "react-router-dom"


export const CatCard = ({ cat }) => (
    <section className="cat">
        <h3 className="cat__name">{cat.name}</h3>
        <Link to={`/cats/detail/${cat.id}`}>
            { cat.name }
          </Link>
        <address className="location__address">{cat.zip}</address>
    </section>
)