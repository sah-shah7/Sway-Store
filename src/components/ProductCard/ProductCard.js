import React from "react";
import '../../components/ProductCard/ProductCard.css';

const ProductCard = () => {
    return (
        <div className="card-typ-vertical">
            <div className="card">
                <div className="card-typ-1">
                    <div className="card-img-vertical-container">
                        <div className="badge-bs">#1 Bestseller</div>
                        <div className="text-overlay">Out of Stock</div>
                        <img
                            src=""
                            alt="mobile stock"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-h-style f-s-h5">
                            morbi enim-card title
                        </h5>
                        <p className="card-text-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.Tincidunt ornare massa eget egestas.
                        </p>
                    </div>

                    <div className="card-info">
                        <span className="price-after">₹99</span>
                        <span className="price-before text-subtitle-color">
                            ₹100
                        </span>
                        <span className="price-percent-difference">1% Off</span>
                    </div>
                    <div className="card-buttons">
                        <span className="btn-add-to-card">
                            <button className="btn-1 is-primary">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Add To Cart
                            </button>
                        </span>
                        <span className="btn-wishlist">
                            <button className="btn-1 bg-none">
                                <i className="fa fa-heart-o"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProductCard;