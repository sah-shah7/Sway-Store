import React from 'react';
import "../CategoryCard/CategoryCard.css";


const CategoryCard = (props) => {
    return (
        props.items.map(category => (
            <div className="category-card__container" key={category._id}>
            <div className="category-card__content">
            <div className="category-card__content-header">{category.categoryName}</div>
            <div className="category_card__content-body">{category.description}</div>
            </div>
        </div>
        ))
    );
};

export default CategoryCard;