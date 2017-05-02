/**
 * Created by zylee on 2016/10/20.
 */
import React from 'react'
//import Media from 'react-media'
import Slider from 'react-slick'
import './index.scss'
class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            //slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

            </div>

        );
    }
}

export default Welcome
