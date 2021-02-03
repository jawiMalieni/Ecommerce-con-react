import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";

const ProductDetail = (props) => {

    const {
        title,
        images,
        brand,
        price,
        cpu,
        camera,
        size,
        weight,
        display,
        battery,
        memory,
        description,
        id
    } = props.product;


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
	<span className="price h3 text-warning">
		<span className="currency">$</span><span className="num">{formatMoney(price)}</span>
	</span>
                </p>
                <dl className="item-property">
                    <dt>Descripcion</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Marca</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Tamaño</dt>
                    <dd>{size}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Camara</dt>
                    <dd>{camera}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>CPU</dt>
                    <dd>{cpu}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Memoria</dt>
                    <dd>{memory}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Display</dt>
                    <dd>{display}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Bateria</dt>
                    <dd>{battery}</dd>
                </dl>
                <hr/>
                <hr/>
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"><i
                    className="fa fa-shopping-cart"/> Añadir al carrito
                </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
