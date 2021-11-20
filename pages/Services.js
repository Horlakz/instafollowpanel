import React from "react";

export default function Services() {
  const tfsData = [
    {
      ID: "667",
      service: "Instagram Followers | Real+Bots | 1M/monthly",
      RatePer1000: "354.75",
      MinOrder: "500",
      MaxOrder: "200000",
      AverageTime: "47 Minutes",
    },
    {
      ID: "667",
      service: "Instagram Followers | Real+Bots | 1M/monthly",
      RatePer1000: "354.75",
      MinOrder: "500",
      MaxOrder: "200000",
      AverageTime: "47 Minutes",
    },
    {
      ID: "667",
      service: "Instagram Followers | Real+Bots | 1M/monthly",
      RatePer1000: "354.75",
      MinOrder: "500",
      MaxOrder: "200000",
      AverageTime: "47 Minutes",
    },
  ];

  // functions
  const closeModal = () => {
    document.getElementById("modal").style.height = "0";
  };

  const showModal = () => {
    document.getElementById("modal").style.height = "20rem";
  };

  return (
    // onclick function to display modal when the veiw button is clicked

    <div className="bg-[#ccc] p-2">
      <section className="overflow-scroll m-2">
        <h2 className="section-title mx-4">Today's Fastest Service</h2>
        <table className="table-auto w-[40rem] divide-y-2 divide-black sm:w-full">
          <tr className="tr">
            <th>ID</th>
            <th>Services</th>
            <th>Rate Per 1000</th>
            <th>Min Order</th>
            <th>Max Order</th>
            <th>Average Time</th>
            <th>Description</th>
          </tr>
          {tfsData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.ID}</td>
                <td>{item.service}</td>
                <td>{item.RatePer1000}</td>
                <td>{item.MinOrder}</td>
                <td>{item.MaxOrder}</td>
                <td>{item.AverageTime}</td>
                <td>
                  <button className="btn" onClick={showModal}>Veiw</button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>

      {/* Modal */}
        <div id="modal">
          <span className="close float-right p-3 text-3xl text-red-900 cursor-pointer" onClick={closeModal}>
            &times;
          </span>
          <h2 className="section-title p-4 text-center">Modal Header</h2>
          <p className="section-descr p-2">
            Some text in the Modal Body.
            <br />
            <br />
          </p>
        </div>
    </div>
  );
}
