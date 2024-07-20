import React from 'react'
import './SE03_Max.css';
import Black from './vehicle images/black.png';
import Golden from './vehicle images/golden.png';
import Blue from './vehicle images/blue.png';
import Red from './vehicle images/Copy of Copy of final design try 2 cross view.168.png';


const SE03_Max = () => {

    function model_color_black() {
        document.getElementById('black-ev-copy').style.visibility = 'hidden';
        document.getElementById('black-ev').style.visibility = 'visible';
        document.getElementById('golden-ev').style.visibility = "hidden";
        document.getElementById('blue-ev').style.visibility = "hidden";
        document.getElementById('red-ev').style.visibility = "hidden";
    }
    function model_color_golden() {
        document.getElementById('black-ev-copy').style.visibility = 'hidden';
        document.getElementById('black-ev').style.visibility = "hidden";
        document.getElementById('golden-ev').style.visibility = "visible";
        document.getElementById('blue-ev').style.visibility = "hidden";
        document.getElementById('red-ev').style.visibility = "hidden";
    }
    function model_color_blue() {
        document.getElementById('black-ev-copy').style.visibility = 'hidden';
        document.getElementById('black-ev').style.visibility = "hidden";
        document.getElementById('golden-ev').style.visibility = "hidden";
        document.getElementById('blue-ev').style.visibility = "visible";
        document.getElementById('red-ev').style.visibility = "hidden";
    }
    function model_color_red() {
        document.getElementById('black-ev-copy').style.visibility = 'hidden';
        document.getElementById('black-ev').style.visibility = "hidden";
        document.getElementById('golden-ev').style.visibility = "hidden";
        document.getElementById('blue-ev').style.visibility = "hidden";
        document.getElementById('red-ev').style.visibility = "visible";
    }
    return (
        <div id='main-box'>
            <div id='box'>
                <div id='pngs'>
                    <img src={Black} alt='' id='black-ev-copy'></img>
                    <img src={Black} alt='' id='black-ev'></img>
                    <img src={Golden} alt='' id='golden-ev'></img>
                    <img src={Blue} alt='' id='blue-ev'></img>
                    <img src={Red} alt='' id='red-ev'></img>
                </div>
                <div id='model'>
                    <h1>SE03 Max</h1>
                    <p>Choose a color</p>
                    <div id='color-div'>
                        <button className='color' id='black' tabIndex={1} onClick={model_color_black}></button>
                        <button className='color' id='golden' tabIndex={1} onClick={model_color_golden}></button>
                        <button className='color' id='blue' tabIndex={1} onClick={model_color_blue}></button>
                        <button className='color' id='red' tabIndex={1} onClick={model_color_red}></button>
                    </div>
                    <a href='#buy-now-SE03-Max'><button id='buy-now'>Buy now</button></a>
                </div>

            </div>
            <div id='table'>
                <h1>Description</h1>
                <p>This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches. 
                </p>
                <table>
                    <tr>
                        <th>Specification</th>
                        <th>Rhyno SE03 Max</th>
                    </tr>
                    <tr>
                        <td>Battery</td>
                        <td>2.7Kwh</td>
                    </tr>
                    <tr>
                        <td>Battery features</td>
                        <td>LFP with 1500 cycles<br/>
                            Active Balancing<br/>
                            Waterproof (IP67)
                        </td>
                    </tr>
                    <tr>
                        <td>Battery warranty</td>
                        <td>3 Years</td>
                    </tr>
                    <tr>
                        <td>Charging time</td>
                        <td>4 hours (12A)</td>
                    </tr>
                    <tr>
                        <td>Motor</td>
                        <td>2000W</td>
                    </tr>
                    <tr>
                        <td>Max speed</td>
                        <td>65 km/h</td>
                    </tr>
                    <tr>
                        <td>Warranty on electronics</td>
                        <td>1 year</td>
                    </tr>
                    <tr>
                        <td>Max range (@30km/h)</td>
                        <td>120 km</td>
                    </tr>
                    <tr>
                        <td>Max range (@45km/h)</td>
                        <td>100 km</td>
                    </tr>
                    <tr>
                        <td>Max range (@full speed)</td>
                        <td>80 km</td>
                    </tr>
                    <tr>
                        <td>Other key benefits</td>
                        <td>Fire-safe battery<br/>Range prediction<br/>Comfortable ride<br/>
                            Stable and safe
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default SE03_Max
