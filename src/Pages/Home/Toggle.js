import React, { Component, } from 'react'
import PropTypes from 'prop-types'

export default class MultiSwitch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedSwitch: props.selectedSwitch || 0,
            loaded: false
        }
    }

    onToggle(ev) {
        const id = ev && parseInt(ev.target.id, 10)
        this.props.onToggleCallback && this.props.onToggleCallback(id)
        this.setState({
            loaded: true,
            selectedSwitch: id,
        })
    }

    render() {
        const {
            texts,
            bgColor,
            padding,
            eachSwitchWidth,
            fontColor,
            selectedFontColor,
            fontSize,
            fontWeight,
            height,
            borderColor,
            borderWidth,
            selectedSwitchColor,
        } = this.props
        const {
            selectedSwitch
        } = this.state
        const noOfSwitches = texts.length || 2
        const switchWidth = noOfSwitches * eachSwitchWidth
        const switchStyles = {
            width: `${switchWidth}px`,
            backgroundColor: bgColor,
            padding: padding,
            borderWidth,
            borderColor,
            height,
        }
        const labelWidth = `${eachSwitchWidth || (switchWidth / noOfSwitches)}px`

        const switches = texts.map((text, index) => {
            const labelStyles = {
                width: labelWidth,
                color: fontColor,
                lineHeight: height,
                fontSize,
                fontWeight,
            }
            let classSwitchContent = `multi-switch-content`

            if (selectedSwitch === index) {
                classSwitchContent = `${classSwitchContent} multi-switch-handle-color`
                labelStyles.color = selectedFontColor
            }
            return <label
                key={index}
                id={index}
                className={classSwitchContent}
                style={labelStyles}
                onClick={this.onToggle.bind(this)}
            >
                {texts[index]}
            </label>
        })

        const switchHandleStyles = {
            width: labelWidth,
            left: `${selectedSwitch * eachSwitchWidth + 2}px`,
            height,
            lineHeight: height,
            backgroundColor: selectedSwitchColor,
        }

        let classNameHandle = 'multi-switch-handle multi-switch-handle-move'
        return (
            <div className='multi-switch-container' style={switchStyles}>
                {switches}
                <span
                    className={classNameHandle}
                    style={switchHandleStyles}
                >{ }</span>
            </div>
        )
    }
}

MultiSwitch.propTypes = {
    texts: PropTypes.array.isRequired,
    selectedSwitch: PropTypes.number,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
    fontColor: PropTypes.string,
    selectedFontColor: PropTypes.string,
    selectedBgColor: PropTypes.string,
    selectedPadding: PropTypes.string,
    selectedSwitchColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    onToggleCallback: PropTypes.func,
    eachSwitchWidth: PropTypes.number,
    height: PropTypes.string,
}

MultiSwitch.defaultProps = {
    texts: ['Job Seeker ', ' Job poster'],
    selectedSwitch: 0,
    fontColor: 'gray',
    borderColor: 'black',
    selectedFontColor: 'green',
    selectedSwitchColor: 'teal',
    fontWeight: 'bold',
}
