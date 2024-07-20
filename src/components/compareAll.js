import React from 'react'
import './compareAll.css';
import Black from './vehicle images/black.png';
import Golden from './vehicle images/golden.png';
import Blue from './vehicle images/blue.png';
import Red from './vehicle images/Copy of Copy of final design try 2 cross view.168.png';


const compareAll = () => {

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
                    {/* <h1>SE03 Max</h1> */}
                    <p>Choose a color</p>
                    <div id='color-div'>
                        <button className='color' id='black' tabIndex={1} onClick={model_color_black}></button>
                        <button className='color' id='golden' tabIndex={1} onClick={model_color_golden}></button>
                        <button className='color' id='blue' tabIndex={1} onClick={model_color_blue}></button>
                        <button className='color' id='red' tabIndex={1} onClick={model_color_red}></button>
                    </div>
                    <a href='#buy-now-Rhyno'><button id='buy-now'>Buy now</button></a>
                </div>

            </div>
            <div id='table'>
                <h1>Rhyno SE03 Lite vs Rhyno SE03 vs Rhyno SE03 Max</h1>
                <div id='comparison-table'>
                    <table>
                        <caption>Battery</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>1.8Kwh</td>
                            <td>2.7Kwh</td>
                            <td>2.7Kwh</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Battery features</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>LFP with 1500 cycles<br/><br/>
                                Active Balancing<br/><br/>
                                Waterproof (IP67)
                            </td>
                            <td>
                                LFP with 1500 cycles<br/><br/>
                                Active Balancing<br/><br/>
                                Waterproof (IP67)
                            </td>
                            <td>
                                LFP with 1500 cycles<br/><br/>
                                Active Balancing<br/><br/>
                                Waterproof (IP67)
                            </td>
                        </tr>
                    </table>
                    <table>
                        <caption>Battery warranty</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>3 Years</td>
                            <td>3 Years</td>
                            <td>3 Years</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Charging time</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>3 hours (12A)</td>
                            <td>4 hours (12A)</td>
                            <td>4 hours (12A)</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Motor</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>1500W</td>
                            <td>1500W</td>
                            <td>2000W</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Max speed</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>55 km/h</td>
                            <td>55 km/h</td>
                            <td>65 km/h</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Warranty on electronics</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>1 year</td>
                            <td>1 year</td>
                            <td>1 year</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Max range (@30km/h)</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>100 km</td>
                            <td>150 km</td>
                            <td>120 km</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Max range (@45km/h)</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>90 km</td>
                            <td>110 km</td>
                            <td>100 km</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Max range (@full speed)</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>60 km</td>
                            <td>90 km</td>
                            <td>80 km</td>
                        </tr>
                    </table>
                    <table>
                        <caption>Other key benefits</caption>
                        <tr>
                            <th>SE03 Lite</th>
                            <th>SE03</th>
                            <th>SE03 Max</th>
                        </tr>
                        <tr>
                            <td>Fire-safe battery<br/><br/>
                                Range prediction<br/><br/>
                                Comfortable ride<br/><br/>
                                Stable and safe
                            </td>
                            <td>Fire-safe battery<br/><br/>
                                Range prediction<br/><br/>
                                Comfortable ride<br/><br/>
                                Stable and safe
                            </td>
                            <td>Fire-safe battery<br/><br/>
                                Range prediction<br/><br/>
                                Comfortable ride<br/><br/>
                                Stable and safe
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default compareAll
