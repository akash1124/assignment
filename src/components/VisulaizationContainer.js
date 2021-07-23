import { connect } from "react-redux";
import Visualization from "./Visualization";

const mapStateToProps = state => ({
    data: state.uploadReducer.data,
    columns: state.uploadReducer.columns
});

const ExcelContainer = connect(mapStateToProps)(Visualization);
export default ExcelContainer;
