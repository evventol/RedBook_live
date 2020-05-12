import React from 'react'
import styles from './selectDateRegister.module.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const SelectDataRegister = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }))
  const AirbnbSlider = withStyles({
    root: {
      color: '#00c48c',
      height: 3,
      padding: '36px 0 16px 0',
    },
    thumb: {
      height: 26,
      width: 26,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: '#ebebeb 0px 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: '#ccc 0px 2px 3px 1px',
      },
    },
    active: {},
    track: {
      height: 3,
      color: '#C4C4C4',
    },
    rail: {
      color: '#C4C4C4',
      opacity: 0.4,
      height: 3,
    },
  })(Slider)

  function AirbnbThumbComponent(props) {
    return <span {...props}></span>
  }

  //export default function CustomizedSlider() {
  const classes = useStyles()

  return (
    <>
      <div className={styles.dataRegister}>
        <h2 className={styles.h2}>Дата реєстрації</h2>
        <div className={classes.root}>
          <AirbnbSlider
            ThumbComponent={AirbnbThumbComponent}
            getAriaLabel={(index) =>
              index === 0 ? 'Minimum price' : 'Maximum price'
            }
            defaultValue={[20, 40]}
          />
        </div>
        <div className={styles.countYear}>
          <span className={styles.countYearStart + ' ' + styles.span}>
            1950 рік
          </span>
          <span className={styles.span + ' ' + styles.countYearEnd}>
            2015 рік
          </span>
        </div>
      </div>
    </>
  )
}

export default SelectDataRegister
