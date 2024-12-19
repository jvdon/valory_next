import React from "react";
import style from "./carousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currId: 0
        };
    }

    prevSlide = (e) => {
        let currId = this.state.currId;

        if (currId > 0) {
            currId -= 1;
        } else {
            currId = this.props.items.length - 1;
        }

        this.setState({ currId: currId })
    }

    nextSlide = (e) => {
        let currId = this.state.currId;

        if (currId < this.props.items.length - 1) {
            currId += 1;
        } else {
            currId = 0;
        }
        this.setState({ currId: currId })
    }

    componentDidMount = () => {

        const interval = setInterval(() => this.nextSlide(), 5000);

        //Clearing the interval
        return () => clearInterval(interval);
    }


    render() {
        return (<div className={style.carousel}>

            {
                this.props.items.map((product, index) => {
                    return (
                        <div key={product.title} data-back={product.image_url} className={`${style.carousel_item} ${(index == this.state.currId ? style.active : "")}`}>
                            <img className={style["carousel-image"]} src={product.image_url} />
                            <div className={style.carousel_controls}>
                                <button className={style.button} onClick={(e) => this.prevSlide(e)} >
                                    <ChevronLeft size={48} />
                                </button>

                                <div className={style.bottom}>
                                    <h3 className={style["carousel-caption"]} >{product.title}</h3>
                                    <div className={style.indicators}>
                                        {this.props.items.map((item, index) => {
                                            return <div key={index} className={`${style.indicator} ${((this.state.currId % this.props.items.length == index) ? style.active : "")}`}></div>
                                        })}
                                    </div>
                                </div>

                                <button className={style.button} onClick={(e) => this.nextSlide(e)} >
                                    <ChevronRight size={48} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>);
    }
}