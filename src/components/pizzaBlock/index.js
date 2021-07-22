import React, {useState} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import {Modal} from "antd";
import ModalImg from "./modalImg";



const PizzaBlock = ({id,name,imageUrl,price,types,sizes,onClickAddPizza,addedCount}) => {
    const availableTypes=['паталь-акварель','акварель']
    const availableSizes=[3,4,7]
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [activeType,setActiveType] = useState(types?types[0]:0)
    const [activeSize,setActiveSize] = useState(undefined)



    const showModal = () => {
        setIsModalVisible(true);
    };


    const onSelectedType = (index) =>{
        setActiveType(index)

    }
    const onSelectedSize = (index) =>{

        setActiveSize(index)
    }

    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            sizes:availableSizes[activeSize],
            types:availableTypes[activeType],
        }
          if (activeSize){
              onClickAddPizza(obj)
          }else {
              alert('Выберите пожалуйста размер')
          }

    }


    return (
        <div>

            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Card"
                    onClick={showModal}
                />
                 <ModalImg isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} imgCart={imageUrl} name={name}/>
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {availableTypes.map((type,index)=>{
                            return(
                                <li key={index}
                                    className={classNames({
                                    active: activeType === index,
                                    disabled: !types?.includes(index)
                                })}
                                onClick={()=>onSelectedType(index)}
                                >
                                    {type}
                                </li>
                            )
                        })}
                    </ul>
                    <hr/>
                    <ul>
                        {availableSizes.map((size,index)=>{
                            return(
                                <li key={index}
                                    className={classNames({
                                        active: activeSize === index,
                                        disabled: !sizes.includes(size)
                                    })}
                                    onClick={()=>onSelectedSize(index)}
                                >
                                    A{size}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price"> {price} ₴</div>
                    <button className="button button--outline button--add" onClick={()=>onAddPizza()}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount  && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>
            <Modal>
                <h1>12</h1>
            </Modal>
        </div>
    )

}

PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default PizzaBlock;