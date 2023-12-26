<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div class="swiper-container swiper-container-horizontal swiper swiper-card-advance-bg"
        id="swiper-with-pagination-cards">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row">
              <div class="col-12">
                <h4 class="text-white mb-0 mt-2">
                  Welcome to Clinic Information System!
                  <img src="../../assets/logos/clinic-logo.png" class="img-fluid" height="50" width="50" />
                </h4>
                <h3 class="text-white">Hello, <span class="fw-bold">Joenell Alonzo</span></h3>

                <span class="text-white fs-4">See Dashboard Analytics</span>
              </div>
              <!-- <div class="row">
                <div class="col-lg-7 col-md-9 col-12 order-2 order-md-1">
                  <h6 class="text-white mt-0 mt-md-3 mb-3">
                    Traffic
                  </h6>
                  <div class="row">
                    <div class="col-6">
                      <ul class="list-unstyled mb-0">
                        <li class="d-flex mb-4 align-items-center">
                          <p class="mb-0 fw-medium me-2 website-analytics-text-bg">
                            28%
                          </p>
                          <p class="mb-0">Sessions</p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <ul class="list-unstyled mb-0">
                        <li class="d-flex mb-4 align-items-center">
                          <p class="mb-0 fw-medium me-2 website-analytics-text-bg">
                            3.1k
                          </p>
                          <p class="mb-0">Page Views</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ Website Analytics -->
    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div class="card">
        <div class="card-body pb-0">
          <div class="d-flex align-items-center justify-content-between">
            <div class="card-text">
              <h3 class="card-title mb-0 mt-2 mb-3">97.5k</h3>
              <span class="fs-4">Total No. of Registered User</span>
              <div class="mb-5">
                <span></span>
              </div>
            </div>
            <div class="card-image">
              <div class="badge p-2 bg-label-primary mb-2 rounded">
                <i class="ti ti-user" style="font-size: 4rem;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-3">
          <!-- <img src="../../assets/logos/line.webp" class="img-fluid" width="100%" /> -->
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div class="card">
        <div class="card-body pb-0">
          <div class="d-flex align-items-center justify-content-between">
            <div class="card-text">
              <h3 class="card-title mb-0 mt-2 mb-3">97.5k</h3>
              <span class="fs-4">Total No. of Physicians</span>
              <div class="mb-5">
                <span></span>
              </div>
            </div>
            <div class="card-image">
              <div class="badge p-2 bg-label-warning mb-2 rounded">
                <i class="ti ti-stethoscope" style="font-size: 4rem;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-3">
          <!-- <img src="../../assets/logos/line.webp" class="img-fluid" width="100%" /> -->
        </div>
      </div>
    </div>


    <!-- Earning Reports -->
    <div class="col-lg-8 mb-4">
      <div class="card h-100">
        <div class="card-header pb-0 d-flex justify-content-between mb-lg-n4">
          <div class="card-title mb-0">
            <h5 class="mb-0 fs-3">Chart Analytics</h5>
            <span class="text-muted fs-5">Total Number of Consulted Patients</span>
          </div>
        </div>
        <div class="card-body">
          <Chart class="mt-2" type="bar" :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <!--/ Earning Reports -->

    <!-- Support Tracker -->
    <div class="col-lg-4 mb-4">
      <div class="card h-100">
        <div class="card-header d-flex justify-content-between pb-0">
          <div class="card-title mb-0">
            <h5 class="mb-0">Patient Count Tracker</h5>
            <small class="text-muted">As of December 2023</small>
          </div>
          <div class="dropdown">
            <button class="btn p-0" type="button" id="supportTrackerMenu" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <i class="ti ti-dots-vertical ti-sm text-muted"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="supportTrackerMenu">
              <a class="dropdown-item" href="javascript:void(0);">View More</a>
              <a class="dropdown-item" href="javascript:void(0);">Delete</a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-sm-4 col-md-12 col-lg-4">
              <div class="mt-lg-4 mt-lg-2 mb-lg-4 mb-2 pt-1">
                <h1 class="mb-0">164</h1>
                <p class="mb-0 fs-3">Total</p>
              </div>
              <ul class="p-0 m-0">
                <li class="d-flex gap-3 align-items-center mb-lg-3 pt-2 pb-1">
                  <div class="badge rounded bg-label-primary p-1">
                    <i class="ti ti-ticket ti-sm"></i>
                  </div>
                  <div>
                    <h6 class="mb-0 text-nowrap fs-5">Total No of Registered Patients</h6>
                    <span class="fs-5">142</span>
                  </div>
                </li>
                <li class="d-flex gap-3 align-items-center mb-lg-3 pb-1">
                  <div class="badge rounded bg-label-info p-1">
                    <i class="ti ti-circle-check ti-sm"></i>
                  </div>
                  <div>
                    <h6 class="mb-0 text-nowrap fs-5">Total No of Active Consultation</h6>
                    <span class="fs-5">28</span>
                  </div>
                </li>
                <li class="d-flex gap-3 align-items-center pb-1">
                  <div class="badge rounded bg-label-warning p-1">
                    <i class="ti ti-clock ti-sm"></i>
                  </div>
                  <div>
                    <h6 class="mb-0 text-nowrap fs-5">Total No of Inactive Consultation</h6>
                    <span class="fs-5">23</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-12 col-sm-8 col-md-12 col-lg-8">
              <div id="supportTracker"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue"
import Chart from 'primevue/chart';
export default defineComponent({
  name: 'Dashboard',
  components: {
    TitledCard,
    Chart
  },
  setup() {

    const chartData = ref();
    const chartOptions = ref();

    const setChartData = () => {
      return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
          }
        ]
      };
    };
    const setChartOptions = () => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
    }

    onMounted(() => {
      chartData.value = setChartData();
      chartOptions.value = setChartOptions();
    });

    return {
      chartData,
      chartOptions
    };
  },
});
</script>

<style scoped></style>
