import { useState, useEffect } from "react";
import "../HomePageBody/HomePageBody.css";
import axios from "axios";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Link} from "react-router-dom";


const HomePageBody = () => {
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        axios
            .get("/api/categories")
            .then((res) => setProductCategories(res.data.categories))
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="pagewrap">
            <section className="container-0">
                <div className="container-content">hello</div>
            </section>
            <div className="container-main">
                <div className="container-1">
                    <section className="page-bg">
                        <div className="page-container">
                            <div className="img-container">
                                <img src="assests/images/iphone-baner.png" alt="" />
                                <div className="content-container">
                                    <h1 className="heading-black">SwayStore</h1>
                                    <h2>The Premium Personal Devices Shopping Experience.</h2>
                                    <h2 className="font-style padding-top-bottom">
                                        Ready for these devices to Sway over your life? Click on the
                                        button below!
                                    </h2>
                                    <Link to={"/products"}>
                                        <button className="btn-1 is-primary">Browse Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="container-2">
                    <div className="featured-prod-container">
                        <h2 className="heading-align-center">Featured Categories</h2>
                        <div className="cards-container">
                            <CategoryCard items={productCategories} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePageBody;
