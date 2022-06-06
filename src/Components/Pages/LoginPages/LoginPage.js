import "./LoginPage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setAccount({
      email,
      password,
    });
  };
  console.log(account);

  return (
    <>
      <div className="login_wrap">
        <h2 className="login_heading">Đăng nhập</h2>
        <form onSubmit={handleSubmitLogin}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login_action">
            <Link to="/forgot password">
              <p>Quên mật khẩu ?</p>
            </Link>
            <Link to="/registration">
              <p>Đăng ký ?</p>
            </Link>
          </div>
          <button onClick={handleSubmitLogin} className="btn login_btn">
            Đăng nhập
          </button>
          <button className="btn google_btn">Đăng nhập với google</button>
          <button className="btn facebook_btn">Đăng nhập với facebook</button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
