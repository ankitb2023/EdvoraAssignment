import style from './NavBar.module.css';
import logo from '../../assets/logo.svg';
import passportankit from '../../assets/passportankit.jpeg';



export const NavBar = () => {

  
    return (
        <nav className = { style.main_nav } >
            <div className = "container">
                <div className = { style.row }>
                    
                    <div className = { style._logo } >
                        <img src = {logo } alt = "logo" />
                    </div>


                    
                        <div className = { style.row }>
                            <p className = { style.name } >Ankit</p>

                            <div className = { style._avatar } >
                                <img src = {passportankit} alt = "avatar" />
                            </div>
                        </div>
                    


                </div>
            </div>
        </nav>
    );
};