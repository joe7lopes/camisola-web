import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBenficaProductsForHomePage, getPortoProducts, getSportingProducts} from '../../../../store/selectors';
import ProductsTableOrdered from './OrderProductsTable';
import {Category, IProduct, IRootState} from '../../../../types';
import {saveSettings} from '../../../../actions';


export default function HomePageLayout() {
    const dispatch = useDispatch();
    const settings = useSelector((state: IRootState) => state.settings);
    const benficaProducts = useSelector(getBenficaProductsForHomePage);
    const portoProducts = useSelector(getPortoProducts);
    const sportingProducts = useSelector(getSportingProducts);

    if (benficaProducts.length < 1 || portoProducts.length < 1 || sportingProducts.length < 1) {
        return <div> loading...</div>;
    }

    const saveProductDisplayOrder = (orderedProducts: IProduct[], category: Category) => {
        const productIds = orderedProducts.map((p) => p.id);


        let homePageLayout;
        if (category === Category.BENFICA) {
            homePageLayout = {...settings.homePageLayout, benficaProductsOrder: productIds};
        } else if (category === Category.SPORTING) {
            homePageLayout = {...settings.homePageLayout, sportingProductsOrder: productIds};
        } else if (category === Category.PORTO) {
            homePageLayout = {...settings.homePageLayout, portoProductsOrder: productIds};
        } else {
            homePageLayout = settings.homePageLayout;
        }

        const newSettings = {
            ...settings,
            homePageLayout,
        };

        dispatch(saveSettings(newSettings));
    };

    return (
        <>
            <div className="m-b-lg">
                <h5>Produtos benfica na home page</h5>
                <ProductsTableOrdered
                    products={benficaProducts}
                    onSave={(ids) => saveProductDisplayOrder(ids, Category.BENFICA)}/>
            </div>
            <div className="m-b-lg">
                <h5>Produtos Sporting na home page</h5>
                <ProductsTableOrdered
                    products={sportingProducts}
                    onSave={(ids) => saveProductDisplayOrder(ids, Category.SPORTING)}/>
            </div>
            <h5>Produtos Porto na home page</h5>
            <ProductsTableOrdered
                products={portoProducts}
                onSave={(ids) => saveProductDisplayOrder(ids, Category.PORTO)}/>
        </>
    );
}
