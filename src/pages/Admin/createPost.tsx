import style from "./admin.module.scss";
import EditToolbar, { formats, modules } from "../../utils/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import { Button, Form, Input, Select, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Service, serviceApi } from "../../apis/service.api";
import { postApi } from "../../apis/post.api";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading/loading";
import { convertToSlug } from "../../utils/convertToSlug";
const CreatePost = () => {
  const [formPost] = Form.useForm();
  const [values, setValues] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [api, contextHolder] = notification.useNotification();
  const location = useLocation();
  const { state } = location;
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (state?.postDetail) {
      const getPost = async () => {
        setLoading(true);
        const res = await postApi.getById(state?.postDetail._id);
        console.log(res.data);
        formPost.setFieldsValue({
          ...res.data!,
          service_id: state?.postDetail.service_id?._id,
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        setValues(res.data?.content!);
        setLoading(false);
      };
      getPost();
    }
  }, []);
  useEffect(() => {
    const getServices = async () => {
      const res = await serviceApi.getAll();
      if (res.data) {
        setServices(res.data);
      }
    };
    getServices();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (data: any) => {
    const newPost = {
      ...data,
      slug: convertToSlug(data.title),
      content: values,
    };
    if (state?.postDetail) {
      try {
        setLoading(true);
        await postApi.updatePost(state?.postDetail?._id, newPost);
        api.success({
          message: "Cập nhật bài đăng thành công!",
        });
        setLoading(false);
        formPost.resetFields();
        setValues("");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        api.success({
          message: `Lỗi: ${error.message}`,
        });
      }
    } else {
      try {
        setLoading(true);
        const res = await postApi.createPost(newPost);
        if (res.data) {
          setLoading(false);
          formPost.resetFields();
          setValues("");
          api.success({
            message: "Tạo bài đăng thành công!",
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        api.success({
          message: `Lỗi: ${error.message}`,
        });
      }
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.admin}>
          {contextHolder}
          {loading ? (
            <Loading />
          ) : (
            <Form
              form={formPost}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item name="title" label="Tiêu đề bài đăng: ">
                <Input
                  placeholder="Nhập tiêu đề..."
                  style={{ height: "40px" }}
                />
              </Form.Item>

              <Form.Item name="description" label="Mô tả bài đăng">
                <TextArea placeholder="Nhập mô tả..." />
              </Form.Item>
              <Form.Item name="service_id">
                <Select
                  placeholder="Chọn loại dịch vụ"
                  style={{ height: "40px" }}
                >
                  {services &&
                    services.map((service) => {
                      return (
                        <Option value={service._id}>
                          {service.name_service}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <EditToolbar toolbarId="toolbar" />
              <ReactQuill
                theme="snow"
                placeholder={"Nhập nội dung bài đăng..."}
                modules={modules("toolbar")}
                formats={formats}
                value={values}
                onChange={setValues}
              />

              <div className={style.form_btn}>
                {state?.postDetail ? (
                  <Button
                    type="primary"
                    style={{ backgroundColor: "black" }}
                    className={style.formBtn_item}
                    htmlType="submit"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Cập nhật bài đăng
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    style={{ backgroundColor: "black" }}
                    className={style.formBtn_item}
                    htmlType="submit"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Tạo bài đăng
                  </Button>
                )}
              </div>
            </Form>
          )}
        </div>
      )}
    </>
  );
};

export default CreatePost;
