import React, { useState } from 'react'
import styles from './selectDateRegister.module.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 280 + theme.spacing(3) * 2,
  },
}))

const RangeSlider = withStyles({
  root: {
    color: '#00c48c',
    height: 3,
    padding: '3.6rem 0 1.6rem 0',
  },

  thumb: {
    height: 26,
    width: 26,
    backgroundColor: '#fff',
    border: '.1rem solid currentColor',
    marginTop: -12,
    marginLeft: 0,
    boxShadow: '#ebebeb 0rem .2rem .2rem',
    left: '9.3rem',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0rem .2rem .3rem .1rem',
    },
  },
  active: {},
  track: {
    height: 3,
    color: '#c4c4c4',
    marginLeft: 10,

  },
  rail: {
    color: '#c4c4c4',
    opacity: 0.4,
    height: 3,
    marginLeft: 10,
  },
})(Slider)

function valuetext(value) {
  return `${value}`
}

const SelectDataRegister = () => {

  const classes = useStyles()
  const [value, setValue] = React.useState([1975, 2000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const [isShown, setIsShown] = useState(false)

  const toggleFIeldset = () => setIsShown(!isShown)

  return (
    <>
      <div className={styles.dataRegister}>
        <h2 className={styles.h2} onClick={toggleFIeldset}>
          Дата реєстрації
        </h2>
        {isShown && (
          <>
            <div className={classes.root}>
              <RangeSlider
                value={value}
                min={1950}
                max={2015}
                step={1}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </div>
            <div className={styles.countYear}>
              <span className={styles.countYearStart + ' ' + styles.span}>
                {value[0]} рік
              </span>
              <span className={styles.span + ' ' + styles.countYearEnd}>
                {value[1]} рік
              </span>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default SelectDataRegister
