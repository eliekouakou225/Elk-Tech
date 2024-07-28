import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Error404 from '../../../Pages/Error404';
// import sproduct from '../../../Assets/img/sproduct_1.png'
// import { products } from '../../../Assets/Data/dataProducts';
import { mikrotiks } from '../../../Assets/Data/dataProducts';
import { convertTitleToUrl } from '../../../Components/Utils/utils'
// import Breadcrumb from 'react-bootstrap/Breadcrumb';


function MikrotikDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const mikrotik = mikrotiks.find((mikrotik) => convertTitleToUrl(mikrotik.title) === title);

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
                                {/* <Breadcrumb>
                                    <Breadcrumb.Item > <Link to={'/boutique'}>Boutique</Link> </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={'/boutique/categorie/mikrotik'}>MikroTik  </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>{mikrotik.title}</Breadcrumb.Item>
                                </Breadcrumb> */}
                                <h3> {mikrotik.title} </h3>
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
                                    <Link href="{#}" className="btn_buy" data-cursor-size="20px">Commender</Link>
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


