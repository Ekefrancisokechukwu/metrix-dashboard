import { inter } from "@/app/style/font";
import { recentOrders } from "@/lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function RecentOrder() {
  return (
    <Card className="custom-scrollbar">
      <h1 className={` ${inter.className} card-title`}>Recent Orders</h1>

      <div className="card-contents">
        {recentOrders.map((order, i) => {
          return (
            <div key={i} className="card-item">
              <div className="card-left">
                <Image src={order.image} alt="phone" width={40} height={40} />

                <div>
                  <p>{order.name}</p>
                  <h4>{order.price} x 1</h4>
                </div>
              </div>

              <div className="card-right">
                <p className="card-date">{order.date}</p>
                <span
                  className={`card-tag ${
                    order.status === "Pending" ? "pending" : "completed"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

const Card = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: var(--rounded-md);
  height: 100%;

  .card-title {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 500;
  }

  .card-contents {
    margin-top: 1rem;
  }

  .card-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: var(--border);
    padding: 12px 0;
  }

  .card-left {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: var(--primary-color);
    font-size: 0.8rem;

    h4 {
      font-weight: 500;
      margin-top: 0.3rem;
    }
  }

  .card-right {
    font-size: 0.7rem;
  }

  .card-date {
    color: var(--gray-200);
  }

  .card-tag {
    border-radius: var(--rounded-sm);
    margin-top: 0.4rem;
    padding: 2px 15px;
    display: inline-block;
  }

  .pending {
    background-color: #f57e771f;
    color: #cc5f5f;
  }
  .completed {
    background-color: #32936f1f;
    color: #519c66;
  }
`;
