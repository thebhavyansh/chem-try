// pages/enhanced-production-tracking.js
"use client"
// pages/enhanced-production-tracking.js

import Head from 'next/head';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { useState, useEffect, useRef  } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './EnhancedProductionTracking.module.css';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function EnhancedProductionTracking() {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Production',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);

  // Function to scroll to the first div
  const scrollToFirstDiv = () => {
    firstDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to the second div
  const scrollToSecondDiv = () => {
    secondDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container className={styles.container}>
      <div className={styles.upr}>
        <div onClick={scrollToFirstDiv} className={styles.lft}>
          <h2 >Demand analysis</h2>
        </div>
        <div onClick={scrollToSecondDiv} className={styles.lft}>
          <h2 >Supply analysis</h2>
        </div>
      </div>
      <Head>
        <title>Enhanced Production Tracking</title>
        <meta name="description" content="Track production dynamics including plant shutdowns and chemical prices" />
      </Head>
      <Typography variant="h3" component="h1" gutterBottom className={styles.heading}>
        Enhanced Production Tracking
      </Typography>
      <Typography variant="h6" gutterBottom className={styles.subHeading}>
        Welcome to our Enhanced Production Tracking Page. Here, we provide comprehensive insights into production dynamics, including plant shutdowns and chemical prices, to help you make better-informed decisions.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="h2" gutterBottom>
                Real-Time Plant Shutdown Tracking
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Interactive Timeline" secondary="Explore our detailed timeline of shutdown events, including durations and recovery times." />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Impact Analysis" secondary="Understand the effects of shutdowns on production capacity, supply chain stability, and market prices." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="h2" gutterBottom>
                Dynamic Chemical Pricing
              </Typography>
              <div className={styles.chartContainer}>
                <Line data={data} />
              </div>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.typographyBody}>
                Monitor current chemical prices with our dynamic pricing model. Access historical price trends to identify patterns and forecast future prices.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" component="h3" gutterBottom className={styles.sectionTitle} ref={secondDivRef}>
        Supply Side Insights
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="h2" gutterBottom>
                Capacity by Location
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.typographyBody}>
                Visualize production capacities by location with interactive maps. Analyze regional demand and logistics efficiency overlays for deeper insights.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Additional Supply Side Insights */}
      </Grid>

      <Typography variant="h4" component="h3" gutterBottom className={styles.sectionTitle} ref={firstDivRef }>
        Demand Side Insights
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="h2" gutterBottom>
                Overall Demand
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.typographyBody}>
                Utilize AI-driven predictive analytics for accurate and dynamic demand forecasts. Incorporate market sentiment from news, social media, and industry reports.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Additional Demand Side Insights */}
      </Grid>

      <Typography variant="h4" component="h3" gutterBottom className={styles.sectionTitle}>
        Sustainability and Environmental Metrics
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" component="h2" gutterBottom>
                Sustainability Tracking
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.typographyBody}>
                Monitor sustainability metrics like carbon footprint, energy consumption, and waste generation. Understand the environmental impact of production and shutdown events.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Additional Sustainability Insights */}
      </Grid>
    </Container>
  );
}
