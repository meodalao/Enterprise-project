import {Modal} from 'antd';
import Image from '../Assets/img/Fixing.png';

function info() {
    Modal.info({
        title: 'This feature is coming soon.',
        content: (
            <div>
                <img src={Image}
                style={{width: 66, marginLeft:'100px',
                marginTop: '24px', 
                justifyContent: "center",
                alignItems: "center", }} alt="#"/>
            </div>
        )
    })
}

export default info;