import { useEffect, useState } from "react";
import style from "./list.module.scss";
import { Service, serviceApi } from "../../apis/service.api";
import Loading from "../../components/Loading/loading";
import { useNavigate } from "react-router-dom";
const ListService = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const res = await serviceApi.getAll();
      setServices(res.data!);
      setLoading(false);
    };
    getServices();
  }, []);

  const navigate = useNavigate()
  const handleRedirectDetail = (service: Service) => {
    navigate(`/services/${service.slug}`, {
      state: {
        service: service
      }
    })
  }
  return (
    <div className={style.services}>
      <div className={style.container}>
        <div className={style.services_list}>
          {loading ? (
            <Loading />
          ) : services.length > 0 ? (
            services.map((service) => {
              return (
                <div className={style.service_item}>
                  <div className={style.serivce_content}>
                    <h3 className={style.service_heading}>{service?.name_service}</h3>
                    <div
                      className={style.service_btn}
                      onClick={() => handleRedirectDetail(service)}
                    >
                      Chi tiết
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Không có dịch vụ nào!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListService;
