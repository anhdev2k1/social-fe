import { Button, Form, Input } from "antd";
import Banner from "../../components/Banner/banner";
import style from "./contact.module.scss";
const Contact = () => {
  return (
    <div className={style.contact}>
      <Banner
        heading="Sẵn sàng đưa hoạt động tiếp thị của bạn lên 1 tầm cao mới"
        description="Tiến Long Media"
      />
      <div className={style.container}>
        <div className={style.contact_form}>
          <Form layout="vertical">
            <Form.Item label="Tên của bạn:">
              <Input placeholder="Tên của bạn..." style={{height: "45px"}}/>
            </Form.Item>
            <div className={style.input_flex}>
              <Form.Item label="Điện thoại:" className={style.input_item}>
                <Input placeholder="Điện thoại..." style={{height: "45px"}}/>
              </Form.Item>
              <Form.Item label="Email:" className={style.input_item}>
                <Input placeholder="Email..."style={{height: "45px"}} />
              </Form.Item>
            </div>
            <div className={style.input_flex}>
              <Form.Item label="Tên công ty:"  className={style.input_item}>
                <Input placeholder="Tên công ty..." style={{height: "45px"}}/>
              </Form.Item>
              <Form.Item label="Bạn có cảm nghĩ gì về chúng tôi?"  className={style.input_item}>
                <Input placeholder="Cảm nghĩ..." style={{height: "45px"}}/>
              </Form.Item>
            </div>
            <Button type="primary" className={style.contact_btn}>
              Liên lạc
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
