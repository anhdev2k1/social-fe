/* eslint-disable @typescript-eslint/no-explicit-any */
import Table, { ColumnsType } from "antd/es/table";
import style from "./admin.module.scss";
import { Button, Input, Popconfirm, Space, Tag, notification } from "antd";
import convertDateTime from "../../utils/convertToDate";
import { useEffect, useState } from "react";
import { Service, serviceApi } from "../../apis/service.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { convertToSlug } from "../../utils/convertToSlug";

const ServicesAdmin = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<string>("");
  const [serviceEdit, setServiceEdit] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const res = await serviceApi.getAll();
      if (res.data) {
        setServices(res.data);
        setLoading(false);
      }
    };
    getServices();
  }, []);

  const handleEditService = async (serviceID: string) => {
    try {
      const newService = {
        name_service: serviceEdit,
        slug: convertToSlug(serviceEdit),
      };
      setLoading(true)
      const res = await serviceApi.updateService(serviceID, newService);
      setIsEdit("")
      setLoading(false)
      setServices((prev) => prev.map(service => {
        if(service._id === serviceID){
          return {
            ...service,
            name_service: serviceEdit
          }
        }
        return {
          ...service
        }
      }))
      if (res.data) {
        api.success({
          message: "Cập nhật dịch vụ thành công!",
        });
      }
    } catch (error: any) {
      api.success({
        message: error.message,
      });
    }
  };

  const handleDeleteService = async (serviceID : string) => {
    try {
      const res = await serviceApi.deleteService(serviceID)
      setServices((prev) => prev.filter(service => service._id !== serviceID))
      if(res.data){
        api.success({
          message: "Xoá dịch vụ thành công!"
        })
      }
    } catch (error: any) {
      api.error(error.message)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: ColumnsType<any> = [
    {
      title: "Tên dịch vụ",
      key: "name",
      render: (record: any) =>
        isEdit === record._id && isEdit ? (
          <Input
            placeholder="Nhập tên dịch vụ"
            defaultValue={record.name_service}
            onChange={(e) => setServiceEdit(e.target.value)}
            onBlur={() => handleEditService(record._id)}
          />
        ) : (
          <span>{record.name_service}</span>
        ),
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => <Tag color="green">{record}</Tag>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "updatedAt",
      key: "updatedAt",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => <span>{convertDateTime(record.createdAt)}</span>,
    },

    {
      title: "Thao tác",
      key: "action",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (record: any) => (
        <Space size="middle">
          <Button
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            onClick={() => setIsEdit(record._id)}
          >
            <FontAwesomeIcon icon={faPenToSquare} /> Chỉnh sửa
          </Button>
          <Popconfirm
            title={`Xoá dịch vụ ${record.name_service}`}
            description={`Bạn có chắc chắn muốn xoá dịch vụ ${record.name_service}?`}
            onConfirm={() => handleDeleteService(record._id)}
            okText="Chắc chắn"
            cancelText="Không"
          >
            <Button
              danger
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className={style.admin}>
      {contextHolder}
      <h3 className={style.admin_heading}>Danh sách các dịch vụ: </h3>
      <Table
        columns={columns}
        dataSource={services}
        className="service__table"
        loading={loading}
      />
      ;
    </div>
  );
};

export default ServicesAdmin;
