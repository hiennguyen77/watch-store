import "./RegistrationPage.scss";
import { Radio } from "antd";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
function RegistrationPage() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(1);
  const onChange = (e) => {
    setChecked(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("*Bắt buộc nha em !")
        .min(4, "ít nhất 4 kí tự"),

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

      confirmPassword: Yup.string()
        .required("*Bắt buộc nha em !")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
    }),
    onSubmit: (values) => {
      alert(
        `Chúc mừng ${formik.values.email}! Em đã đăng nhập thành công vào trái tim anh <3`
      );
      // console.log(formik.touched);

      navigate("/login");
    },
  });

  return (
    <>
      <div className="registration_wrap">
        <h1 className="register_heading">Đăng ký</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          ) : (
            ""
          )}
          <Radio.Group
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            onChange={onChange}
            value={checked}
          >
            <Radio value={1}>Nam</Radio>
            <Radio value={2}>Nữ </Radio>
            <Radio value={3}>Khác</Radio>
          </Radio.Group>
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
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          ) : (
            ""
          )}
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
          ) : (
            ""
          )}
          <button type="submit" className="register_btn">
            Đăng ký
          </button>
        </form>
        <Link className="register_back" to="/login">
          <p>
            <MdOutlineArrowBackIosNew className="back_icon" />
            Quay lại
          </p>
        </Link>
      </div>
    </>
  );
}
export default RegistrationPage;
