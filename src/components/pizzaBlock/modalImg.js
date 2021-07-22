import { Modal} from "antd";
import 'antd/dist/antd.css';

const ModalImg = ({setIsModalVisible,isModalVisible,imgCart,name}) => {

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                wrapClassName='modal'
                bodyStyle={{ padding: 0, height: 0 }}
                mask={false}
                footer={null}
            >
                <div className='modal-wrap'>
                    <h2>{name}</h2>
                <img src={imgCart} alt="cart" className='modal__img'/>
                </div>
            </Modal>
        </>
    );

};

export default ModalImg;