"use client";
import styles from "./pricing.module.css";
import { use, useState } from "react";
import Slider from "react-slick";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  ArcElement,
} from "chart.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../../_components/Header";
import Footer from "../../../_components/Footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios, { all } from "axios";

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
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const colorR1 = "rgba(255, 99, 132, 0.5)";
  const colorR2 = "rgba(54, 162, 235, 0.5)";
  const colorR3 = "rgba(255, 206, 86, 0.5)";
  const colorR4 = "rgba(75, 192, 192, 0.5)";
  const colorR5 = "rgba(153, 102, 255, 0.5)";
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [selected, setSelected] = useState(false);
  const [isprod, setIsProd] = useState(true);
  const [isyear, setIsYear] = useState(false);
  const [prod, setProd] = useState();
  const [datas, setDatas] = useState();
  const [allow, setAllow] = useState(false);
  const [years, setYears] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [no, setNo] = useState(true);
  const [countryData,setCountryData] = useState();
  const [final, setFinal] = useState();
  const [grades,setGrades] = useState();
  const [countrychange, setCountryChange] = useState(false);
  const [countries, setCountries] = useState();
  const [gradeChange,setGradeChange] = useState(false);
  const [gradeData,setGradeData] = useState();
  const [region1, setRegion1] = useState();
  const [region2, setRegion2] = useState();
  const [region3, setRegion3] = useState();
  const [region4, setRegion4] = useState();
  const [region5, setRegion5] = useState();
  const [regionChange, setRegionChange] = useState(false);
  const [regionData,setRegionData] = useState();
  const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [datap, setDatap] = useState();

  const handleCategoryChange = (event) => {
    setSelected(true);
    setSelectedCategory(event.target.value);
  };
  const getUserDetails = async () => {
    const user = await axios.post("/api/Users/details");
    if(user.data.error){
      router.push('/')
    }
    else{
   console.log(user);
    const users_id = user.data.user.id;
    console.log(users_id);
    setProd(user.data.user.services);
    console.log(prod);   
    }
    
  };
  useEffect(() => {
    getUserDetails();
  }, []);
 
  useEffect(() => {
    if (isprod && isyear ) {
      if(isyear){
      console.log("this is called")
      const p = changeDataChange();
      }
      if (regionChange) {
      const p =  changeDataChange();
      console.log(p);
      changeCountryList(p);
      }
      if (countrychange) {
        changeDataChangeonCountry();
        getCountryList();
      }
      
      setIsProd(false)
      setAllow(true);
    }
    
  }, [
    prod,
    datas,
    years,
    final,
    region1,
    region2,
    region3,
    region4,
    region5,
    selectedRegion,
    regionChange,
    datap,
    regionData,
    isprod,
    isyear,
    no,
    countries,
    countrychange,
    countryData,
    selectedYear
  ]);
  const handleProductChange = async (event) => {
    const products = event.target.value;
    setSelectedProduct(products);
    console.log(products);
    if (products) {
      const response = await axios.post("/api/pricing", { products });
      setDatas(response.data.Product);
      console.log(response.data.Product);
      var len = response.data.Product.length;
      console.log(len);
      var last = response.data.Product[len - 1]?.Year;
      console.log(last);
      const p = [];
      var i = 0;
      var j = 0;
      p[0] = response.data.Product[0].Year;
      console.log(p);
      console.log(p.length);
      while (i < len) {
        if (p[j] === response.data.Product[i]?.Year) {
          i++;
        } else {
          j++;
          p[j] = response.data.Product[i]?.Year;
          i++;
          console.log(p);
        }
      }
      setYears(p);
      setIsProd(true);
    }
  };
  const changeCountryList = (p) => {
  if(!no){
  console.log(p)
  const uniqueCountries = [...new Set(p?.map((region) => region.Country))];
  console.log(uniqueCountries)
  setCountries(uniqueCountries)
  }
  else{
    setCountries([]);
  }
  };
  function calculateAveragePrices(dataset) {
    const monthTotals = {};
    monthOrder.forEach((month) => {
      monthTotals[month] = { total: 0, count: 0 };
    });
    dataset.forEach((item) => {
      const month = item.Month; // Ensure this matches the data's "Month"
      console.log(`Processing Month: "${month}"`);
      if (monthTotals[month]) {
        // Check if the month exists in monthTotals
        monthTotals[month].total += (item.Max + item.Min) / 2;
        monthTotals[month].count += 1;
      } else {
        console.log(`Month "${month}" not found in monthOrder!`);
      }
    });
    const averagePrices = monthOrder.map((month) => {
      const { total, count } = monthTotals[month];
      return {
        month: month,
        averagePrice: count === 0 ? 0 : total / count,
      };
    });

    return averagePrices;
  }
  const bcolorR1 = "rgba(255, 99, 132, 0.5)";
  const bcolorR2 = "rgba(54, 162, 235, 0.5)";
  const bcolorR3 = "rgba(255, 206, 86, 0.5)";
  const bcolorR4 = "rgba(75, 192, 192, 0.5)";
  const bcolorR5 = "rgba(153, 102, 255, 0.5)";
  function createDataset(data, label, color,border) {
    const prices = monthOrder.map((month) => {
      const monthData = data?.find((d) => d.month === month); // Should be "month" not "Month"
      return monthData ? monthData.averagePrice : 0;
    });

    return {
      label: label,
      data: prices,
      backgroundColor: color, // Use provided color
      borderColor: border, // Border color (optional)
      borderWidth: 1,
    };
  }

  const handleYearChange = async (event) => {
    const year = parseInt(event.target.value, 10);
    console.log(year);
    const s = datas.filter((item) => item.Year === selectedYear);
    console.log(s);
    setFinal(s);
    setSelectedYear(year)
    setIsYear(true);
    setIsProd(true);
  };
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setRegionChange(true);
    setIsProd(true);
    setNo(false);
  };
  const changeDataChange = () => {
    if(!no){
    const data = datas.filter((item) => item.Year === selectedYear);;
    console.log(data)
    const regionDatas = data?.filter(item => item.Region === selectedRegion)
    const data1 = calculateAveragePrices(regionDatas);
    const newDatap = [createDataset(data1, selectedRegion, colorR1,bcolorR1)];
    console.log(newDatap);
    setRegionData(regionDatas);
    console.log(regionDatas)
    setDatap(newDatap);
    return regionDatas;
    }
   else{
    const s = datas.filter((item) => item.Year === selectedYear);
    setFinal(s);
    console.log(s);
    const r1 = s.filter((item) => item.Region === "r1");
    const r2 = s.filter((item) => item.Region === "r2");
    const r3 = s.filter((item) => item.Region === "r3");
    const r4 = s.filter((item) => item.Region === "r4");
    const r5 = s.filter((item) => item.Region === "r5");
    console.log(r3);
    const data1 = calculateAveragePrices(r1);
    const data2 = calculateAveragePrices(r2);
    const data3 = calculateAveragePrices(r3);
    const data4 = calculateAveragePrices(r4);
    const data5 = calculateAveragePrices(r5);
    console.log(data1, data2, data3, data4, data5);
    const newDatap = [
      createDataset(data1, "Region1", colorR1,bcolorR1),
      createDataset(data2, "Region2", colorR2,bcolorR2),
      createDataset(data3, "Region3", colorR3,bcolorR3),
      createDataset(data4, "Region4", colorR4,bcolorR4),
      createDataset(data5, "Region5", colorR5,bcolorR5),
    ];
    console.log(newDatap);
    setDatap(newDatap);
    return [];
   }
    
  };
  const changeDataChangeonCountry = () => {
    const data = datas.filter((item) => item.Year === selectedYear);
    const regionDatas = data?.filter(item => item.Region === selectedRegion)
    console.log(regionDatas)
    const filtercountry = regionDatas?.filter((item) => item.Country === selectedCountry);
    console.log(filtercountry)
    setCountryData(filtercountry)
    const data1 = calculateAveragePrices(filtercountry);
    console.log(data1)
    const newDatap = [createDataset(data1, selectedCountry, colorR1,bcolorR1)];
    console.log(newDatap);
    setDatap(newDatap);
  };
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsProd(true);
    setCountryChange(true);
  };
  const getCountryList = () => {
    const uniqueGrades = [...new Set(countryData?.map((country) => country.Grade))]
    setGrades(uniqueGrades)
    console.log(uniqueGrades);
  }
  const changeGradeData = () => {
 
    const data = datas.filter((item) => item.Year === selectedYear);
    const regionDatas = data?.filter(item => item.Region === selectedRegion)
    console.log(regionDatas)
    const filtercountry = regionDatas?.filter((item) => item.Country === selectedCountry);
    const grade = filtercountry?.filter(item => item.Grade === selectedGrade);
    const data1 = calculateAveragePrices(grade);
    const newDatap = [createDataset(data1, selectedCountry, colorR1,bcolorR1)];
    console.log(newDatap);
    setDatap(newDatap);
  }
  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
    if(event.target.value != ""){
      setGradeChange(true);
      setIsProd(true)
    }
  };
  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };
  const getChartData = () => {
    const data = {
      labels: monthOrder,
      datasets: datap,
    };
    return data;
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dynamic Chart Based on Selection",
      },
    },
  };

  const renderChart = () => {
    const data = getChartData();
    switch (chartType) {
      case "line":
        return (
          <Line className={styles.line} data={data} options={chartOptions} />
        );
      case "doughnut":
        return <Doughnut data={data} options={chartOptions} />;
      case "pie":
        return <Pie data={data} options={chartOptions} />;
      case "bar":
      default:
        return (
          <Bar className={styles.bar} data={data} options={chartOptions} />
        );
    }
  };
  const renderpieChart = () => {
    const data = getChartData();
    return <Pie className={styles.pie} data={data} options={chartOptions} />;
  };
  const renderlineChart = () => {
    const data = getChartData();
    return <Line className={styles.line} data={data} options={chartOptions} />;
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
        <input
          type="text"
          placeholder="Search..."
          className={styles.search_input}
        />
        <button className={styles.search_button}>Search</button>
      </div>
      <div className={styles.banner}>
        <h1 className={styles.heading}>
          Explore the Best from Various Available Categories{" "}
        </h1>
        <p>Select the category you want to view the data for</p>
        <div className={styles.dropdownContainer}>
          <div className="dropd">
            {" "}
            <select
              id="category-dropdown"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={styles.select}
            >
              <option value="">Select a category</option>
              <option value="field1">Monthly Pricing</option>
              <option value="field2">Weekly Pricing</option>
            </select>
          </div>
        </div>
      </div>

     
    {selectedCategory && (
      <div className={styles.Container}>
        <div className={styles.additionalFilters}>
          <div className={styles.dropdownContainer}>
            <select
              id="product-dropdown"
              value={selectedProduct}
              onChange={handleProductChange}
              className={styles.select}
            >
              <option value="">Select a product</option>
              {prod?.map((product, index) => (
                <option key={index} value={product.name}>
                  {product.name}
                </option>
              ))}
              <option value="select">select a val</option>
            </select>
          </div>
          <div className={styles.dropdownContainer}>
            <select
              id="grade-dropdown"
              value={selectedYear}
              onChange={handleYearChange}
              className={styles.select}
            >
              <option value="">Select an year</option>
              {years?.map((product, index) => (
                <option key={index} value={years[index]}>
                  {years[index]}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.dropdownContainer}>
            <select
              id="region-dropdown"
              value={selectedRegion}
              onChange={handleRegionChange}
              className={styles.select}
            >
              <option value="" disabled>Select a region</option>
              <option value="r1">Region 1</option>
              <option value="r2">Region 2</option>
              <option value="r3">Region 3</option>
              <option value="r4">Region 4</option>
              <option value="r5">Region 5</option>
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
              {countries?.map((product, index) => (
                <option key={index} value={countries[index]}>
                  {countries[index]}
                </option>
              ))}
            </select>
          </div>
        <div className={styles.dropdownContainer}>
            <select
              id="grade-dropdown"
              value={selectedGrade}
              onChange={handleGradeChange}
              className={styles.select}
            >
              <option value="" disabled>
                Select a grade
              </option>
              {countryData?.map((product, index) => (
                <option key={index} value={product.Grade}>
                  {product.Grade}
                </option>
              ))}
            </select> 
          </div>
        </div>
        {allow && (
          <div className={styles.chartContainer}>
            <div className={styles.chart}>
              <div className={styles.up}>
                {allow && (<div className={styles.pp}>{renderChart()}
                  {renderlineChart()}
                </div>)}
              </div>
            </div>
            <div className={styles.dropdownContainer}>
              <label htmlFor="chart-type-dropdown" className={styles.label}>
                Chart Type:
              </label>
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
        )}
      </div>
    )}
      

      {(selectedProduct ||
        selectedRegion ||
        selectedCountry ||
        selectedGrade ||
        selectedDate) && (
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
