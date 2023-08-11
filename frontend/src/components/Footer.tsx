import classes from '../components/Footer.module.css'

const Footer: React.FC = () => {
    return <div className={classes.footer}>
        <ul className={classes.list}>
            <li>About us</li>
            <li>Store locator</li>
            <li>FAQ</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul>
    </div>
}

export default Footer