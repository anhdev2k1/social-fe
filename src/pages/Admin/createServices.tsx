import { Button, Form, Input, notification } from "antd";
import style from "./admin.module.scss";
import { convertToSlug } from "../../utils/convertToSlug";
import { Service, serviceApi } from "../../apis/service.api";
const CreateService = () => {
  const [api, contextHolder] = notification.useNotification();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    try {
      const newService: Service = {
        ...values,
        slug: convertToSlug(values.name_service),
      };

      const res = await serviceApi.createService(newService);
      if (res.data) {
        api.success({
          message: "Tạo dịch vụ thành công!",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      api.error({
        message: "Tạo dịch vụ thành công!",
      });
    }
  };
  return (
    <div className={style.admin}>
      {contextHolder}

      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        style={{ width: "650px" }}
        className={style.form_serivce}
      >
        <h3 className={style.admin_heading}>🚀 Tạo dịch vụ:</h3>
        <Form.Item
          label="Tên dịch vụ: "
          name="name_service"
          rules={[{ required: true, message: "Vui lòng nhập tên dịch vụ!" }]}
        >
          <Input placeholder="Tên dịch vụ..." style={{ height: "40px" }} />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={style.formService_btn}
        >
          Tạo dịch vụ
        </Button>
      </Form>
    </div>
  );
};

export default CreateService;
