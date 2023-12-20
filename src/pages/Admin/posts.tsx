/* eslint-disable @typescript-eslint/no-unused-vars */
import Table, { ColumnsType } from "antd/es/table";
import style from "./admin.module.scss";
import { Button, Popconfirm, Space, Tag, notification } from "antd";
import convertDateTime from "../../utils/convertToDate";
import { useEffect, useState } from "react";
import { Post, postApi } from "../../apis/post.api";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await postApi.getAll();
      if (res.data) {
        setPosts(res.data);
        setLoading(false);
        console.log(res.data);
      }
    };
    getPosts();
  }, []);

  //@Handle update post
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdatePost = (postDetail: any) => {
    
    navigate("/admin/posts/create", {
      state: {
        postDetail: postDetail,
      },
    });
  };
  const handleDeletePost = async (postID: string) => {
    try {
      setLoading(true)
      const res = await postApi.deletePost(postID);
      if (res.data) {
        setPosts((prev) => prev.filter((item) => item._id !== postID));
        api.success({
          message: "Xoá bài đăng thành công!",
        });
        setLoading(false)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      api.error({
        message: error.message,
      });
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: ColumnsType<any> = [
    {
      title: "Tên bài đăng",
      dataIndex: "title",
      key: "title",
      width: "20%"
    },
    {
      title: "Mô tả bài đăng",
      dataIndex: "description",
      key: "description",
      width: "30%"
    },
    {
      title: "Loại bài đăng",
      dataIndex: "service_id",
      key: "service_id",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => <Tag color="green">{record.name_service}</Tag>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => <span>{convertDateTime(record.createdAt)}</span>,
    },

    {
      title: "Thao tác",
      key: "action",

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (record: any) => (
        <Space size="middle">
          <Button
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            onClick={() => handleUpdatePost(record)}
          >
            <FontAwesomeIcon icon={faPenToSquare} /> Chỉnh sửa
          </Button>
          <Popconfirm
            title={`Xoá bài đăng ${record.title}`}
            description={`Bạn có chắc chắn muốn xoá bài đăng: ${record.title}?`}
            onConfirm={() => handleDeletePost(record._id)}
            okText="Chắc chắn"
            cancelText="Không"
          >
            <Button
              danger
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <FontAwesomeIcon icon={faTrash} /> Xoá
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className={style.admin}>
      {contextHolder}
      <div className={style.admin_heading}>Danh sách các bài đăng: </div>
      <Table columns={columns} dataSource={posts} loading={loading} />;
    </div>
  );
};

export default Posts;
