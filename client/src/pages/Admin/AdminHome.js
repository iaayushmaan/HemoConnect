import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Blood donation is a vital process that saves countless lives every
            day around the world. When individuals donate blood, they contribute
            to a crucial resource that is essential for various medical
            procedures, emergency treatments, and surgeries. Blood donation is a
            selfless act that can make a significant impact on the health and
            well-being of others. One of the primary benefits of blood donation
            is its ability to provide life-saving transfusions for patients with
            medical conditions such as anemia, cancer, trauma, and surgeries.
            Blood transfusions replace lost blood and help maintain adequate
            oxygen levels in the body, allowing patients to recover and heal
            more effectively. Furthermore, blood donation plays a crucial role
            in emergencies and disasters. In times of crisis, such as natural
            disasters or accidents, the demand for blood often increases
            dramatically. By donating blood regularly, individuals ensure that
            blood banks have an adequate supply to meet these urgent needs,
            potentially saving lives in critical situations. Moreover, blood
            donation is a safe and straightforward process that anyone can
            participate in. Donated blood is carefully screened and tested for
            infections and diseases to ensure the safety of both the donor and
            the recipient. Additionally, blood donation centers provide a
            comfortable and supportive environment for donors, making the
            experience positive and rewarding. In addition to its immediate
            life-saving benefits, blood donation also has long-term health
            benefits for donors. Regular blood donation helps reduce the risk of
            certain health conditions, including heart disease and cancer, by
            lowering blood viscosity and stimulating the production of new blood
            cells. Overall, blood donation is a powerful way for individuals to
            give back to their communities and make a meaningful difference in
            the lives of others. By donating blood, individuals become heroes,
            providing hope, healing, and renewed life to those in need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
