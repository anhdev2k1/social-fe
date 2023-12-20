import { Button, Form, Input, notification } from "antd";
import style from "./login.module.scss";
import { IUserPayload, userApi } from "../../apis/user.api";
import { useAppDispatch } from "../../redux/hook";
import { getUser } from "../../redux/features/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useAppDispatch();
  const [api, contextHolder] = notification.useNotification()
  const navigate = useNavigate()
  const onFinish = async (values: IUserPayload) => {
    try {
      const res = await userApi.login(values);
    if (res.data) {
      localStorage.setItem("token", res.data?.token as string);
      dispatch(getUser(res.data))
      api.success({
        message: "Đăng nhập thành công!"
      })
      navigate("/admin")
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      api.error({
        message: error.message
      })
    }
  };
  return (
    <>
      <div className={style.container}>
        {contextHolder}
        <div className={style.login_container}>
          <h3>Welcome back, Friend 🖐️!</h3>
          <Form
            className={style.login_form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              rules={[{ required: true, message: "Vui lòng nhập email!" }]}
              name="email"
            >
              <Input
                className={style.login_input}
                placeholder="Email..."
                style={{ height: "40px" }}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "Vui lòng mật khẩu!" }]}
              name="password"
            >
              <Input.Password
                className={style.login_input}
                placeholder="Password"
                style={{ height: "40px" }}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className={style.form_btn}>
              Đăng nhập
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
