import user from "../images/user.jpg";
import CancelIcon from "@material-ui/icons/Cancel";
export default function Dashboard() {
    return(

        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-danger text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <div className="float-start mini-stat-img me-4">
                                                <img src={user} alt="" />
                                            </div>
                                            <h5 className="font-size-16 text-uppercase text-white-50">Orders</h5>
                                            <h4 className="fw-medium font-size-24">1,685 <i className="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div className="mini-stat-label bg-success">
                                                <p className="mb-0">+ 12%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="/#" className="text-white-50"><i className="mdi mdi-arrow-right h5" ><CancelIcon /></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1" >View Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-success text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <div className="float-start mini-stat-img me-4">
                                            <img src={user} alt="" />
                                            </div>
                                            <h5 className="font-size-16 text-uppercase text-white-50">Revenue</h5>
                                            <h4 className="fw-medium font-size-24">52,368 <i className="mdi mdi-arrow-down text-danger ms-2"></i></h4>
                                            <div className="mini-stat-label bg-danger">
                                                <p className="mb-0">- 28%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="/#" className="text-white-50"><i className="mdi mdi-arrow-right h5"><CancelIcon /></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">View Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-warning text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <div className="float-start mini-stat-img me-4">
                                            <img src={user} alt="" />
                                            </div>
                                            <h5 className="font-size-16 text-uppercase text-white-50">Average Price</h5>
                                            <h4 className="fw-medium font-size-24">15.8 <i className="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div className="mini-stat-label bg-info">
                                                <p className="mb-0"> 00%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="/#" className="text-white-50" ><i className="mdi mdi-arrow-right h5"><CancelIcon /></i>
                                                </a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">View Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card mini-stat bg-info text-white">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <div className="float-start mini-stat-img me-4">
                                            <img src={user} alt="" />
                                            </div>
                                            <h5 className="font-size-16 text-uppercase text-white-50">Product Sold</h5>
                                            <h4 className="fw-medium font-size-24">2436 <i className="mdi mdi-arrow-up text-success ms-2"></i></h4>
                                            <div className="mini-stat-label bg-warning">
                                                <p className="mb-0">+ 84%</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="float-end">
                                                <a href="/#" className="text-white-50"><i className="mdi mdi-arrow-right h5" ><CancelIcon /></i></a>
                                            </div>

                                            <p className="text-white-50 mb-0 mt-1">View Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
           
        </div>

    )

}