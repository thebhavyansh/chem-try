"use client"
import styles from './pricing.module.css'
import { use, useState } from 'react';
import Slider from 'react-slick';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import Link from 'next/link';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [chartType, setChartType] = useState('bar');
  const [selected,setSelected] = useState(false);
  const handleCategoryChange = (event) => {
    setSelected(true);
    setSelectedCategory(event.target.value);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const getChartData = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Example Data',
          data: labels.map(() => Math.floor(Math.random() * 100)),
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        },
      ],
    };
    return data;
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dynamic Chart Based on Selection',
      },
    },
  };

  const renderChart = () => {
    const data = getChartData();
    switch (chartType) {
      case 'line':
        return <Line data={data} options={chartOptions} />;
      case 'doughnut':
        return <Doughnut data={data} options={chartOptions} />;
      case 'pie':
        return <Pie data={data} options={chartOptions} />;
      case 'bar':
      default:
        return <Bar data={data} options={chartOptions} />;
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={styles.container}>
      <Header />
       <div className={styles.search_container}>
            <input type="text" placeholder="Search..." className={styles.search_input} />
            <button className={styles.search_button}>Search</button>
        </div>
       <div className={styles.banner}>
       <h1 className={styles.heading}>
      Explore the Best from Various Available Categories </h1>
      <p>Select the category you want to view the data for</p>
      <div className={styles.dropdownContainer}>
       <div className="dropd"> <select
          id="category-dropdown"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.select}
        >
          <option value="">Select a category</option>
          <option value="field1">Field 1</option>
          <option value="field2">Field 2</option>
          <option value="field3">Field 3</option>
          <option value="field4">Field 4</option>
          <option value="field5">Field 5</option>
        </select></div>
      </div>
        </div> 

        <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          <div className={styles.sliderTab}><h3>Tab 1</h3></div>
          <div className={styles.sliderTab}><h3>Tab 2</h3></div>
          <div className={styles.sliderTab}><h3>Tab 3</h3></div>
          <div className={styles.sliderTab}><h3>Tab 4</h3></div>
          <div className={styles.sliderTab}><h3>Tab 5</h3></div>
          <div className={styles.sliderTab}><h3>Tab 6</h3></div>
        </Slider>
      </div>
      
      
    {
        selected && (
          <div className={styles.Container}>
            <div className={styles.chartContainer}>
       <div className={styles.chart}>
       {renderChart()}
       </div>
        <div className={styles.dropdownContainer}>
          <label htmlFor="chart-type-dropdown" className={styles.label}>Chart Type:</label>
          <select
            id="chart-type-dropdown"
            value={chartType}
            onChange={handleChartTypeChange}
            className={styles.select}
          >
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="doughnut">Doughnut</option>
            <option value="pie">Pie</option>
          </select>
        </div>
      </div>
<div className={styles.additionalFilters}>
        <div className={styles.dropdownContainer}>
          
          <select
            id="product-dropdown"
            value={selectedProduct}
            onChange={handleProductChange}
            className={styles.select}
          >
            <option value="">Select a product</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
            <option value="product4">Product 4</option>
            <option value="product5">Product 5</option>
          </select>
        </div>
        <div className={styles.dropdownContainer}>
          
          <select
            id="region-dropdown"
            value={selectedRegion}
            onChange={handleRegionChange}
            className={styles.select}
          >
            <option value="">Select a region</option>
            <option value="region1">Region 1</option>
            <option value="region2">Region 2</option>
            <option value="region3">Region 3</option>
            <option value="region4">Region 4</option>
            <option value="region5">Region 5</option>
          </select>
        </div>
        <div className={styles.dropdownContainer}>
          
          <select
            id="country-dropdown"
            value={selectedCountry}
            onChange={handleCountryChange}
            className={styles.select}
          >
            <option value="">Select a country</option>
            <option value="country1">Country 1</option>
            <option value="country2">Country 2</option>
            <option value="country3">Country 3</option>
            <option value="country4">Country 4</option>
            <option value="country5">Country 5</option>
          </select>
        </div>
        <div className={styles.dropdownContainer}>
        
          <select
            id="grade-dropdown"
            value={selectedGrade}
            onChange={handleGradeChange}
            className={styles.select}
          >
            <option value="">Select a grade</option>
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
            <option value="grade4">Grade 4</option>
            <option value="grade5">Grade 5</option>
          </select>
        </div>
        <div className={styles.dropdownContainer}>
        
          <input
            type="date"
            id="date-picker"
            value={selectedDate}
            onChange={handleDateChange}
            className={`${styles.input}`}
          />
        </div>
       
      </div>
          </div>
        )
    }
      
      {(selectedProduct || selectedRegion || selectedCountry || selectedGrade || selectedDate) && (
        <div className={styles.selectedCategory}>
          <p>
            You have selected:
            {selectedProduct && ` Product: ${selectedProduct},`}
            {selectedRegion && ` Region: ${selectedRegion},`}
            {selectedCountry && ` Country: ${selectedCountry},`}
            {selectedGrade && ` Grade: ${selectedGrade},`}
            {selectedDate && ` Date: ${selectedDate}`}
          </p>
        </div>
      )}

      
      <section id={styles.realTimePricing}>
        <div className={styles.price_card} data-chemical="petrochemical">
            <h3>Petrochemical</h3>
            <p id="petrochemicalPrice"></p>
        </div>
        <div className={styles.price_card} data-chemical="pharma">
            <h3>Pharma</h3>
            <p id="pharmaPrice"></p>
        </div>
        <div className={styles.price_card} data-chemical="bulkChemicals">
            <h3>Bulk Chemicals</h3>
            <p id="bulkChemicalsPrice"></p>
        </div>
        <div className={styles.price_card} data-chemical="specialityChemicals">
            <h3>Speciality Chemicals</h3>
            <p id="specialityChemicalsPrice"></p>
        </div>
        <div className={styles.price_card} data-chemical="onDemand">
            <h3>On-Demand</h3>
            <p id="onDemandPrice"></p>
        </div>
    </section>
   
     <Footer />
    </div>
  );
};

export default CategoryPage;
