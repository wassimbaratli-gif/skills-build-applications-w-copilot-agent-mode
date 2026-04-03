

import logo from '../public/logo192.png';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="OctoFit Logo" className="me-2" style={{height: '40px'}} />
            OctoFit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Welcome to <span className="text-primary">OctoFit Tracker</span></h1>
                <p className="card-text text-center">Track your fitness activities, join teams, and climb the leaderboard!</p>
                <div className="text-center mb-4">
                  <a href="#" className="btn btn-primary btn-lg me-2">Get Started</a>
                  <a href="#" className="btn btn-outline-secondary btn-lg">Learn More</a>
                </div>
                <h2 className="mt-5 mb-3">Sample Activities</h2>
                <table className="table table-striped table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th>User</th>
                      <th>Activity</th>
                      <th>Duration (min)</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tony Stark</td>
                      <td>Run</td>
                      <td>30</td>
                      <td>2023-01-01</td>
                    </tr>
                    <tr>
                      <td>Steve Rogers</td>
                      <td>Swim</td>
                      <td>45</td>
                      <td>2023-01-02</td>
                    </tr>
                    <tr>
                      <td>Bruce Wayne</td>
                      <td>Cycle</td>
                      <td>60</td>
                      <td>2023-01-03</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
