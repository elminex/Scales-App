import React from 'react';
import sharps from './klucz+krzyżykiS.png'
import './Staff.css';
import bemole from './klucz+bemoleS.png'

class Staff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signs: [],
            text: 'Tu się pojawią informacje o znakach',
            success: false,
        }
        this.clickedArr = [];
        this.controlArr = [];
    }

    /*
        clickHandle(sign, target) {
            const signArr = this.props.signs;
            target.classList.toggle('selected');
            if (signArr.includes(sign)) {
                console.log('ok', this.clickedArr);
                if (!this.clickedArr.includes(sign)) {
                    this.clickedArr.push(sign);
                    console.log('correct');
    
                } else {
                    console.log('juz kliknięte')
                }
            }
        }
    
        compareArrays() {
            if (this.props.signs.length === this.state.signs.length) {
                console.log('DOBRZE' + this.props.signs.length + this.state.signs.length)
            } else {
                console.log('DUPA, podane: ' + this.props.signs.length + ' klikniete: ' + this.state.signs.length)
            }
        }
    */
    clickHandle(sign, target) {
        target.classList.toggle('selected');
        if (this.clickedArr.includes(sign)) {
            this.clickedArr = this.clickedArr.filter((value) => value !== sign)
            console.log(this.clickedArr);
        } else {
            this.clickedArr.push(sign);
            console.log(this.clickedArr);
        }
        this.setState({ signs: this.clickedArr });
    }
    compareArrays() {
        this.controlArr = [];
        const correct = this.props.signs;
        const userSelected = this.clickedArr;
        if (correct.length === userSelected.length) {
            correct.forEach((el1) => userSelected.forEach((el2) => {
                if (el1 === el2) this.controlArr.push(el1);
            }));
            if (this.controlArr.length === correct.length) {
                this.setState({ text: 'Wszystko ok, brawo', success: true, })
            } else {
                this.setState({ text: 'Zaznaczono złe znaki przy kluczu' })
            }
        } else {
            this.setState({ text: 'Ilość znaków się nie zgadza' })
        }
    }
    render() {
        if (this.props.flats === false) {
            return (
                <div className="signs">
                    <h2>Wylosowana gama to {this.props.scale}, kliknij na właściwe znaki</h2>
                    <div className="signs__key-overlay">
                        <img className="signs__key-sharps" src={sharps} alt="znaki" />
                        <div className="signs__sharp-1" onClick={(e) => { if (this.state.success === false) { this.clickHandle('fis', e.target) } }}></div>
                        <div className="signs__sharp-2" onClick={(e) => { if (this.state.success === false) { this.clickHandle('cis', e.target) } }}></div>
                        <div className="signs__sharp-3" onClick={(e) => { if (this.state.success === false) { this.clickHandle('gis', e.target) } }}></div>
                        <div className="signs__sharp-4" onClick={(e) => { if (this.state.success === false) { this.clickHandle('dis', e.target) } }}></div>
                        <div className="signs__sharp-5" onClick={(e) => { if (this.state.success === false) { this.clickHandle('ais', e.target) } }}></div>
                        <div className="signs__sharp-6" onClick={(e) => { if (this.state.success === false) { this.clickHandle('eis', e.target) } }}></div>
                        <div className="signs__sharp-7" onClick={(e) => { if (this.state.success === false) { this.clickHandle('his', e.target) } }}></div>
                    </div>
                    <button onClick={this.compareArrays.bind(this)}>Sprawdź znaki</button>
                    <h3 className="info">{this.state.text}</h3>
                    <button onClick={this.props.reset}>Losuj ponownie</button>
                </div>
            )
        } else {
            return (
                <div className="signs">
                    <h2 className="signs__title">Wylosowana gama to {this.props.scale}, kliknij na właściwe znaki</h2>
                    <div className="signs__key-overlay">
                        <img className="signs__key-flats" src={bemole} alt="znaki" />
                        <div className="signs__flat-1" onClick={(e) => { if (this.state.success === false) { this.clickHandle('b', e.target)}}}></div>
                        <div className="signs__flat-2" onClick={(e) => { if (this.state.success === false) { this.clickHandle('es', e.target)}}}></div>
                        <div className="signs__flat-3" onClick={(e) => { if (this.state.success === false) { this.clickHandle('as', e.target)}}}></div>
                        <div className="signs__flat-4" onClick={(e) => { if (this.state.success === false) { this.clickHandle('des', e.target)}}}></div>
                        <div className="signs__flat-5" onClick={(e) => { if (this.state.success === false) { this.clickHandle('ges', e.target)}}}></div>
                        <div className="signs__flat-6" onClick={(e) => { if (this.state.success === false) { this.clickHandle('ces', e.target)}}}></div>
                        <div className="signs__flat-7" onClick={(e) => { if (this.state.success === false) { this.clickHandle('fes', e.target)}}}></div>
                    </div>
                    <button onClick={this.compareArrays.bind(this)}>Sprawdź znaki</button>
                    <h3 className="info">{this.state.text}</h3>
                    <button onClick={this.props.reset}>Losuj ponownie</button>
                </div>
            )
        }

    }
}

export default Staff;