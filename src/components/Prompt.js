import Carousel from 'react-bootstrap/Carousel';

function Prompt() {
    return (
        <Carousel slide={false}>
            <Carousel.Item className='sliderItem'>
                <div className="content">
                <h2>Q1. Write a prompt</h2>
                <textarea name="q1" id="q1" cols="40" rows="5"></textarea>
                </div>
            </Carousel.Item>
            <Carousel.Item className='sliderItem'>
            <div className="content">
                <h2>Q2. Question 2</h2>
                <textarea name="q1" id="q1" cols="40" rows="5"></textarea>
                </div>
            </Carousel.Item>
            <Carousel.Item className='sliderItem'>
            <div className="content">
                <h2>Q3. Ques 3</h2>
                <textarea name="q1" id="q1" cols="40" rows="5"></textarea>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Prompt;