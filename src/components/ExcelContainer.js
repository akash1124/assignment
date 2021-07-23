import { connect } from "react-redux";
import ExcelOverView from "./ExcelOverView";

import { uploadExcel } from '../actions/uploadAction';

const mapStateToProps = state => ({
    data: state.uploadReducer.data,
    columns: state.uploadReducer.columns
});

const mapDispatchToProps = {
    uploadExcel
}

const ExcelContainer = connect(mapStateToProps, mapDispatchToProps)(ExcelOverView);
export default ExcelContainer;
