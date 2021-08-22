import React, { memo } from 'react';
import '../css/SuperHero.css';

const completedEqual = (prevProps, nextProps) => {
    return prevProps.completed === nextProps.completed
}

const SuperHero = memo((props) => {

    const {name, image, appearance, powerstats, biography} = props.hero;

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <br/>
                    <img src={image.url} alt={name} />
                    <h3>{name}</h3>
                </div>
                <div className="flip-card-back">
                    <p>Full Name: {biography['full-name']}</p>
                    <p>Alter Egos: {biography['alter-egos']}</p>
                    <p>Place of Birth: {biography['place-of-birth']}</p>
                    <p>First Appearance: {biography['first-appearance']}</p>
                    <p>Alignment: {biography.alignment}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Gender</th>
                                <th>Race</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Eye Color</th>
                                <th>Hair Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{appearance.gender}</td>
                                <td>{appearance.race}</td>
                                <td>{appearance.height[1]}</td>
                                <td>{appearance.weight[1]}</td>
                                <td>{appearance['eye-color']}</td>
                                <td>{appearance['hair-color']}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">Powerstats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Combat</td>
                                <td className="percentage">
                                    <label htmlFor="combat">{powerstats.combat} </label>
                                    <progress id="combat" value={powerstats.combat} max="100"></progress>
                                </td>
                            </tr>
                            <tr>
                                <td>Durability</td>
                                <td className="percentage">
                                    <label htmlFor="durability">{powerstats.durability} </label>
                                    <progress id="durability" value={powerstats.durability} max="100"></progress>
                                </td>
                            </tr>
                            <tr>
                                <td>Intelligence</td>
                                <td className="percentage">
                                    <label htmlFor="intelligence">{powerstats.intelligence} </label>
                                    <progress id="intelligence" value={powerstats.intelligence} max="100"></progress>
                                </td>
                            </tr>
                            <tr>
                                <td>Power</td>
                                <td className="percentage">
                                    <label htmlFor="power">{powerstats.power} </label>
                                    <progress id="power" value={powerstats.power} max="100"></progress>
                                </td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td className="percentage">
                                    <label htmlFor="speed">{powerstats.speed} </label>
                                    <progress id="speed" value={powerstats.speed} max="100"></progress>
                                </td>
                            </tr>
                            <tr>
                                <td>Strength</td>
                                <td className="percentage">
                                    <label htmlFor="strength">{powerstats.strength} </label>
                                    <progress id="strength" value={powerstats.strength} max="100"></progress>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {props.selected ? 
                    <button className="remove-to-favorites" onClick={props.removeSelectedHero}>Remove Selected</button> :
                    <button className="add-to-favorites" onClick={props.selectedHero}>Add to Favorites</button>
                    }
                </div>
            </div>
        </div>
    );

}, completedEqual);

export default SuperHero;
