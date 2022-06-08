import "./LoginPage.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("*Bắt buộc nha em !")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "* Điền email cho anh nhé !"
        ),

      password: Yup.string()
        .required("*Bắt buộc nha em !")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Tối thiểu 8 kí tự, ít nhất 1 chữ cái, 1 chữ số, 1 kí tự đặt biệt"
        ),
    }),
    onSubmit: (values) => {
      alert(
        `Chúc mừng ${formik.values.email}! Em đã đăng nhập thành công vào trái tim anh <3`
      );
      // console.log(formik.touched);
      navigate("/");
    },
  });

  return (
    <>
      <div className="login_wrap">
        <h2 className="login_heading">Đăng nhập</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : (
            ""
          )}
          <input
            id="password"
            placeholder="Mật khẩu"
            type="password"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          ) : (
            ""
          )}

          <div className="login_action">
            <Link to="/forgot password">
              <p>Quên mật khẩu ?</p>
            </Link>
            <Link to="/registration">
              <p>Đăng ký ?</p>
            </Link>
          </div>

          <button type="submit" className="btn login_btn">
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
