import React from 'react'
import { Link } from 'react-router-dom'
import classes from'./AboutContent.module.css'
import react from "../../assets/hoss.jpg"
import react1 from "../../assets/iti1.jpg"
export const AboutContent = () => {
  return (
    <div className={classes.about}>
        <div className={classes.left}>
            <h1>Who AM I</h1>
            <p>Im a react front-end Developer. I create responsive secure website for my clients .</p>
            <Link to="/contact">
                <button className="btn">Content</button>
            </Link>
        
        </div>

        <div className={classes.right}>
            <div className={classes["img-container"]}>
                <div className={`${classes['img-stack']} ${classes['top']}`}>
                    <img src={react1} className={classes.img} alt="some thing error" />
                </div>
                <div className={`${classes['img-stack']} ${classes['bottom']}`}>
                    <img src={react} className={classes.img} alt="some thing error" />
                </div>
            </div>
        </div>
    </div>
  )
}
