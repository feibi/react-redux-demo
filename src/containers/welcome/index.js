/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
import { render } from 'react-dom'
import Upload from './../../components/upload/'

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        const props = {
            name: 'file',
            action: '/ss',
            headers: {
                authorization: 'authorization-text',
            },
            listType: 'picture-card',
            defaultFileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }, {
                uid: -2,
                name: 'yyy.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {

                    console.info(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    console.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        return (
            <div className="welcome">
                hello world!
                <Upload {...props}><div className="ant-upload-text">Upload</div></Upload>
            </div>
        )
    }
}

export default Welcome
