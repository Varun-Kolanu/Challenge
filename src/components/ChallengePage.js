import { Dropdown, Button, DropdownButton } from 'react-bootstrap';
import Prompt from './Prompt';

function ChallengePage() {
    return (
        <div className="Page">
            <div id="container">
                <div id="left">
                    <DropdownButton id="dropdown-basic-button" title="File1" size='lg'>
                        <Dropdown.Item href="/">File2</Dropdown.Item>
                        <Dropdown.Item href="/">File3</Dropdown.Item>
                    </DropdownButton>
                    <div id='fileImage'>

                    </div>
                </div>
                <div id="right">
                    <div id="story">
                        <h1 id='storyHeading'>Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam veniam error facilis reprehenderit, cupiditate harum optio! Temporibus tempora maiores cupiditate. Obcaecati ad ea dolorum recusandae repellat expedita nesciunt nemo laborum hic corporis omnis, doloremque numquam eligendi placeat corrupti. Odit qui et ipsum iure consequatur eveniet ipsam magnam voluptatum beatae eius saepe tempora neque perspiciatis incidunt iste repellat, similique ratione, laborum consectetur adipisci a optio necessitatibus assumenda quae. Laboriosam quia ut deserunt enim nemo ducimus laborum libero quae pariatur provident.</p>
                        <span id='answerHeading'>Sample Answers:</span>
                        <ul>
                            <li>Answer1</li>
                            <li>Answer2</li>
                        </ul>
                    </div>
                    <div id="prompt">
                        <form action="/prompt">
                            <Prompt />
                            <div id='buttons'>
                            <Button variant="warning" className='button'>Test</Button>{' '}
                            <Button variant="success" className='button'>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengePage;
