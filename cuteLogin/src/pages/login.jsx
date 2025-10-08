import '../styles/login.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Input from '../components/inputs';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import Swal from 'sweetalert2';




function handleClick(){
   
  return (
    Swal.fire({
  title: '¡oh no!',
  text: 'Lo sentimos, aun no esta disponible esta funcion, se paciente🐱🦋😪',
  icon: 'error',
  background: '#E7D3E8', 
  color: '#DF1B7A',
  confirmButtonColor: '#DF1B7A', 
  confirmButtonText: 'Sere paciente',
  iconColor:'#DF1B7A',
   })
  );
}


export default function Login() {
    return (
        <div>
        <div className="card">
            <img src="images.png" alt="kitty" className="imagen" />
            <h1 className="title">Welcome Back</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h6 style={{ fontSize: '14px', marginLeft: '32px', color: '#DF1B7A' }}>
                    <MailOutlineIcon style={{ marginLeft: '-20px', marginBottom: '-5px', fontSize: '20px' }} /> Email</h6>
                <Input
                    type="email"
                    placeholder="  Enter your email"
                    className="input"
                />
                <h6 style={{ fontSize: '14px', marginLeft: '32px', color: '#DF1B7A', marginTop: '17px' }}>
                    <LockOutlineIcon style={{ marginLeft: '-25px', marginBottom: '-5px', fontSize: '22px' }} />Password</h6>
                <Input
                    type="password"
                    placeholder="  Enter your password"
                    className="input"
                />
                <button 
                onClick={handleClick}
                style={{
                    color: 'white', backgroundColor: '#DF1B7A', marginTop: '20px',
                    height: '45px', width: '410px', borderRadius: '15px', fontWeight: 'normal', fontSize: '15px', outline: 'none'
                }} >
                    Log in</button>

            </div>
        </div>
        <h6 style={{fontSize:'13px', fontWeight:'normal', color: '#DF1B7A'}}>Don't have an account?<a style={{fontWeight:'bold', color: '#DF1B7A'}}> Sign Up</a></h6>
        </div>
        
    );
}