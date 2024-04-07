import { reactive } from 'vue';
const { seriesList } = useSeries();

export const seriesStore = reactive({
    seriesList,
    selectedSeriesId: 0,
    selectSeries(seriesId){
        this.selectedSeriesId = seriesId;
    },
    isSeriesSelected(seriesId){
        return parseInt(seriesId) === this.selectedSeriesId;
    }
});