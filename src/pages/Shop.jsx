import React,{useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/Productlist'

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=>{
        const filterValue = e.target.value
        if(filterValue==='material'){
            const filteredProducts = products.filter(item=> item.
                category==='material')
            setProductsData(filteredProducts);                
        }

        if(filterValue==='elektronik'){
            const filteredProducts = products.filter(item=> item.
                category==='elektronik')
            setProductsData(filteredProducts);                
        }

        if(filterValue==='perabot rumah'){
            const filteredProducts = products.filter(item=> item.
                category==='perabot rumah')
            setProductsData(filteredProducts);                
        }

        if(filterValue==='perkakas'){
            const filteredProducts = products.filter(item=> item.
                category==='perkakas')
            setProductsData(filteredProducts);                
        }

        if(filterValue==='lain-lain'){
            const filteredProducts = products.filter(item=> item.
                category==='lain-lain')
            setProductsData(filteredProducts);                
        }
    }

    const handleSearch = e=>{
        const searchTerm = e.target.value

        const searchProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchProducts)
    }

    return (<Helmet title="Shop">
        <CommonSection title="Products" />

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='6'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option>Filter By Category</option>
                                <option value="material">Material</option>
                                <option value="elektronik">Elektronik</option>
                                <option value="perabot rumah">Perabot Rumah</option>
                                <option value="perkakas">Perkakas</option>
                                <option value="lain-lain">Lain-lain</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='6' className='text-end'>
                    <div className="filter__widget">
                            <select>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='12'>
                        <div className="search__box">
                            <input type="text" placeholder='Search.....' onChange={handleSearch}/>
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Container>
                <Row>
                    {
                        productsData.length === 0 ? (
                            <h1 className='text-center fs-4'>No product are found!</h1>
                        ) : (
                            <ProductList data={productsData} />                            
                        ) 
                    }
                </Row>
            </Container>
        </section>

    </Helmet>
    )
}

export default Shop


