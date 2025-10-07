import '../styles/login.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Input from '../components/inputs';
import Boton from '../components/boton';

export default function Login() {
    return (
        <div className="card">
            <img src="images.png" alt="kitty" className="imagen" />
            <h1 className="title">Welcome Back</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h6 style={{ fontSize: '14px', marginLeft: '32px', color: '#DF1B7A' }}>Email</h6>
                <Input
                    type="email"
                    placeholder="  Enter your email"
                    className="input"
                />
                <h6 style={{ fontSize: '14px', marginLeft: '32px', color: '#DF1B7A',marginTop:'17px' }}>Password</h6>
                <Input
                    type="password"
                    placeholder="  Enter your password"
                    className="input"
                />
                <Boton text="hola"></Boton>
            </div>
        </div>
    );
}