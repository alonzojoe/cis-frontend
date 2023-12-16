<template>
    <div class="card">
        <titled-card class="mb-3" title="Report Generation">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Consultation Date From</label>
                        <input type="date" class="form-control form-control-sm custom-font"
                            v-model="formSearch.date_from" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Consultation Date To</label>
                        <input type="date" class="form-control form-control-sm custom-font" v-model="formSearch.date_to" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="d-flex gap-2 align-items-center" style="margin-top: 1.7rem;">
                        <button class="btn btn-primary" @click="generateReport()" @keyup.enter="generateReport()">Generate &
                            Download
                            Report</button>
                        <button class="btn btn-danger" @click="refresh()">Refresh</button>
                    </div>
                </div>
            </div>
        </titled-card>
        <div class="loader" v-if="isLoading">
            <div class="d-flex align-items-center justify-content-center">
                <div>
                    <div class="d-flex align-items-center jusitfy-content-center">
                        <div class="sk-wave sk-primary">
                            <div class="sk-wave-rect"></div>
                            <div class="sk-wave-rect"></div>
                            <div class="sk-wave-rect"></div>
                            <div class="sk-wave-rect"></div>
                            <div class="sk-wave-rect"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <span>Generating Report Please Wait....</span>
            </div>
        </div>



    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    inject,
    computed,
    onMounted,
    watch,
    watchEffect,
} from "vue";
import { useStore } from "vuex";
import TitledCard from "@/components/Cards/TitledCard.vue";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default defineComponent({
    name: "Reports",
    components: {
        TitledCard
    },
    setup() {
        const store = useStore();
        const today = moment();
        const dateToday = new Date;
        const formSearch = ref({
            date_from: today.startOf('month').format('YYYY-MM-DD'),
            date_to: moment(dateToday.now).format('YYYY-MM-DD'),
        });

        const tableDatas = computed(() => store.getters.getReportDatas)
        const isLoading = ref(false);
        const fetchReport = async () => {
            isLoading.value = true
            await store.dispatch('fetchReport', formSearch.value)
            isLoading.value = false
        }

        const generateReport = async () => {
            await fetchReport();

            const dateFrom = moment(formSearch.value.date_from).format("MMMM D, YYYY");
            const dateTo = moment(formSearch.value.date_to).format("MMMM D, YYYY")

            const doc = new jsPDF({
                orientation: "landscape", // Set the orientation to landscape
                format: "a4", // Set the page size to A4
            });

            doc.setProperties({
                title: `Generated Report [${dateFrom} - ${dateTo}]`,
            });

            const tableColumn = [
                "Consultation No.",
                "Consultation Date & Time",
                "Patient Name",
                "Diagnosis",
                "Payment Type",
                "Consulting Physician",
            ];

            let tableRows = [];
            tableDatas.value.forEach((dataRow) => {
                const rowData = [
                    dataRow.consultation_no,
                    dataRow.consultation_datetime,
                    dataRow.patient,
                    dataRow.diagnosis,
                    dataRow.payment_type,
                    dataRow.physician,
                ];
                tableRows.push(rowData);
            });

            const addPageCount = () => {
                const pageCount = doc.internal.getNumberOfPages();
                const currentPage = doc.internal.getCurrentPageInfo().pageNumber;

                doc.setFontSize(7);
                doc.text(
                    `Page ${currentPage}`,
                    // `Page ${currentPage} of ${pageCount}`,
                    doc.internal.pageSize.width - 30,
                    doc.internal.pageSize.height - 10
                );
            };

            let totalPages = 0;
            let startY = 40;

            const logoWidth = 20;
            const logoHeight = 20;

            doc.autoTable({
                head: [tableColumn],
                body: tableRows,
                theme: "grid",
                startY: startY,
                didDrawPage: (data) => {
                    addPageCount();

                    // Only add header on the first page
                    if (data.pageNumber === 1) {
                        doc.addImage(
                            "/src/assets/logos/clinic-logo.png",
                            "PNG",
                            10,
                            10,
                            logoWidth,
                            logoHeight
                        );

                        // Right Logo
                        const rightLogoX = doc.internal.pageSize.width - logoWidth - 10;
                        doc.addImage(
                            "/src/assets/logos/clinic-logo2.png",
                            "PNG",
                            rightLogoX,
                            10,
                            logoWidth,
                            logoHeight
                        );

                        // Title
                        const titleText =
                            `Clinic Name Here \n Clinic Address Here \n Generated Report \n From ${dateFrom} To ${dateTo}`;

                        doc.setFontSize(12);
                        doc.setTextColor("#00000");
                        doc.setFont("bold");

                        // Calculate the height of the multi-line text
                        const titleTextHeight = doc.getTextDimensions(titleText).h;

                        // Calculate the y-coordinate for centering the text vertically
                        const centerY = 10 + Math.max(logoHeight, titleTextHeight) / 2.5;

                        doc.text(titleText, doc.internal.pageSize.width / 2, centerY, {
                            align: "center",
                        });

                        // Adjust startY for the next page
                        startY = 10; // Adjust this value based on your desired margin between pages
                    }
                },
                styles: {
                    fontSize: 8,
                    cellPadding: 2,
                    valign: "middle", // Center vertically
                    halign: "center", // Center horizontally
                },
                headStyles: { fillColor: "#5D87FF" },
                columnStyles: {
                    3: { fontSize: 7, halign: "left" }, // 4 is the index of the "storedBy" column (0-based index)
                },
                didParseCell: (data) => {
                    // Increase totalPages on each new page
                    if (data.row.index === 0) {
                        totalPages++;
                    }
                },
            });

            totalPages++;
            doc.save(`Generated Report  ${dateFrom} - ${dateTo}`);
            // const pdfBlob = doc.output("blob");
            // const pdfUrl = URL.createObjectURL(pdfBlob);
            // console.log(pdfUrl);
            // window.open(`/pdf-viewer?pdfUrl=${encodeURIComponent(pdfUrl)}`, "_blank");
        }



        return { formSearch, tableDatas, generateReport, isLoading }
    }
})
</script>

<style scoped></style>