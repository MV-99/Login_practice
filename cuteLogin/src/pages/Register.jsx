//pendiente poner el degradado lineal en el div de fondo
import "../styles/login.css";
import Input from "../components/inputs";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

//nueva alarma, mejor, mas bonita y todo
function handleClick() {
  return Swal.fire({
    title: "¡oh no!",
    text: "Lo sentimos, aun no esta disponible esta función, se paciente🐱🦋😪",
    icon: "error",
    background: "#E7D3E8",
    color: "#DF1B7A",
    confirmButtonColor: "#DF1B7A",
    confirmButtonText: "Sere paciente",
    iconColor: "#DF1B7A",
  });
}

export default function Register() {
  //navegacion del registarte
  const navigate = useNavigate();

  return (
    <div>
      <div className="card">
        <img src="images.png" alt="kitty" className="imagen" />
        <h1 className="title">¡Welcome Dear User!</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h6
            style={{ fontSize: "14px", marginLeft: "32px", color: "#DF1B7A" }}
          >
            <MailOutlineIcon
              style={{
                marginLeft: "-20px",
                marginBottom: "-5px",
                fontSize: "20px",
              }}
            />{" "}
            Write your email
          </h6>
          <Input
            type="email"
            placeholder="  Enter your email"
            className="input"
            maxLenght={30}
          />
          <h6
            style={{
              fontSize: "14px",
              marginLeft: "32px",
              color: "#DF1B7A",
              marginTop: "17px",
            }}
          >
            <LockOutlineIcon
              style={{
                marginLeft: "-25px",
                marginBottom: "-5px",
                fontSize: "22px",
              }}
            />{" "}
            Create a Password
          </h6>
          <Input
            type="password"
            placeholder="  Enter your password"
            className="input"
            maxLenght={16}
            minLenght={8}
          />
          <h6
            style={{
              fontSize: "14px",
              marginLeft: "32px",
              color: "#DF1B7A",
              marginTop: "17px",
            }}
          >
            <LockOutlineIcon
              style={{
                marginLeft: "-25px",
                marginBottom: "-5px",
                fontSize: "22px",
              }}
            />{" "}
            Confirm Password
          </h6>
          <Input
            type="password"
            placeholder="  Confirm your password"
            className="input"
            maxLenght={16}
            minLenght={8}
          />
          <button
            onClick={handleClick}
            style={{
              color: "white",
              backgroundColor: "#DF1B7A",
              marginTop: "20px",
              height: "45px",
              width: "410px",
              borderRadius: "15px",
              fontWeight: "normal",
              fontSize: "15px",
              outline: "none",
            }}
          >
            Register
          </button>
        </div>
      </div>
      <h6 style={{ fontSize: "13px", fontWeight: "normal", color: "#DF1B7A" }}>
        You have an account?
        <a
          onClick={() => navigate("/")}
          style={{ fontWeight: "bold", color: "#DF1B7A" }}
        >
          Log In
        </a>
      </h6>
    </div>
  );
}
