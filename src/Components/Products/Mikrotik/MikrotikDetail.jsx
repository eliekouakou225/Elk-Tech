import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Error404 from '../../../Pages/Error404';
// import sproduct from '../../../Assets/img/sproduct_1.png'
// import { products } from '../../../Assets/Data/dataProducts';
import { mikrotiks } from '../../../Assets/Data/dataProducts';
import { convertTitleToUrl } from '../../../Components/Utils/utils'
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect } from "react";

function MikrotikDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const mikrotik = mikrotiks.find((mikrotik) => convertTitleToUrl(mikrotik.title) === title);
    const pageTitle = `${mikrotik.title} - Boutique`;

    useEffect(() => {
        document.title = `${pageTitle} | Elk-Tech`;
    }, [pageTitle]);
    if (!mikrotik) {
        return <Error404 />;
    }

    return (
        <>
            <div className="product_image_area section_padding p-500">
                <div className="container">
                    <div className="row s_product_inner justify-content-between">
                        <div className="col-lg-7 col-xl-7">
                            <div className="product_slider_img">
                                <div id="vertical">
                                    <div>
                                        <img src={mikrotik.image} alt={mikrotik.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="s_product_text">
                                <Breadcrumb>
                                    <Breadcrumb.Item > <Link to={'/boutique'}>Boutique</Link> </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={'/boutique/categorie/accessoires'}>MikroTik  </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>{mikrotik.title}</Breadcrumb.Item>
                                </Breadcrumb>
                                <h3> Mikrotik {mikrotik.title} </h3>
                                <h2>{mikrotik.price} FCFA</h2>
                                <ul className="list">
                                    <li> <span>Catégorie</span> : {mikrotik.category} </li>
                                    <li>  <span>Disponibilité </span> : En Stock  </li>
                                </ul>
                                <h3>Description</h3>
                                <p>{mikrotik.details[0]}</p>
                                <p>{mikrotik.details[1]}</p>
                                <p>{mikrotik.details[2]}</p>
                                <div className="card_area d-flex justify-content-between align-items-center">
                                    <Link to={'/'}>
                                        <button className='registration-button-whatsapp'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" fill="currentColor" width="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                            <span>Commander sur WA</span>
                                        </button>
                                    </Link>
                                    <Link href=" {#} " className="like_us" data-cursor-size="20px">shared icon <i className="ti-heart"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h3>Caracterique du produit</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="2" >Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Product code</th>
                            <td>{mikrotik.ProduCode}</td>
                        </tr>
                        <tr>
                            <th scope="row">Architecture</th>
                            <td>{mikrotik.Architecture}</td>
                        </tr>
                        <tr>
                            <th scope="row">CPU</th>
                            <td>{mikrotik.CPU}</td>
                        </tr>
                        <tr>
                            <th scope="row">CPU core count</th>
                            <td>{mikrotik.CPUCoreCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">CPU nominal frequency</th>
                            <td>{mikrotik.CPUNominalFrequency}</td>
                        </tr>
                        <tr>
                            <th scope="row">Dimensions</th>
                            <td>{mikrotik.Dimensions}</td>
                        </tr>
                        <tr>
                            <th scope="row">RouterOS license</th>
                            <td>{mikrotik.RouterOSLicense}</td>
                        </tr>
                        <tr>
                            <th scope="row">Operating System</th>
                            <td>{mikrotik.OperatingSystem}</td>
                        </tr>
                        <tr>
                            <th scope="row">Size of RAM	</th>
                            <td>{mikrotik.SizeofRAM}</td>
                        </tr>
                        <tr>
                            <th scope="row">Storage size</th>
                            <td>{mikrotik.StorageSize}</td>
                        </tr>
                        <tr>
                            <th scope="row">Storage type</th>
                            <td>{mikrotik.StorageType}</td>
                        </tr>
                        <tr>
                            <th scope="row">MTBF</th>
                            <td>{mikrotik.MTBF}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tested ambient temperature	</th>
                            <td>{mikrotik.TestedAmbientTemperature}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MikrotikDetail


