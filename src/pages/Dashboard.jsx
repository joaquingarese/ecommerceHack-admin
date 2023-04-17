import "./styles/dashboard.css";

function Dashboard() {
  return (
    <div className="container dashboard-container" id="dashboard">
      <h5 className="fw-bold pb-3">Panel de control</h5>
      <strong>last 30 days</strong>

      <div className="row">
        <div className="col section d-flex">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
            </svg>
          </div>
          <div className="stats">
            <span>Montly Sales</span>
            <h4>
              450.090
              <small className="text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-arrow-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
                18.6 %
              </small>
            </h4>
          </div>
        </div>
        <div className="col section d-flex">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-envelope-open" viewBox="0 0 16 16">
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
            </svg>
          </div>
          <div className="stats">
            <span>Conversion Rate</span>
            <h4>
              19.16%{" "}
              <small className="text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-arrow-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
                32.1%
              </small>
            </h4>
          </div>
        </div>
        <div className="col section d-flex">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <div className="stats">
            <span>Avg. Click Rate</span>
            <h4>
              24.57{" "}
              <small className="text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                </svg>
                12.3%
              </small>
            </h4>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User</th>
            <th scope="col">Total Price (usd)</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">128749812374</th>
            <td>Pedro (pedro@gmail.com)</td>
            <td>1000</td>
            <td>
              <button className="btn btn-primary">view</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;
