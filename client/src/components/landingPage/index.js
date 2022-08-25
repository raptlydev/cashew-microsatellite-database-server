import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;
const { Option } = Select;
const Search = Input.Search;
class Landing extends Component {
  render() {
    return (
      <PageStyle>
          <div className='container'>
              <div className="row background customNavigationStyle">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <div className="single-about-history">
                    <div className="about-history-txt">
                      <p>
                      Cashew is the third most important tree nut crop in the global market. Despite its economic importance, it lacks genomic resources such marker resources. Cashew microsatellite database (CMDB) caters to the needs of microsatellite/Simple sequence repeats (SSR) markers for cashew researchers, which are currently available in a very limited numbers.
                      </p>
                    </div>
                  </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                      <div className="images_box">
                        <figure><img src="../../assets/images/cashew-plantation.png" /></figure>
                      </div>
                    </div>
              </div>
              <div className="about-history background">
				<div className="about-history-content">
					<div className="row">
						<div className="col-md-8 col-sm-12">
            <div className="single-about-history">
                    <div className="about-history-txt">
                      <p>
                      Considering the importance of SSR markers in enhancing the efficiency of germplasm management, genotype identification (fingerprinting) and marker-assisted selection (MAS), a database of microsatellite/SSRs was thought out for cashew. The microsatellite/SSRs were discovered from the draft genome sequence of cashew generated at ICAR-Directorate of Cashew Research, Puttur, Karnataka, India by an in silico mining for SSRs. CMBD is a first microsatellite/SSR marker database for cashew or an Anacardium species based on whole genome SSR mining and it collection of over 46000 SSRs.
                      </p>
                    </div>
                  </div>
						</div>

						<div className="col-md-4 col-sm-12">
                  <div className="about-history-img">
                    <img src="../../assets/images/cashew-cycle.jpg" />
                  </div>
              </div>
              
					  </div>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-txt">
                      <p>
                      CMDB presents an interactive interface to query the microsatellite/SSRs information of cashew genome. CMDB allows users to obtain SSRs based on repeat size/length (in bp), repeat units (Nos); nature of repeat motif [Simple (perfect), Compound or Interspersed (imperfect)]; and sequence composition of repeat motif. CMDB provides the users with the list of SSRs with primer sequence, estimated PCR amplicon size and the estimated annealing temperature (Ta) as the output for all the in silico mined SSRs which makes the researchers’ job easy. CMDB also provides list of wet lab validated SSR markers list also.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
				  </div>
			</div>
              <div className="row background about-history-txt withBorder">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    {/* <div className='centerOfExcellence center'>
                      <img src="../../assets/images/homePic/ICAR-logo.png" width={"45px"} />
                        <b className='centerOfExcellence center'>Centre of Excellence for Biotechnology</b>
                      <img src="../../assets/images/icarLogo.jpg" width={"45px"}/>
                    </div> */}
                    <div className="row background about-history-txt">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <figure><img src="../../assets/images/institute.jpg" /></figure>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <span className='centerAlign'>
                              <img src="../../assets/images/homePic/ICAR-logo.png" width={"70px"} />
                            </span>
                            <div className='instituteCopy'>
                              <p>Centre of Excellence for Biotechnology</p>
                              <p>ICAR-Indian Institute of Cashew Research</p>
                              <p>Puttur-574 202, Karnataka, INDIA</p>
                            </div>
                            <span className='centerAlign'>
                              <img src="../../assets/images/icarLogo.jpg" width={"70px"}/>
                            </span>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row background about-history-txt blueCopy">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <p>
                    <b>Please cite as:</b>
                    <p>Savadi S, Muralidhara B.M, Shamsudheen M., Adiga JD., Thondaiman V., Manjunath K., Manjesh GN., T.N. Raviprasad and Anabi R (2022). Cashew microsatellite database (CMDB)………
                    </p>
                  </p>
                </div>
              </div>
          </div>
      </PageStyle>
    );
  }
}

const actionCreators = {
};

const mapStateToProps = (state) => {
  return {
    global: state.global,
    notifications: state.notifications
  };
};

// const WrappedDynamicRule = Form.create({ name: 'notifications' })(Notification);

export default withRouter(connect(mapStateToProps, actionCreators)(Landing));